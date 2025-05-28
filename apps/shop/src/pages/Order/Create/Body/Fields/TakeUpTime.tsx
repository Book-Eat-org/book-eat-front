import { FC, useEffect, useMemo } from "react";
import { useController, useWatch } from "react-hook-form";

import { IFormValues } from "../../models";
import { UIOption, UISelect } from "@book-eat/ui";
import { values } from "ramda";
import dayjs, { Dayjs } from "dayjs";
import { useSelector } from "$hooks";
import {
  IPlace,
  placesSelectors,
  DayOfWeek,
  DeliveryTypeName,
} from "@book-eat/api";
import "dayjs/locale/ru";
import weekday from "dayjs/plugin/weekday";
import localeData from "dayjs/plugin/localeData";

dayjs.extend(weekday);
dayjs.extend(localeData);

dayjs.locale("ru");

const createNearestDate = () => {
  const time = dayjs();
  const roundTime = 10;
  const roundedMinute = Math.ceil(time.minute() / roundTime + 1) * roundTime;
  return time.minute(roundedMinute);
};

const createAsSoonTime = () => {
  const time = dayjs();
  return time.add(10, "minute");
};

const getItems = (closeTime: Dayjs) => {
  const items: Dayjs[] = [];
  let currentTime = createNearestDate();
  while (closeTime.diff(currentTime) > 0) {
    items.push(currentTime);
    currentTime = currentTime.add(10, "minutes");
  }
  return items;
};

const validateDate = (value: string) => {
  const day = dayjs(value);
  const currentDate = dayjs();

  if (currentDate.isAfter(day)) {
    return "Обновите время";
  }
  return true;
};

export const TakeUpTime: FC = () => {
  const { field, fieldState } = useController<IFormValues, "takeUpTime">({
    name: "takeUpTime",
    rules: {
      required: { value: true, message: "Укажите время " },
      validate: validateDate,
    },
  });
  const { deliveryType } = useWatch<IFormValues>();

  const { shopId } = useSelector((state) => state.cart);

  const { schedule }: IPlace = useSelector((state) =>
    placesSelectors.selectById(state, shopId!),
  );

  const currentDate = useMemo(() => dayjs(), []);

  const currentDay = useMemo(() => currentDate.weekday(), [currentDate]);

  const scheduleToday = useMemo(
    () =>
      schedule.find(
        ({ dayOfWeek }) => values(DayOfWeek)[currentDay] === dayOfWeek,
      ),
    [schedule],
  );

  const { onChange, value } = field;
  const errorMessage = fieldState.error?.message;

  const options = useMemo(() => {
    const hours = currentDate.set(
      "hours",
      Number(scheduleToday?.timeTo?.split(":")[0]) ?? 2,
    );
    const minutes = hours.set(
      "minutes",
      Number(scheduleToday?.timeTo?.split(":")[1]) ?? 2,
    );
    return getItems(minutes);
  }, [scheduleToday]);

  const asSoonTime = useMemo(() => createAsSoonTime(), []);
  const asSoonTimeAvailable = [
    DeliveryTypeName.ON_PLACE,
    DeliveryTypeName.TO_OUTSIDE,
  ].includes(deliveryType);

  useEffect(() => {
    const value = options[0].toISOString();
    onChange(value);
  }, [options]);

  useEffect(() => {
    if (asSoonTimeAvailable) {
      const value = asSoonTime.toISOString();
      onChange(value);
    }
  }, [asSoonTimeAvailable, asSoonTime]);

  return (
    <UISelect
      value={value}
      onChange={onChange}
      placeholder="Когда"
      renderValue={(item) =>
        item === asSoonTime.toISOString()
          ? `Как можно скорее (~ ${dayjs(item).format("H:mm")})`
          : dayjs(item).format("H:mm")
      }
      error={errorMessage}
    >
      {asSoonTimeAvailable && (
        <UIOption value={asSoonTime.toISOString()}>
          Как можно скорее (~ {asSoonTime.format("H:mm")})
        </UIOption>
      )}
      {options.map((item) => {
        const formatted = item.format("H:mm");
        return <UIOption value={item.toISOString()}>{formatted}</UIOption>;
      })}
    </UISelect>
  );
};

import { FC, useEffect, useMemo } from "react";
import { useController } from "react-hook-form";

import { IFormValues } from "../../models";
import { UIOption, UISelect } from "@book-eat/ui";
import { values } from "ramda";
import dayjs, { Dayjs } from "dayjs";
import { useSelector } from "$hooks";
import { IPlace, placesSelectors, DayOfWeek } from "@book-eat/api";

const createNearestDate = () => {
  const time = dayjs();
  const roundTime = 15;
  const roundedMinute = Math.ceil(time.minute() / roundTime + 1) * roundTime;
  return time.minute(roundedMinute);
};

const getItems = (closeTime: Dayjs) => {
  const items: Dayjs[] = [];
  let currentTime = createNearestDate();
  while (closeTime.diff(currentTime) > 0) {
    items.push(currentTime);
    currentTime = currentTime.add(15, "minutes");
  }
  return items;
};

const validateDate = (value: string) => {
  const day = dayjs(value);
  const currentDate = dayjs();

  console.log(day.isAfter(currentDate));

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

  const { shopId } = useSelector((state) => state.cart);

  const { schedule }: IPlace = useSelector((state) =>
    placesSelectors.selectById(state, shopId!),
  );

  const currentDate = useMemo(() => dayjs(), []);

  const currentDay = useMemo(() => currentDate.day() - 1, [currentDate]);

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

  useEffect(() => {
    const value = options[0].toISOString();
    onChange(value);
  }, [options]);

  return (
    <UISelect
      value={value}
      onChange={onChange}
      placeholder="Когда"
      renderValue={(item) => dayjs(item).format("H:mm")}
      error={errorMessage}
    >
      {options.map((item) => {
        const formatted = item.format("H:mm");
        return <UIOption value={item.toISOString()}>{formatted}</UIOption>;
      })}
    </UISelect>
  );
};

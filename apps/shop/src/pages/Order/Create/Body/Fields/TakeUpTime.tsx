import { FC, useEffect, useMemo } from "react";
import { useController } from "react-hook-form";

import { IFormValues } from "../models";
import { UIOption, UISelect } from "@book-eat/ui";
import { identity, isEmpty, values } from "ramda";
import dayjs, { Dayjs } from "dayjs";
import { useSelector } from "$hooks";
import { IPlace, placesSelectors } from "@book-eat/api";
import { DayOfWeek } from "@book-eat/api/src";
import { isShopOpen } from "@book-eat/utils";

export const DAYS_ITEMS = [
  { id: DayOfWeek.Monday, name: "Пн" },
  { id: DayOfWeek.Tuesday, name: "Вт" },
  { id: DayOfWeek.Wednesday, name: "Ср" },
  { id: DayOfWeek.Thursday, name: "Чт" },
  { id: DayOfWeek.Friday, name: "Пт" },
  { id: DayOfWeek.Saturday, name: "Сб" },
  { id: DayOfWeek.Sunday, name: "Вс" },
];

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

export const TakeUpTime: FC = () => {
  const { field, fieldState } = useController<IFormValues, "takeUpTime">({
    name: "takeUpTime",
    rules: { required: { value: true, message: "Укажите время " } },
  });

  const { shopId } = useSelector((state) => state.cart);

  const { schedule }: IPlace = useSelector((state) =>
    placesSelectors.selectById(state, shopId!),
  );

  const currentDate = useMemo(() => dayjs(), []);

  const currentDay = useMemo(() => currentDate.day(), [currentDate]);

  const scheduleToday = useMemo(
    () =>
      schedule.find(
        ({ dayOfWeek }) => values(DayOfWeek)[currentDay] === dayOfWeek,
      ),
    [schedule],
  );

  const { onChange, value } = field;
  const errorMessage = fieldState.error?.message;

  const options = useMemo(
    () =>
      getItems(
        currentDate.set(
          "hours",
          Number(scheduleToday?.timeTo?.split(":")[0]) ?? 2,
        ),
      ),
    [scheduleToday],
  );

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
    >
      {options.map((item) => {
        const formatted = item.format("H:mm");
        return <UIOption value={item.toISOString()}>{formatted}</UIOption>;
      })}
    </UISelect>
  );
};

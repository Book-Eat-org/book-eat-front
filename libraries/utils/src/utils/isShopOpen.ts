import { DayOfWeek, IPlace, ISchedule } from "@book-eat/api";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import { isNil, split, values } from "ramda";

dayjs.extend(isBetween);

export const prepareScheduleItem = (value: ISchedule): ISchedule => {
  const { timeFrom, timeTo } = value;
  const currentDate = dayjs();

  const [[timeFromHours, timeFromMinutes], [timeToHours, timeToMinutes]] = [
    timeFrom,
    timeTo,
  ].map(split(":"));

  const timeFromDate = currentDate
    .set("hours", Number(timeFromHours))
    .set("minutes", Number(timeFromMinutes));
  const timeToDate = currentDate
    .set("hours", Number(timeToHours))
    .set("minutes", Number(timeToMinutes));

  return {
    ...value,
    timeTo: timeToDate.toISOString(),
    timeFrom: timeFromDate.toISOString(),
  };
};

export const isShopOpen = (shop: IPlace) => {
  const currentDate = dayjs();

  const currentDayOfWeek = values(DayOfWeek)[currentDate.day()];

  const scheduleItem = shop.schedule.find(
    ({ dayOfWeek }) => dayOfWeek === currentDayOfWeek,
  );

  if (isNil(scheduleItem)) {
    return false;
  }

  const { timeFrom, timeTo } = prepareScheduleItem(scheduleItem);

  return currentDate.isBetween(timeFrom, timeTo);
};

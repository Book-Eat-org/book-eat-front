import { DayOfWeek, IPlace } from "@book-eat/api";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import { isNil, split, values } from "ramda";

dayjs.extend(isBetween);

export const isShopOpen = (shop: IPlace) => {
  const currentDate = dayjs();

  const currentDayOfWeek = values(DayOfWeek)[currentDate.day()];

  const scheduleItem = shop.schedule.find(
    ({ dayOfWeek }) => dayOfWeek === currentDayOfWeek,
  );

  if (isNil(scheduleItem)) {
    return false;
  }

  const [[timeFromHours, timeFromMinutes], [timeToHours, timeToMinutes]] = [
    scheduleItem.timeFrom,
    scheduleItem.timeTo,
  ].map(split(":"));

  const timeFromDate = currentDate
    .set("hours", Number(timeFromHours))
    .set("minutes", Number(timeFromMinutes));
  const timeToDate = currentDate
    .set("hours", Number(timeToHours))
    .set("minutes", Number(timeToMinutes));

  return currentDate.isBetween(timeFromDate, timeToDate);
};

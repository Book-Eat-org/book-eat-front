import classes from "./TimeTag.module.css";
import { Box, Typography } from "@book-eat/ui";
import { useData } from "../context.ts";
import dayjs from "dayjs";
import { DayOfWeek } from "@book-eat/api/src";
import { isNil, values } from "ramda";

const TimeTag = () => {
  const { schedule } = useData();

  const currentDate = dayjs();

  const dayOfWeek = values(DayOfWeek)[currentDate.day()];

  const currentWorkTimeItem = schedule.find(
    (item) => dayOfWeek === item.dayOfWeek,
  );

  if (isNil(currentWorkTimeItem)) {
    return null;
  }

  const { timeTo, timeFrom } = currentWorkTimeItem;

  const [timeToHours, timeToMinutes] = timeTo.split(":");
  const [timeFromHours, timeFromMinutes] = timeFrom.split(":");

  const timeToDate = dayjs()
    .set("hour", Number(timeToHours))
    .set("minute", Number(timeToMinutes));

  const timeFromDate = dayjs()
    .set("hour", Number(timeFromHours))
    .set("minute", Number(timeFromMinutes));

  console.log(timeFromDate.diff(currentDate));

  const isWorking =
    currentDate.isAfter(timeFromDate) && currentDate.isBefore(timeToDate);

  const text = isWorking
    ? `Открыто до ${timeToDate.format("HH:mm")}`
    : `Закрыто до ${timeFromDate.format("HH:mm")}`;

  return (
    <Box p={1} className={classes.wrapper}>
      <Typography size="14/14">{text}</Typography>
    </Box>
  );
};
export default TimeTag;

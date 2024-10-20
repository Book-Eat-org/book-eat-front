import classes from "./TimeTag.module.css";
import { Box, theme, Typography } from "@book-eat/ui";
import { useData } from "../context.ts";
import dayjs from "dayjs";
import { isNil } from "ramda";
import { DaysOfWeekIso } from "$constants";

const TimeTag = () => {
  const { schedule } = useData();

  const currentDate = dayjs();

  const dayOfWeek = DaysOfWeekIso[currentDate.day()];

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

  const isWorking =
    currentDate.isAfter(timeFromDate) && currentDate.isBefore(timeToDate);

  const text = isWorking
    ? `Открыто до ${timeToDate.format("HH:mm")}`
    : `Закрыто до ${timeFromDate.format("HH:mm")}`;

  return (
    <Box
      padding="5px 10px"
      className={classes.wrapper}
      backgroundColor={theme.colors.general50}
    >
      <Typography size="12/12">{text}</Typography>
    </Box>
  );
};
export default TimeTag;

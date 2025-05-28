import classes from "./TimeTag.module.css";
import { Box, theme, Typography } from "@book-eat/ui";
import { useData } from "../context.ts";
import dayjs from "dayjs";
import { isNil } from "ramda";
import { DaysOfWeekIso } from "$constants";
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

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


const format = 'HH:mm';

  const from = dayjs(timeFrom, format);
  const to = dayjs(timeTo, format);


  const isWorking =
    currentDate.isAfter(from) && currentDate.isBefore(to);

  const text = isWorking
    ? `Открыто до ${to.format("HH:mm")}`
    : `Закрыто до ${from.format("HH:mm")}`;

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

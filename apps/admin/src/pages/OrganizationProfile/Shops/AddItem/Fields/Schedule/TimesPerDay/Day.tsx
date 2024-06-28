import { FC } from "react";
import { useController } from "react-hook-form";
import { Grid, TimeInput } from "@book-eat/ui";
import classes from "./Day.module.css";
import { IFormValues } from "../../../models.ts";
import { WORK_TIME } from "../../../../List/Item/constants.ts";
import { DayOfWeek } from "@book-eat/api";

const Day: FC<{ day: DayOfWeek }> = ({ day }) => {
  const { field } = useController<IFormValues, "schedule">({
    name: "schedule",
  });
  const { onChange, value } = field;

  const item = value.find(({ dayOfWeek }) => dayOfWeek === day);

  if (!item) {
    return null;
  }

  const { timeTo, timeFrom } = item;
  const workingFromChange = (time: string) => {
    const newValue = value.map((item) =>
      item.dayOfWeek === day ? { ...item, timeFrom: time } : item,
    );

    onChange(newValue);
  };

  const workingToChange = (time: string) => {
    const newValue = value.map((item) =>
      item.dayOfWeek === day ? { ...item, timeTo: time } : item,
    );

    onChange(newValue);
  };

  const dayItem = WORK_TIME.find(({ id }) => day === id);

  return (
    <Grid
      gridTemplateColumns="max-content 1fr auto 1fr"
      gap={6}
      alignItems="center"
    >
      <span>{dayItem?.name}</span>
      <TimeInput title="От" onChange={workingFromChange} value={timeFrom} />
      <div className={classes.dash} />
      <TimeInput title="До" onChange={workingToChange} value={timeTo} />
    </Grid>
  );
};

export default Day;

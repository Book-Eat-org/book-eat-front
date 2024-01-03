import { FC } from "react";
import { useController } from "react-hook-form";
import { IFormValues } from "../../models.ts";
import { Grid, TimeInput } from "@book-eat/ui";
import classes from "./Day.module.css";
import { WORK_TIME } from "../../../Item/constants.ts";

const Day: FC<{ day: number }> = ({ day }) => {
  const { field } = useController<IFormValues, "workingHoursDaily">({
    name: "workingHoursDaily",
  });
  const { onChange, value } = field;

  const item = value.find(({ dayOfWeek }) => dayOfWeek === day);

  if (!item) {
    return null;
  }

  const { workingTimeTo, workingTimeFrom } = item;
  const workingFromChange = (time: string) => {
    const newValue = value.map((item) =>
      item.dayOfWeek === day ? { ...item, workingTimeFrom: time } : item,
    );

    onChange(newValue);
  };

  const workingToChange = (time: string) => {
    const newValue = value.map((item) =>
      item.dayOfWeek === day ? { ...item, workingTimeTo: time } : item,
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
      <TimeInput
        title="От"
        onChange={workingFromChange}
        value={workingTimeFrom}
      />
      <div className={classes.dash} />
      <TimeInput title="До" onChange={workingToChange} value={workingTimeTo} />
    </Grid>
  );
};

export default Day;

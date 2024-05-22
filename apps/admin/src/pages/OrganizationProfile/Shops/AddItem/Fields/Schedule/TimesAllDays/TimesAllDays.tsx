import { FC } from "react";

import { useController } from "react-hook-form";

import { Grid, TimeInput } from "@book-eat/ui";
import { IFormValues } from "../../../models";

import classes from "./TimesAllDays.module.css";

const TimesAllDays: FC = () => {
  const { field } = useController<IFormValues, "workingHoursAllDays">({
    name: "workingHoursAllDays",
  });
  const { onChange, value } = field;

  const { timeFrom, timeTo } = value;

  const handleToTimeChange = (eventValue: string) => {
    onChange({ ...value, timeTo: eventValue });
  };

  const handleFromTimeChange = (eventValue: string) => {
    onChange({ ...value, timeFrom: eventValue });
  };

  return (
    <Grid gridTemplateColumns="1fr auto 1fr" gap={6} alignItems="center">
      <TimeInput title="От" value={timeFrom} onChange={handleFromTimeChange} />
      <div className={classes.dash} />
      <TimeInput title="До" value={timeTo} onChange={handleToTimeChange} />
    </Grid>
  );
};

export default TimesAllDays;

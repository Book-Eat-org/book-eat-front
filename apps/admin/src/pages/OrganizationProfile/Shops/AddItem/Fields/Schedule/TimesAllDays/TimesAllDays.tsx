import { FC, useEffect } from "react";

import { useController, useWatch } from "react-hook-form";

import { Grid, TimeInput } from "@book-eat/ui";
import { IFormValues } from "../../../models";

import classes from "./TimesAllDays.module.css";

const TimesAllDays: FC = () => {
  const { field } = useController<IFormValues, "schedule">({
    name: "schedule",
  });
  const { differentTimeDaily } = useWatch<IFormValues>();
  const { onChange, value } = field;

  const handleToTimeChange = (eventValue: string) => {
    onChange(value.map((item) => ({ ...item, timeTo: eventValue })));
  };

  const handleFromTimeChange = (eventValue: string) => {
    onChange(value.map((item) => ({ ...item, timeFrom: eventValue })));
  };

  const { timeFrom, timeTo } = value[0];

  useEffect(() => {
    if (!differentTimeDaily) {
      onChange(value.map((item) => ({ ...item, timeTo, timeFrom })));
    }
  }, [differentTimeDaily, timeFrom, timeTo]);

  return (
    <Grid gridTemplateColumns="1fr auto 1fr" gap={6} alignItems="center">
      <TimeInput title="От" value={timeFrom} onChange={handleFromTimeChange} />
      <div className={classes.dash} />
      <TimeInput title="До" value={timeTo} onChange={handleToTimeChange} />
    </Grid>
  );
};

export default TimesAllDays;

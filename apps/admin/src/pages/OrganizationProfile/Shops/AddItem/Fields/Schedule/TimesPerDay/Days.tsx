import { FC } from "react";
import { useController } from "react-hook-form";

import { Grid } from "@book-eat/ui";

import { IFormValues } from "../../../models";
import Day from "./Day";
import { innerJoin, values } from "ramda";
import { DayOfWeek } from "@book-eat/api";

export const TimesPerDay: FC = () => {
  const { field } = useController<IFormValues, "schedule">({
    name: "schedule",
  });
  const { value } = field;

  const sortedValues = innerJoin(
    (a, b) => a === b.dayOfWeek,
    values(DayOfWeek),
    value,
  );

  return (
    <Grid gap={4}>
      {sortedValues.map((day) => (
        <Day key={day} day={day} />
      ))}
    </Grid>
  );
};

import { FC } from "react";
import { useController } from "react-hook-form";

import { Grid } from "@book-eat/ui";

import { IFormValues } from "../../models";
import Day from "./Day";

export const TimesPerDay: FC = () => {
  const { field } = useController<IFormValues, "workingHoursDaily">({
    name: "workingHoursDaily",
  });
  const { value } = field;

  return (
    <Grid gap={4}>
      {value
        .sort((a, b) => a.dayOfWeek - b.dayOfWeek)
        .map(({ dayOfWeek }) => (
          <Day key={dayOfWeek} day={dayOfWeek} />
        ))}
    </Grid>
  );
};

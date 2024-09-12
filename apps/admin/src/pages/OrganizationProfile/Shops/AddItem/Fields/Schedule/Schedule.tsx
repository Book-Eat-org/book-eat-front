import { Typography, UIGrid } from "@book-eat/ui";
import { TimesAllDays } from "./TimesAllDays";
import { TimesPerDay } from "./TimesPerDay";
import { DifferentTimes } from "./DifferentTimes.tsx";
import { useWatch } from "react-hook-form";
import { IFormValues } from "../../models.ts";
import { Days } from "./Days";

export const Schedule = () => {
  const { differentTimeDaily } = useWatch<IFormValues>();

  return (
    <UIGrid gap="25px">
      <Typography size="24/24" fontWeight={600}>
        График работы
      </Typography>
      <Days />
      {differentTimeDaily ? <TimesPerDay /> : <TimesAllDays />}
      <DifferentTimes />
    </UIGrid>
  );
};

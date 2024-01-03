import { FC } from "react";
import { useController } from "react-hook-form";

import { UICheckbox } from "@book-eat/ui";

import { IFormValues } from "../models";

export const DifferentTimes: FC = () => {
  const { field } = useController<IFormValues, "differentTimeDaily">({
    name: "differentTimeDaily",
  });
  const { onChange, value } = field;

  return (
    <UICheckbox onChange={onChange} selected={value}>
      Разные часы каждый день
    </UICheckbox>
  );
};

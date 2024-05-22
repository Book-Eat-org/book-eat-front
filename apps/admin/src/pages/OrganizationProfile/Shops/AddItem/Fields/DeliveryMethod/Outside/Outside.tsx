import { FC } from "react";
import { useController } from "react-hook-form";

import { UICheckbox } from "@book-eat/ui";

import { IFormValues } from "../../../models";

export const Outside: FC = () => {
  const { field, fieldState } = useController<
    IFormValues,
    "isOutsideAvailable"
  >({
    name: "isOutsideAvailable",
  });
  const { onChange, value } = field;
  const errorMessage = fieldState.error?.message;

  return (
    <UICheckbox onChange={onChange} selected={value} error={!errorMessage}>
      С собой
    </UICheckbox>
  );
};

import { FC } from "react";
import { useController } from "react-hook-form";

import { UINumberInput } from "@book-eat/ui";

import { IFormValues } from "../models";

export const Weight: FC = () => {
  const { field, fieldState } = useController<IFormValues, "weight">({
    name: "weight",
  });
  const { onChange, value } = field;
  const errorMessage = fieldState.error?.message;

  return (
    <UINumberInput
      value={value}
      onChange={onChange}
      title="Вес *"
      type="text"
      error={errorMessage}
    />
  );
};

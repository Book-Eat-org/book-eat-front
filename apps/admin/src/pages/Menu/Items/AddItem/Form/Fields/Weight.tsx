import { FC } from "react";
import { useController } from "react-hook-form";

import { UINumberInput } from "@book-eat/ui";

import { IFormValues } from "../models";

export const Weight: FC = () => {
  const { field, fieldState } = useController<IFormValues, "weight">({
    name: "weight",
    rules: {
      required: { value: true, message: "Укажите вес порции" },
    },
  });

  const { onChange, value } = field;
  const errorMessage = fieldState.error?.message;

  return (
    <UINumberInput
      onChange={onChange}
      title="Вес/г*"
      value={value}
      error={errorMessage}
    />
  );
};

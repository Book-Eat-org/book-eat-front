import { FC } from "react";
import { useController } from "react-hook-form";

import { UIInput } from "@book-eat/ui";

import { IFormValues } from "../models";

export const Ingredients: FC = () => {
  const { field, fieldState } = useController<IFormValues, "ingredients">({
    name: "ingredients",
    rules: { required: { value: true, message: "Введите состав" } },
  });
  const { onChange, value } = field;
  const errorMessage = fieldState.error?.message;

  return (
    <UIInput
      value={value}
      onChange={onChange}
      title="Состав"
      type="text"
      error={errorMessage}
    />
  );
};

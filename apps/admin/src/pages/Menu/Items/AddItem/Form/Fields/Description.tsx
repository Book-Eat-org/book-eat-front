import { FC } from "react";
import { useController } from "react-hook-form";

import { UIInput } from "@book-eat/ui";

import { IFormValues } from "../models";

export const Description: FC = () => {
  const { field, fieldState } = useController<IFormValues, "description">({
    name: "description",
    rules: { required: { value: true, message: "Введите описание" } },
  });
  const { onChange, value } = field;
  const errorMessage = fieldState.error?.message;

  return (
    <UIInput
      value={value}
      onChange={onChange}
      placeholder="Описание"
      type="text"
      error={errorMessage}
    />
  );
};

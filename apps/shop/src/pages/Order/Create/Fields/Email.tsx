import { FC } from "react";
import { useController } from "react-hook-form";

import { IFormValues } from "../models";
import { UIInput } from "@book-eat/ui";

export const Email: FC = () => {
  const { field, fieldState } = useController<IFormValues, "email">({
    name: "email",
    rules: { required: { value: true, message: "Укажите имя" } },
  });
  const { onChange, value } = field;
  const errorMessage = fieldState.error?.message;

  return (
    <UIInput
      type="text"
      onChange={onChange}
      placeholder="Почта*"
      value={value}
      error={errorMessage}
    />
  );
};

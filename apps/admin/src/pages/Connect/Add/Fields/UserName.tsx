import { FC } from "react";
import { useController } from "react-hook-form";

import { IFormValues } from "../models";
import { UIInput } from "@book-eat/ui";

export const UserName: FC = () => {
  const { field, fieldState } = useController<IFormValues, "username">({
    name: "username",
    rules: { required: { value: true, message: "Укажите логин" } },
  });
  const { onChange, value } = field;
  const errorMessage = fieldState.error?.message;

  return (
    <UIInput
      type="text"
      onChange={onChange}
      placeholder="Логин"
      value={value}
      error={errorMessage}
    />
  );
};

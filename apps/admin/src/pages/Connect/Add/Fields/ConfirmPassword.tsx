import { FC } from "react";
import { useController } from "react-hook-form";

import { IFormValues } from "../models";
import { UIInput } from "@book-eat/ui";

export const ConfirmPassword: FC = () => {
  const { field, fieldState } = useController<IFormValues, "confirmPassword">({
    name: "confirmPassword",
  });
  const { onChange, value } = field;
  const errorMessage = fieldState.error?.message;

  return (
    <UIInput
      type="text"
      onChange={onChange}
      placeholder="Повторите пароль"
      value={value}
      error={errorMessage}
    />
  );
};

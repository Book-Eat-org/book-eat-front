import { FC } from "react";
import { useController } from "react-hook-form";

import { IFormValues } from "../models";
import { UIInput } from "@book-eat/ui";

export const Password: FC = () => {
  const { field, fieldState } = useController<IFormValues, "password">({
    name: "password",
  });
  const { onChange, value } = field;
  const errorMessage = fieldState.error?.message;

  return (
    <UIInput
      type="text"
      onChange={onChange}
      placeholder="Пароль"
      value={value}
      error={errorMessage}
    />
  );
};

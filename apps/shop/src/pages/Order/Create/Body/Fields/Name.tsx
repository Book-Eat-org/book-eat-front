import { FC } from "react";
import { useController } from "react-hook-form";

import { IFormValues } from "../models";
import { UIInput } from "@book-eat/ui";

export const Name: FC = () => {
  const { field, fieldState } = useController<IFormValues, "name">({
    name: "name",
    rules: { required: { value: true, message: "Укажите имя" } },
  });
  const { onChange, value } = field;
  const errorMessage = fieldState.error?.message;

  return (
    <UIInput
      type="text"
      onChange={onChange}
      title="Имя*"
      value={value}
      error={errorMessage}
    />
  );
};

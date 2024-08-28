import { FC } from "react";
import { useController } from "react-hook-form";

import { IFormValues } from "../models";
import { UIInput } from "@book-eat/ui";

export const Entrance: FC = () => {
  const { field, fieldState } = useController<IFormValues, "entrance">({
    name: "entrance",
    rules: { required: { value: true, message: "Укажите вход" } },
  });
  const { onChange, value } = field;
  const errorMessage = fieldState.error?.message;

  return (
    <UIInput
      type="text"
      onChange={onChange}
      placeholder="Подъезд*"
      value={value}
      error={errorMessage}
    />
  );
};

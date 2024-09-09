import { FC } from "react";
import { useController } from "react-hook-form";

import { IFormValues } from "../models";
import { UIInput } from "@book-eat/ui";

export const Floor: FC = () => {
  const { field, fieldState } = useController<IFormValues, "floor">({
    name: "floor",
    rules: { required: { value: true, message: "Укажите этаж" } },
  });
  const { onChange, value } = field;
  const errorMessage = fieldState.error?.message;

  return (
    <UIInput
      type="text"
      onChange={onChange}
      title="Этаж*"
      value={value}
      error={errorMessage}
    />
  );
};

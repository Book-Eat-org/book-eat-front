import { FC } from "react";
import { useController } from "react-hook-form";

import { UIInput } from "@book-eat/ui";

import { IFormValues } from "../models";

export const Title: FC = () => {
  const { field, fieldState } = useController<IFormValues, "title">({
    name: "title",
    rules: { required: { value: true, message: "Введите название" } },
  });
  const { onChange, value } = field;
  const errorMessage = fieldState.error?.message;

  return (
    <UIInput
      value={value}
      onChange={onChange}
      title="Название добавки"
      type="text"
      error={errorMessage}
    />
  );
};

import { FC } from "react";
import { useController } from "react-hook-form";

import { IFormValues } from "../models";
import { UIInput } from "@book-eat/ui";

export const BirthDate: FC = () => {
  const { field, fieldState } = useController<IFormValues, "birthDate">({
    name: "birthDate",
    rules: { required: { value: true, message: "Укажите дату рождения" } },
  });
  const { onChange, value } = field;
  const errorMessage = fieldState.error?.message;

  return (
    <UIInput
      type="text"
      onChange={onChange}
      placeholder="Дата рождения"
      value={value}
      error={errorMessage}
    />
  );
};

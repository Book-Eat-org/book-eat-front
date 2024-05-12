import { FC } from "react";
import { useController } from "react-hook-form";

import { UINumberInput } from "@book-eat/ui";
import { IFormValues } from "../../models";

export const Inn: FC = () => {
  const { field, fieldState } = useController<IFormValues, "legalInfoInn">({
    name: "legalInfoInn",
    rules: {
      required: { value: true, message: "Введите ИНН" },
      maxLength: { value: 10, message: "ИНН должен состять из 10 цифр" },
      minLength: { value: 10, message: "ИНН должен состять из 10 цифр" },
    },
  });
  const { onChange, value } = field;
  const errorMessage = fieldState.error?.message;

  return (
    <UINumberInput
      onChange={onChange}
      maxLength={10}
      placeholder="ИНН*"
      value={value}
      error={errorMessage}
    />
  );
};

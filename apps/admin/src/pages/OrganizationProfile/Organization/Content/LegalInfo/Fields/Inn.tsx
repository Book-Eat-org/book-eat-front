import { FC } from "react";
import { useController } from "react-hook-form";

import { UINumberInput } from "@book-eat/ui";
import { IFormValues } from "../../models";

export const Inn: FC = () => {
  const { field, fieldState } = useController<IFormValues, "legalInfoInn">({
    name: "legalInfoInn",
    rules: {
      required: { value: true, message: "Введите ИНН" },
      maxLength: { value: 12, message: "ИНН не должен превышать 12 цифр" },
    },
  });
  const { onChange, value } = field;
  const errorMessage = fieldState.error?.message;

  return (
    <UINumberInput
      onChange={onChange}
      maxLength={12}
      placeholder="ИНН*"
      value={value}
      error={errorMessage}
    />
  );
};

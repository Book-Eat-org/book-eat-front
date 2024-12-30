import { FC } from "react";
import { useController } from "react-hook-form";

import { UINumberInput } from "@book-eat/ui";

import { IFormValues } from "../models";

export const Discount: FC = () => {
  const { field, fieldState } = useController<IFormValues, "price">({
    name: "price",
    rules: { required: { value: true, message: "Введите сумму" } },
  });
  const { onChange, value } = field;
  const errorMessage = fieldState.error?.message;

  return (
    <UINumberInput
      value={value}
      onChange={onChange}
      title="Размер скидки/%*"
      type="text"
      error={errorMessage}
    />
  );
};

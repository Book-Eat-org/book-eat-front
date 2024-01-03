import { FC } from "react";
import { useController } from "react-hook-form";

import { UINumberInput } from "@book-eat/ui";
import { onlyDigitsValidation } from "$utils";

import { IFormValues } from "../models";

export const Price: FC = () => {
  const { field, fieldState } = useController<IFormValues, "price">({
    name: "price",
    rules: {
      required: { value: true, message: "Введите цену" },
      pattern: { value: onlyDigitsValidation, message: "Укажите число" },
    },
  });

  const { onChange, value } = field;
  const errorMessage = fieldState.error?.message;

  return (
    <UINumberInput
      onChange={onChange}
      placeholder="Цена/Р*"
      value={value}
      error={errorMessage}
    />
  );
};

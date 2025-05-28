import { FC } from "react";
import { useController } from "react-hook-form";

import { UINumberInput } from "@book-eat/ui";

import { IFormValues } from "../models";

export const Price: FC = () => {
  const { field, fieldState } = useController<IFormValues, "price">({
    name: "price",
  });
  const { onChange, value } = field;
  const errorMessage = fieldState.error?.message;

  return (
    <UINumberInput
      value={value}
      onChange={onChange}
      title="Цена *"
      type="text"
      error={errorMessage}
    />
  );
};

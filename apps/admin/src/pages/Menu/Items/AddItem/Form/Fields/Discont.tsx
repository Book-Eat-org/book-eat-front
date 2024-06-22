import { FC } from "react";
import { useController } from "react-hook-form";

import { UINumberInput } from "@book-eat/ui";

import { IFormValues } from "../models";

export const Discont: FC = () => {
  const { field, fieldState } = useController<IFormValues, "discount">({
    name: "discount",
  });
  const { onChange, value } = field;
  const errorMessage = fieldState.error?.message;
  return (
    <UINumberInput
      onChange={onChange}
      placeholder="Cкидка %"
      value={value}
      error={errorMessage}
    />
  );
};

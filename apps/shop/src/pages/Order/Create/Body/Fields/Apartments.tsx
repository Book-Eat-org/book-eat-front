import { FC } from "react";
import { useController } from "react-hook-form";

import { IFormValues } from "../models";
import { UIInput } from "@book-eat/ui";

export const Apartments: FC = () => {
  const { field, fieldState } = useController<IFormValues, "apartments">({
    name: "apartments",
    rules: { required: { value: true, message: "Укажите квартиру" } },
  });
  const { onChange, value } = field;
  const errorMessage = fieldState.error?.message;

  return (
    <UIInput
      type="text"
      onChange={onChange}
      title="Квартира*"
      value={value}
      error={errorMessage}
    />
  );
};

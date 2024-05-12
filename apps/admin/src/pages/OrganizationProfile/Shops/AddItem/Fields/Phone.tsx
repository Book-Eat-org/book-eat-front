import { FC } from "react";
import { useController } from "react-hook-form";

import { UIPhoneInput } from "@book-eat/ui";

import { IFormValues } from "../models";

export const Phone: FC = () => {
  const { field, fieldState } = useController<IFormValues, "phone">({
    name: "phone",
    rules: { required: { value: true, message: "Укажите контактный телефон" } },
  });
  const { onChange, value } = field;
  const errorMessage = fieldState.error?.message;

  return (
    <UIPhoneInput
      value={value}
      onChange={onChange}
      placeholder="Телефон"
      type="text"
      error={errorMessage}
    />
  );
};

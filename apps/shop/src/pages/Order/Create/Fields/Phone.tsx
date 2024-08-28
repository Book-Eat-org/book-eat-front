import { FC } from "react";
import { useController } from "react-hook-form";

import { IFormValues } from "../models";
import { UIPhoneInput } from "@book-eat/ui";

export const Phone: FC = () => {
  const { field, fieldState } = useController<IFormValues, "phone">({
    name: "phone",
    rules: { required: { value: true, message: "Укажите телефон" } },
  });
  const { onChange, value } = field;
  const errorMessage = fieldState.error?.message;

  return (
    <UIPhoneInput
      type="text"
      onChange={onChange}
      placeholder="Телефон*"
      value={value}
      error={errorMessage}
    />
  );
};

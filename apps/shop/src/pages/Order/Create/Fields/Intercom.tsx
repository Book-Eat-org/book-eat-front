import { FC } from "react";
import { useController } from "react-hook-form";

import { IFormValues } from "../models";
import { UIInput } from "@book-eat/ui";

export const Intercom: FC = () => {
  const { field, fieldState } = useController<IFormValues, "intercom">({
    name: "intercom",
    rules: { required: { value: true, message: "Укажите имя" } },
  });
  const { onChange, value } = field;
  const errorMessage = fieldState.error?.message;

  return (
    <UIInput
      type="text"
      onChange={onChange}
      placeholder="Домофон*"
      value={value}
      error={errorMessage}
    />
  );
};

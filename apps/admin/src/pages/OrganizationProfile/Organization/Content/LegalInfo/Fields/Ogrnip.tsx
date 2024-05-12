import { FC } from "react";
import { useController } from "react-hook-form";

import { UIInput, UINumberInput } from "@book-eat/ui";
import { IFormValues } from "../../models";

export const Ogrnip: FC = () => {
  const { field, fieldState } = useController<IFormValues, "legalInfoOgrn">({
    name: "legalInfoOgrn",
    rules: {
      required: { value: true, message: "Введите ОГРНИП" },
      maxLength: { value: 15, message: "ОГРНИП должен состять из 15 цифр" },
      minLength: { value: 15, message: "ОГРНИП должен состять из 15 цифр" },
    },
  });
  const { onChange, value } = field;
  const errorMessage = fieldState.error?.message;

  return (
    <UINumberInput
      onChange={onChange}
      placeholder="ОГРНИП"
      value={value}
      error={errorMessage}
      maxLength={15}
    />
  );
};

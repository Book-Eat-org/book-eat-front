import { FC } from "react";
import { useController } from "react-hook-form";

import { UIInput } from "@book-eat/ui";

import { IFormValues } from "../models";

interface IProps {
  onClick: () => void;
}

export const Address: FC<IProps> = (props) => {
  const { onClick } = props;

  const { field, fieldState } = useController<IFormValues, "address">({
    name: "address",
    rules: { required: { value: true, message: "Укажите адрес" } },
  });
  const { value } = field;
  const errorMessage = fieldState.error?.message;

  return (
    <UIInput
      value={value}
      onClick={onClick}
      placeholder="Адрес"
      type="text"
      error={errorMessage}
    />
  );
};

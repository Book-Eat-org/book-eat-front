import { FC } from "react";
import { useController } from "react-hook-form";

import { IFormValues } from "../models";
import { UIInput } from "@book-eat/ui";

export const PlaceAddress: FC = () => {
  const { field, fieldState } = useController<IFormValues, "placeAddress">({
    name: "placeAddress",
    rules: { required: { value: true, message: "Укажите адрес" } },
  });
  const { onChange, value } = field;
  const errorMessage = fieldState.error?.message;

  return (
    <UIInput
      type="text"
      onChange={onChange}
      title="Адрес точки на карте*"
      value={value}
      error={errorMessage}
    />
  );
};

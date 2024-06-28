import { FC } from "react";
import { useController } from "react-hook-form";

import { UICheckbox } from "@book-eat/ui";

import { IFormValues } from "../../../models";
import { isNotNil } from "ramda";

export const Delivery: FC = () => {
  const { field, fieldState } = useController<
    IFormValues,
    "isDeliveryAvailable"
  >({
    name: "isDeliveryAvailable",
  });
  const { onChange, value } = field;
  const errorMessage = fieldState.error?.message;

  return (
    <UICheckbox
      onChange={onChange}
      selected={value}
      error={isNotNil(errorMessage)}
    >
      Доставка
    </UICheckbox>
  );
};

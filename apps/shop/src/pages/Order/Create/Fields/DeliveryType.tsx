import { FC } from "react";
import { useController } from "react-hook-form";

import { IFormValues } from "../models";
import { UIInput, UIOption, UISelect } from "@book-eat/ui";
import { identity, prop } from "ramda";

export const DeliveryType: FC = () => {
  const { field, fieldState } = useController<IFormValues, "deliveryType">({
    name: "deliveryType",
    rules: { required: { value: true, message: "Укажите имя" } },
  });
  const { onChange, value } = field;
  const errorMessage = fieldState.error?.message;

  return (
    <UISelect
      value={value}
      onChange={onChange}
      placeholder="Способ получения"
      renderValue={identity}
    >
      <UIOption value="Доставка">Доставка</UIOption>
      <UIOption value="С собой">С собой</UIOption>
      <UIOption value="На месте">На месте</UIOption>
    </UISelect>
  );
};

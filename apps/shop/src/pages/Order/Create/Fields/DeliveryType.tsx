import { FC } from "react";
import { useController } from "react-hook-form";

import { IFormValues } from "../models";
import { UIOption, UISelect } from "@book-eat/ui";
import { keys } from "ramda";
import { TakeUpVariants } from "$enums";
import { TakeUpConfig } from "$constants";

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
      renderValue={(value) => TakeUpConfig[value]}
    >
      {keys(TakeUpVariants).map((key) => (
        <UIOption value={key} key={key}>
          {TakeUpConfig[key]}
        </UIOption>
      ))}
    </UISelect>
  );
};

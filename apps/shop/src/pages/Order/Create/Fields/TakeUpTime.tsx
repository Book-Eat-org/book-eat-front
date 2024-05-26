import { FC } from "react";
import { useController } from "react-hook-form";

import { IFormValues } from "../models";
import { UIOption, UISelect } from "@book-eat/ui";
import { identity } from "ramda";

export const TakeUpTime: FC = () => {
  const { field, fieldState } = useController<IFormValues, "takeUpTime">({
    name: "takeUpTime",
    rules: { required: { value: true, message: "Укажите имя" } },
  });
  const { onChange, value } = field;
  const errorMessage = fieldState.error?.message;
  const options = [];

  return (
    <UISelect
      value={value}
      onChange={onChange}
      placeholder="Когда"
      renderValue={identity}
    >
      <UIOption value="Доставка">Доставка</UIOption>
      <UIOption value="С собой">С собой</UIOption>
      <UIOption value="На месте">На месте</UIOption>
    </UISelect>
  );
};

import { FC } from "react";
import { useController } from "react-hook-form";
import { v4 } from "uuid";

import { Button, UIInput } from "@book-eat/ui";

import { IFormValues } from "../models";
import { isNil } from "ramda";

export const Title: FC = () => {
  const { field, fieldState } = useController<IFormValues, "title">({
    name: "title",
    rules: { required: { value: true, message: "Введите название" } },
  });
  const { onChange, value } = field;
  const errorMessage = fieldState.error?.message;

  const generateValue = () => {
    const result = v4().replace(/[^a-zA-Z]+/g, "");
    console.log(result);

    if (isNil(result)) {
      return;
    }

    onChange(result);
  };

  return (
    <UIInput
      value={value}
      onChange={onChange}
      title="Промокод*"
      type="text"
      error={errorMessage}
      postfix={
        <Button size="sm" onClick={generateValue}>
          Сгенерировать
        </Button>
      }
    />
  );
};

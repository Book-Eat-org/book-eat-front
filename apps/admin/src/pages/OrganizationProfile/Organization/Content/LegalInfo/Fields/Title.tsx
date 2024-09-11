import { FC } from "react";
import { useController } from "react-hook-form";

import { UIInput } from "@book-eat/ui";

export const Title: FC = () => {
  const { field, fieldState } = useController({
    name: "legalInfoName",
    // rules: { required: { value: true, message: "Введите название" } },
  });
  const { onChange, value } = field;
  const errorMessage = fieldState.error?.message;

  return (
    <UIInput
      type="text"
      onChange={onChange}
      title="Наименование юридического лица"
      value={value}
      error={errorMessage}
    />
  );
};

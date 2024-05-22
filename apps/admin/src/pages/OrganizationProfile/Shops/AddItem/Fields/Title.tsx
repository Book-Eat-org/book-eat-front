import { FC } from "react";
import { useController } from "react-hook-form";

import { UIInput } from "@book-eat/ui";

export const Title: FC = () => {
  const { field, fieldState } = useController({
    name: "title",
    rules: { required: { value: true, message: "Укажите название" } },
  });
  const { onChange, value } = field;
  const errorMessage = fieldState.error?.message;

  return (
    <UIInput
      type="text"
      onChange={onChange}
      title="Название*"
      placeholder="Название заведения"
      value={value}
      error={errorMessage}
    />
  );
};

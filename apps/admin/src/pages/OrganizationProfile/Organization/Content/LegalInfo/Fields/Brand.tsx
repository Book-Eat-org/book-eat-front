import { FC } from "react";
import { useController } from "react-hook-form";

import { UIInput } from "@book-eat/ui";

export const Brand: FC = () => {
  const { field, fieldState } = useController({
    name: "title",
    // rules: { required: { value: true, message: "Введите название" } },
  });
  const { onChange, value } = field;
  const errorMessage = fieldState.error?.message;

  return (
    <UIInput
      type="text"
      onChange={onChange}
      title="Название бренда*"
      value={value}
      error={errorMessage}
    />
  );
};

import { FC } from "react";
import { useController } from "react-hook-form";

import { UIInput } from "@book-eat/ui";

export const Title: FC = () => {
  const { field, fieldState } = useController({
    name: "title",
  });

  const { onChange, value } = field;
  console.log('title',value)
  const errorMessage = fieldState.error?.message;

  return (
    <UIInput
      type="text"
      onChange={onChange}
      title="Название"
      value={value}
      error={errorMessage}
    />
  );
};

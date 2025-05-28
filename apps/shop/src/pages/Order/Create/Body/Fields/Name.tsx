import { FC } from "react";
import { useController } from "react-hook-form";

import { UIInput } from "@book-eat/ui";
import { IFormValues } from "../../models.ts";

export const Name: FC = () => {
  const { field, fieldState } = useController<IFormValues, "name">({
    name: "name",
  });
  const { onChange, value } = field;
  const errorMessage = fieldState.error?.message;

  return (
    <UIInput
      type="text"
      onChange={onChange}
      title="Имя*"
      value={value}
      error={errorMessage}
    />
  );
};

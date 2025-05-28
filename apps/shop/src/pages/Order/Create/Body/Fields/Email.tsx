import { FC } from "react";
import { useController } from "react-hook-form";

import { UIInput } from "@book-eat/ui";
import {IFormValues} from "../../models.ts";

export const Email: FC = () => {
  const { field, fieldState } = useController<IFormValues, "email">({
    name: "email",
  });
  const { onChange, value } = field;
  const errorMessage = fieldState.error?.message;

  return (
    <UIInput
      type="text"
      onChange={onChange}
      title="Почта*"
      value={value}
      error={errorMessage}
    />
  );
};

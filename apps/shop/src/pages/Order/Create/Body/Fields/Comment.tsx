import { FC } from "react";
import { useController } from "react-hook-form";

import { IFormValues } from "../../models";
import { UIInput } from "@book-eat/ui";

export const Comment: FC = () => {
  const { field, fieldState } = useController<IFormValues, "comment">({
    name: "comment",
  });
  const { onChange, value } = field;
  const errorMessage = fieldState.error?.message;

  return (
    <UIInput
      type="text"
      onChange={onChange}
      title="Примечание к заказу"
      value={value}
      error={errorMessage}
    />
  );
};

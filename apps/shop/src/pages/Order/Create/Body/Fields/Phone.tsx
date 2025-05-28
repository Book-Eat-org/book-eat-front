import { FC } from "react";
import { useController } from "react-hook-form";

import { IFormValues } from "../../models";
import { UIPhoneInput } from "@book-eat/ui";

export const Phone: FC = () => {
  const { field, fieldState } = useController<IFormValues, "phone">({
    name: "phone",
  });
  const { onChange, value } = field;
  const errorMessage = fieldState.error?.message;

  return (
    <UIPhoneInput
      name={field.name}
      ref={field.ref}
      type="text"
      onChange={onChange}
      title="Телефон*"
      value={value}
      error={errorMessage}
    />
  );
};

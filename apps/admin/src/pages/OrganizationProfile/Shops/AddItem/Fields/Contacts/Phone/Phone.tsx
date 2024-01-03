import { useController } from "react-hook-form";

import { UIPhoneInput } from "@book-eat/ui";

import { IFormValues } from "../../../models";

export const Phone = () => {
  const { field } = useController<IFormValues, "phone">({
    name: "phone",
  });

  const { onChange, value } = field;

  return (
    <UIPhoneInput
      type="text"
      onChange={onChange}
      placeholder="Контактный телефон"
      value={value}
    />
  );
};

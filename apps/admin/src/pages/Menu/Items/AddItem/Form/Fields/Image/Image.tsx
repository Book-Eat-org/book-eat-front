import { useController } from "react-hook-form";

import {  UIImageInput } from "@book-eat/ui";

import { IFormValues } from "../../models";

export const Image = () => {
  const { field, fieldState } = useController<IFormValues, "image">({
    name: "image",
  });

  const { onChange, value } = field;

  const errorMessage = fieldState.error?.message;

  return (
    <UIImageInput
      value={value}
      onChange={onChange}
      title="товара"
      error={errorMessage}
    />
  );
};

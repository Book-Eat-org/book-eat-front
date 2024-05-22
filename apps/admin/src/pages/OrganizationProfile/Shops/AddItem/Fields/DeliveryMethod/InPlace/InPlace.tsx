import { FC } from "react";
import { useController } from "react-hook-form";

import { UICheckbox } from "@book-eat/ui";

import { IFormValues } from "../../../models";

export const InPlace: FC = () => {
  const { field, fieldState } = useController<
    IFormValues,
    "isInPlaceAvailable"
  >({
    name: "isInPlaceAvailable",
  });
  const { onChange, value } = field;
  const errorMessage = fieldState.error?.message;

  return (
    <UICheckbox onChange={onChange} selected={value} error={!errorMessage}>
      На месте
    </UICheckbox>
  );
};

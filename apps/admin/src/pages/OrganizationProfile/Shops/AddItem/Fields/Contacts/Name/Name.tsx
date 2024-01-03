import { FC } from "react";
import { useController } from "react-hook-form";

import { UIInput } from "@book-eat/ui";
import { IFormValues } from "../../../models";

export const Name: FC = () => {
  const { field } = useController<IFormValues, "contactName">({
    name: "contactName",
  });

  const { onChange, value } = field;

  return (
    <UIInput
      value={value}
      onChange={onChange}
      placeholder="Контактная информация"
    />
  );
};

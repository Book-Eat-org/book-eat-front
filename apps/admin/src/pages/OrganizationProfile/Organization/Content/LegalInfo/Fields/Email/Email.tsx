import { FC } from "react";
import { useController } from "react-hook-form";

import { UIInput } from "@book-eat/ui";
import { IFormValues } from "../../../models";

export const Email: FC = () => {
  const { field } = useController<IFormValues, "legalInfoEmail">({
    name: "legalInfoEmail",
  });

  const { onChange, value } = field;

  return <UIInput value={value} onChange={onChange} placeholder="E-mail" />;
};

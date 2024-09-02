import { useController } from "react-hook-form";

import { UIImageInput } from "@book-eat/ui";

import { IFormValues } from "../../models";

export const ChainLogo = () => {
  const { field } = useController<IFormValues, "chainLogo">({
    name: "chainLogo",
  });

  const { onChange, value } = field;

  return <UIImageInput title="Фото сети" value={value} onChange={onChange} />;
};

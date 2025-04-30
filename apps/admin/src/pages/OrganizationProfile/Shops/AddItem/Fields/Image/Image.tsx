import { useController } from "react-hook-form";

import { Flex, Typography, UIImageInput, theme } from "@book-eat/ui";

import { IFormValues } from "../../models";

export const Image = () => {
  const { field } = useController<IFormValues, "image">({
    name: "image",
  });

  const { onChange, value } = field;

  return <UIImageInput value={value} onChange={onChange} title="Заведения" />;
};

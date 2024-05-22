import { useController } from "react-hook-form";

import { Flex, Typography, UIImageInput } from "@book-eat/ui";

import { IFormValues } from "../../models";

export const Image = () => {
  const { field } = useController<IFormValues, "image">({
    name: "image",
  });

  const { onChange, value } = field;

  return (
    <Flex gap={3} alignContent="center">
      <UIImageInput value={value} onChange={onChange} />
      <Typography>Загрузите фото заведения в формате Jpg, до 2 MB</Typography>
    </Flex>
  );
};

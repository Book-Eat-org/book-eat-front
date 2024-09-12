import { useController } from "react-hook-form";

import { Flex, Typography, UIImageInput, theme } from "@book-eat/ui";

import { IFormValues } from "../../models";

export const Image = () => {
  const { field } = useController<IFormValues, "image">({
    name: "image",
  });

  const { onChange, value } = field;

  return (
    <Flex gap={5} alignItems="center">
      <UIImageInput value={value} onChange={onChange} />
      <Typography color={theme.colors.general600}>
        Загрузите фото заведения в формате Jpg, до 2 MB
      </Typography>
    </Flex>
  );
};

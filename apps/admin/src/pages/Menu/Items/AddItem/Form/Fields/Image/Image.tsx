import { useController } from "react-hook-form";

import { Flex, theme, Typography, UIImageInput } from "@book-eat/ui";

import { IFormValues } from "../../models";

export const Image = () => {
  const { field, fieldState } = useController<IFormValues, "image">({
    name: "image",
    rules: { required: { value: true, message: "Выберите изображение" } },
  });

  const { onChange, value } = field;

  const errorMessage = fieldState.error?.message;

  return (
    <Flex gap={5} alignItems="center">
      <UIImageInput value={value} onChange={onChange} />
      <Typography color={theme.colors.general600}>
        Загрузите фото товара, jpg, до 2 МB
      </Typography>
    </Flex>
  );
};

import { FC } from "react";
import { useController } from "react-hook-form";

import { IFormValues } from "../models";
import {
  Flex,
  IconButton,
  MinusIcon24,
  PlusIcon24,
  Typography,
  UINumberInput,
} from "@book-eat/ui";

export const PersonsCount: FC = () => {
  const { field, fieldState } = useController<IFormValues, "personsCount">({
    name: "personsCount",
    rules: { required: { value: true, message: "Укажите имя" } },
  });
  const { onChange, value } = field;
  const errorMessage = fieldState.error?.message;

  const dec = () => onChange(value - 1);
  const inc = () => onChange(value + 1);

  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Typography size="14/14" fontWeight={600}>
        Количество персон:
      </Typography>
      <Flex gap={4} alignItems="center">
        <IconButton onClick={dec} disabled={value <= 1}>
          <MinusIcon24 />
        </IconButton>
        <Typography size="14/14">{value}</Typography>
        <IconButton onClick={inc}>
          <PlusIcon24 />
        </IconButton>
      </Flex>
    </Flex>
  );
};

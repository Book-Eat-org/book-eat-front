import { FC } from "react";
import { useData } from "../context.ts";
import {
  Flex,
  IconButton,
  MinusIcon24,
  PlusIcon24,
  Typography,
} from "@book-eat/ui";

export const Footer: FC = () => {
  const { cart } = useData();

  return (
    <Flex gap={4} justifyContent="space-between" alignItems="center">
      <IconButton>
        <MinusIcon24 />
      </IconButton>
      <Typography size="14/14">{cart.col}</Typography>
      <IconButton>
        <PlusIcon24 />
      </IconButton>
    </Flex>
  );
};

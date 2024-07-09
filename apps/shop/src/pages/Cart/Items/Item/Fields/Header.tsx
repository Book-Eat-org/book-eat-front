import { FC } from "react";
import { useData } from "../context.ts";
import { Flex, Typography } from "@book-eat/ui";

export const Header: FC = () => {
  const { product } = useData();
  const { title, price } = product;

  return (
    <Flex justifyContent="space-between">
      <Typography fontWeight={600} size="14/14">
        {title}
      </Typography>
      <Typography fontWeight={600} size="14/14">
        {price} ₽
      </Typography>
    </Flex>
  );
};

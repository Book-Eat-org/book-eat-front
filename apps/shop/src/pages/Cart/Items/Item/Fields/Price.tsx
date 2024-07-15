import { FC } from "react";
import { useData } from "../context.ts";
import { Flex, theme, Typography } from "@book-eat/ui";
import { getPriceWithDiscount } from "@book-eat/utils";

export const Price: FC = () => {
  const { product } = useData();
  const { price, discount } = product;

  if (discount) {
    return (
      <Flex gap={1}>
        <Typography fontWeight={600} size="14/14" color={theme.colors.red100}>
          {getPriceWithDiscount(price, discount)} ₽
        </Typography>
        <Typography
          fontWeight={400}
          size="14/14"
          textDecoration="line-through"
          color={theme.colors.general80}
        >
          {price} ₽
        </Typography>
      </Flex>
    );
  }

  return (
    <Typography fontWeight={600} size="14/14">
      {price} ₽
    </Typography>
  );
};

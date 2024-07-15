import { Box, Flex, theme, Typography } from "@book-eat/ui";
import classes from "./Price.module.css";

import { useProduct } from "../../hooks.ts";
import { getPriceWithDiscount } from "@book-eat/utils";

export const Price = () => {
  const { price, discount } = useProduct();
  return (
    <Flex px={2} py={1} className={classes.wrapper} gap={1}>
      {discount && (
        <Typography
          fontWeight={600}
          size="14/14"
          color={theme.colors.general30}
        >
          {getPriceWithDiscount(price, discount)} ₽
        </Typography>
      )}
      <Typography
        fontWeight={400}
        size="14/14"
        textDecoration={discount ? "line-through" : undefined}
        color={theme.colors.general30}
      >
        {price} ₽
      </Typography>
    </Flex>
  );
};

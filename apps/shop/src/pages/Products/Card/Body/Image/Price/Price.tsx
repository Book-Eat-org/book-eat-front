import { Flex, theme, Typography } from "@book-eat/ui";
import classes from "./Price.module.css";

import { useProduct } from "../../hooks.ts";
import { getPriceWithDiscount } from "@book-eat/utils";
import { isNotNil } from "ramda";

export const Price = () => {
  const { price, discount } = useProduct();

  const discountActive = isNotNil(discount) && discount > 0;

  return (
    <Flex
      px={2}
      py={1}
      className={classes.wrapper}
      gap={1}
      background={discountActive ? theme.colors.red500 : theme.colors.accent500}
    >
      {discountActive && (
        <Typography
          fontWeight={600}
          size="14/14"
          color={theme.colors.general50}
        >
          {getPriceWithDiscount(price, discount)} ₽
        </Typography>
      )}
      <Typography
        fontWeight={discountActive ? 400 : 600}
        size="14/14"
        textDecoration={discountActive ? "line-through" : undefined}
        color={
          discountActive ? theme.colors.general400 : theme.colors.general50
        }
      >
        {price} ₽
      </Typography>
    </Flex>
  );
};

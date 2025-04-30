import { Flex, theme, Typography } from "@book-eat/ui";
import { EntityId } from "@reduxjs/toolkit";
import { FC } from "react";
import { useProduct } from "../../../../useProduct.ts";
import { isNil } from "ramda";
import { SYMBOLS } from "@book-eat/utils";

interface IProps {
  id: EntityId;
  productId: EntityId;
}

export const Addition: FC<IProps> = (props) => {
  const { id, productId } = props;

  const product = useProduct(productId);

  const addition = product.additions.find((item) => item.id === id);

  if (isNil(addition)) {
    return null;
  }

  const { title, price, amount = 1 } = addition;

  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Flex gap={2}>
        <Typography size="14/14" color={theme.colors.general600}>
          х{amount}
        </Typography>
        <Typography size="14/14" color={theme.colors.general600}>
          {title}
        </Typography>
      </Flex>
      <Typography
        size="14/14"
        color={theme.colors.general600}
        whiteSpace="nowrap"
      >
        {amount * price} {SYMBOLS.RUB}
      </Typography>
    </Flex>
  );
};

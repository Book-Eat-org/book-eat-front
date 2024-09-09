import { useCard } from "../../../context.ts";
import { Flex, theme, Typography } from "@book-eat/ui";
import { FC } from "react";
import { EntityId } from "@reduxjs/toolkit";
import { getPriceWithDiscount } from "@book-eat/utils";

interface IProps {
  id: EntityId;
}

const Price: FC<IProps> = ({ id }) => {
  const { price, discount } = useCard(id);

  if (discount) {
    return (
      <Flex gap={1}>
        <Typography fontWeight={600} size="14/14" color={theme.colors.red600}>
          {getPriceWithDiscount(price, discount)} ₽
        </Typography>
        <Typography
          fontWeight={400}
          size="14/14"
          textDecoration="line-through"
          color={theme.colors.general600}
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

export default Price;

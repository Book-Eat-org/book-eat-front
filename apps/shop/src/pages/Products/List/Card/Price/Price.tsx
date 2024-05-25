import { useCard } from "../../../context.ts";
import { Typography } from "@book-eat/ui";
import { FC } from "react";
import { EntityId } from "@reduxjs/toolkit";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { cartSelector } from "../../../../../store/cart";

interface IProps {
  id: EntityId;
}

const Price: FC<IProps> = ({ id }) => {
  const { price } = useCard(id);

  const { id: shopId } = useParams();

  const cartItems = useSelector(cartSelector);

  const cartItem = cartItems.find(
    (item) => item.shopId === shopId && item.productId === id,
  );

  const hasSelectedItem = (cartItem?.col ?? 0) === 0;

  if (hasSelectedItem) {
    return null;
  }

  return (
    <Typography size="14/14" fontWeight={600}>
      {price} ₽
    </Typography>
  );
};

export default Price;

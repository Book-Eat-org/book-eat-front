import {
  Button,
  CartIcon24,
  Flex,
  IconButton,
  MinusIcon24,
  PlusIcon24,
  Typography,
} from "@book-eat/ui";
import { FC } from "react";
import { EntityId } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, cartSelector } from "../../../../../store/cart";
import { useParams } from "react-router-dom";
import { useCard } from "../../../context.ts";

interface IProps {
  id: EntityId;
}

const Cart: FC<IProps> = ({ id }) => {
  const dispatch = useDispatch();
  const { id: shopId } = useParams();

  const { price } = useCard(id);

  const cartItems = useSelector(cartSelector);

  const cartItem = cartItems.find(
    (item) => item.shopId === shopId && item.productId === id,
  );

  const onAddCart = () =>
    dispatch(
      addToCart({
        col: (cartItem?.col ?? 0) + 1,
        productId: id,
        shopId: shopId!,
      }),
    );

  const onDeleteCart = () =>
    dispatch(
      addToCart({
        col: (cartItem?.col ?? 0) - 1,
        productId: id,
        shopId: shopId!,
      }),
    );

  if (!cartItem || cartItem.col === 0) {
    return (
      <Flex justifyContent="space-between" alignItems="center">
        <Typography size="14/14" fontWeight={600}>
          {price} ₽
        </Typography>
        <IconButton onClick={onAddCart}>
          <CartIcon24 />
        </IconButton>
      </Flex>
    );
  }

  const { col } = cartItem;

  return (
    <Flex justifyContent="space-between" alignItems="center">
      <IconButton onClick={onDeleteCart}>
        <MinusIcon24 />
      </IconButton>
      <Typography size="14/14">{col}</Typography>
      <IconButton onClick={onAddCart}>
        <PlusIcon24 />
      </IconButton>
    </Flex>
  );
};

export default Cart;

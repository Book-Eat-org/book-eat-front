import { Button, Flex, Typography } from "@book-eat/ui";
import { FC } from "react";
import { EntityId } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, cartSelector } from "../../../../../store/cart";
import { useParams } from "react-router-dom";

interface IProps {
  id: EntityId;
}

const Cart: FC<IProps> = ({ id }) => {
  const dispatch = useDispatch();
  const { id: shopId } = useParams();

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
    return <Button onClick={onAddCart}>Добавить</Button>;
  }

  const { col } = cartItem;

  return (
    <Flex justifyContent="space-between" alignItems="center" padding="5px 10px">
      <Button onClick={onDeleteCart}>-</Button>
      <Typography>{col}</Typography>
      <Button onClick={onAddCart}>+</Button>
    </Flex>
  );
};

export default Cart;

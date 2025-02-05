import {
  Flex,
  IconButton,
  MinusIcon24,
  PlusIcon24,
  Typography,
} from "@book-eat/ui";
import { FC } from "react";
import { EntityId } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cartSelector, removeFromCart } from "../../../../../../store/cart";
import { values } from "ramda";
import Price from "../Price";
import { useProductListContext } from "../../context.ts";

interface IProps {
  id: EntityId;
}

const Cart: FC<IProps> = ({ id }) => {
  const dispatch = useDispatch();
  const { id: shopId } = useParams();
  const { setOpenedProductId } = useProductListContext();
  const cartItems = useSelector(cartSelector);

  const products = values(cartItems.items).filter(
    (item) => item.productId === id,
  );

  const col = products.reduce((acc, curr) => acc + curr.col, 0);

  const onAddCart = () => setOpenedProductId(id);

  const onDeleteCart = () =>
    dispatch(
      removeFromCart({
        id,
        shopId: shopId!,
      }),
    );

  if (col === 0) {
    return (
      <Flex justifyContent="space-between" alignItems="center">
        <Price id={id} />
        <IconButton onClick={onAddCart}>
          <PlusIcon24 />
        </IconButton>
      </Flex>
    );
  }

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

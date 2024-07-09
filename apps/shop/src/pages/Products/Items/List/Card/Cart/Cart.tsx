import {
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
import { useNavigate, useParams } from "react-router-dom";
import { useCard } from "../../../context.ts";
import {
  addToCart,
  cartSelector,
  removeFromCart,
} from "../../../../../../store/cart";
import { navigateToPage, PageURLS } from "../../../../../../constants/urls.ts";

interface IProps {
  id: EntityId;
}

const Cart: FC<IProps> = ({ id }) => {
  const dispatch = useDispatch();
  const { id: shopId } = useParams();
  const navigate = useNavigate();

  const { price } = useCard(id);

  const cartItems = useSelector(cartSelector);

  const cartItem = cartItems.products.find(
    (item) => cartItems.shopId === shopId && item.id === id,
  );

  const onAddCart = () =>
    navigate(navigateToPage(PageURLS.PRODUCTS_CARD, { id }));

  const onDeleteCart = () =>
    dispatch(
      removeFromCart({
        id,
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

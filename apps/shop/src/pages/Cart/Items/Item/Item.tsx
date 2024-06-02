import { EntityId } from "@reduxjs/toolkit";
import { FC } from "react";
import { useSelector } from "$hooks";
import { IProduct, menuSelectors } from "@book-eat/api";
import {
  Box,
  Button,
  Flex,
  Grid,
  IconButton,
  MinusIcon24,
  PlusIcon24,
  Typography,
} from "@book-eat/ui";
import { F } from "ramda";
import { addToCart, cartSelector } from "../../../../store/cart";
import { useDispatch } from "react-redux";

interface IProps {
  id: EntityId;
}
export const Item: FC<IProps> = (props) => {
  const dispatch = useDispatch();
  const { id } = props;
  const cartItems = useSelector((state) => state.cart);
  const cartItem = cartItems.products.find((item) => item.id === id)!;

  const product: IProduct = useSelector((state) =>
    menuSelectors.selectById(state, id),
  );

  const { title, mainImageUrl, price } = product;

  const onAddCart = () =>
    dispatch(
      addToCart({
        col: (cartItem?.col ?? 0) + 1,
        productId: id,
        shopId: cartItem.shopId!,
      }),
    );

  const onDeleteCart = () =>
    dispatch(
      addToCart({
        col: (cartItem?.col ?? 0) - 1,
        productId: id,
        shopId: cartItem.shopId!,
      }),
    );

  return (
    <Flex justifyContent="space-between">
      <Flex gap={6}>
        <img
          src={mainImageUrl}
          alt=""
          width={80}
          height={80}
          style={{ borderRadius: "20px" }}
        />
        <Grid gap={3}>
          <Typography fontWeight={600} size="14/14">
            {title}
          </Typography>
          <Flex gap={4} justifyContent="space-between" alignItems="center">
            <IconButton onClick={onDeleteCart}>
              <MinusIcon24 />
            </IconButton>
            <Typography size="14/14">{cartItem.col}</Typography>
            <IconButton onClick={onAddCart}>
              <PlusIcon24 />
            </IconButton>
          </Flex>
        </Grid>
      </Flex>
      <Grid>
        <Typography fontWeight={600} size="14/14">
          {price} ₽
        </Typography>
      </Grid>
    </Flex>
  );
};

import { EntityId } from "@reduxjs/toolkit";
import { FC } from "react";
import { useSelector } from "$hooks";
import { IProduct, menuSelectors } from "@book-eat/api";
import { Box, Button, Flex, Grid, Typography } from "@book-eat/ui";
import { F } from "ramda";

interface IProps {
  id: EntityId;
}
export const Item: FC<IProps> = (props) => {
  const { id } = props;
  const cartItems = useSelector((state) => state.cart);
  const cartItem = cartItems.find(({ productId }) => productId === id)!;

  const product: IProduct = useSelector((state) =>
    menuSelectors.selectById(state, id),
  );

  const { title, mainImageUrl, price } = product;

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
          <Typography>{title}</Typography>
          <Flex>
            <Button>-</Button>
            <Typography>{cartItem.col}</Typography>
            <Button>+</Button>
          </Flex>
        </Grid>
      </Flex>
      <Grid>
        <Typography>{price}</Typography>
      </Grid>
    </Flex>
  );
};

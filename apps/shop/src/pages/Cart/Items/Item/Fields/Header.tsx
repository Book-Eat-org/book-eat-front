import { FC } from "react";
import { useData } from "../context.ts";
import { CloseIcon, Flex, Grid, Typography } from "@book-eat/ui";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../../../store/cart";
import { Price } from "./Price.tsx";

export const Header: FC = () => {
  const { product, cartItemId } = useData();
  const { title } = product;

  const dispatch = useDispatch();

  const handleRemove = () => dispatch(removeFromCart(cartItemId));

  return (
    <Flex justifyContent="space-between" width="100%">
      <Grid gap={1}>
        <Typography fontWeight={600} size="14/14">
          {title}
        </Typography>
        <Price />
      </Grid>
      <CloseIcon onClick={handleRemove} />
    </Flex>
  );
};

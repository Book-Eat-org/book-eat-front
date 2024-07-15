import { FC } from "react";
import { useData } from "../context.ts";
import {
  Flex,
  IconButton,
  MinusIcon24,
  PlusIcon24,
  TrashIcon,
  Typography,
} from "@book-eat/ui";
import { useDispatch } from "react-redux";
import {
  decrementCart,
  incrementCart,
  removeFromCart,
} from "../../../../../store/cart";
import { isEmpty, isNil } from "ramda";

export const Footer: FC = () => {
  const { cartItemId, cart, additions } = useData();
  const dispatch = useDispatch();

  const onMinusIconClick = () => dispatch(decrementCart(cartItemId));
  const onPlusIconClick = () => dispatch(incrementCart(cartItemId));
  const onRemoveFromCart = () => dispatch(removeFromCart(cartItemId));

  const col = cart.col;

  return (
    <Flex
      gap={4}
      alignItems="center"
      pb={4}
      borderBottom={
        isNil(additions) || isEmpty(additions) ? undefined : "1px solid #D9D9D9"
      }
    >
      {col > 1 ? (
        <IconButton onClick={onMinusIconClick}>
          <MinusIcon24 />
        </IconButton>
      ) : (
        <IconButton onClick={onRemoveFromCart}>
          <TrashIcon />
        </IconButton>
      )}
      <Typography size="14/14">{col}</Typography>
      <IconButton onClick={onPlusIconClick}>
        <PlusIcon24 />
      </IconButton>
    </Flex>
  );
};

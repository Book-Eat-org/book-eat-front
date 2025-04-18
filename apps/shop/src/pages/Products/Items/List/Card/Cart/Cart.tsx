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
import { cartSelector, removeFromCart } from "../../../../../../store/cart";
import { values } from "ramda";
import Price from "../Price";
import { useProductListContext } from "../../context.ts";
import { useOrganizationsContext } from "../../../context.ts";

interface IProps {
  id: EntityId;
}

const Cart: FC<IProps> = ({ id }) => {
  const dispatch = useDispatch();
  const { setOpenedProductId } = useProductListContext();
  const cartItems = useSelector(cartSelector);
  const { setActivePopup } = useOrganizationsContext();

  const products = values(cartItems.items).filter(
    (item) => item.productId === id,
  );

  const totalQuantity = products.reduce((acc, curr) => acc + curr.col, 0);

  const onOpenPopup = () => setActivePopup(true);
  const onAddCart = () => setOpenedProductId(id);

  const getFirstCartItemKey = () => {
    const item = Object.entries(cartItems.items).find(
      ([_, item]) => item.productId === id
    );
    return item ? item[0] : null;
  };

  const onDeleteCart = () => {
    const cartItemKey = getFirstCartItemKey();
    if (cartItemKey) {
      dispatch(removeFromCart(cartItemKey));
    }
  };

  const handleDecrease = () => {
    if (products.length > 1) {
      onOpenPopup();
    }
    else if (totalQuantity > 2) {
      const hasAdditions = products.some(
        (product) => product.additions && product.additions.length > 0
      );
      
      if (hasAdditions) {
        onOpenPopup();
      } else {
        onDeleteCart();
      }
    }
    else {
      onDeleteCart();
    }
  };

  if (totalQuantity === 0) {
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
      <IconButton onClick={handleDecrease}>
        <MinusIcon24 />
      </IconButton>
      <Typography size="14/14">{totalQuantity}</Typography>
      <IconButton onClick={onAddCart}>
        <PlusIcon24 />
      </IconButton>
    </Flex>
  );
};

export default Cart;

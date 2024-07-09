import { createContext, useContext } from "react";
import { EntityId } from "@reduxjs/toolkit";
import { useSelector } from "$hooks";
import { createMenuSelectorsByPlaceId, IProduct } from "@book-eat/api";

interface IContextState {
  cartItemId: EntityId;
}

export const ItemContext = createContext<IContextState>({ cartItemId: "" });

export const useData = () => {
  const { cartItemId } = useContext(ItemContext);
  const cartItems = useSelector((state) => state.cart);
  const cartItem = cartItems.items[cartItemId];

  const selectors = createMenuSelectorsByPlaceId(cartItems.shopId!);

  const product: IProduct = useSelector((state) =>
    selectors.selectById(state, cartItem.productId),
  );

  return { cart: cartItem, product };
};

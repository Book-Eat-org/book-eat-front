import { createContext, useContext } from "react";
import { EntityId } from "@reduxjs/toolkit";
import { useSelector } from "$hooks";
import { createMenuSelectorsByPlaceId, IProduct } from "@book-eat/api";
import { cartItemsSelector } from "$selectors";

interface IContextState {
  cartItemId: EntityId;
}

export const ItemContext = createContext<IContextState>({ cartItemId: "" });

export const useData = () => {
  const { cartItemId } = useContext(ItemContext);
  const cartItems = useSelector(cartItemsSelector);
  const cartItem = cartItems[cartItemId];

  return {
    cart: cartItem,
    product: cartItem.product,
    cartItemId,
    additions: cartItem.additions,
  };
};

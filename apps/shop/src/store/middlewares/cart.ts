import { Middleware } from "@reduxjs/toolkit";
import { IRootState } from "../index.ts";
import { removeFromCart } from "../cart";

const cartActions = [removeFromCart];

export const cartMiddleware: Middleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    const state: IRootState = getState();
    const isCartAction = cartActions.some((cartAction) =>
      cartAction.match(action),
    );

    localStorage.setItem("cartData", JSON.stringify(state.cart));
    return result;
  };
};

export const reHydrateStore = () => {
  if (localStorage.getItem("cartData") !== null) {
    return {
      cart: JSON.parse(localStorage.getItem("cartData")),
    }; // re-hydrate the store
  }
};

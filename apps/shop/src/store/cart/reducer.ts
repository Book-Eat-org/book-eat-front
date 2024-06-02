import { createReducer } from "@reduxjs/toolkit";
import { addToCart, ICartState, removeFromCart } from "./actions.ts";
import { isNotNil } from "ramda";

export const cartReducer = createReducer<ICartState>(
  {
    products: [],
  },
  (builder) => {
    builder.addCase(addToCart, (state, { payload }) => {
      const hasProductInState = state.products.some(
        (product) => product.id === payload.id,
      );
      if (!hasProductInState) {
        return {
          shopId: payload.shopId,
          products: [
            ...state.products,
            { id: payload.id, col: 1, additions: [] },
          ],
        };
      }

      const products = state.products.map((item) => {
        if (item.id !== payload.id) {
          return item;
        }
        return { ...item, col: item.col + 1 };
      });

      return { ...state, products };
    });
    builder.addCase(removeFromCart, (state, { payload }) => {
      const products = state.products
        .map((item) => {
          if (item.id !== payload.id) {
            return item;
          }

          if (item.col === 1) {
            return undefined;
          }

          return { ...item, col: item.col - 1 };
        })
        .filter(isNotNil);

      return { ...state, products };
    });
  },
);

import { createReducer } from "@reduxjs/toolkit";
import {
  addPromoCodeAction,
  addToCartNew,
  clearCart,
  decrementCart,
  ICartState,
  incrementCart,
  removeFromCart,
} from "./actions.ts";
import { omit } from "ramda";

const initialState = {
  items: {},
};

export const cartReducer = createReducer<ICartState>(
  initialState,
  (builder) => {
    builder.addCase(addToCartNew, (state, { payload }) => {
      const { shopId, additions, productId, col = 1 } = payload;
      if (shopId !== state.shopId) {
        return {
          shopId,
          items: {
            [Date.now()]: {
              additions,
              col,
              productId,
            },
          },
        };
      }
      return {
        ...state,
        shopId,
        items: {
          ...state.items,
          [Date.now()]: {
            additions,
            col,
            productId,
          },
        },
      };
    });
    builder.addCase(decrementCart, (state, { payload }) => {
      return {
        ...state,
        items: {
          ...state.items,
          [payload]: {
            ...state.items[payload],
            col: state.items[payload].col - 1,
          },
        },
      };
    });
    builder.addCase(incrementCart, (state, { payload }) => {
      return {
        ...state,
        items: {
          ...state.items,
          [payload]: {
            ...state.items[payload],
            col: state.items[payload].col + 1,
          },
        },
      };
    });
    builder.addCase(removeFromCart, (state, { payload }) => {
      return { ...state, items: omit([String(payload)], state.items) };
    });
    builder.addCase(clearCart, (state) => ({
      shopId: state.shopId,
      items: {},
    }));
    builder.addCase(addPromoCodeAction, (state, { payload }) => ({
      ...state,
      promoCodeId: payload,
    }));
  },
);

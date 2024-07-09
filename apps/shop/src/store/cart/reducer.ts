import { createReducer } from "@reduxjs/toolkit";
import { addToCartNew, ICartState } from "./actions.ts";

export const cartReducer = createReducer<ICartState>(
  {
    products: [],
    items: {},
  },
  (builder) => {
    builder.addCase(addToCartNew, (state, { payload }) => {
      const { shopId, additionIds, productId, col = 1 } = payload;
      return {
        ...state,
        shopId,
        items: {
          ...state.items,
          [(Math.random() * 1000).toFixed(10)]: {
            additionIds,
            col,
            productId,
          },
        },
      };
    });
  },
);

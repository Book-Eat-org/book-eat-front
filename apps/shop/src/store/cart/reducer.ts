import { createReducer } from "@reduxjs/toolkit";
import { addToCart, ICartPayload } from "./actions.ts";
import { prop, uniqBy } from "ramda";

export const cartReducer = createReducer<ICartPayload[]>([], (builder) => {
  builder.addCase(addToCart, (state, { payload }) =>
    uniqBy(prop("productId"), [payload, ...state]),
  );
});

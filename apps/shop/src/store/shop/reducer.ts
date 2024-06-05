import { createReducer, EntityId } from "@reduxjs/toolkit";
import { setActiveShop } from "./actions.ts";

export const shopReducer = createReducer<null | EntityId>(null, (builder) => {
  builder.addCase(setActiveShop, (_, { payload }) => payload);
});

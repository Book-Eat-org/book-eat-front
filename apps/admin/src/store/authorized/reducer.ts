import { createReducer } from "@reduxjs/toolkit";
import { setAuthorizedAction } from "./actions.ts";

export const authorizedReducer = createReducer(false, (builder) => {
  builder.addCase(setAuthorizedAction, (_, { payload }) => payload);
});

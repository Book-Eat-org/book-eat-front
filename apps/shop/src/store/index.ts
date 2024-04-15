import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { organizationsEndpoints } from "$api";
import { authorizedReducer } from "./authorized";
import { cartReducer } from "./cart";

export { setAuthorizedAction, authorizedSelector } from "./authorized";

const rootReducer = combineReducers({
  [organizationsEndpoints.reducerPath]: organizationsEndpoints.reducer,
  authorized: authorizedReducer,
  cart: cartReducer,
});
export type IRootState = ReturnType<typeof rootReducer>;
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(organizationsEndpoints.middleware),
});

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authorizedReducer } from "./authorized";
import { cartReducer } from "./cart";
import { organizationsEndpoints } from "@book-eat/api";
import { cartMiddleware, reHydrateStore } from "./middlewares";
import { shopReducer } from "./shop";

export { setAuthorizedAction, authorizedSelector } from "./authorized";

const rootReducer = combineReducers({
  [organizationsEndpoints.reducerPath]: organizationsEndpoints.reducer,
  authorized: authorizedReducer,
  cart: cartReducer,
  activeShop: shopReducer,
});
export type IRootState = ReturnType<typeof rootReducer>;
export const store = configureStore({
  reducer: rootReducer,
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(organizationsEndpoints.middleware)
      .concat(cartMiddleware),
});

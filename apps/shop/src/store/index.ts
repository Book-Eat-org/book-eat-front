import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authorizedReducer } from "./authorized";
import { cartReducer } from "./cart";
import { organizationsEndpoints } from "@book-eat/api";
import { cartMiddleware, reHydrateStore } from "./middlewares";
import { shopReducer } from "./shop";
import {
  productsSlice,
  additionsSlice,
  organizationsSlice,
  categoriesSlice,
} from "./entities";

export { setAuthorizedAction, authorizedSelector } from "./authorized";

const rootReducer = combineReducers({
  [organizationsEndpoints.reducerPath]: organizationsEndpoints.reducer,
  authorized: authorizedReducer,
  cart: cartReducer,
  activeShop: shopReducer,
  additions: additionsSlice.reducer,
  categories: categoriesSlice.reducer,
  products: productsSlice.reducer,
  organizations: organizationsSlice.reducer,
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

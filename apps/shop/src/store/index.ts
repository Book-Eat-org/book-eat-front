import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authorizedReducer } from "./authorized";
import { cartReducer } from "./cart";
import { organizationsEndpoints } from "@book-eat/api";

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

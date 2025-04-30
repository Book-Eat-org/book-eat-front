import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  additionsEndpoints,
  cashiersEndpoints,
  loginApi,
  menuEndpoints,
  rtkQueryErrorLogger,
} from "$api";
import { authorizedReducer } from "./authorized";
import {
  additionsSlice,
  categoriesSlice,
  organizationsSlice,
  placesSlices,
  productsSlice,
  ordersSlice,
  promoCodesSlice,
} from "./entities";
import { categoriesEndpoints } from "@book-eat/api";

export { setAuthorizedAction, authorizedSelector } from "./authorized";
export * from "./entities";

const rootReducer = combineReducers({
  [cashiersEndpoints.reducerPath]: cashiersEndpoints.reducer,
  [menuEndpoints.reducerPath]: menuEndpoints.reducer,
  [loginApi.reducerPath]: loginApi.reducer,
  [categoriesEndpoints.reducerPath]: categoriesEndpoints.reducer,
  authorized: authorizedReducer,
  additions: additionsSlice.reducer,
  categories: categoriesSlice.reducer,
  products: productsSlice.reducer,
  organizations: organizationsSlice.reducer,
  places: placesSlices.reducer,
  orders: ordersSlice.reducer,
  promos: promoCodesSlice.reducer,
});
export type IRootState = ReturnType<typeof rootReducer>;
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(additionsEndpoints.middleware)
      .concat(menuEndpoints.middleware)
      .concat(categoriesEndpoints.middleware)
      .concat(rtkQueryErrorLogger),
});

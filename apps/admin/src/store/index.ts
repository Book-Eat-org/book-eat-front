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
} from "./entities";

export { setAuthorizedAction, authorizedSelector } from "./authorized";

const rootReducer = combineReducers({
  [cashiersEndpoints.reducerPath]: cashiersEndpoints.reducer,
  [menuEndpoints.reducerPath]: menuEndpoints.reducer,
  [loginApi.reducerPath]: loginApi.reducer,
  authorized: authorizedReducer,
  additions: additionsSlice.reducer,
  categories: categoriesSlice.reducer,
  products: productsSlice.reducer,
  organizations: organizationsSlice.reducer,
  places: placesSlices.reducer,
});
export type IRootState = ReturnType<typeof rootReducer>;
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(additionsEndpoints.middleware)
      .concat(menuEndpoints.middleware)
      .concat(rtkQueryErrorLogger),
});

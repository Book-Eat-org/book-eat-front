import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  additionsEndpoints,
  cashiersEndpoints,
  loginApi,
  menuEndpoints,
  rtkQueryErrorLogger,
} from "$api";
import { authorizedReducer } from "./authorized";

export { setAuthorizedAction, authorizedSelector } from "./authorized";

const rootReducer = combineReducers({
  [cashiersEndpoints.reducerPath]: cashiersEndpoints.reducer,
  [additionsEndpoints.reducerPath]: additionsEndpoints.reducer,
  [menuEndpoints.reducerPath]: menuEndpoints.reducer,
  [loginApi.reducerPath]: loginApi.reducer,
  authorized: authorizedReducer,
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

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { values } from "ramda";
import { ApiTags } from "$enums";
import {
  isFulfilled,
  isRejectedWithValue,
  Middleware,
  MiddlewareAPI,
} from "@reduxjs/toolkit";

export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => async (action) => {
    // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
    if (isRejectedWithValue(action)) {
      console.log(action);
    }
    console.log(api);

    return next(action);
  };
export const api = createApi({
  reducerPath: "api",
  tagTypes: values(ApiTags),
  baseQuery: fetchBaseQuery({
    baseUrl: "/book-eat/api",

    // prepareHeaders: (headers) => {
    //   headers.set("Content-Type", "application/json");
    //
    //   return headers;
    // },
  }),
  endpoints: () => ({}),
});

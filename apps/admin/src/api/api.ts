import {
  BaseQueryApi,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { values } from "ramda";
import { ApiTags } from "$enums";
import {
  isRejectedWithValue,
  Middleware,
  MiddlewareAPI,
} from "@reduxjs/toolkit";

const baseQueryToasts = (baseUrl: string) => {
  const baseQuery = fetchBaseQuery({ baseUrl });
  return async (
    args: string | FetchArgs,
    api: BaseQueryApi,
    extraOptions: NonNullable<unknown>,
  ) => {
    const { data } = (await baseQuery(args, api, extraOptions)) as {
      data: { code: string };
    };

    if (data.code) {
      alert(`Ошибка: ${data.code}`);
      return { error: data };
    }

    return { data };
  };
};
export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => async (action) => {
    if (isRejectedWithValue(action)) {
      console.log(action);
    }
    console.log(api);

    return next(action);
  };
export const api = createApi({
  reducerPath: "api",
  tagTypes: values(ApiTags),
  baseQuery: baseQueryToasts("/book-eat/api"),
  endpoints: () => ({}),
});

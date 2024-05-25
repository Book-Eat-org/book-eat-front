import {
  BaseQueryApi,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
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

export const api = createApi({
  reducerPath: "api",
  tagTypes: Object.values(ApiTags),
  baseQuery: baseQueryToasts("/book-eat/api"),
  endpoints: () => ({}),
});

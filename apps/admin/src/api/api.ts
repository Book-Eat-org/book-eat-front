import {
  BaseQueryApi,
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { values } from "ramda";
import { ApiTags } from "$enums";
import { Middleware } from "@reduxjs/toolkit";
import { TFetchResponse, TFetchWrapperResponse } from "./models.ts";
import { QueryReturnValue } from "@reduxjs/toolkit/src/query/baseQueryTypes.ts";
import { checkIsErrorType } from "./utils.ts";

const baseQueryToasts = (baseUrl: string) => {
  const baseQuery = fetchBaseQuery({ baseUrl });
  return async (
    args: string | FetchArgs,
    api: BaseQueryApi,
    extraOptions: NonNullable<unknown>,
  ): Promise<TFetchWrapperResponse<T>> => {
    const { data } = (await baseQuery(
      args,
      api,
      extraOptions,
    )) as QueryReturnValue<TFetchResponse<T>, any, any>;

    if (checkIsErrorType(data)) {
      if (data.code !== "AUTH_004") {
        alert(`Ошибка: ${data.code}`);
      }

      return {
        error: data,
      };
    }

    return { data };
  };
};
export const rtkQueryErrorLogger: Middleware =
  () => (next) => async (action) => {
    return next(action);
  };

export const api = createApi({
  reducerPath: "api",
  tagTypes: values(ApiTags),
  baseQuery: baseQueryToasts("/book-eat/api"),
  endpoints: () => ({}),
});

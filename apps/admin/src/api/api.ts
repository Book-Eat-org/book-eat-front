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
    const { data, error } = (await baseQuery(
      args,
      api,
      extraOptions,
    )) as QueryReturnValue<TFetchResponse<T>, any, any>;
    const anyData = data ?? error?.data;
    if (checkIsErrorType(anyData)) {
      if (anyData.code !== "AUTH_004") {
        alert(`Ошибка: ${data.code}`);
      }

      return {
        error: anyData,
      };
    }

    return { data: anyData };
  };
};
export const rtkQueryErrorLogger: Middleware =
  () => (next) => async (action) => {
    return next(action);
  };

export const api = createApi({
  reducerPath: "adminApi",
  tagTypes: values(ApiTags),
  baseQuery: baseQueryToasts("/book-eat/api"),
  endpoints: () => ({}),
});

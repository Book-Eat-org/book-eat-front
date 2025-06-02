import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { ApiTags } from "$enums";

interface ApiResponse<T = unknown> {
  code?: string;
  data?: T;
  [key: string]: unknown;
}

const wrapBaseQuery = (
  baseUrl: string,
): BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> => {
  const rawBaseQuery = fetchBaseQuery({ baseUrl });

  return async (args, api, extraOptions) => {
    const result = await rawBaseQuery(args, api, extraOptions);

    if ("data" in result) {
      const response = result.data as ApiResponse;

      if (response?.code) {
        alert(`Ошибка: ${response.code}`);
        return { error: { status: 400, data: response } };
      }

      return { data: response };
    }

    return result;
  };
};

export const api = createApi({
  reducerPath: "api",
  tagTypes: Object.values(ApiTags),
  baseQuery: wrapBaseQuery("/book-eat/api"),
  endpoints: () => ({}),
});

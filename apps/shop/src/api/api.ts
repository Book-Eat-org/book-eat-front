import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { values } from "ramda";
import { ApiTags } from "$enums";

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

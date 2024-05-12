import { api } from "$api";
import { ApiTags } from "$enums";
import { IResponse } from "$models";
import { categoriesAdapters } from "./adapter";
import { EntityId, EntityState } from "@reduxjs/toolkit";
import { ICategory } from "@book-eat/api";

export const categoriesEndpoints = api.injectEndpoints({
  endpoints: (build) => ({
    fetchCategories: build.query<EntityState<ICategory>, void>({
      query: () => ({
        url: "/v1/categories/organization?activeOnly=false",
      }),
      transformResponse: (res: ICategory[]) =>
        categoriesAdapters.setAll(categoriesAdapters.getInitialState(), res),
      providesTags: [ApiTags.Categories],
    }),
    updateCategory: build.mutation<IResponse, Partial<ICategory>>({
      query: (body) => ({
        url: `/v1/categories/${body.id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: [ApiTags.Categories],
    }),
    createCategory: build.mutation<IResponse, Partial<ICategory>>({
      query: (body) => ({
        url: "/v1/categories",
        method: "POST",
        body: { ...body, description: "test" },
      }),
      invalidatesTags: [ApiTags.Categories],
    }),
    deleteCategory: build.mutation<{ success: boolean }, EntityId>({
      query: (id) => ({
        url: `/v1/categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [ApiTags.Categories],
    }),
  }),
});

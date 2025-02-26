import { ApiTags } from "$enums";
import { ICategory, IResponse } from "$models";
import { api } from "../api";
import { categoriesAdapters } from "./adapter";
import { EntityId, EntityState } from "@reduxjs/toolkit";

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
    loadCategoriesList: build.query<ICategory[], EntityId>({
      query: (id) => ({ url: `/v1/categories/organizations/${id}` }),
      providesTags: [ApiTags.Categories],
    })
  }),
});
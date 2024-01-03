import { api } from "$api";
import { ApiTags } from "$enums";
import { ICategory, IResponse } from "$models";
import { categoriesAdapters } from "./adapter";
import { EntityId, EntityState } from "@reduxjs/toolkit";

export const categoriesEndpoints = api.injectEndpoints({
  endpoints: (build) => ({
    fetchCategories: build.query<EntityState<ICategory>, void>({
      query: () => ({
        url: "/v1/organizations/groups",
      }),
      transformResponse: (res: ICategory[]) =>
        categoriesAdapters.setAll(categoriesAdapters.getInitialState(), res),
      providesTags: [ApiTags.Categories],
    }),
    saveGroups: build.mutation<IResponse, ICategory[]>({
      query: (body) => ({
        url: "/v1/organizations/groups",
        method: "POST",
        body,
      }),
      invalidatesTags: (result) =>
        result?.success ? [ApiTags.Categories] : [],
    }),
    deleteGroups: build.mutation<{ success: boolean }, EntityId>({
      query: (groupId) => ({
        url: `/v1/organizations/groups/${groupId}`,
        method: "DELETE",
      }),
      invalidatesTags: [ApiTags.Categories],
    }),
  }),
});

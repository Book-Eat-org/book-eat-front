import { api } from "$api";
import { IMenu } from "$models";
import { EntityId, EntityState } from "@reduxjs/toolkit";
import { ApiTags } from "$enums";
import { menuAdapter } from "./adapter";

export const menuEndpoints = api.injectEndpoints({
  endpoints: (build) => ({
    fetchMenu: build.query<EntityState<IMenu>, void>({
      query: () => `/v1/organizations/menus`,
      transformResponse: (res: IMenu[]) =>
        menuAdapter.setAll(menuAdapter.getInitialState(), res),
      providesTags: [ApiTags.Menu],
    }),
    saveMenu: build.mutation<{ success: boolean }, IMenu[]>({
      query: (menu) => ({
        url: "/v1/organizations/menus",
        method: "POST",
        body: menu,
      }),
      invalidatesTags: [ApiTags.Menu],
    }),
    deleteMenu: build.mutation<{ success: boolean }, EntityId>({
      query: (guid) => ({
        url: `/menu/${guid}`,
        method: "DELETE",
      }),
      invalidatesTags: [ApiTags.Menu],
    }),
  }),
});

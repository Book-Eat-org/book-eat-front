import { EntityId, EntityState } from "@reduxjs/toolkit";
import { ApiTags } from "$enums";
import { menuAdapter } from "./adapter";
import { api } from "../api";
import { IProduct } from "$models";

export const menuEndpoints = api.injectEndpoints({
  endpoints: (build) => ({
    getMenuByPlaceId: build.query<EntityState<IProduct>, EntityId>({
      query: (id) => `/v1/products/place/${id}`,
      transformResponse: (res: IProduct[]) =>
        menuAdapter.setMany(menuAdapter.getInitialState(), res),
      providesTags: [ApiTags.Menu],
    }),
    getMenuByPlaces: build.query<EntityState<IProduct>, void>({
      query: () => `/v1/products/place`,
      transformResponse: (res: IProduct[]) =>
        menuAdapter.setAll(menuAdapter.getInitialState(), res),
      providesTags: [ApiTags.Menu],
    }),
    getMenuByOrganization: build.query<EntityState<IProduct>, void>({
      query: () => `/v1/products/organization`,
      transformResponse: (res: IProduct[]) =>
        menuAdapter.setAll(menuAdapter.getInitialState(), res),
      providesTags: [ApiTags.Menu],
    }),
    saveMenu: build.mutation<{ success: boolean }, IProduct>({
      query: (menu) => ({
        url: "/v1/products",
        method: "POST",
        body: menu,
      }),
      invalidatesTags: [ApiTags.Menu],
    }),
    editMenu: build.mutation<{ success: boolean }, IProduct>({
      query: (menu) => ({
        url: `/v1/products/${menu.id}`,
        method: "PUT",
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

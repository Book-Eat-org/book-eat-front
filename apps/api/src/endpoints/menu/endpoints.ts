import { EntityId } from "@reduxjs/toolkit";
import { ApiTags } from "$enums";
import { menuAdapter } from "./adapter";
import { api } from "../api";
import { ICategory, IProduct, TProductEntityState } from "$models";

type IGetBlaBlaResponse = (ICategory & { products: IProduct[] })[];

export const menuEndpoints = api.injectEndpoints({
  endpoints: (build) => ({
    getMenuByPlaceId: build.query<TProductEntityState, EntityId>({
      query: (id) => `/v2/products/place/${id}`,
      transformResponse: (res: IGetBlaBlaResponse) => {
        return menuAdapter.setMany(menuAdapter.getInitialState(), res);
      },
      providesTags: [ApiTags.Menu],
    }),
    getMenuById: build.query<TProductEntityState, EntityId>({
      query: (id) => `/v2/products/${id}`,
      transformResponse: (res: IProduct) =>
        menuAdapter.setOne(menuAdapter.getInitialState(), res),
      providesTags: [ApiTags.Menu],
    }),
    getMenuByPlaces: build.query<TProductEntityState, void>({
      query: () => `/v1/products/place`,
      transformResponse: (res: IProduct[]) =>
        menuAdapter.setAll(menuAdapter.getInitialState(), res),
      providesTags: [ApiTags.Menu],
    }),
    getMenuByOrganization: build.query<TProductEntityState, void>({
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

import { api } from "$api";
import { EntityId, EntityState } from "@reduxjs/toolkit";
import { ApiTags } from "$enums";
import { menuAdapter } from "./adapter";
import { IProduct } from "@book-eat/api";

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
    getMenuById: build.query<EntityState<IProduct>, EntityId>({
      query: (id) => `/v1/products/${id}`,
      transformResponse: (res: IProduct) =>
        menuAdapter.setOne(menuAdapter.getInitialState(), res),
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
      transformResponse: (res: IProduct) =>
        menuAdapter.addOne(menuAdapter.getInitialState(), res),
      invalidatesTags: [ApiTags.Menu],
    }),
    linkWithPlace: build.mutation<
      { success: boolean },
      { productId: EntityId[]; placesIds: EntityId[] }
    >({
      query: ({ productId, placesIds }) => ({
        url: `v1/products/${productId}/places/assign`,
        method: "PUT",
        body: { placesIds },
      }),
      invalidatesTags: [ApiTags.Menu],
    }),
    linkWithCategory: build.mutation<
      { success: boolean },
      { productId: EntityId; categoriesIds: EntityId[] }
    >({
      query: ({ productId, categoriesIds }) => ({
        url: `v1/products/${productId}/categories/assign`,
        method: "PUT",
        body: { categoriesIds },
      }),
      invalidatesTags: [ApiTags.Menu],
    }),
    linkWithAddition: build.mutation<
      { success: boolean },
      { productId: EntityId; additionsIds: EntityId[] }
    >({
      query: ({ productId, additionsIds }) => ({
        url: `v1/products/${productId}/additions/assign`,
        method: "PUT",
        body: { additionsIds },
      }),
      invalidatesTags: [ApiTags.Menu],
    }),
    editMenu: build.mutation<EntityState<IProduct>, IProduct>({
      query: (menu) => ({
        url: `/v1/products/${menu.id}`,
        method: "PUT",
        body: menu,
      }),
      transformResponse: (res: IProduct) =>
        menuAdapter.upsertOne(menuAdapter.getInitialState(), res),
    }),
    deleteMenu: build.mutation<{ success: boolean }, EntityId>({
      query: (id) => ({
        url: `/v1/products/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

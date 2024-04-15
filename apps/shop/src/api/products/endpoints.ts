import { api } from "$api";
import { ApiTags } from "$enums";
import { IAddition, IProduct } from "$models";
import { productsAdapters } from "./adapter";
import { EntityState } from "@reduxjs/toolkit";

export const productsEndpoints = api.injectEndpoints({
  endpoints: (build) => ({
    fetchProduct: build.query<EntityState<IProduct>, void>({
      query: () => "/v1/products",
      providesTags: [ApiTags.Additions],
      transformResponse: (res: IAddition[]) =>
        productsAdapters.setAll(productsAdapters.getInitialState(), res),
    }),
    saveProduct: build.mutation<{ success: boolean }, IProduct[]>({
      query: (additions) => ({
        url: "/v1/products",
        method: "POST",
        body: additions,
      }),
      invalidatesTags: [ApiTags.Additions],
    }),
    deleteProduct: build.mutation<{ success: boolean }, IProduct>({
      query: (additionId) => ({
        url: `/v1/products/${additionId}`,
        method: "DELETE",
      }),
      invalidatesTags: [ApiTags.Additions],
    }),
  }),
});

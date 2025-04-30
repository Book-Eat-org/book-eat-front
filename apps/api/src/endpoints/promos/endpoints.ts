import { ApiTags } from "$enums";
import { IPromoCode, IResponse } from "$models";
import { api } from "../api";
import { EntityId } from "@reduxjs/toolkit";

export const promoCodesEndpoints = api.injectEndpoints({
  endpoints: (build) => ({
    fetchPromoCodes: build.query<IPromoCode[], void>({
      query: () => ({
        url: "/v1/promo-codes/all",
      }),
      providesTags: [ApiTags.PromoCodes],
    }),
    fetchPromoCodesByParams: build.query<IPromoCode, { value: string[] }>({
      query: (params) => ({
        url: "/v1/promo-codes",
        params,
      }),
      providesTags: [ApiTags.PromoCodes],
    }),
    updatePromoCode: build.mutation<IResponse, Partial<IPromoCode>>({
      query: (body) => ({
        url: `/v1/promo-codes/${body.id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: [ApiTags.PromoCodes],
    }),
    createPromoCode: build.mutation<IResponse, Partial<IPromoCode>>({
      query: (body) => ({
        url: "/v1/promo-codes",
        method: "POST",
        body,
      }),
      invalidatesTags: [ApiTags.PromoCodes],
    }),
    deletePromoCode: build.mutation<{ success: boolean }, EntityId>({
      query: (id) => ({
        url: `/v1/promo-codes/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [ApiTags.PromoCodes],
    }),
  }),
});

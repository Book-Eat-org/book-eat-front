import { api } from "../api";
import { EntityId, EntityState } from "@reduxjs/toolkit";
import { ApiTags } from "$enums";
import { cashiersAdapter } from "./adapter";
import { ICashier } from "$models";

export const cashiersEndpoints = api.injectEndpoints({
  endpoints: (build) => ({
    getCashiers: build.query<EntityState<ICashier,EntityId>, void>({
      providesTags: [ApiTags.Cashiers],
      query: () => "/v1/users/organization",
      transformResponse: (res: ICashier[]) =>
        cashiersAdapter.setAll(cashiersAdapter.getInitialState(), res),
    }),
    createCashier: build.mutation<{ success: boolean }, Omit<ICashier, "id">[]>(
      {
        invalidatesTags: [ApiTags.Cashiers],
        query: (body) => {
          return {
            url: "/v1/users/place",
            method: "POST",
            body,
          };
        },
      },
    ),
    deleteCashiers: build.mutation<{ success: boolean }, EntityId>({
      invalidatesTags: [ApiTags.Cashiers],
      query: (body) => ({
        url: "/v1/auth/cashier",
        method: "DELETE",
        body,
      }),
    }),
  }),
});

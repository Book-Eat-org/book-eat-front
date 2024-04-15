import { api } from "$api";
import { ICashier } from "$models";
import { EntityId, EntityState } from "@reduxjs/toolkit";
import { ApiTags } from "$enums";
import { cashiersAdapter } from "./adapter";

export const cashiersEndpoints = api.injectEndpoints({
  endpoints: (build) => ({
    getCashiers: build.query<EntityState<ICashier>, void>({
      providesTags: [ApiTags.Cashiers],
      query: () => "/v1/auth/cashier",
      transformResponse: (res: ICashier[]) =>
        cashiersAdapter.setAll(cashiersAdapter.getInitialState(), res),
    }),
    createCashier: build.mutation<{ success: boolean }, Omit<ICashier, "id">[]>(
      {
        invalidatesTags: [ApiTags.Cashiers],
        query: (body) => {
          return {
            url: "/v1/auth/cashier",
            method: "POST",
            body,
          };
        },
      },
    ),
    deleteCashiers: build.mutation<{ success: boolean }, EntityId[]>({
      invalidatesTags: [ApiTags.Cashiers],
      query: (body) => ({
        url: "/v1/auth/cashier",
        method: "DELETE",
        body,
      }),
    }),
  }),
});

import { EntityState } from "@reduxjs/toolkit";
import { ApiTags } from "$enums";
import { ordersAdapter } from "./adapter";
import { api } from "../api";
import { IOrder, IOrderStatus } from "$models";

export interface IUpdateOrderRequestPayload {
  id: number;
  statusVal: IOrderStatus;
}
export const ordersEndpoints = api.injectEndpoints({
  endpoints: (build) => ({
    getOrders: build.query<EntityState<IOrder>, void>({
      providesTags: [ApiTags.Orders],
      query: () => {
        return {
          url: `/v1/orders`,
        };
      },
      transformResponse: (res: IOrder[]) =>
        ordersAdapter.setAll(ordersAdapter.getInitialState(), res),
    }),
    updateOrderStatus: build.mutation<void, IUpdateOrderRequestPayload>({
      query: ({ id, statusVal }) => ({
        params: { status: statusVal },
        url: `/v1/orders/${id}/status`,
        method: "PUT",
      }),
      invalidatesTags: [ApiTags.Orders],
    }),
  }),
});

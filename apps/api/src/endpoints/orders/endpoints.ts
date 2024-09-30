import { EntityId, EntityState } from "@reduxjs/toolkit";
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
    getOrder: build.query<EntityState<IOrder>, EntityId>({
      providesTags: [ApiTags.Orders],
      query: (id) => {
        return {
          url: `/v1/orders/${id}`,
        };
      },
      transformResponse: (res: IOrder[]) =>
        ordersAdapter.setOne(ordersAdapter.getInitialState(), res),
    }),
    createOrder: build.mutation<{ success: boolean }, IOrder>({
      query: (body) => ({
        url: "/v1/orders",
        method: "POST",
        body,
      }),
      invalidatesTags: [ApiTags.Orders],
    }),
    updateOrderStatus: build.mutation<void, IUpdateOrderRequestPayload>({
      query: ({ id, statusVal }) => ({
        params: { status: statusVal },
        url: `/v1/orders/${id}/status`,
        method: "PUT",
      }),
      invalidatesTags: [ApiTags.Orders],
    }),
    cancelOrder: build.mutation<void, EntityId>({
      query: (id) => ({
        url: `/v1/orders/${id}/cancel`,
        method: "PUT",
      }),
      invalidatesTags: [ApiTags.Orders],
    }),
    confirmOrder: build.mutation<void, EntityId>({
      query: (id) => ({
        url: `/v1/orders/${id}/confirm`,
        method: "PUT",
      }),
      invalidatesTags: [ApiTags.Orders],
    }),
  }),
});

import { api } from "$api";
import { EntityId, EntityState } from "@reduxjs/toolkit";
import { ApiTags, OrderStatus } from "$enums";
import { ordersAdapter } from "./adapter";
import { IOrder } from "@book-eat/api";

interface IUpdateOrderRequestPayload {
  id: EntityId;
  status: OrderStatus;
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
      transformResponse: (res: IOrder) =>
        ordersAdapter.setOne(ordersAdapter.getInitialState(), res),
    }),
    updateOrderStatus: build.mutation<void, IUpdateOrderRequestPayload>({
      query: ({ id, status }) => ({
        params: { status },
        url: `/v1/orders/${id}/status`,
        method: "PUT",
      }),
      invalidatesTags: [ApiTags.Orders],
    }),
  }),
});

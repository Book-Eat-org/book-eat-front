import { api } from "$api";
import { EntityState } from "@reduxjs/toolkit";
import { ApiTags, OrderStatus } from "$enums";
import { ordersAdapter } from "./adapter";
import { IOrder } from "@book-eat/api";

interface IUpdateOrderRequestPayload {
  id: number;
  statusVal: OrderStatus;
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

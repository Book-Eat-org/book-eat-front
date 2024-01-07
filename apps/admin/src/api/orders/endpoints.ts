import { api } from "$api";
import { IOrder } from "$models";
import { EntityId, EntityState } from "@reduxjs/toolkit";
import { ApiTags, OrderStatus } from "$enums";
import { ordersAdapter } from "./adapter";

export interface IGetOrderParams {
  orgId: EntityId;
}

interface IUpdateOrderRequestPayload {
  id: number;
  statusVal: OrderStatus;
}
export const ordersEndpoints = api.injectEndpoints({
  endpoints: (build) => ({
    getOrders: build.query<EntityState<IOrder>, IGetOrderParams>({
      providesTags: [ApiTags.Orders],
      query: ({ orgId }) => {
        return {
          url: `/v1/orders-by-organization-title-or-id/${orgId}`,
          params: { archived_option: true },
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

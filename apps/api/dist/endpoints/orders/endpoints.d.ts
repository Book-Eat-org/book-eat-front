import { EntityId, EntityState } from "@reduxjs/toolkit";
import { ApiTags } from '../../enums';
import { IOrder, OrderStatus } from '../../models';
export interface IUpdateOrderRequestPayload {
    id: number;
    statusVal: OrderStatus;
}
export declare const ordersEndpoints: import("@reduxjs/toolkit/query").Api<import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, {
    getOrders: import("@reduxjs/toolkit/query").QueryDefinition<void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, ApiTags, EntityState<IOrder, EntityId>, "api">;
    getOrder: import("@reduxjs/toolkit/query").QueryDefinition<EntityId, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, ApiTags, EntityState<IOrder, EntityId>, "api">;
    createOrder: import("@reduxjs/toolkit/query").MutationDefinition<IOrder, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, ApiTags, {
        success: boolean;
    }, "api">;
    updateOrderStatus: import("@reduxjs/toolkit/query").MutationDefinition<IUpdateOrderRequestPayload, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, ApiTags, void, "api">;
    cancelOrder: import("@reduxjs/toolkit/query").MutationDefinition<EntityId, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, ApiTags, void, "api">;
    confirmOrder: import("@reduxjs/toolkit/query").MutationDefinition<EntityId, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, ApiTags, void, "api">;
}, "api", ApiTags, typeof import("@reduxjs/toolkit/query").coreModuleName | typeof import("@reduxjs/toolkit/query/react").reactHooksModuleName>;

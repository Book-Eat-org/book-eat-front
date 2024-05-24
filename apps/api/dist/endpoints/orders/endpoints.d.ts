import { ApiTags } from '../../enums';
import { IOrderStatus } from '../../models';
export interface IUpdateOrderRequestPayload {
    id: number;
    statusVal: IOrderStatus;
}
export declare const ordersEndpoints: import("@reduxjs/toolkit/query").Api<(args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
    error: {
        code: string;
    };
    data?: undefined;
} | {
    data: {
        code: string;
    };
    error?: undefined;
}>, {
    getOrders: import("@reduxjs/toolkit/query").QueryDefinition<void, (args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
        error: {
            code: string;
        };
        data?: undefined;
    } | {
        data: {
            code: string;
        };
        error?: undefined;
    }>, ApiTags, any, "api">;
    updateOrderStatus: import("@reduxjs/toolkit/query").MutationDefinition<IUpdateOrderRequestPayload, (args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
        error: {
            code: string;
        };
        data?: undefined;
    } | {
        data: {
            code: string;
        };
        error?: undefined;
    }>, ApiTags, void, "api">;
}, "api", ApiTags, typeof import("@reduxjs/toolkit/query").coreModuleName | typeof import("@reduxjs/toolkit/query/react").reactHooksModuleName>;

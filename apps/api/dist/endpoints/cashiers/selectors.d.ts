export declare const cashiersSelectors: import("@reduxjs/toolkit").EntitySelectors<ICashier, import("@reduxjs/toolkit/query").RootState<{
    getCashiers: import("@reduxjs/toolkit/query").QueryDefinition<void, (args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
        error: {
            code: string;
        };
        data?: undefined;
    } | {
        data: {
            code: string;
        };
        error?: undefined;
    }>, import("../../enums/tags.ts").ApiTags, any, "api">;
    createCashier: import("@reduxjs/toolkit/query").MutationDefinition<Omit<import("../../index.ts").ICashier, "id">[], (args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
        error: {
            code: string;
        };
        data?: undefined;
    } | {
        data: {
            code: string;
        };
        error?: undefined;
    }>, import("../../enums/tags.ts").ApiTags, {
        success: boolean;
    }, "api">;
    deleteCashiers: import("@reduxjs/toolkit/query").MutationDefinition<import("@reduxjs/toolkit").EntityId, (args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
        error: {
            code: string;
        };
        data?: undefined;
    } | {
        data: {
            code: string;
        };
        error?: undefined;
    }>, import("../../enums/tags.ts").ApiTags, {
        success: boolean;
    }, "api">;
}, import("../../enums/tags.ts").ApiTags, "api">, import("@reduxjs/toolkit").EntityId>;

export declare const additionsSelectors: import("@reduxjs/toolkit").EntitySelectors<import("../..").IAddition, import("@reduxjs/toolkit/query").RootState<{
    fetchAdditions: import("@reduxjs/toolkit/query").QueryDefinition<void, (args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
        error: {
            code: string;
        };
        data?: undefined;
    } | {
        data: {
            code: string;
        };
        error?: undefined;
    }>, import("../../enums").ApiTags, any, "api">;
    fetchAdditionsByIds: import("@reduxjs/toolkit/query").MutationDefinition<import("@reduxjs/toolkit").EntityId[], (args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
        error: {
            code: string;
        };
        data?: undefined;
    } | {
        data: {
            code: string;
        };
        error?: undefined;
    }>, import("../../enums").ApiTags, any, "api">;
    saveAddition: import("@reduxjs/toolkit/query").MutationDefinition<import("../..").IAddition, (args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
        error: {
            code: string;
        };
        data?: undefined;
    } | {
        data: {
            code: string;
        };
        error?: undefined;
    }>, import("../../enums").ApiTags, {
        success: boolean;
    }, "api">;
    editAddition: import("@reduxjs/toolkit/query").MutationDefinition<import("../..").IAddition, (args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
        error: {
            code: string;
        };
        data?: undefined;
    } | {
        data: {
            code: string;
        };
        error?: undefined;
    }>, import("../../enums").ApiTags, {
        success: boolean;
    }, "api">;
    deleteAddition: import("@reduxjs/toolkit/query").MutationDefinition<import("@reduxjs/toolkit").EntityId, (args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
        error: {
            code: string;
        };
        data?: undefined;
    } | {
        data: {
            code: string;
        };
        error?: undefined;
    }>, import("../../enums").ApiTags, {
        success: boolean;
    }, "api">;
}, import("../../enums").ApiTags, "api">, import("@reduxjs/toolkit").EntityId>;

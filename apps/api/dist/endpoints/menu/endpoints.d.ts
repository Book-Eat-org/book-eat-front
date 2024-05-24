import { EntityId } from "@reduxjs/toolkit";
import { ApiTags } from '../../enums';
import { IProduct } from '../../models';
export declare const menuEndpoints: import("@reduxjs/toolkit/query").Api<(args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
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
    getMenuByPlaceId: import("@reduxjs/toolkit/query").QueryDefinition<EntityId, (args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
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
    getMenuByPlaces: import("@reduxjs/toolkit/query").QueryDefinition<void, (args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
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
    getMenuByOrganization: import("@reduxjs/toolkit/query").QueryDefinition<void, (args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
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
    saveMenu: import("@reduxjs/toolkit/query").MutationDefinition<IProduct, (args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
        error: {
            code: string;
        };
        data?: undefined;
    } | {
        data: {
            code: string;
        };
        error?: undefined;
    }>, ApiTags, {
        success: boolean;
    }, "api">;
    editMenu: import("@reduxjs/toolkit/query").MutationDefinition<IProduct, (args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
        error: {
            code: string;
        };
        data?: undefined;
    } | {
        data: {
            code: string;
        };
        error?: undefined;
    }>, ApiTags, {
        success: boolean;
    }, "api">;
    deleteMenu: import("@reduxjs/toolkit/query").MutationDefinition<EntityId, (args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
        error: {
            code: string;
        };
        data?: undefined;
    } | {
        data: {
            code: string;
        };
        error?: undefined;
    }>, ApiTags, {
        success: boolean;
    }, "api">;
}, "api", ApiTags, typeof import("@reduxjs/toolkit/query").coreModuleName | typeof import("@reduxjs/toolkit/query/react").reactHooksModuleName>;

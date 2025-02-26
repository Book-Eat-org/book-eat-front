import { ApiTags } from '../../enums';
import { ICategory, IResponse } from '../../models';
import { EntityId } from "@reduxjs/toolkit";
export declare const categoriesEndpoints: import("@reduxjs/toolkit/query").Api<(args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
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
    fetchCategories: import("@reduxjs/toolkit/query").QueryDefinition<void, (args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
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
    updateCategory: import("@reduxjs/toolkit/query").MutationDefinition<Partial<ICategory>, (args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
        error: {
            code: string;
        };
        data?: undefined;
    } | {
        data: {
            code: string;
        };
        error?: undefined;
    }>, ApiTags, IResponse, "api">;
    createCategory: import("@reduxjs/toolkit/query").MutationDefinition<Partial<ICategory>, (args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
        error: {
            code: string;
        };
        data?: undefined;
    } | {
        data: {
            code: string;
        };
        error?: undefined;
    }>, ApiTags, IResponse, "api">;
    deleteCategory: import("@reduxjs/toolkit/query").MutationDefinition<EntityId, (args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
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
    loadCategoriesList: import("@reduxjs/toolkit/query").QueryDefinition<EntityId, (args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
        error: {
            code: string;
        };
        data?: undefined;
    } | {
        data: {
            code: string;
        };
        error?: undefined;
    }>, ApiTags, ICategory[], "api">;
}, "api", ApiTags, typeof import("@reduxjs/toolkit/query").coreModuleName | typeof import("@reduxjs/toolkit/query/react").reactHooksModuleName>;

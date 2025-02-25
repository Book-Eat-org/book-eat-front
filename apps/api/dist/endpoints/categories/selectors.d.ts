export declare const categoriesSelectors: import("@reduxjs/toolkit").EntitySelectors<import("../..").ICategory, import("@reduxjs/toolkit/query").RootState<{
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
    }>, import("../../enums").ApiTags, any, "api">;
    updateCategory: import("@reduxjs/toolkit/query").MutationDefinition<Partial<import("../..").ICategory>, (args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
        error: {
            code: string;
        };
        data?: undefined;
    } | {
        data: {
            code: string;
        };
        error?: undefined;
    }>, import("../../enums").ApiTags, import("../..").IResponse, "api">;
    createCategory: import("@reduxjs/toolkit/query").MutationDefinition<Partial<import("../..").ICategory>, (args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
        error: {
            code: string;
        };
        data?: undefined;
    } | {
        data: {
            code: string;
        };
        error?: undefined;
    }>, import("../../enums").ApiTags, import("../..").IResponse, "api">;
    deleteCategory: import("@reduxjs/toolkit/query").MutationDefinition<import("@reduxjs/toolkit").EntityId, (args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
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
    loadCategoriesList: import("@reduxjs/toolkit/query").MutationDefinition<import("@reduxjs/toolkit").EntityId[], (args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
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
        categories: import("../..").ICategory[];
    }, "api">;
}, import("../../enums").ApiTags, "api">, import("@reduxjs/toolkit").EntityId>;

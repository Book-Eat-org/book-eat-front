import { EntityId } from "@reduxjs/toolkit";
export declare const menuSelectors: import("@reduxjs/toolkit").EntitySelectors<import("../../index.ts").IProduct, import("@reduxjs/toolkit/query").RootState<{
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
    }>, import("../../enums/tags.ts").ApiTags, any, "api">;
    getMenuById: import("@reduxjs/toolkit/query").QueryDefinition<EntityId, (args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
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
    }>, import("../../enums/tags.ts").ApiTags, any, "api">;
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
    }>, import("../../enums/tags.ts").ApiTags, any, "api">;
    saveMenu: import("@reduxjs/toolkit/query").MutationDefinition<import("../../index.ts").IProduct, (args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
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
    editMenu: import("@reduxjs/toolkit/query").MutationDefinition<import("../../index.ts").IProduct, (args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
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
    }>, import("../../enums/tags.ts").ApiTags, {
        success: boolean;
    }, "api">;
}, import("../../enums/tags.ts").ApiTags, "api">, EntityId>;
export declare const createMenuSelectorsByPlaceId: (id: EntityId) => import("@reduxjs/toolkit").EntitySelectors<import("../../index.ts").IProduct, import("@reduxjs/toolkit/query").RootState<{
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
    }>, import("../../enums/tags.ts").ApiTags, any, "api">;
    getMenuById: import("@reduxjs/toolkit/query").QueryDefinition<EntityId, (args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
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
    }>, import("../../enums/tags.ts").ApiTags, any, "api">;
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
    }>, import("../../enums/tags.ts").ApiTags, any, "api">;
    saveMenu: import("@reduxjs/toolkit/query").MutationDefinition<import("../../index.ts").IProduct, (args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
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
    editMenu: import("@reduxjs/toolkit/query").MutationDefinition<import("../../index.ts").IProduct, (args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
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
    }>, import("../../enums/tags.ts").ApiTags, {
        success: boolean;
    }, "api">;
}, import("../../enums/tags.ts").ApiTags, "api">, EntityId>;
export declare const createMenuSelectorsById: (id: EntityId) => import("@reduxjs/toolkit").EntitySelectors<import("../../index.ts").IProduct, import("@reduxjs/toolkit/query").RootState<{
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
    }>, import("../../enums/tags.ts").ApiTags, any, "api">;
    getMenuById: import("@reduxjs/toolkit/query").QueryDefinition<EntityId, (args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
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
    }>, import("../../enums/tags.ts").ApiTags, any, "api">;
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
    }>, import("../../enums/tags.ts").ApiTags, any, "api">;
    saveMenu: import("@reduxjs/toolkit/query").MutationDefinition<import("../../index.ts").IProduct, (args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
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
    editMenu: import("@reduxjs/toolkit/query").MutationDefinition<import("../../index.ts").IProduct, (args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
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
    }>, import("../../enums/tags.ts").ApiTags, {
        success: boolean;
    }, "api">;
}, import("../../enums/tags.ts").ApiTags, "api">, EntityId>;

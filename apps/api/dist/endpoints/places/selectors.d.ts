export declare const placesByOrganizationSelectors: import("@reduxjs/toolkit").EntitySelectors<import("../../index.ts").IPlace, import("@reduxjs/toolkit/query").RootState<{
    fetchPlaces: import("@reduxjs/toolkit/query").QueryDefinition<void, (args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
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
    fetchPlacesByOrganization: import("@reduxjs/toolkit/query").QueryDefinition<void, (args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
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
    savePlace: import("@reduxjs/toolkit/query").MutationDefinition<import("../../index.ts").IPlace, (args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
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
    editPlace: import("@reduxjs/toolkit/query").MutationDefinition<import("../../index.ts").IPlace, (args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
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
    deletePlace: import("@reduxjs/toolkit/query").MutationDefinition<import("@reduxjs/toolkit").EntityId, (args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
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
export declare const placesSelectors: import("@reduxjs/toolkit").EntitySelectors<import("../../index.ts").IPlace, import("@reduxjs/toolkit/query").RootState<{
    fetchPlaces: import("@reduxjs/toolkit/query").QueryDefinition<void, (args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
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
    fetchPlacesByOrganization: import("@reduxjs/toolkit/query").QueryDefinition<void, (args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
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
    savePlace: import("@reduxjs/toolkit/query").MutationDefinition<import("../../index.ts").IPlace, (args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
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
    editPlace: import("@reduxjs/toolkit/query").MutationDefinition<import("../../index.ts").IPlace, (args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
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
    deletePlace: import("@reduxjs/toolkit/query").MutationDefinition<import("@reduxjs/toolkit").EntityId, (args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
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

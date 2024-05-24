export declare const currentOrganizationSelector: import("@reduxjs/toolkit").EntitySelectors<import("../../index.ts").IOrganization, import("@reduxjs/toolkit/query").RootState<{
    getOrganisation: import("@reduxjs/toolkit/query").QueryDefinition<import("@reduxjs/toolkit").EntityId, (args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
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
    getCurrentOrganisation: import("@reduxjs/toolkit/query").QueryDefinition<void, (args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
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
    getOrganisations: import("@reduxjs/toolkit/query").QueryDefinition<void, (args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
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
    updateOrg: import("@reduxjs/toolkit/query").MutationDefinition<import("../../index.ts").IOrganization, (args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
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
export declare const organizationsSelectors: import("@reduxjs/toolkit").EntitySelectors<import("../../index.ts").IOrganization, import("@reduxjs/toolkit/query").RootState<{
    getOrganisation: import("@reduxjs/toolkit/query").QueryDefinition<import("@reduxjs/toolkit").EntityId, (args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
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
    getCurrentOrganisation: import("@reduxjs/toolkit/query").QueryDefinition<void, (args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
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
    getOrganisations: import("@reduxjs/toolkit/query").QueryDefinition<void, (args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
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
    updateOrg: import("@reduxjs/toolkit/query").MutationDefinition<import("../../index.ts").IOrganization, (args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
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

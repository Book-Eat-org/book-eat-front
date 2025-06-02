export declare const cashiersSelectors: import("@reduxjs/toolkit").EntitySelectors<import("../../index.ts").ICashier, import("@reduxjs/toolkit/query").RootState<{
    getCashiers: import("@reduxjs/toolkit/query").QueryDefinition<void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, import("../../enums/tags.ts").ApiTags, import("@reduxjs/toolkit").EntityState<import("../../index.ts").ICashier, import("@reduxjs/toolkit").EntityId>, "api">;
    createCashier: import("@reduxjs/toolkit/query").MutationDefinition<Omit<import("../../index.ts").ICashier, "id">[], import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, import("../../enums/tags.ts").ApiTags, {
        success: boolean;
    }, "api">;
    deleteCashiers: import("@reduxjs/toolkit/query").MutationDefinition<import("@reduxjs/toolkit").EntityId, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, import("../../enums/tags.ts").ApiTags, {
        success: boolean;
    }, "api">;
}, import("../../enums/tags.ts").ApiTags, "api">, import("@reduxjs/toolkit").EntityId>;

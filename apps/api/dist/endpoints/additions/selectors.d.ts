export declare const additionsSelectors: import("@reduxjs/toolkit").EntitySelectors<import("../..").IAddition, import("@reduxjs/toolkit/query").RootState<{
    fetchAdditions: import("@reduxjs/toolkit/query").QueryDefinition<void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, import("../../enums").ApiTags, import("@reduxjs/toolkit").EntityState<import("../..").IAddition, import("@reduxjs/toolkit").EntityId>, "api">;
    fetchAdditionsByIds: import("@reduxjs/toolkit/query").MutationDefinition<import("@reduxjs/toolkit").EntityId[], import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, import("../../enums").ApiTags, import("@reduxjs/toolkit").EntityState<import("../..").IAddition, import("@reduxjs/toolkit").EntityId>, "api">;
    saveAddition: import("@reduxjs/toolkit/query").MutationDefinition<import("../..").IAddition, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, import("../../enums").ApiTags, {
        success: boolean;
    }, "api">;
    editAddition: import("@reduxjs/toolkit/query").MutationDefinition<import("../..").IAddition, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, import("../../enums").ApiTags, {
        success: boolean;
    }, "api">;
    deleteAddition: import("@reduxjs/toolkit/query").MutationDefinition<import("@reduxjs/toolkit").EntityId, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, import("../../enums").ApiTags, {
        success: boolean;
    }, "api">;
}, import("../../enums").ApiTags, "api">, import("@reduxjs/toolkit").EntityId>;

import { EntityId } from "@reduxjs/toolkit";
export declare const menuSelectors: import("@reduxjs/toolkit").EntitySelectors<import("../../index.ts").IProduct, import("@reduxjs/toolkit/query").RootState<{
    getMenuByPlaceId: import("@reduxjs/toolkit/query").QueryDefinition<EntityId, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, import("../../enums/tags.ts").ApiTags, import("../../index.ts").TProductEntityState, "api">;
    getMenuById: import("@reduxjs/toolkit/query").QueryDefinition<EntityId, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, import("../../enums/tags.ts").ApiTags, import("../../index.ts").TProductEntityState, "api">;
    getMenuByPlaces: import("@reduxjs/toolkit/query").QueryDefinition<void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, import("../../enums/tags.ts").ApiTags, import("../../index.ts").TProductEntityState, "api">;
    getMenuByOrganization: import("@reduxjs/toolkit/query").QueryDefinition<void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, import("../../enums/tags.ts").ApiTags, import("../../index.ts").TProductEntityState, "api">;
    saveMenu: import("@reduxjs/toolkit/query").MutationDefinition<import("../../index.ts").IProduct, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, import("../../enums/tags.ts").ApiTags, {
        success: boolean;
    }, "api">;
    editMenu: import("@reduxjs/toolkit/query").MutationDefinition<import("../../index.ts").IProduct, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, import("../../enums/tags.ts").ApiTags, {
        success: boolean;
    }, "api">;
    deleteMenu: import("@reduxjs/toolkit/query").MutationDefinition<EntityId, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, import("../../enums/tags.ts").ApiTags, {
        success: boolean;
    }, "api">;
}, import("../../enums/tags.ts").ApiTags, "api">, EntityId>;
export declare const createMenuSelectorsByPlaceId: (id: EntityId) => import("@reduxjs/toolkit").EntitySelectors<import("../../index.ts").IProduct, import("@reduxjs/toolkit/query").RootState<{
    getMenuByPlaceId: import("@reduxjs/toolkit/query").QueryDefinition<EntityId, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, import("../../enums/tags.ts").ApiTags, import("../../index.ts").TProductEntityState, "api">;
    getMenuById: import("@reduxjs/toolkit/query").QueryDefinition<EntityId, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, import("../../enums/tags.ts").ApiTags, import("../../index.ts").TProductEntityState, "api">;
    getMenuByPlaces: import("@reduxjs/toolkit/query").QueryDefinition<void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, import("../../enums/tags.ts").ApiTags, import("../../index.ts").TProductEntityState, "api">;
    getMenuByOrganization: import("@reduxjs/toolkit/query").QueryDefinition<void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, import("../../enums/tags.ts").ApiTags, import("../../index.ts").TProductEntityState, "api">;
    saveMenu: import("@reduxjs/toolkit/query").MutationDefinition<import("../../index.ts").IProduct, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, import("../../enums/tags.ts").ApiTags, {
        success: boolean;
    }, "api">;
    editMenu: import("@reduxjs/toolkit/query").MutationDefinition<import("../../index.ts").IProduct, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, import("../../enums/tags.ts").ApiTags, {
        success: boolean;
    }, "api">;
    deleteMenu: import("@reduxjs/toolkit/query").MutationDefinition<EntityId, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, import("../../enums/tags.ts").ApiTags, {
        success: boolean;
    }, "api">;
}, import("../../enums/tags.ts").ApiTags, "api">, EntityId>;
export declare const createMenuSelectorsById: (id: EntityId) => import("@reduxjs/toolkit").EntitySelectors<import("../../index.ts").IProduct, import("@reduxjs/toolkit/query").RootState<{
    getMenuByPlaceId: import("@reduxjs/toolkit/query").QueryDefinition<EntityId, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, import("../../enums/tags.ts").ApiTags, import("../../index.ts").TProductEntityState, "api">;
    getMenuById: import("@reduxjs/toolkit/query").QueryDefinition<EntityId, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, import("../../enums/tags.ts").ApiTags, import("../../index.ts").TProductEntityState, "api">;
    getMenuByPlaces: import("@reduxjs/toolkit/query").QueryDefinition<void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, import("../../enums/tags.ts").ApiTags, import("../../index.ts").TProductEntityState, "api">;
    getMenuByOrganization: import("@reduxjs/toolkit/query").QueryDefinition<void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, import("../../enums/tags.ts").ApiTags, import("../../index.ts").TProductEntityState, "api">;
    saveMenu: import("@reduxjs/toolkit/query").MutationDefinition<import("../../index.ts").IProduct, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, import("../../enums/tags.ts").ApiTags, {
        success: boolean;
    }, "api">;
    editMenu: import("@reduxjs/toolkit/query").MutationDefinition<import("../../index.ts").IProduct, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, import("../../enums/tags.ts").ApiTags, {
        success: boolean;
    }, "api">;
    deleteMenu: import("@reduxjs/toolkit/query").MutationDefinition<EntityId, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, import("../../enums/tags.ts").ApiTags, {
        success: boolean;
    }, "api">;
}, import("../../enums/tags.ts").ApiTags, "api">, EntityId>;

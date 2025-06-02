export declare const placesByOrganizationSelectors: import("@reduxjs/toolkit").EntitySelectors<import("../../index.ts").IPlace, import("@reduxjs/toolkit/query").RootState<{
    fetchPlaces: import("@reduxjs/toolkit/query").QueryDefinition<void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, import("../../enums/tags.ts").ApiTags, import("@reduxjs/toolkit").EntityState<import("../../index.ts").IPlace, import("@reduxjs/toolkit").EntityId>, "api">;
    fetchPlacesByOrganization: import("@reduxjs/toolkit/query").QueryDefinition<void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, import("../../enums/tags.ts").ApiTags, import("@reduxjs/toolkit").EntityState<import("../../index.ts").IPlace, import("@reduxjs/toolkit").EntityId>, "api">;
    savePlace: import("@reduxjs/toolkit/query").MutationDefinition<import("../../index.ts").IPlace, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, import("../../enums/tags.ts").ApiTags, {
        success: boolean;
    }, "api">;
    editPlace: import("@reduxjs/toolkit/query").MutationDefinition<import("../../index.ts").IPlace, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, import("../../enums/tags.ts").ApiTags, {
        success: boolean;
    }, "api">;
    deletePlace: import("@reduxjs/toolkit/query").MutationDefinition<import("@reduxjs/toolkit").EntityId, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, import("../../enums/tags.ts").ApiTags, {
        success: boolean;
    }, "api">;
}, import("../../enums/tags.ts").ApiTags, "api">, import("@reduxjs/toolkit").EntityId>;
export declare const placesSelectors: import("@reduxjs/toolkit").EntitySelectors<import("../../index.ts").IPlace, import("@reduxjs/toolkit/query").RootState<{
    fetchPlaces: import("@reduxjs/toolkit/query").QueryDefinition<void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, import("../../enums/tags.ts").ApiTags, import("@reduxjs/toolkit").EntityState<import("../../index.ts").IPlace, import("@reduxjs/toolkit").EntityId>, "api">;
    fetchPlacesByOrganization: import("@reduxjs/toolkit/query").QueryDefinition<void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, import("../../enums/tags.ts").ApiTags, import("@reduxjs/toolkit").EntityState<import("../../index.ts").IPlace, import("@reduxjs/toolkit").EntityId>, "api">;
    savePlace: import("@reduxjs/toolkit/query").MutationDefinition<import("../../index.ts").IPlace, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, import("../../enums/tags.ts").ApiTags, {
        success: boolean;
    }, "api">;
    editPlace: import("@reduxjs/toolkit/query").MutationDefinition<import("../../index.ts").IPlace, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, import("../../enums/tags.ts").ApiTags, {
        success: boolean;
    }, "api">;
    deletePlace: import("@reduxjs/toolkit/query").MutationDefinition<import("@reduxjs/toolkit").EntityId, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, import("../../enums/tags.ts").ApiTags, {
        success: boolean;
    }, "api">;
}, import("../../enums/tags.ts").ApiTags, "api">, import("@reduxjs/toolkit").EntityId>;

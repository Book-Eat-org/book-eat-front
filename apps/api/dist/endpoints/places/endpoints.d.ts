import { EntityId, EntityState } from "@reduxjs/toolkit";
import { ApiTags } from '../../enums';
import { IPlace } from '../../models';
export declare const placesEndpoints: import("@reduxjs/toolkit/query").Api<import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, {
    fetchPlaces: import("@reduxjs/toolkit/query").QueryDefinition<void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, ApiTags, EntityState<IPlace, EntityId>, "api">;
    fetchPlacesByOrganization: import("@reduxjs/toolkit/query").QueryDefinition<void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, ApiTags, EntityState<IPlace, EntityId>, "api">;
    savePlace: import("@reduxjs/toolkit/query").MutationDefinition<IPlace, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, ApiTags, {
        success: boolean;
    }, "api">;
    editPlace: import("@reduxjs/toolkit/query").MutationDefinition<IPlace, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, ApiTags, {
        success: boolean;
    }, "api">;
    deletePlace: import("@reduxjs/toolkit/query").MutationDefinition<EntityId, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, ApiTags, {
        success: boolean;
    }, "api">;
}, "api", ApiTags, typeof import("@reduxjs/toolkit/query").coreModuleName | typeof import("@reduxjs/toolkit/query/react").reactHooksModuleName>;

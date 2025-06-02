import { ApiTags } from '../../enums';
import { EntityId, EntityState } from "@reduxjs/toolkit";
import { IAddition } from '../../models';
export declare const additionsEndpoints: import("@reduxjs/toolkit/query").Api<import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, {
    fetchAdditions: import("@reduxjs/toolkit/query").QueryDefinition<void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, ApiTags, EntityState<IAddition, EntityId>, "api">;
    fetchAdditionsByIds: import("@reduxjs/toolkit/query").MutationDefinition<EntityId[], import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, ApiTags, EntityState<IAddition, EntityId>, "api">;
    saveAddition: import("@reduxjs/toolkit/query").MutationDefinition<IAddition, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, ApiTags, {
        success: boolean;
    }, "api">;
    editAddition: import("@reduxjs/toolkit/query").MutationDefinition<IAddition, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, ApiTags, {
        success: boolean;
    }, "api">;
    deleteAddition: import("@reduxjs/toolkit/query").MutationDefinition<EntityId, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, ApiTags, {
        success: boolean;
    }, "api">;
}, "api", ApiTags, typeof import("@reduxjs/toolkit/query").coreModuleName | typeof import("@reduxjs/toolkit/query/react").reactHooksModuleName>;

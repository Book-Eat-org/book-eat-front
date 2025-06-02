import { EntityId, EntityState } from "@reduxjs/toolkit";
import { ApiTags } from '../../enums';
import { ICashier } from '../../models';
export declare const cashiersEndpoints: import("@reduxjs/toolkit/query").Api<import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, {
    getCashiers: import("@reduxjs/toolkit/query").QueryDefinition<void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, ApiTags, EntityState<ICashier, EntityId>, "api">;
    createCashier: import("@reduxjs/toolkit/query").MutationDefinition<Omit<ICashier, "id">[], import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, ApiTags, {
        success: boolean;
    }, "api">;
    deleteCashiers: import("@reduxjs/toolkit/query").MutationDefinition<EntityId, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, ApiTags, {
        success: boolean;
    }, "api">;
}, "api", ApiTags, typeof import("@reduxjs/toolkit/query").coreModuleName | typeof import("@reduxjs/toolkit/query/react").reactHooksModuleName>;

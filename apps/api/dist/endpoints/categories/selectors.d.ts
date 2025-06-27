export declare const categoriesSelectors: import("@reduxjs/toolkit").EntitySelectors<import("../..").ICategory, import("@reduxjs/toolkit/query").RootState<{
    fetchCategories: import("@reduxjs/toolkit/query").QueryDefinition<void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, import("../../enums").ApiTags, import("@reduxjs/toolkit").EntityState<import("../..").ICategory, import("@reduxjs/toolkit").EntityId>, "api">;
    updateCategory: import("@reduxjs/toolkit/query").MutationDefinition<Partial<import("../..").ICategory>, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, import("../../enums").ApiTags, import("../..").IResponse, "api">;
    createCategory: import("@reduxjs/toolkit/query").MutationDefinition<Partial<import("../..").ICategory>, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, import("../../enums").ApiTags, import("../..").IResponse, "api">;
    deleteCategory: import("@reduxjs/toolkit/query").MutationDefinition<import("@reduxjs/toolkit").EntityId, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, import("../../enums").ApiTags, {
        success: boolean;
    }, "api">;
    loadCategoriesList: import("@reduxjs/toolkit/query").QueryDefinition<import("@reduxjs/toolkit").EntityId, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, import("../../enums").ApiTags, import("../..").ICategory[], "api">;
    setPriorities: import("@reduxjs/toolkit/query").MutationDefinition<import("@reduxjs/toolkit").EntityId[], import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, import("../../enums").ApiTags, {
        success: boolean;
    }, "api">;
}, import("../../enums").ApiTags, "api">, import("@reduxjs/toolkit").EntityId>;

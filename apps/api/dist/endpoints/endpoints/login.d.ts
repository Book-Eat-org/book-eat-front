export interface ILoginRequest {
    username: string;
    password: string;
}
export declare const loginApi: import("@reduxjs/toolkit/query").Api<(args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
    error: {
        code: string;
    };
    data?: undefined;
} | {
    data: {
        code: string;
    };
    error?: undefined;
}>, {
    login: import("@reduxjs/toolkit/query").MutationDefinition<ILoginRequest, (args: string | import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: {}) => Promise<{
        error: {
            code: string;
        };
        data?: undefined;
    } | {
        data: {
            code: string;
        };
        error?: undefined;
    }>, import("../../enums").ApiTags, ILoginRequest, "api">;
}, "api", import("../../enums").ApiTags, typeof import("@reduxjs/toolkit/query").coreModuleName | typeof import("@reduxjs/toolkit/query/react").reactHooksModuleName>;

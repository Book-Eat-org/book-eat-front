import { BaseQueryApi, FetchArgs } from "@reduxjs/toolkit/query/react";
import { ApiTags } from '../enums';
export declare const api: import("@reduxjs/toolkit/query/react").Api<(args: string | FetchArgs, api: BaseQueryApi, extraOptions: NonNullable<unknown>) => Promise<{
    error: {
        code: string;
    };
    data?: undefined;
} | {
    data: {
        code: string;
    };
    error?: undefined;
}>, {}, "api", ApiTags, typeof import("@reduxjs/toolkit/query/react").coreModuleName | typeof import("@reduxjs/toolkit/query/react").reactHooksModuleName>;

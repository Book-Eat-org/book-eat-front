import { api } from "$api";
import { ApiTags } from "$enums";

export interface ILoginRequest {
  username: string;
  password: string;
}

export const loginApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<ILoginRequest, ILoginRequest>({
      query: (body) => {
        return {
          url: "/v1/auth/login",
          method: "POST",
          body,
        };
      },
      invalidatesTags: [ApiTags.Organizations],
    }),
    logout: build.mutation<void, void>({
      query: () => {
        return {
          url: "/v1/auth/logout",
          method: "POST",
        };
      },
    }),
  }),
});

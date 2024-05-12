import { api } from "$api";

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
    }),
  }),
});

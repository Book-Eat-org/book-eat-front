import { api } from "$api";

export interface ILoginRequest {
  username: string;
  password: string;
}

export interface ICheckAuthResponse {
  id: null | string;
  companyId: null | string;
  placeId: null | string;
  avatarUrl: null | string;
  name: "anonymousUser" | string;
  isPro: boolean;
  isAuthenticated: boolean;
}

export const loginApi = api.injectEndpoints({
  endpoints: (build) => ({
    checkAuth: build.query<ICheckAuthResponse, void>({
      query: () => "/v1/auth/login",
    }),
    login: build.mutation<ICheckAuthResponse, ILoginRequest>({
      query: ({ username, password }) => {
        const headers = new Headers();

        headers.set(
          "Authorization",
          "Basic " + btoa(username + ":" + password),
        );

        return {
          url: "/v1/auth/login",
          method: "POST",
          headers,
        };
      },
    }),
  }),
});

import { api } from "$api";
import { ApiTags } from "$enums";
import { IOrganization } from "$models";
import { organizationsAdapter } from "./adapter.ts";
import { EntityState } from "@reduxjs/toolkit";

export const organizationsEndpoints = api.injectEndpoints({
  endpoints: (build) => ({
    getOrganisation: build.query<EntityState<IOrganization>, void>({
      query: () => ({
        url: "/v1/organizations",
      }),
      transformResponse: (res: IOrganization[]) =>
        organizationsAdapter.setMany(
          organizationsAdapter.getInitialState(),
          res,
        ),
      providesTags: [ApiTags.Organizations],
    }),
    updateOrg: build.mutation<{ success: boolean }, IOrganization>({
      query: (data) => {
        return {
          url: "/v1/organizations/info-legal",
          method: "PUT",
          body: data,
          formData: true,
        };
      },
    }),
  }),
});

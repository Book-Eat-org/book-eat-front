import { api } from "$api";
import { ApiTags } from "$enums";
import { organizationsAdapter } from "./adapter.ts";
import { EntityId, EntityState } from "@reduxjs/toolkit";
import { IOrganization } from "@book-eat/api";

export const organizationsEndpoints = api.injectEndpoints({
  endpoints: (build) => ({
    getOrganisation: build.query<EntityState<IOrganization>, EntityId>({
      query: (id) => ({
        url: `v1/organizations/${id}`,
      }),
      transformResponse: (res: IOrganization) =>
        organizationsAdapter.setOne(
          organizationsAdapter.getInitialState(),
          res,
        ),
      providesTags: [ApiTags.Organizations],
    }),
    getCurrentOrganisation: build.query<EntityState<IOrganization>, void>({
      query: () => ({
        url: `v1/organizations/current`,
      }),
      transformResponse: (res: IOrganization) =>
        organizationsAdapter.setOne(
          organizationsAdapter.getInitialState(),
          res,
        ),
      providesTags: [ApiTags.Organizations],
    }),
    getOrganisations: build.query<EntityState<IOrganization>, void>({
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
          url: `/v1/organizations/${data.id}`,
          method: "PUT",
          body: data,
          formData: true,
        };
      },
      transformResponse: (res: IOrganization) =>
        organizationsAdapter.updateOne(
          organizationsAdapter.getInitialState(),
          res,
        ),
      invalidatesTags: [ApiTags.Organizations],
    }),
  }),
});

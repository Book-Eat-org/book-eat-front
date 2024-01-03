import { api } from "$api";
import { ApiTags } from "$enums";
import { IOrganization } from "$models";
import { organizationsAdapter } from "./adapter.ts";
import { EntityState } from "@reduxjs/toolkit";

export const organizationsEndpoints = api.injectEndpoints({
  endpoints: (build) => ({
    getOrganisation: build.query<EntityState<IOrganization>, void>({
      query: () => ({
        url: "/v1/organizations/info-legal",
      }),
      transformResponse: (res: IOrganization) =>
        organizationsAdapter.setOne(
          organizationsAdapter.getInitialState(),
          res,
        ),
      providesTags: [ApiTags.Organizations],
    }),
    updateOrg: build.mutation<
      { success: boolean },
      { files: File[]; infoLegal: { title: string } }
    >({
      query: ({ files, infoLegal }) => {
        const data = new FormData();

        console.log(infoLegal);

        const blob = new Blob([JSON.stringify(infoLegal)], {
          type: "application/json;charset=utf-8",
        });
        files.forEach((file) => data.append("files", file));
        data.append("info_legal", blob);

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

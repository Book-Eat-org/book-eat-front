import { ApiTags } from "$enums";
import { api } from "../api";
import { additionsAdapters } from "./adapter";
import { EntityId, EntityState } from "@reduxjs/toolkit";
import { IAddition } from "$models";

export const additionsEndpoints = api.injectEndpoints({
  endpoints: (build) => ({
    fetchAdditions: build.query<EntityState<IAddition>, void>({
      query: () => "/v1/additions/organization?activeOnly=false",
      providesTags: [ApiTags.Additions],
      transformResponse: (res: IAddition[]) =>
        additionsAdapters.setAll(additionsAdapters.getInitialState(), res),
    }),
    saveAddition: build.mutation<{ success: boolean }, IAddition>({
      query: (additions) => ({
        url: "/v1/additions",
        method: "POST",
        body: additions,
      }),
      invalidatesTags: [ApiTags.Additions],
    }),
    editAddition: build.mutation<{ success: boolean }, IAddition>({
      query: (data) => ({
        url: `/v1/additions/${data.id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: [ApiTags.Additions],
    }),
    deleteAddition: build.mutation<{ success: boolean }, EntityId>({
      query: (additionId) => ({
        url: `/v1/additions/${additionId}`,
        method: "DELETE",
      }),
      invalidatesTags: [ApiTags.Additions],
    }),
  }),
});

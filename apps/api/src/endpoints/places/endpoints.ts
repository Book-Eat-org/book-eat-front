import { EntityId, EntityState } from "@reduxjs/toolkit";
import { ApiTags } from "$enums";
import { placesAdapter } from "./adapter.ts";
import { api } from "../api.ts";
import { IPlace } from "$models";

export const placesEndpoints = api.injectEndpoints({
  endpoints: (build) => ({
    fetchPlaces: build.query<EntityState<IPlace>, void>({
      query: () => ({
        url: "/v1/places",
      }),
      providesTags: [ApiTags.Places],
      transformResponse: (res: IPlace[]) =>
        placesAdapter.setAll(placesAdapter.getInitialState(), res),
    }),
    fetchPlacesByOrganization: build.query<EntityState<IPlace>, void>({
      query: () => ({
        url: "/v1/places/organization",
      }),
      providesTags: [ApiTags.Places],
      transformResponse: (res: IPlace[]) =>
        placesAdapter.setAll(placesAdapter.getInitialState(), res),
    }),
    savePlace: build.mutation<{ success: boolean }, IPlace>({
      query: (place) => ({
        url: "/v1/places",
        method: "POST",
        body: place,
      }),
      invalidatesTags: [ApiTags.Places],
    }),
    editPlace: build.mutation<{ success: boolean }, IPlace>({
      query: (place) => ({
        url: `/v1/places/${place.id}`,
        method: "PUT",
        body: place,
      }),
      invalidatesTags: [ApiTags.Places],
    }),
    deletePlace: build.mutation<{ success: boolean }, EntityId>({
      query: (placeId) => ({
        url: `/v1/places/${placeId}`,
        method: "DELETE",
      }),
      invalidatesTags: [ApiTags.Places],
    }),
  }),
});

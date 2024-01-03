import { api } from "$api";
import { EntityState } from "@reduxjs/toolkit";
import { ApiTags } from "$enums";
import { IPlace } from "$models";
import { placesAdapter } from "./adapter.ts";

interface IGetPlacesResponse {
  places: IPlace[];
}
export const placesEndpoints = api.injectEndpoints({
  endpoints: (build) => ({
    fetchPlaces: build.query<EntityState<IPlace>, void>({
      query: () => ({
        url: "/v1/organizations/places",
      }),
      providesTags: [ApiTags.Places],
      transformResponse: (res: IGetPlacesResponse) =>
        placesAdapter.setAll(placesAdapter.getInitialState(), res.places),
    }),
    savePlace: build.mutation<{ success: boolean }, IPlace>({
      query: (place) => ({
        url: "/v1/places",
        method: "POST",
        body: place,
      }),
      invalidatesTags: [ApiTags.Places],
    }),
    deletePlace: build.mutation<{ success: boolean }, number>({
      query: (placeId) => ({
        url: `/v1/places/${placeId}`,
        method: "DELETE",
      }),
      invalidatesTags: [ApiTags.Places],
    }),
  }),
});

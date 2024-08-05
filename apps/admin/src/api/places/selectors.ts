import { placesAdapter } from "./adapter.ts";
import { placesEndpoints } from "./endpoints.ts";
import { pipe } from "ramda";
import { EntityId } from "@reduxjs/toolkit";

const endpointsSelector = placesEndpoints.endpoints.fetchPlaces.select();

export const placesByOrganizationSelectorsFactory = (orgId: EntityId) =>
  placesAdapter.getSelectors(
    pipe(
      placesEndpoints.endpoints.fetchPlacesByOrganization.select(orgId),
      (a) => a.data ?? placesAdapter.getInitialState(),
    ),
  );

export const placesSelectors = placesAdapter.getSelectors(
  pipe(endpointsSelector, (a) => a.data ?? placesAdapter.getInitialState()),
);

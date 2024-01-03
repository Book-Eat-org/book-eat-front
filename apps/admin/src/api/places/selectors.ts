import { placesAdapter } from "./adapter.ts";
import { placesEndpoints } from "./endpoints.ts";
import { pipe } from "ramda";

const endpointsSelector = placesEndpoints.endpoints.fetchPlaces.select();

export const placesSelectors = placesAdapter.getSelectors(
  pipe(endpointsSelector, (a) => a.data ?? placesAdapter.getInitialState()),
);

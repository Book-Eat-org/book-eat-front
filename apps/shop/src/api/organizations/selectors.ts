import { organizationsAdapter } from "./adapter.ts";
import { organizationsEndpoints } from "./endpoints.ts";
import { pipe } from "ramda";

const endpointsSelector =
  organizationsEndpoints.endpoints.getOrganisation.select();

export const organizationsSelectors = organizationsAdapter.getSelectors(
  pipe(
    endpointsSelector,
    (a) => a.data ?? organizationsAdapter.getInitialState(),
  ),
);

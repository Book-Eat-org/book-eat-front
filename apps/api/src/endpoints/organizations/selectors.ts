import { organizationsAdapter } from "./adapter.ts";
import { organizationsEndpoints } from "./endpoints.ts";
import { pipe } from "ramda";

const endpointsSelector =
  organizationsEndpoints.endpoints.getOrganisations.select();

export const currentOrganizationSelector = organizationsAdapter.getSelectors(
  pipe(
    organizationsEndpoints.endpoints.getCurrentOrganisation.select(),
    (a) => a.data ?? organizationsAdapter.getInitialState(),
  ),
);

export const organizationsSelectors = organizationsAdapter.getSelectors(
  pipe(
    endpointsSelector,
    (a) => a.data ?? organizationsAdapter.getInitialState(),
  ),
);

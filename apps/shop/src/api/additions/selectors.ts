import { additionsAdapters } from "./adapter";
import { additionsEndpoints } from "./endpoints";
import { pipe } from "ramda";

const endpointsSelector = additionsEndpoints.endpoints.fetchAdditions.select();

export const additionsSelectors = additionsAdapters.getSelectors(
  pipe(endpointsSelector, (a) => {
    return a.data ?? additionsAdapters.getInitialState();
  }),
);

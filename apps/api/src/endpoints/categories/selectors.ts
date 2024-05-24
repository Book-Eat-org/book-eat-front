import { categoriesAdapters } from "./adapter";
import { categoriesEndpoints } from "./endpoints";
import { pipe } from "ramda";

const endpointsSelector =
  categoriesEndpoints.endpoints.fetchCategories.select();

export const categoriesSelectors = categoriesAdapters.getSelectors(
  pipe(
    endpointsSelector,
    (a) => a.data ?? categoriesAdapters.getInitialState(),
  ),
);

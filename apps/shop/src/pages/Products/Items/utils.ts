import { prop, sortBy } from "ramda";

export const sortCategories = sortBy(prop("priority"));

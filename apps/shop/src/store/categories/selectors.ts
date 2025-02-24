import { IRootState } from "../index.ts";

export const categoriesSelector = (store: IRootState) => store.categories;

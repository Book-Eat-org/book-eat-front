import { IRootState } from "../index.ts";

export const authorizedSelector = (store: IRootState) => store.authorized;

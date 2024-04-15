import { IRootState } from "../index.ts";

export const cartSelector = (store: IRootState) => store.cart;

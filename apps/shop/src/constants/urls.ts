import { EntityId } from "@reduxjs/toolkit";
import { generatePath } from "react-router-dom";

export enum PageURLS {
  ROOT = "ROOT",
  SHOPS = "SHOPS",
  PRODUCTS = "PRODUCTS",
}
export interface IPagesNavigatePayload {
  [PageURLS.SHOPS]: { id: EntityId };
  [PageURLS.PRODUCTS]: { id: EntityId };
}
export const PAGES: Record<PageURLS, unknown> = {
  [PageURLS.ROOT]: "/",
  [PageURLS.SHOPS]: "/organizations/:id/shops",
  [PageURLS.PRODUCTS]: "/products/:id",
};
export const navigateToPage = <T extends PageURLS>(
  page: T,
  options: IPagesNavigatePayload[T],
) => generatePath(PAGES[page], options);

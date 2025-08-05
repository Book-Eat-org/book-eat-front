import { EntityId } from "@reduxjs/toolkit";
import { generatePath } from "react-router-dom";

export enum PageURLS {
  ROOT = "ROOT",
  AGREEMENT = "AGREEMENT",
  PERSONAL_CONSENT = "PERSONAL_CONSENT",
  SHOPS = "SHOPS",
  PRODUCTS = "PRODUCTS",
  PRODUCTS_CARD = "PRODUCTS_CARD",
  CART = "CART",
  ORDERS_DETAIL = "ORDERS_DETAIL",
  ORDERS_CREATE = "ORDERS_CREATE",
  ORGANIZATION_LEGAL_INFO = "ORGANIZATION_LEGAL_INFO",
}
export interface IPagesNavigatePayload {
  [PageURLS.SHOPS]: { id: EntityId };
  [PageURLS.PRODUCTS]: { id: EntityId };
  [PageURLS.PRODUCTS_CARD]: { id: EntityId };
  [PageURLS.ORGANIZATION_LEGAL_INFO]: { id: EntityId };
  [PageURLS.ORDERS_DETAIL]: { id: EntityId };
  [PageURLS.CART]: { id: EntityId };
}
export const PAGES: Record<PageURLS, unknown> = {
  [PageURLS.ROOT]: "/",
  [PageURLS.AGREEMENT]: "/agreement",
  [PageURLS.PERSONAL_CONSENT]: "/personal-consent",
  [PageURLS.SHOPS]: "/organizations/:id/shops",
  [PageURLS.PRODUCTS]: "/products/:id",
  [PageURLS.PRODUCTS_CARD]: "/products/detail/:id",
  [PageURLS.CART]: "/cart/:id",
  [PageURLS.ORDERS_CREATE]: "/orders/create",
  [PageURLS.ORDERS_DETAIL]: "/orders/:id",
  [PageURLS.ORGANIZATION_LEGAL_INFO]: "/legal-info/:id",
};
export const navigateToPage = <T extends PageURLS>(
  page: T,
  options: IPagesNavigatePayload[T],
) => generatePath(PAGES[page], options);

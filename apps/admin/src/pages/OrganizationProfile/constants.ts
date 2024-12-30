import Shops from "./Shops";
import Organization from "./Organization";
import { PAGES, PageURLS } from "$constants";
import Promos from "./Promos";

export const ORGANIZATION_PROFILE_ROUTES = [
  {
    route: PAGES[PageURLS.Organization],
    title: "Загрузка информации",
    Component: Organization,
  },
  {
    title: "Мои заведения",
    Component: Shops,
    route: PAGES[PageURLS.SHOPS],
  },

  {
    title: "Промокоды",
    Component: Promos,
    route: PAGES[PageURLS.PROMOS],
  },
];

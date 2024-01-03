import Shops from "./Shops";
import Organization from "./Organization";
import { PAGE_URLS } from "$constants";

export const ORGANIZATION_PROFILE_ROUTES = [
  {
    title: "Мои заведения",
    Component: Shops,
    route: PAGE_URLS.MY_SHOPS,
  },
  {
    route: PAGE_URLS.ORGANIZATION,
    title: "Загрузка информации",
    Component: Organization,
  },
];

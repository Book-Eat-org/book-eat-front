import Additions from "./Additions";
import Items from "./Items";
import Groups from "./Groups";
import { PAGE_URLS } from "$constants";

export const MENU_ROUTE_CONFIG = [
  {
    title: "Добавки",
    Component: Additions,
    route: PAGE_URLS.MENU_ADDITIONS,
  },
  {
    title: "Меню",
    Component: Items,
    route: PAGE_URLS.MENU_MENU,
  },
  {
    route: PAGE_URLS.MENU_CATEGORIES,
    title: "Категории",
    Component: Groups,
  },
];

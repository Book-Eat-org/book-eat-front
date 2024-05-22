import Additions from "./Additions";
import Items from "./Items";
import Groups from "./Groups";
import { PAGES, PageURLS } from "$constants";

export const MENU_ROUTE_CONFIG = [
  {
    title: "Добавки",
    Component: Additions,
    route: PAGES[PageURLS.Additions],
  },
  {
    title: "Меню",
    Component: Items,
    route: PAGES[PageURLS.MenuList],
  },
  {
    route: PAGES[PageURLS.Categories],
    title: "Категории",
    Component: Groups,
  },
];

import { concat } from "ramda";

const ROOT_URL = "/admin";

const CONNECT = concat(ROOT_URL, "/connect");
const ORDERS = concat(ROOT_URL, "/orders");
const LOGIN = concat(ROOT_URL, "/login");

const SHOPS = concat(ROOT_URL, "/my");

const ORGANIZATION = concat(SHOPS, "/organization");
const MY_SHOPS = concat(SHOPS, "/shops");

const MENU = concat(ROOT_URL, "/menu");

const MENU_MENU = concat(MENU, "/items");
const MENU_ADDITIONS = concat(MENU, "/additions");
const MENU_CATEGORIES = concat(MENU, "/categories");

const MAIN = CONNECT;

export const PAGE_URLS = {
  CONNECT,
  MENU,
  ORDERS,
  SHOPS,
  ORGANIZATION,
  LOGIN,
  MY_SHOPS,
  MAIN,
  MENU_MENU,
  MENU_ADDITIONS,
  MENU_CATEGORIES,
};

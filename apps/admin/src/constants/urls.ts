import { EntityId } from "@reduxjs/toolkit";
import { generatePath } from "react-router-dom";

export enum PageURLS {
  ROOT = "ROOT",
  SHOPS = "SHOPS",
  ShopsCreate = "ShopsCreate",
  ShopsEdit = "ShopsEdit",
  Users = "Users",
  UsersCreate = "UsersCreate",
  UsersEdit = "UsersEdit",
  Additions = "Additions",
  AdditionsCreate = "AdditionsCreate",
  AdditionsEdit = "AdditionsEdit",
  Categories = "Categories",
  CategoriesCreate = "CategoriesCreate",
  CategoriesEdit = "CategoriesEdit",
  Orders = "Orders",
  OrdersEdit = "OrdersEdit",
  Menu = "Menu",
  MenuList = "MenuList",
  MenuListCreate = "MenuListCreate",
  MenuListEdit = "MenuListEdit",
  Profile = "Profile",
  Organization = "Organization",
  Login = "Login",
}
export interface IPagesNavigatePayload {
  [PageURLS.ShopsEdit]: { id: EntityId };
  [PageURLS.UsersEdit]: { id: EntityId };
  [PageURLS.OrdersEdit]: { id: EntityId };
}
export const PAGES: Record<PageURLS, string> = {
  [PageURLS.ROOT]: "/",
  [PageURLS.SHOPS]: "shops",
  [PageURLS.Login]: "login",
  [PageURLS.Users]: "/users",
  [PageURLS.UsersCreate]: "create",
  [PageURLS.UsersEdit]: "users/:id",
  [PageURLS.ShopsCreate]: "/profile/shops/create",
  [PageURLS.ShopsEdit]: "/profile/shops/:id",
  [PageURLS.Additions]: "/menu/additions",
  [PageURLS.AdditionsCreate]: "/menu/additions/create",
  [PageURLS.AdditionsEdit]: "/menu/additions/:id",
  [PageURLS.Categories]: "/menu/categories",
  [PageURLS.CategoriesCreate]: "/menu/categories/create",
  [PageURLS.CategoriesEdit]: "/menu/categories/:id",
  [PageURLS.Orders]: "orders",
  [PageURLS.OrdersEdit]: "/orders/:id",
  [PageURLS.Menu]: "menu",
  [PageURLS.Profile]: "profile",
  [PageURLS.Organization]: "organization",
  [PageURLS.MenuList]: "/menu/list",
  [PageURLS.MenuListCreate]: "/menu/list/create",
  [PageURLS.MenuListEdit]: "/menu/list/:id",
};
export const navigateToPage = <T extends PageURLS>(
  page: T,
  options: IPagesNavigatePayload[T],
) => generatePath(PAGES[page], options);

import classNames from "classnames";
import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

import classes from "./Nav.module.css";
import {
  ConnectIcon24,
  Grid,
  HomeIcon24,
  MenuIcon24,
  OrdersIcon24,
} from "@book-eat/ui";
import { PAGES, PageURLS } from "$constants";

const items = [
  {
    title: "Кассиры",
    to: PAGES[PageURLS.Users],
    Icon: ConnectIcon24,
  },
  { title: "Заказы", to: PAGES[PageURLS.Orders], Icon: OrdersIcon24 },

  { title: "Меню", to: PAGES[PageURLS.Menu], Icon: MenuIcon24 },
  {
    title: "Профиль",
    to: PAGES[PageURLS.Profile],
    Icon: HomeIcon24,
  },
];

const Nav: FC = () => {
  const { pathname } = useLocation();

  return (
    <Grid
      className={classes.wrapper}
      height={75}
      backgroundColor="white"
      gap={3}
      p={3}
      gridTemplateColumns="1fr 1fr 1fr 1fr"
    >
      {items.map(({ title, Icon, to }) => (
        <Link key={title} to={to}>
          <div
            className={classNames(classes.navItem, {
              [classes.active]: pathname.includes(to),
            })}
          >
            <Icon />
            <span className={classes.navItemText} key={title}>
              {title}
            </span>
          </div>
        </Link>
      ))}
    </Grid>
  );
};

export default Nav;

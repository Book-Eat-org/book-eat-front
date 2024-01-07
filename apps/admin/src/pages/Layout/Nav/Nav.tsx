import classNames from "classnames";
import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

import classes from "./Nav.module.css";
import { PAGE_URLS } from "$constants";
import {
  ConnectIcon,
  Flex,
  Grid,
  MenuIcon,
  OrdersIcon,
  ShopsIcon,
} from "@book-eat/ui";

const items = [
  {
    title: "Подключить",
    to: PAGE_URLS.CONNECT,
    Icon: ConnectIcon,
  },
  { title: "Заказы", to: PAGE_URLS.ORDERS, Icon: OrdersIcon },

  { title: "Меню", to: PAGE_URLS.MENU, Icon: MenuIcon },
  {
    title: "Заведения",
    to: PAGE_URLS.SHOPS,
    Icon: ShopsIcon,
  },
];

const Nav: FC = () => {
  const { pathname } = useLocation();

  return (
    <Grid
      className={classes.wrapper}
      height={75}
      backgroundColor="grayLight"
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

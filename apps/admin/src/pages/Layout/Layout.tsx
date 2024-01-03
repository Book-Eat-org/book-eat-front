import { FC } from "react";

import Nav from "./Nav";

import classes from "./Layout.module.css";
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <Outlet />
      </div>
      <Nav />
    </div>
  );
};

export default Layout;

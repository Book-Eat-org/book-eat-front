import { FC } from "react";

import Nav from "./Nav";

import classes from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import { Flex } from "@book-eat/ui";

const Layout: FC = () => {
  return (
    <Flex flexDirection="column" height="100%">
      <div className={classes.content}>
        <Outlet />
      </div>
      <Nav />
    </Flex>
  );
};

export default Layout;

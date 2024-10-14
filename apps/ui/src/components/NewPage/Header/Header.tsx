import { FC, ReactNode } from "react";
import Title from "./Title";
import classes from "./Header.module.css";
import Top from "./Top";

interface IProps {
  children: ReactNode;
}

type TNestedComponents = { Title: typeof Title; Top: typeof Top };

const Header: FC<IProps> & TNestedComponents = (props) => {
  const { children } = props;

  return <div className={classes.wrapper}>{children}</div>;
};

Header.Title = Title;
Header.Top = Top;

export default Header;

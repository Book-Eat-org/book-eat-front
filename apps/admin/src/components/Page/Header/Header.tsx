import { FC, ReactNode } from "react";
import Title from "./Title";
import classes from "./Header.module.css";
import Buttons from "./Buttons";

interface IProps {
  children: ReactNode;
}

type TNestedComponents = { Title: typeof Title; Buttons: typeof Buttons };

const Header: FC<IProps> & TNestedComponents = (props) => {
  const { children } = props;

  return <div className={classes.wrapper}>{children}</div>;
};

Header.Title = Title;
Header.Buttons = Buttons;

export default Header;

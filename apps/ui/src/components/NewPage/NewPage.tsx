import { FC, ReactNode } from "react";
import Header from "./Header";
import Body from "./Body";
import classes from "./NewPage.module.css";

interface IProps {
  children: ReactNode;
}

type TNestedComponents = { Body: typeof Body; Header: typeof Header };

const NewPage: FC<IProps> & TNestedComponents = (props) => {
  const { children } = props;

  return <div className={classes.wrapper}>{children}</div>;
};

NewPage.Header = Header;
NewPage.Body = Body;

export default NewPage;

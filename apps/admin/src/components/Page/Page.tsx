import { FC, ReactNode } from "react";
import Header from "./Header";
import Body from "./Body";
import classes from "./Page.module.css";

interface IProps {
  children: ReactNode;
}

type TNestedComponents = { Header: typeof Header; Body: typeof Body };
const Page: FC<IProps> & TNestedComponents = (props) => {
  const { children } = props;

  return <div className={classes.wrapper}>{children}</div>;
};

Page.Header = Header;
Page.Body = Body;
export default Page;

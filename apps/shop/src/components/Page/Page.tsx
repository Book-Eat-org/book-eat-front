import { FC, ReactNode } from "react";
import classes from "./Page.module.css";

interface IProps {
  header?: ReactNode;
  children: ReactNode;
}
const Page: FC<IProps> = ({ children, header }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>{header}</div>
      <div className={classes.body}>{children}</div>
    </div>
  );
};

export default Page;

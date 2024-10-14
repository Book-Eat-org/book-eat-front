import { FC, ReactNode } from "react";
import classes from "./Central.module.css";

interface IProps {
  children: ReactNode;
}
const Central: FC<IProps> = ({ children }) => (
  <div className={classes.wrapper}>{children}</div>
);

export default Central;

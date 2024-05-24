import { FC, ReactNode } from "react";
import classes from "./Body.module.css";

interface IProps {
  children: ReactNode;
}
const Body: FC<IProps> = ({ children }) => (
  <div className={classes.wrapper}>{children}</div>
);

export default Body;

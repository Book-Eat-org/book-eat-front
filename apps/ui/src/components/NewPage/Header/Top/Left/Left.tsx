import { FC, ReactNode } from "react";
import classes from "./Left.module.css";

interface IProps {
  children: ReactNode;
}
const Left: FC<IProps> = ({ children }) => (
  <div className={classes.wrapper}>{children}</div>
);

export default Left;

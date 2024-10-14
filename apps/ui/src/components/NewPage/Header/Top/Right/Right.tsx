import { FC, ReactNode } from "react";
import classes from "./Right.module.css";

interface IProps {
  children: ReactNode;
}
const Right: FC<IProps> = ({ children }) => (
  <div className={classes.wrapper}>{children}</div>
);

export default Right;

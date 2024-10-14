import { FC, ReactNode } from "react";
import classes from "./Title.module.css";

interface IProps {
  children: ReactNode;
}
const Title: FC<IProps> = ({ children }) => (
  <div className={classes.wrapper}>{children}</div>
);

export default Title;

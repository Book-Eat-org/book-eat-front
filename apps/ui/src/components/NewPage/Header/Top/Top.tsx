import { FC, ReactNode } from "react";
import Central from "./Central";
import Left from "./Left";
import Right from "./Right";
import classes from "./Top.module.css";

interface IProps {
  children: ReactNode;
}

type TNestedComponents = {
  Right: typeof Right;
  Left: typeof Left;
  Central: typeof Central;
};

const Top: FC<IProps> & TNestedComponents = (props) => {
  const { children } = props;

  return <div className={classes.wrapper}>{children}</div>;
};

Top.Right = Right;
Top.Left = Left;
Top.Central = Central;

export default Top;

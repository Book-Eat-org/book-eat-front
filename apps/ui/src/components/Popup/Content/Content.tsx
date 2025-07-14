import { FC } from "react";
import styles from "./Content.module.css";
import Grid from "../../Grid";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

const Content: FC<IProps> = (props) => {
  const {
    children,
    className = ""
  } = props;

  return (
    <div
      className={`${styles.wrapper} ${className}`}
      onClick={(e) => e.stopPropagation()}
    >
      <Grid gap={8}>
        {children}
      </Grid>
    </div>
  );
};

export default Content;

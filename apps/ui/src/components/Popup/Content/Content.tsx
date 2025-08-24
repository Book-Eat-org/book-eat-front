import { FC } from "react";
import styles from "./Content.module.css";
import Grid from "../../Grid";

interface IProps {
  children: React.ReactNode;
  mode?: 'popup' | 'modal';
  isOpen?: boolean;
}

const Content: FC<IProps> = (props) => {
  const {
    children,
    mode = 'popup',
    isOpen = false
  } = props;

  const baseClass = mode === 'modal' 
    ? `${styles.wrapper} ${styles['wrapper--modal']}`
    : styles.wrapper;

  const openClass = isOpen ? styles['wrapper--open'] : '';

  return (
    <div
      className={`${baseClass} ${openClass}`}
      onClick={(e) => e.stopPropagation()}
    >
      <Grid gap={8}>
        {children}
      </Grid>
    </div>
  );
};

export default Content;
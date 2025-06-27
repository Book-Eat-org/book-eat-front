import { FC, ReactNode } from "react";
import styles from "./Content.module.css";
import Header from "../Header";
import Footer from "../Footer";

interface IProps {
  title?: string;
  children: ReactNode;
  className?: string;
  onClose: () => void;
  footer?: boolean;
}

const Content: FC<IProps> = (props) => {
  const { 
    title,
    children, 
    onClose, 
    className = "" ,
    footer = true,
  } = props;

  return (
    <div
      className={`${styles.wrapper} ${className}`}
      onClick={(e) => e.stopPropagation()}
    >
      <Header onClose={onClose} title={title} />
      <div className={styles.content}>
        {children}
      </div>
      {footer && (
        <Footer onClose={onClose} />
      )}
    </div>
  );
};

export default Content;

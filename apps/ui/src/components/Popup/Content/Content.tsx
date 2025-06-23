import { FC } from "react";
import styles from "./Content.module.css";
import Header from "../Header";
import Footer from "../Footer";

interface IProps {
  children: React.ReactNode;
  title?:string;
  className?: string;
  onClose: () => void;
}

const Content: FC<IProps> = (props) => {
  const {
    title,
    children,
    onClose,
    className = ""
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
      <Footer onClose={onClose} />
    </div>
  );
};

export default Content;

import { FC } from "react";
import styles from "./Content.module.css";
import Header from "../Header";
import Footer from "../Footer";

interface IProps {
  children: React.ReactNode;
  className?: string;
  onClose: () => void;
}

const Content: FC<IProps> = (props) => {
  const { 
    children, 
    onClose, 
    className = "" 
  } = props;
  
  return (
    <div 
      className={`${styles.wrapper} ${className}`}
      onClick={(e) => e.stopPropagation()}
    >
      <Header onClose={onClose} />
      <div className={styles.content}>
        {children}
      </div>
      <Footer onClose={onClose} />
    </div>
  );
};

export default Content;

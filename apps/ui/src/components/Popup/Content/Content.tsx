import { FC } from "react";
import styles from "./Content.module.css";
import Header from "../Header";
import Footer from "../Footer";

interface IProps {
  children: React.ReactNode;
  className?: string;
  onClose: () => void;
  onAnimationEnd: () => void;
}

const Content: FC<IProps> = (props) => {
  const { 
    children, 
    onClose, 
    onAnimationEnd,
    className = "" 
  } = props;
  
  return (
    <div 
      className={`${styles.wrapper} ${className}`}
      onClick={(e) => e.stopPropagation()}
      onAnimationEnd={onAnimationEnd}
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

import { FC } from "react";
import styles from "./Overlay.module.css";

interface IProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const Overlay: FC<IProps> = (props) => {
  const { 
    onClick, 
    children, 
    className = ""
  } = props;

  return (
    <div 
      className={`${styles.overlay} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Overlay;

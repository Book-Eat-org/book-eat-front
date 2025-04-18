import { FC } from "react";
import styles from "./Overlay.module.css";

interface OverlayProps {
  onClick: () => void;
  children: React.ReactNode;
  disableOverlayClick?: boolean;
}

const Overlay: FC<OverlayProps> = ({ 
  onClick, 
  children, 
  disableOverlayClick 
}) => (
  <div 
    className={styles.overlay}
    onClick={!disableOverlayClick ? onClick : undefined}
  >
    {children}
  </div>
);

export default Overlay;

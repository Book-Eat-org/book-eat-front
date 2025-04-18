import { FC } from "react";
import Overlay from "./Overlay";
import Content from "./Content";
import { useAnimation } from "./hooks/useAnimation";
import styles from "./Popup.module.css";

interface IProps {
  isActive: boolean;
  onClose: () => void;
  children: React.ReactNode;
  disableOverlayClick?: boolean;
}

const Popup: FC<IProps> = (props) => {
  const { 
    isActive, 
    onClose, 
    children,
    disableOverlayClick = false
  } = props;

  const { isAnimating, isVisible, handleAnimationEnd } = useAnimation(isActive);

  if (!isAnimating && !isVisible) return null;

  return (
    <Overlay 
      onClick={onClose} 
      disableOverlayClick={disableOverlayClick}
    >
      <Content
        onClose={onClose}
        className={isAnimating ? styles.animateIn : styles.animateOut}
        onAnimationEnd={handleAnimationEnd}
      >
        {children}
      </Content>
    </Overlay>
  );
};

export default Popup;

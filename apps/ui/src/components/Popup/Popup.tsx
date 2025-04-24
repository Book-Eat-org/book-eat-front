import { FC } from 'react';
import Overlay from './Overlay';
import Content from './Content';
import { useAnimation } from './hooks/useAnimation';
import styles from './Popup.module.css';

interface IProps {
  isActive: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Popup: FC<IProps> = (props) => {
  const {
    isActive,
    onClose,
    children,
  } = props;

  const { shouldRender, isOpen } = useAnimation(isActive);

  if (!shouldRender) return null;

  return (
    <Overlay
      onClick={onClose}
      className={`${isOpen ? styles['overlay--visible'] : ''}`}
    >
      <Content
        onClose={onClose}
        className={`${styles['popup-wrapper']} 
          ${isOpen ? styles['popup-wrapper--open'] : ''}`}
      >
        {children}
      </Content>
    </Overlay>
  );
};

export default Popup;
import { FC } from 'react';
import { createPortal } from 'react-dom';
import { useAnimation } from './hooks/useAnimation';
import Overlay from './Overlay';
import Content from './Content';
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

  return createPortal(
    <Overlay
      onClick={onClose}
      className={`${isOpen ? styles['overlay--visible'] : ''}`}
    >
      <Content
        onClose={onClose}
        className={`${isOpen ? styles['popup-wrapper--open'] : ''}`}
      >
        {children}
      </Content>
    </Overlay>,
    document.body
  );
};

export default Popup;
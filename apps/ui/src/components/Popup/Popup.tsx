import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { useAnimation } from './hooks/useAnimation';
import Overlay from './Overlay';
import Content from './Content';
import styles from './Popup.module.css';

interface IProps {
  isActive: boolean;
  onClose: () => void;
  title?:string;
  children: ReactNode;
  footer?: boolean;
}

const Popup: FC<IProps> = (props) => {
  const {
    isActive,
    title,
    onClose,
    children,
    footer,
  } = props;

  const { shouldRender, isOpen } = useAnimation(isActive);

  if (!shouldRender) return null;

  return createPortal(
    <Overlay
      onClick={onClose}
      className={`${isOpen ? styles['overlay--visible'] : ''}`}
    >
      <Content
          title={title}
        onClose={onClose}
        footer={footer}
        className={`${isOpen ? styles['popup-wrapper--open'] : ''}`}
      >
        {children}
      </Content>
    </Overlay>,
    document.body
  );
};

export default Popup;

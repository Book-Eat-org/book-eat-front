import { FC } from 'react';
import { createPortal } from 'react-dom';
import { useAnimation } from './hooks/useAnimation';
import Overlay from './Overlay';
import Content from './Content';
import styles from './Popup.module.css';
import {extractSections} from "./utils.ts";
import Header from "./Header";
import Footer from "./Footer";
import {Title} from "./Title";
import {Message} from "./Message";

interface IProps {
  isActive: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  mode?: 'popup' | 'modal';
}

const Popup: FC<IProps> & { Title: typeof Title, Footer: typeof Footer, Message: typeof Message } = (props) => {
  const {
    isActive,
    onClose,
    children,
    mode = 'popup'
  } = props;

  const { shouldRender, isOpen } = useAnimation(isActive);

  if (!shouldRender) return null;

  const { Title, Message, Footer } = extractSections(children, {
    Message: Popup.Message,
    Footer: Popup.Footer,
    Title: Popup.Title,
  });

  return createPortal(
    <Overlay
      onClick={onClose}
      className={`${isOpen ? styles['overlay--visible'] : ''}`}
    >
      <Content
        mode={mode}
        isOpen={isOpen}
      >
        <Header onClose={onClose}>{Title && <div>{Title}</div>}</Header>
        {Message && <div>{Message}</div>}
        {Footer && <div>{Footer}</div>}
      </Content>
    </Overlay>,
    document.body
  );
};

Popup.Title = Title;
Popup.Footer = Footer;
Popup.Message = Message

export default Popup;

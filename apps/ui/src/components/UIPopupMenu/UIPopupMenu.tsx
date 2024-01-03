import { ReactNode, useRef } from "react";
import { FC } from "react";
import { createPortal } from "react-dom";
import { useClickOutside } from "$hooks";
import Header from "./Header";
import Content from "./Content";
import Overlay from "./Overlay/Overlay.tsx";
import Menu from "./Menu";

interface IProps {
  onClose: () => void;
  children: ReactNode;
}

const UIPopupMenu: FC<IProps> = (props) => {
  const { children, onClose } = props;

  const ref = useRef<HTMLDivElement | null>(null);

  useClickOutside(ref, onClose);

  return createPortal(
    <Overlay onClick={(e) => e.stopPropagation()}>
      <Menu ref={ref}>
        <Header onClose={onClose} />
        <Content>{children}</Content>
      </Menu>
    </Overlay>,
    document.body,
  );
};

export default UIPopupMenu;

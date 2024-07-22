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
  height?: number | string;
  withoutCurtain?: boolean;
}

const UIPopupMenu: FC<IProps> = (props) => {
  const { children, onClose, height, withoutCurtain } = props;

  const ref = useRef<HTMLDivElement | null>(null);

  useClickOutside(ref, onClose);

  return createPortal(
    <Overlay onClick={(e) => e.stopPropagation()}>
      <Menu ref={ref} height={height ?? "100%"}>
        <Header withoutCurtain={withoutCurtain} onClose={onClose} />
        <Content>{children}</Content>
      </Menu>
    </Overlay>,
    document.body,
  );
};

export default UIPopupMenu;

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
  header?: ReactNode;
  sticky?: boolean;
  background?: string;
  mode?: "product" | "default";
}

const UIPopupMenu: FC<IProps> = (props) => {
  const {
    children,
    onClose,
    sticky = false,
    background,
    header,
    mode = "default",
  } = props;

  const ref = useRef<HTMLDivElement | null>(null);

  useClickOutside(ref, onClose);

  return createPortal(
    <Overlay onClick={(e) => e.stopPropagation()}>
      <Menu ref={ref} background={background as string} mode={mode}>
        <Header onClose={onClose}>
          {header}
        </Header>
        <Content sticky={sticky} mode={mode}>{children}</Content>
      </Menu>
    </Overlay>,
    document.body,
  );
};

export default UIPopupMenu;

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
}

const UIPopupMenu: FC<IProps> = (props) => {
  const {
    children,
    onClose,
    height,
    withoutCurtain,
    sticky = false,
    background,
    header,
  } = props;

  const ref = useRef<HTMLDivElement | null>(null);

  useClickOutside(ref, onClose);

  return createPortal(
    <Overlay onClick={(e) => e.stopPropagation()}>
      <Menu ref={ref} height={height ?? "100%"} background={background}>
        <Header withoutCurtain={withoutCurtain} onClose={onClose}>
          {header}
        </Header>
        <Content sticky={sticky}>{children}</Content>
      </Menu>
    </Overlay>,
    document.body,
  );
};

export default UIPopupMenu;

import {
  FC,
  MutableRefObject,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { Overlay } from "./Overlay.tsx";
import { Item } from "./Item.tsx";
import { Empty } from "./Empty.tsx";
import { createPortal } from "react-dom";
import { height } from "styled-system";

interface IProps {
  overlay: ReactNode;
  children: ReactNode;
  opened?: boolean;
}

const Dropdown: FC<IProps> & { Item: typeof Item; Empty: typeof Empty } = (
  props,
) => {
  const { children, overlay, opened } = props;
  const [rect, setRect] = useState<DOMRect>();

  const ref: MutableRefObject<HTMLDivElement | null> = useRef(null);

  useEffect(() => {
    const a = ref.current?.getBoundingClientRect();
    console.log(a);
    setRect(a);
  }, [ref.current]);

  const {
    top = 0,
    height = 0,
    bottom = 0,
    right = 0,
    left = 0,
    width = 0,
  } = rect ?? {};

  return (
    <div ref={ref}>
      {children}
      {opened &&
        createPortal(
          <Overlay
            zIndex={9999}
            top={top + height}
            bottom={bottom - height}
            right={right}
            left={left}
            width={width}
            height="max-content"
            minHeight={100}
            maxHeight={300}
            position="absolute"
          >
            {overlay}
          </Overlay>,
          document.getElementById("dropdown")! ?? document.body,
        )}
    </div>
  );
};

Dropdown.Item = Item;
Dropdown.Empty = Empty;

export default Dropdown;

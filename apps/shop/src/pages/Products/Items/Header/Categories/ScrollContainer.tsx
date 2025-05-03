import { FC, ReactNode } from "react";
import { EntityId } from "@reduxjs/toolkit";
import { useScroll } from "./context";

interface IProps {
  id: EntityId;
  children: ReactNode;
}

const ScrollContainer: FC<IProps> = (props) => {
  const { id, children } = props;
  
  const { scrollToId } = useScroll();

  const handleClick = () => {
    scrollToId(String(id));
  };

  return (
    <div data-id={id} onClick={handleClick}>
      {children}
    </div>
  );
};

export default ScrollContainer;

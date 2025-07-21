import { ComponentProps, FC, MouseEventHandler, ReactNode } from "react";
import { useListNavigationContext } from "../context.ts";
import Box from "../../Box";

export interface IProps extends ComponentProps<typeof Box> {
  id: string;
  children: ReactNode;
}

const NavItem: FC<IProps> = (props) => {
  const { id, children, onClick, ...restProps } = props;
  const { refs, setCurrentId } = useListNavigationContext();

  const clickHandler: MouseEventHandler<HTMLDivElement> = (event) => {
    const element = refs[id];
    element?.scrollIntoView({ behavior: 'smooth' });
    setCurrentId?.(id);
    onClick?.(event);
  };

  return (
    <Box
      data-id={id}
      onClick={clickHandler}
      {...restProps}
    >
      {children}
    </Box>
  );
};

export default NavItem;

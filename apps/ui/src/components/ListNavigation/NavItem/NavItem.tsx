import { ComponentProps, FC, MouseEventHandler, ReactNode } from "react";
import { useListNavigationContext } from "../context.ts";
import Box from "../../Box";

interface IProps extends ComponentProps<typeof Box> {
  id: string;
  children: ReactNode;
}

const NavItem: FC<IProps> = (props) => {
  const { id, children, onClick, ...restProps } = props;
  const { refs } = useListNavigationContext();

  const clickHandler: MouseEventHandler<HTMLDivElement> = (event) => {
    const element = refs[id];
    element?.scrollIntoView();
    onClick?.(event);
  };

  return (
    <Box onClick={clickHandler} {...restProps}>
      {children}
    </Box>
  );
};

export default NavItem;

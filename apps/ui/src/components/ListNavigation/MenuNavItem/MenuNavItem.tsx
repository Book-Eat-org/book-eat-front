import { ComponentProps, FC } from "react";
import NavItem from "../NavItem";
import { useListNavigationContext } from "../context.ts";
import { Typography } from "$components";
import { theme } from "$theme";

interface IProps extends ComponentProps<typeof NavItem> {}

const MenuNavItem: FC<IProps> = (props) => {
  const { id } = props;
  const { currentId } = useListNavigationContext();

  const active = currentId === id;

  return (
    <NavItem
      {...props}
      backgroundColor={active ? theme.colors.general300 : undefined}
      borderRadius="20px"
      padding="10px"
    >
      <Typography
        size="14/14"
        color={active ? undefined : theme.colors.general700}
        fontWeight={500}
      >
        {props.children}
      </Typography>
    </NavItem>
  );
};

export default MenuNavItem;

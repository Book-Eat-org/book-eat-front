import { ComponentProps, FC } from "react";
import NavItem from "../NavItem";
import { useListNavigationContext } from "../context.ts";
import { UITypography } from "$components";

interface IProps extends ComponentProps<typeof NavItem> {}
const MenuNavItem: FC<IProps> = (props) => {
  const { id } = props;
  const { currentId } = useListNavigationContext();

  const active = currentId === id;

  return (
    <NavItem
      {...props}
      color={"#2C2C2C"}
      opacity={active ? 1 : 0.5}
      backgroundColor={active ? "#EBEBEB" : undefined}
      borderRadius="10px"
      padding="6px 12px"
    >
      <UITypography variant="textMd" weight="bold">
        {props.children}
      </UITypography>
    </NavItem>
  );
};

export default MenuNavItem;

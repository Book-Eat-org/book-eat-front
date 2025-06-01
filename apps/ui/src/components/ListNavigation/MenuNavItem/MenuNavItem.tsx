import { ComponentProps, FC, useEffect } from "react";
import NavItem from "../NavItem";
import { useListNavigationContext } from "../context.ts";
import { useNavScroll } from "../NavScrollProvider.tsx";
import { Typography } from "$components";
import { theme } from "$theme";

interface IProps extends ComponentProps<typeof NavItem> {
  autoscroll?: boolean;
}

const MenuNavItem: FC<IProps> = (props) => {
  const { id, autoscroll = false } = props;
  const { currentId, setCurrentId } = useListNavigationContext();
  const { scrollToId } = useNavScroll();

  const active = currentId === id;

  useEffect(() => {
    if (autoscroll && active) {
      scrollToId(id);
    }
  }, [autoscroll, active, id]);

  const handleClick = () => {
    setCurrentId?.(id);
  };

  return (
    <NavItem
      {...props}
      onClick={handleClick}
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
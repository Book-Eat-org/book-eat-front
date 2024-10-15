import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { menuEndpoints } from "$api";
import { EntityId } from "@reduxjs/toolkit";
import { Flex, Grid, Switch, theme } from "@book-eat/ui";
import { useNavigate } from "react-router-dom";
import { navigateToPage, PageURLS } from "$constants";
import { MenuListItemContext } from "./context.ts";
import { Image, Price, Title, Weight } from "./Fields";
import { productsSelectors } from "$store";

interface IProps {
  id: EntityId;
}

const Item: FC<IProps> = memo(({ id }) => {
  const navigate = useNavigate();
  const item = useSelector((state) => productsSelectors.selectById(state, id));

  if (!item) {
    return null;
  }

  const { isActiveOnOrganization } = item;

  const [saveMenu] = menuEndpoints.useEditMenuMutation();

  const toggleEnabled = (checked: boolean) =>
    saveMenu({ ...item, isActiveOnOrganization: checked });

  const onCLick = () => {
    navigate(navigateToPage(PageURLS.MenuListEdit, { id }));
  };

  return (
    <MenuListItemContext.Provider value={{ id }}>
      <Flex
        gap={4}
        padding="10px"
        backgroundColor={
          isActiveOnOrganization
            ? theme.colors.general50
            : theme.colors.general300
        }
        opacity={isActiveOnOrganization ? 1 : 0.5}
        borderRadius={15}
        onClick={onCLick}
      >
        <Image />
        <Flex justifyContent="space-between" width="100%">
          <Grid>
            <Grid>
              <Title />
              <Weight />
            </Grid>
            <Price />
          </Grid>
          <Flex alignItems="center">
            <Switch checked={isActiveOnOrganization} onChange={toggleEnabled} />
          </Flex>
        </Flex>
      </Flex>
    </MenuListItemContext.Provider>
  );
});

export default Item;

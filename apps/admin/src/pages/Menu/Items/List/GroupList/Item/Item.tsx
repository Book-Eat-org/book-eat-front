import { FC } from "react";
import { useSelector } from "react-redux";
import { menuEndpoints, menuSelectors } from "$api";
import { EntityId } from "@reduxjs/toolkit";
import {
  Flex,
  Grid,
  PhoneIcon20,
  Switch,
  theme,
  Typography,
} from "@book-eat/ui";
import { useNavigate } from "react-router-dom";
import { navigateToPage, PageURLS } from "$constants";

interface IProps {
  id: EntityId;
}

const Item: FC<IProps> = ({ id }) => {
  const navigate = useNavigate();
  const item = useSelector((state) => menuSelectors.selectById(state, id));

  if (!item) {
    return null;
  }

  const { mainImageUrl, title, weight = 0, price } = item;

  const isActiveOnOrganization = true;

  const [saveMenu] = menuEndpoints.useSaveMenuMutation();

  const toggleEnabled = (checked: boolean) =>
    saveMenu({ ...item, isActiveOnOrganization: checked });

  const onCLick = () => {
    navigate(navigateToPage(PageURLS.MenuListEdit, { id }));
  };

  return (
    <Flex
      gap={4}
      padding="10px"
      backgroundColor={
        isActiveOnOrganization ? theme.colors.general30 : theme.colors.general40
      }
      borderRadius={15}
      onClick={onCLick}
    >
      <img
        src={mainImageUrl}
        alt=""
        width={80}
        height={80}
        style={{ borderRadius: "15px" }}
      />
      <Flex justifyContent="space-between" width="100%">
        <Grid>
          <Grid>
            <Typography
              size="12/12"
              fontWeight={600}
              color={
                isActiveOnOrganization
                  ? theme.colors.general100
                  : theme.colors.general90
              }
            >
              {title}
            </Typography>
            <Typography
              size="12/12"
              color={
                isActiveOnOrganization
                  ? theme.colors.general90
                  : theme.colors.general80
              }
            >
              {weight ?? 0} г.
            </Typography>
          </Grid>
          <Flex alignItems="center" gap={1}>
            <Typography
              color={
                isActiveOnOrganization
                  ? theme.colors.general90
                  : theme.colors.general80
              }
              size="12/12"
            >
              {price} ₽
            </Typography>
          </Flex>
        </Grid>
        <Flex alignItems="center">
          <Switch checked={isActiveOnOrganization} onChange={toggleEnabled} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Item;

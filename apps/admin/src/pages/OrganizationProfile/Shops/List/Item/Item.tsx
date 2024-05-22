import { ChangeEvent, FC } from "react";

import {
  Flex,
  Grid,
  PhoneIcon20,
  Switch,
  theme,
  Typography,
} from "@book-eat/ui";

import { placesByOrganizationSelectors, placesEndpoints } from "$api";
import { useSelector } from "react-redux";
import { EntityId } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { navigateToPage, PageURLS } from "$constants";

interface IProps {
  id: EntityId;
}

const Item: FC<IProps> = (props) => {
  const { id } = props;
  const [fetchEditPlace] = placesEndpoints.endpoints.editPlace.useMutation();
  const navigate = useNavigate();

  const item = useSelector((state) =>
    placesByOrganizationSelectors.selectById(state, id),
  );

  if (!item) {
    return;
  }

  const onCLick = () => {
    navigate(navigateToPage(PageURLS.ShopsEdit, { id }));
  };

  const triggerEdit = (checked: boolean) => {
    fetchEditPlace({ ...item, isActive: checked });
  };

  const {
    logoUrl,
    title,
    info: { address, phone },
    isActive = true,
  } = item;

  return (
    <Flex
      gap={2}
      padding="10px"
      backgroundColor={
        isActive ? theme.colors.general30 : theme.colors.general40
      }
      borderRadius={15}
      onClick={onCLick}
    >
      <img
        src={logoUrl}
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
                isActive ? theme.colors.general100 : theme.colors.general90
              }
            >
              {title}
            </Typography>
            <Typography
              size="12/12"
              color={isActive ? theme.colors.general90 : theme.colors.general80}
            >
              {address ?? "address"}
            </Typography>
          </Grid>
          <Flex alignItems="center" gap={1}>
            <PhoneIcon20 />
            <Typography
              color={isActive ? theme.colors.general90 : theme.colors.general80}
              size="12/12"
            >
              {phone ?? "phone"}
            </Typography>
          </Flex>
        </Grid>
        <Flex alignItems="center">
          <Switch checked={isActive} onChange={triggerEdit} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Item;

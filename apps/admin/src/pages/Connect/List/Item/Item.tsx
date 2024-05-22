import { isNil } from "ramda";
import { FC } from "react";
import { Grid, theme, TrashIcon, Typography } from "@book-eat/ui";
import { cashiersSelectors } from "$api";
import { EntityId } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { navigateToPage, PageURLS } from "$constants";

interface IProps {
  id: EntityId;
}

const Item: FC<IProps> = ({ id }) => {
  const navigate = useNavigate();

  const item = useSelector((state) => cashiersSelectors.selectById(state, id));

  if (isNil(item)) {
    return null;
  }

  const onEditClick = () =>
    navigate(navigateToPage(PageURLS.UsersEdit, { id }));

  const { firstName, secondName } = item;

  return (
    <Grid
      gridTemplateColumns="auto max-content"
      padding="15px"
      backgroundColor={theme.colors.general30}
      borderRadius={10}
      onClick={onEditClick}
    >
      <Typography size="14/14" fontWeight={500}>
        {firstName} {secondName}
      </Typography>
      <TrashIcon onClick={onEditClick} />
    </Grid>
  );
};

export default Item;

import { FC } from "react";

import { Flex, Switch, theme, TrashIcon, Typography } from "@book-eat/ui";

import { useSelector } from "react-redux";
import { additionsEndpoints, additionsSelectors } from "$api";
import { EntityId } from "@reduxjs/toolkit";
import { navigateToPage, PageURLS } from "$constants";
import { useNavigate } from "react-router-dom";

interface IProps {
  id: EntityId;
}

const Item: FC<IProps> = (props) => {
  const navigate = useNavigate();
  const { id } = props;

  const data = useSelector(additionsSelectors.selectAll);
  const [triggerEdit] = additionsEndpoints.useEditAdditionMutation();
  const [triggerDelete] = additionsEndpoints.useDeleteAdditionMutation();

  const handleClick = () =>
    navigate(navigateToPage(PageURLS.AdditionsEdit, { id }));

  const item = data.find((item) => item.id === id);

  if (!item) {
    return null;
  }

  const { title, isActive, price, weight } = item;

  const toggleActive = (checked: boolean) => {
    triggerEdit({ id, isActive: checked, title, price, weight });
  };

  const handleDelete = () => {
    triggerDelete(id);
  };

  return (
    <Flex gap={2} onClick={handleClick}>
      <Flex
        backgroundColor={theme.colors.general50}
        borderRadius={10}
        padding={9}
        alignItems="center"
      >
        <TrashIcon onClick={handleDelete} />
      </Flex>
      <Flex
        width="100%"
        justifyContent="space-between"
        alignItems="center"
        backgroundColor={theme.colors.general50}
        borderRadius={10}
        padding="6px 15px"
      >
        <Typography size="12/12" fontWeight={600} textTransform="uppercase">
          {title}
        </Typography>
        <Switch checked={isActive} onChange={toggleActive} />
      </Flex>
    </Flex>
  );
};

export default Item;

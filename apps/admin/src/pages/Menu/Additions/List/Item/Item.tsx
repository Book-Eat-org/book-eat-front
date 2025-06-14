import { ChangeEvent, FC } from "react";

import { Flex, Switch, theme, TrashIcon, Typography } from "@book-eat/ui";

import { useSelector } from "react-redux";
import { additionsEndpoints, additionsSelectors } from "$api";
import { EntityId } from "@reduxjs/toolkit";
import { navigateToPage, PageURLS } from "$constants";
import { useNavigate } from "react-router-dom";
import { getAdditionTitle } from "@book-eat/utils";

interface IProps {
  id: EntityId;
}

const Item: FC<IProps> = (props) => {
  const navigate = useNavigate();
  const { id } = props;

  const data = useSelector(additionsSelectors.selectAll);
  const [triggerEdit] = additionsEndpoints.useEditAdditionMutation();
  const [triggerDelete] = additionsEndpoints.useDeleteAdditionMutation();

  const openDetail = () =>
    navigate(navigateToPage(PageURLS.AdditionsEdit, { id }));

  const item = data.find((item) => item.id === id);

  if (!item) {
    return null;
  }

  const { title, isActive, price, weight } = item;

  const toggleActive = (checked: boolean, event: ChangeEvent) => {
    event.stopPropagation();
    triggerEdit({ id, isActive: checked, title, price, weight, measurement: '' });
  };

  const handleDelete = () => {
    triggerDelete(id);
  };

  const fullTitle = getAdditionTitle(item);

  return (
    <Flex gap={2}>
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
        onClick={openDetail}
      >
        <Typography size="12/12" fontWeight={600}>
          {fullTitle}
        </Typography>
        <Switch checked={isActive} onChange={toggleActive} />
      </Flex>
    </Flex>
  );
};

export default Item;

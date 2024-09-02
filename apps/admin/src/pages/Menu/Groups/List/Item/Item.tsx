import { FC } from "react";

import { Flex, Switch, TrashIcon, Typography } from "@book-eat/ui";

import { EntityId } from "@reduxjs/toolkit";
import { categoriesEndpoints, categoriesSelectors } from "$api";
import { useSelector } from "react-redux";
import { theme } from "@book-eat/ui";

interface IProps {
  id: EntityId;
}

const Item: FC<IProps> = (props) => {
  const { id } = props;

  const item = useSelector((state) =>
    categoriesSelectors.selectById(state, id),
  );
  const [triggerEdit] = categoriesEndpoints.useUpdateCategoryMutation();
  const [triggerDelete] = categoriesEndpoints.useDeleteCategoryMutation();

  if (!item) {
    return null;
  }

  const { title, isActive } = item;

  const toggleActive = (checked: boolean) => {
    triggerEdit({ id, isActive: checked, title });
  };

  const handleDelete = () => {
    triggerDelete(id);
  };

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
      >
        <Typography size="12/12" fontWeight={600}>
          {title}
        </Typography>
        <Switch checked={isActive} onChange={toggleActive} />
      </Flex>
    </Flex>
  );
};

export default Item;

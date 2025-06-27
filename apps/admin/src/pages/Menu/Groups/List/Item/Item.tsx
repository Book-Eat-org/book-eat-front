import { FC } from "react";
import { Flex, Switch, Typography } from "@book-eat/ui";
import { EntityId } from "@reduxjs/toolkit";
import { theme } from "@book-eat/ui";
import { categoriesEndpoints } from "@book-eat/api";

interface IProps {
  id: EntityId;
}

const Item: FC<IProps> = (props) => {
  const { id } = props;

  const { data } = categoriesEndpoints.useFetchCategoriesQuery();
  const item = data?.entities[id];
  
  const [triggerEdit] = categoriesEndpoints.useUpdateCategoryMutation();

  if (!item) {
    return null;
  }

  const { title, isActive } = item;

  const toggleActive = (checked: boolean) => {
    triggerEdit({ id, isActive: checked, title });
  };

  return (
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
  );
};

export default Item;

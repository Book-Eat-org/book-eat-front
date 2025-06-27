import { FC } from "react";
import { EntityId } from "@reduxjs/toolkit";
import { Popup, Typography, Flex, Button } from "@book-eat/ui";
import { categoriesEndpoints } from "@book-eat/api";

interface IProps {
  isActive: boolean;
  onClose: () => void;
  data: {
    id: EntityId;
    title: string;
  } | null;
}

const PopupConfirm: FC<IProps> = (props) => {
  const { isActive, onClose, data } = props;
  const [triggerDelete] = categoriesEndpoints.useDeleteCategoryMutation();
  const { refetch } = categoriesEndpoints.useFetchCategoriesQuery();

  const handleDelete = async () => {
    if (!data) return;
    await triggerDelete(data.id);
    await refetch();
    onClose();
  };

  if (!data) return null;

  return (
    <Popup 
      isActive={isActive} 
      onClose={onClose}
      footer={false}
    >
      <Flex 
        gap={8}
        alignItems="center" 
        flexDirection="column"
        padding="0 15px"
      >
        <Typography 
          textAlign="center" 
          size="18/18" 
          fontWeight={700}
        >
          Удалить категорию "{data.title}"?
        </Typography>
        <Flex 
          gap={2} 
          width="100%" 
          alignItems="center" 
          justifyContent="space-between"
        >
          <Button width="100%" variant="outline" onClick={onClose}>
            Отменить
          </Button>
          <Button width="100%" onClick={handleDelete}>
            Удалить
          </Button>
        </Flex>
      </Flex>
    </Popup>
  );
};

export default PopupConfirm;

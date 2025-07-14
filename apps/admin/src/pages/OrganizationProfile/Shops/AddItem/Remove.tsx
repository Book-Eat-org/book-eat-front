import {
  Button,
  Flex,
  notification,
  Popup,
  theme,
  TrashIcon,
} from "@book-eat/ui";
import { useState } from "react";
import { placesEndpoints } from "$api";
import { useNavigate, useParams } from "react-router-dom";

export const Remove = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [confirmationModalOpened, setConfirmationModalOpened] = useState(false);

  const [deletePlace] = placesEndpoints.useDeletePlaceMutation();
  const navigateBack = () => navigate("..");

  const onClose = () => setConfirmationModalOpened(false);
  const onDelete = () => {
    notification.success('test')
    setConfirmationModalOpened(true);
  }

  const onSubmitDelete = async () => {
    // await deletePlace(id!);
    notification.success("Изменения сохранены");
    navigateBack();
  };

  return (
    <>
      {confirmationModalOpened && (
        <Popup isActive={confirmationModalOpened} onClose={onClose}>
          <Popup.Message>Вы действительно хотите удалить заведение?</Popup.Message>
          <Popup.Footer><Button variant="danger" width="100%" onClick={onSubmitDelete}>Удалить заведение</Button></Popup.Footer>
        </Popup>
      )}
      <Flex
        backgroundColor={theme.colors.accent50}
        borderRadius={10}
        padding="6px"
      >
        <TrashIcon onClick={onDelete} />
      </Flex>
    </>
  );
};

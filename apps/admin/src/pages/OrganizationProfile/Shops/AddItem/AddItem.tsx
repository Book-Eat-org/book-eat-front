import { FC, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import {
  BackIcon24,
  Button,
  Flex,
  theme,
  TrashIcon,
  UIGrid,
} from "@book-eat/ui";

import { inputAdapter, ouptutAdapter } from "./adapters";
import classes from "./AddItem.module.css";
import {
  Address,
  Image,
  NewAddress,
  Title,
  Phone,
  DeliveryMethod,
  Schedule,
} from "./Fields";
import { IFormValues } from "./models";
import { useSelector } from "react-redux";
import {
  currentOrganizationSelector,
  placesByOrganizationSelectorsFactory,
  placesEndpoints,
} from "$api";
import { Page } from "$components";
import { useNavigate, useParams } from "react-router-dom";

const AddItem: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [organization] = useSelector(currentOrganizationSelector.selectAll);

  const [mapOpened, setMapOpened] = useState(false);
  const [savePlace, { isLoading }] = placesEndpoints.useSavePlaceMutation();
  const [editPlace] = placesEndpoints.useEditPlaceMutation();
  const [deletePlace] = placesEndpoints.useDeletePlaceMutation();

  const selector = placesByOrganizationSelectorsFactory(organization.id);

  const item = useSelector((state) => selector.selectById(state, id));

  const defaultValues = inputAdapter(item!);

  const methods = useForm<IFormValues>({
    defaultValues,
  });

  const navigateBack = () => navigate("..");
  const handleSubmit = async (data: IFormValues) => {
    const payload = ouptutAdapter(data, organization, id);

    const result = await (id ? editPlace(payload) : savePlace(payload));
    if (result.error) {
      return;
    }

    navigateBack();
  };

  const handleAddressClick = () => setMapOpened(true);
  const handleCloseDetailAddress = () => setMapOpened(false);

  const handleDelete = async () => {
    await deletePlace(id!);
    navigateBack();
  };

  return (
    <FormProvider {...methods}>
      <Page>
        <Page.Header>
          <Page.Header.Buttons>
            <Flex
              backgroundColor={theme.colors.primary90}
              borderRadius={10}
              padding="6px"
            >
              <BackIcon24 onClick={navigateBack} />
            </Flex>
            {item && (
              <Flex
                backgroundColor={theme.colors.primary90}
                borderRadius={10}
                padding="6px"
              >
                <TrashIcon onClick={handleDelete} />
              </Flex>
            )}
          </Page.Header.Buttons>
          <Page.Header.Title>Заведения</Page.Header.Title>
        </Page.Header>
        <Page.Body>
          <UIGrid gap="20px" className={classes.content}>
            <Image />
            <UIGrid gap="15px">
              <UIGrid gap="15px">
                <Title />
                <Address onClick={handleAddressClick} />
                <Phone />
              </UIGrid>
            </UIGrid>
            <Schedule />
            <DeliveryMethod />
            <UIGrid colSizes="1fr 1fr" gap="30px">
              <Button onClick={navigateBack}>Отменить</Button>
              <Button
                loading={isLoading}
                onClick={methods.handleSubmit(handleSubmit)}
              >
                Сохранить
              </Button>
            </UIGrid>
            {mapOpened && <NewAddress onClose={handleCloseDetailAddress} />}
          </UIGrid>
        </Page.Body>
      </Page>
    </FormProvider>
  );
};

export default AddItem;

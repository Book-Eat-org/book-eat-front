import { FC, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { UIButton, UIGrid } from "@book-eat/ui";

import { inputAdapter, ouptutAdapter } from "./adapters";
import classes from "./AddItem.module.css";
import {
  Address,
  TimesPerDay,
  DifferentTimes,
  Image,
  NewAddress,
  OrdersMode,
  TimesAllDays,
  Title,
} from "./Fields";
import { IFormValues } from "./models";
import Header from "../../../Header";
import { useSelector } from "react-redux";
import { placesByOrganizationSelectors, placesEndpoints } from "$api";
import { EntityId } from "@reduxjs/toolkit";
import { Days } from "./Fields/Days";

interface IProps {
  id?: EntityId;
  onSubmit: () => void;
  onCancel: () => void;
}

const AddItem: FC<IProps> = (props) => {
  const { id, onCancel, onSubmit } = props;

  const [mapOpened, setMapOpened] = useState(false);
  const [savePlace] = placesEndpoints.useSavePlaceMutation();

  const item = useSelector((state) =>
    placesByOrganizationSelectors.selectById(state, id),
  );

  const defaultValues = inputAdapter(item);

  const methods = useForm<IFormValues>({
    defaultValues,
  });

  const differentTimeDaily = methods.watch(
    "differentTimeDaily",
    defaultValues.differentTimeDaily,
  );

  const handleSubmit = async (data: IFormValues) => {
    const payload = { ...ouptutAdapter(data), placeId: id };

    await savePlace(payload);

    onSubmit();
  };

  const handleAddressClick = () => setMapOpened(true);
  const handleCloseDetailAddress = () => setMapOpened(false);

  return (
    <FormProvider {...methods}>
      <div className={classes.wrapper}>
        <Header title="Мои заведения" onBackClick={onCancel} />
        <UIGrid gap="40px">
          <UIGrid colSizes="max-content 3fr" gap="15px">
            <Image />
            <UIGrid>
              <Title />
              <Address onClick={handleAddressClick} />
            </UIGrid>
          </UIGrid>
          {/*<Contacts />*/}
          <UIGrid gap="30px">
            <span className={classes.subTitle}>График работы</span>
            <Days />
            <DifferentTimes />
            {differentTimeDaily ? <TimesPerDay /> : <TimesAllDays />}
          </UIGrid>
          <UIGrid gap="30px">
            <span className={classes.subTitle}>Способы выдачи заказов</span>
            <OrdersMode />
          </UIGrid>
          <UIGrid colSizes="1fr 2fr" gap="68px">
            <UIButton variant="secondary" onClick={onCancel}>
              Отменить
            </UIButton>
            <UIButton onClick={methods.handleSubmit(handleSubmit)}>
              Сохранить изменения
            </UIButton>
          </UIGrid>
          {mapOpened && <NewAddress onClose={handleCloseDetailAddress} />}
        </UIGrid>
      </div>
    </FormProvider>
  );
};

export default AddItem;

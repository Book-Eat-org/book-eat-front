import { Flex, Grid } from "@book-eat/ui";
import { Email, Name, Phone, Comment, PersonsCount } from "./Fields";
import { Methods } from "./Methods";
import { FormProvider, useForm } from "react-hook-form";
import { IFormValues } from "../models.ts";
import { DeliveryTypeName, IPlace, placesSelectors } from "@book-eat/api";
import { values } from "ramda";
import { useSelector } from "$hooks";
import { isShopOpen } from "@book-eat/utils";
import useFormPersist from "react-hook-form-persist";
import Agreement from "./Fields/Agreement.tsx";
import { Submit } from "./Submit.tsx";

export const Body = () => {
  const cartState = useSelector((state) => state.cart);

  const shop: IPlace = useSelector((state) =>
    placesSelectors.selectById(state, cartState.shopId!),
  );

  const ENABLED_METHODS = {
    [DeliveryTypeName.ON_PLACE]: shop?.isInPlaceAvailable,
    [DeliveryTypeName.DELIVERY]: shop?.isDeliveryAvailable,
    [DeliveryTypeName.TO_OUTSIDE]: shop?.isOnPlaceAvailable,
  };

  const filteredKeys = values(DeliveryTypeName).filter(
    (key) => ENABLED_METHODS[key],
  );

  const methods = useForm<IFormValues>({
    defaultValues: { personsCount: 1, deliveryType: filteredKeys[0] },
  });

  const { watch, setValue } = methods;

  useFormPersist("createOrder", {
    watch,
    setValue,
    exclude: ["takeUpTime"],
  });

  const isClosed = !isShopOpen(shop);

  if (isClosed) {
    return (
      <Flex justifyContent="center" alignItems="center">
        <div>Ресторан закрыт, зайдите попозже</div>
      </Flex>
    );
  }
// TODO: Wedding
  return (
    <FormProvider {...methods}>
      <Grid gap={6}>
        <Grid gap={3}>
          <Name />
          {/*<Phone />*/}
          {/*<Email />*/}
          {/*<Comment />*/}
        </Grid>
        {/*<PersonsCount />*/}
        {/*<Methods />*/}
        {/*<Agreement />*/}
        <Submit />
      </Grid>
    </FormProvider>
  );
};

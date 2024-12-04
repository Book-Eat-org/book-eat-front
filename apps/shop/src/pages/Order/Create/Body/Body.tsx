import { Button, Flex, Grid } from "@book-eat/ui";
import { Email, Name, Phone, Comment, PersonsCount } from "./Fields";
import { Methods } from "./Methods";
import { FormProvider, useForm } from "react-hook-form";
import { IFormValues } from "../models.ts";
import {
  DeliveryTypeName,
  IOrder,
  IPlace,
  menuEndpoints,
  ordersEndpoints,
  placesSelectors,
} from "@book-eat/api";
import { values } from "ramda";
import { useSelector } from "$hooks";
import { navigateToPage, PageURLS } from "$constants";
import { useNavigate } from "react-router-dom";
import { isShopOpen } from "@book-eat/utils";
import useFormPersist from "react-hook-form-persist";
import Agreement from "./Fields/Agreement.tsx";

export const Body = () => {
  const navigate = useNavigate();

  const cartState = useSelector((state) => state.cart);
  const [triggerCreateOrder] = ordersEndpoints.useCreateOrderMutation();
  const { data: menuData } = menuEndpoints.useGetMenuByPlaceIdQuery(
    cartState.shopId!,
  );

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

  const handleSubmit = async (data: IFormValues) => {
    const {
      personsCount,
      apartments,
      floor,
      entrance,
      intercom,
      address,
      comment,
      takeUpTime,
      name,
      phone,
      email,
      agreement,
    } = data;
    const cartItems = values(cartState.items);

    const products = cartItems.map((item) => ({
      ...menuData.entities[item.productId],
      additions: item?.additions?.map((item) => ({
        additionId: item.id,
        amount: item.col,
      })),
      amount: item.col,
      productId: item.productId,
    }));

    const places = { id: cartState.shopId };

    const payload: IOrder = {
      personsCount,
      comment,
      customerInfo: {
        customerName: name,
        customerPhone: phone,
        customerEmail: email,
      },
      readyTime: takeUpTime,
      delivery: {
        flat: apartments,
        floor,
        porch: entrance,
        address,
        doorCode: intercom,
        type: data.deliveryType,
      },
      products,
      places,
      agreement,
    };
    const result = await triggerCreateOrder(payload);
    if (result.data) {
      const url = navigateToPage(PageURLS.ORDERS_DETAIL, {
        id: result.data.id,
      });

      navigate(`${url}?paymentUrl=${result.data.paymentUrl}`);
    }
  };

  const deliveryType = methods.watch("deliveryType");

  const buttonLabel =
    deliveryType === DeliveryTypeName.DELIVERY
      ? "Рассчитать стоимость доставки"
      : "Оформить заказ";

  const isClosed = !isShopOpen(shop);

  if (isClosed) {
    return (
      <Flex justifyContent="center" alignItems="center">
        <div>Ресторан закрыт, зайдите попозже</div>
      </Flex>
    );
  }

  return (
    <FormProvider {...methods}>
      <Grid gap={6}>
        <Grid gap={3}>
          <Name />
          <Phone />
          <Email />
          <Comment />
        </Grid>
        <PersonsCount />
        <Methods />
        <Agreement />
        <Button onClick={methods.handleSubmit(handleSubmit)}>
          {buttonLabel}
        </Button>
      </Grid>
    </FormProvider>
  );
};

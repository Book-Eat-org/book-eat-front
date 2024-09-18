import { Button, Grid } from "@book-eat/ui";
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

export const Body = () => {
  const navigate = useNavigate();

  const cartState = useSelector((state) => state.cart);
  const [triggerCreateOrder] = ordersEndpoints.useCreateOrderMutation();
  const { data: menuData, isSuccess } = menuEndpoints.useGetMenuByPlaceIdQuery(
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
    } = data;
    const cartItems = values(cartState.items);

    const products = cartItems.map((item) => ({
      ...menuData.entities[item.productId],
      additions: item?.additionIds?.map((id) => ({
        additionId: id,
        amount: 1,
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
        <Button onClick={methods.handleSubmit(handleSubmit)}>
          {buttonLabel}
        </Button>
      </Grid>
    </FormProvider>
  );
};

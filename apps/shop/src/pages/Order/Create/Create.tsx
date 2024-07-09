import { useNavigate } from "react-router-dom";
import { BackIcon24, Button, Flex, Grid, Page, theme } from "@book-eat/ui";
import { FormProvider, useForm } from "react-hook-form";
import { IFormValues } from "./models.ts";
import { Comment, Email, Name, PersonsCount, Phone } from "./Fields";
import { Methods } from "./Methods";
import {
  DeliveryTypeName,
  IOrder,
  menuEndpoints,
  ordersEndpoints,
} from "@book-eat/api";
import { useSelector } from "$hooks";
import { menuSelectors } from "@book-eat/api";
import { values } from "ramda";

export const Create = () => {
  const navigate = useNavigate();
  const [triggerCreateOrder] = ordersEndpoints.useCreateOrderMutation();
  const cartState = useSelector((state) => state.cart);
  const { data: menuData, isSuccess } = menuEndpoints.useGetMenuByPlaceIdQuery(
    cartState.shopId,
  );

  const methods = useForm<IFormValues>({
    defaultValues: { personsCount: 1, deliveryType: DeliveryTypeName.DELIVERY },
  });

  const onBackClick = () => navigate(-1);

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
    const psdadssda = values(cartState.items);
    const products = psdadssda.map((item) => ({
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
        type: {
          name: data.deliveryType,
        },
      },
      products,
      places,
    };

    const result = await triggerCreateOrder(payload);
    if (result.data) {
      window.location.replace(result.data.paymentUrl);
    }
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
              <BackIcon24 onClick={onBackClick} />
            </Flex>
          </Page.Header.Buttons>
          <Page.Header.Title>Оформление заказа</Page.Header.Title>
        </Page.Header>
        <Page.Body>
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
              Рассчитать стоимость доставки
            </Button>
          </Grid>
        </Page.Body>
      </Page>
    </FormProvider>
  );
};

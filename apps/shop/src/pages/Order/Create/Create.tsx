import { useNavigate } from "react-router-dom";
import { BackIcon24, Button, Flex, Grid, Page, theme } from "@book-eat/ui";
import { FormProvider, useForm } from "react-hook-form";
import { IFormValues } from "./models.ts";
import { Comment, Name, PersonsCount, Phone } from "./Fields";
import { Methods } from "./Methods";
import { IOrder, ordersEndpoints } from "@book-eat/api";
import { TakeUpVariants } from "$enums";
import { useSelector } from "$hooks";

export const Create = () => {
  const navigate = useNavigate();
  const [triggerCreateOrder] = ordersEndpoints.useCreateOrderMutation();
  const cartItems = useSelector((state) => state.cart);

  const methods = useForm<IFormValues>({
    defaultValues: { personsCount: 1, deliveryType: TakeUpVariants.Delivery },
  });

  const onBackClick = () => navigate("/");

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
    } = data;

    const products = cartItems.map((item) => ({
      id: item.productId,
      amount: item.col,
    }));

    const places = cartItems[0].shopId;

    const payload: IOrder = {
      personsCount,
      comment,
      customerInfo: name,
      customerPhone: phone,
      readyTime: takeUpTime,
      delivery: {
        flat: apartments,
        floor,
        porch: entrance,
        address,
        doorCode: intercom,
      },
      products,
      places,
    };

    await triggerCreateOrder(payload);
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

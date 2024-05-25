import { useNavigate, useParams } from "react-router-dom";
import { BackIcon24, Button, Flex, Grid, Page, theme } from "@book-eat/ui";
import { FormProvider, useForm } from "react-hook-form";
import { isNil } from "ramda";
import { IFormValues } from "./models.ts";
import {
  Address,
  Comment,
  DeliveryType,
  Name,
  PersonsCount,
  Phone,
} from "./Fields";

export const Create = () => {
  const navigate = useNavigate();
  const { id: orgId } = useParams();

  const methods = useForm<IFormValues>({
    defaultValues: { personsCount: 1 },
  });

  const onBackClick = () => navigate("/");

  const handleSubmit = async (data: IFormValues) => {};

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
            <Grid gap={3}>
              <DeliveryType />
              <Address />
            </Grid>
            <Button onClick={methods.handleSubmit(handleSubmit)}>
              Рассчитать стоимость доставки
            </Button>
          </Grid>
        </Page.Body>
      </Page>
    </FormProvider>
  );
};

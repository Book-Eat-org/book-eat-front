import { BackIcon24, Flex, Grid, Page, theme, Typography } from "@book-eat/ui";
import { useOrder } from "../useOrder.ts";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { getStatusLabel } from "./utils.ts";
import { isNotNil } from "ramda";

export const PageHeader = () => {
  const order = useOrder();

  const navigate = useNavigate();
  const onBackClick = () => navigate("..");

  const { orderNumber, places, creationTime } = order;
  const createDateFormatted = dayjs(creationTime).format("HH.mm DD.MM.YYYY");

  const statusLabel = getStatusLabel(order.status);

  const titleLabel = [`Заказ №${orderNumber}`, statusLabel]
    .filter(isNotNil)
    .join(" ");

  return (
    <Page.Header>
      <Page.Header.Buttons>
        <Flex
          backgroundColor={theme.colors.accent50}
          borderRadius={10}
          padding="6px"
        >
          <BackIcon24 onClick={onBackClick} />
        </Flex>
      </Page.Header.Buttons>
      <Page.Header.Title>
        <Grid gap={1}>
          <Typography size="12/12">{createDateFormatted}</Typography>
          <Typography size="12/12">{places?.title}</Typography>
          <Typography size="26/26" fontWeight={700}>
            {titleLabel}
          </Typography>
        </Grid>
      </Page.Header.Title>
    </Page.Header>
  );
};

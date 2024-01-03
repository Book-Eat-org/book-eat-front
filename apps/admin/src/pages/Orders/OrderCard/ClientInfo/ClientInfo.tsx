import { FC } from "react";
import { UIGrid, UITypography } from "@book-eat/ui";
import { useOrder } from "../../hooks";
import Row from "./Row";

import classes from "./ClientInfo.module.css";
import { OrdersIssuingMode } from "$enums";

export interface IProps {
  id: number;
}

const ClientInfo: FC<IProps> = (props) => {
  const { id } = props;

  const item = useOrder(id);

  if (!item) {
    return null;
  }

  const {
    name,
    phone,
    deliveryAddress,
    persons,
    comment,
    bankOrderStatus,
    orderType,
  } = item;

  return (
    <UIGrid gap="30px">
      <UITypography variant="textXl" color="gray" weight="bold">
        Инфо о клиенте
      </UITypography>
      <UIGrid className={classes.grid}>
        <Row title="Клиент">
          <UIGrid gap="10px">
            <UITypography variant="textMd" italic>
              {name}
            </UITypography>
            <UITypography variant="textMd" color="blue">
              {phone}
            </UITypography>
          </UIGrid>
        </Row>
        {orderType === OrdersIssuingMode.DELIVERY && (
          <Row title="Адрес доставки">
            <UITypography variant="textMd">{deliveryAddress}</UITypography>
          </Row>
        )}
        <Row title="Количество персон">{persons}</Row>
        <Row title="Комментарий">{comment}</Row>
        <Row title="Статус банка">
          <UITypography variant="textMd" color="gray">
            {bankOrderStatus?.description}
          </UITypography>
        </Row>
      </UIGrid>
    </UIGrid>
  );
};

export default ClientInfo;

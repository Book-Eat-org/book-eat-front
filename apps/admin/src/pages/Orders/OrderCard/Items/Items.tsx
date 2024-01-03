import { FC } from "react";
import { UIGrid, UITypography } from "@book-eat/ui";
import { useOrder } from "../../hooks";
import Item from "./Item";
import { sum, values } from "ramda";
import classes from "./Items.module.css";
import { OrdersIssuingMode } from "$enums";

export interface IProps {
  id: number;
}

const Items: FC<IProps> = (props) => {
  const { id } = props;

  const item = useOrder(id);

  if (!item) {
    return null;
  }

  const { items = [], deliveryCost = 0, orderType } = item;

  const totalCost = items.reduce(
    (prev, curr) => {
      const { additionsList, price } = curr;

      const cost = additionsList.reduce(
        (additionPrev, additionCurr) => additionPrev + additionCurr.price,
        0,
      );

      return {
        itemsCost: prev.itemsCost + Number(price),
        additionsCost: prev.additionsCost + cost,
      };
    },
    {
      itemsCost: 0,
      additionsCost: 0,
    },
  );

  const { itemsCost, additionsCost } = totalCost;

  const totalSummary = sum([...values(totalCost), deliveryCost ?? 0]);

  return (
    <UIGrid>
      <UIGrid padding="0 15px">
        {items.map((menuItem) => (
          <Item key={menuItem.guid} item={menuItem} />
        ))}
      </UIGrid>
      <UIGrid
        padding="30px 15px"
        gap="15px"
        className={classes.deliveryWrapper}
      >
        <UIGrid colSizes="auto max-content">
          <UITypography variant="textXs">Стоимость товаров:</UITypography>
          <UITypography variant="textXs">{itemsCost} ₽</UITypography>
        </UIGrid>
        <UIGrid colSizes="auto max-content">
          <UITypography variant="textXs">Стоимость добавок:</UITypography>
          <UITypography variant="textXs">{additionsCost} ₽</UITypography>
        </UIGrid>
        {orderType === OrdersIssuingMode.DELIVERY && (
          <UIGrid colSizes="auto max-content">
            <UITypography variant="textXs">Стоимость доставки:</UITypography>
            <UITypography variant="textXs">{deliveryCost} ₽</UITypography>
          </UIGrid>
        )}
        <UIGrid colSizes="auto max-content">
          <UITypography variant="textMd" weight="bold">
            Общая сумма:
          </UITypography>
          <UITypography variant="textMd" weight="bold">
            {totalSummary} ₽
          </UITypography>
        </UIGrid>
      </UIGrid>
    </UIGrid>
  );
};

export default Items;

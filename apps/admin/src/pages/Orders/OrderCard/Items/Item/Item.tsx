import { FC } from "react";
import { UIGrid, UITypography } from "@book-eat/ui";
import classes from "./Item.module.css";
import { IItem } from "$models";

export interface IProps {
  item: IItem;
}

const Item: FC<IProps> = (props) => {
  const { item } = props;

  const { orderAmount, title, price, additionsList } = item;

  return (
    <UIGrid padding="15px 0" gap="15px" className={classes.wrapper}>
      <UIGrid colSizes="auto max-content" gap="52px">
        <UIGrid colSizes="max-content auto" gap="15px">
          <UITypography variant="textMd">{orderAmount} X</UITypography>
          <UITypography variant="textMd">{title}</UITypography>
        </UIGrid>
        <UITypography variant="textXs" weight="bold">
          {price} ₽
        </UITypography>
      </UIGrid>
      <UIGrid gap="5px">
        <UITypography variant="textXs" color="gray">
          Добавки
        </UITypography>
        {additionsList.map((addition) => (
          <UIGrid key={addition.id} colSizes="auto max-content" gap="40px">
            <UITypography variant="textXs" color="gray">
              • {addition.title}
            </UITypography>
            <UITypography variant="textXs" color="gray">
              {addition.price} ₽
            </UITypography>
          </UIGrid>
        ))}
      </UIGrid>
    </UIGrid>
  );
};

export default Item;

import { FC } from "react";
import { UIGrid, UITypography } from "@book-eat/ui";
import { useOrder } from "../../../hooks";
import { ORDERS_ISSUING_MODE_CONFIG } from "$constants";
import classes from "./Tags.module.css";

import moment from "moment";

export interface IProps {
  id: number;
}

const Tags: FC<IProps> = (props) => {
  const { id } = props;

  const item = useOrder(id);

  if (!item) {
    return null;
  }

  const { orderType, readyTime } = item;

  const timeToTake = moment(readyTime).format("hh:mm");

  const tagsConfig = [
    {
      value: `(${ORDERS_ISSUING_MODE_CONFIG[orderType]})`,
    },
    {
      value: `Время выдачи: ${timeToTake}`,
    },
  ];

  return (
    <UIGrid colSizes={`repeat(${tagsConfig.length},max-content)`} gap="15px">
      {tagsConfig.map(({ value }) => (
        <UIGrid key={value} className={classes.tag} padding="6px 10px">
          <UITypography variant="textMd">{value}</UITypography>
        </UIGrid>
      ))}
    </UIGrid>
  );
};

export default Tags;

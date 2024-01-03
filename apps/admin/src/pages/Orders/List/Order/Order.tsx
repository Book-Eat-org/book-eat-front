import classNames from "classnames";
import moment from "moment";
import { isNil } from "ramda";
import { FC, useCallback } from "react";

import { UIGrid, UITypography } from "@book-eat/ui";
import { ORDERS_ISSUING_MODE_CONFIG } from "$constants";

import { useOrder, useOrdersContext } from "../../hooks";
import classes from "./Order.module.css";
import { EntityId } from "@reduxjs/toolkit";

interface IProps {
  id: EntityId;
}

const Order: FC<IProps> = (props) => {
  const { id } = props;

  const item = useOrder(id);
  const { setActiveOrderId } = useOrdersContext();

  const handleClick = useCallback(() => setActiveOrderId?.(id), [id]);

  if (isNil(item)) {
    return null;
  }

  const { price, name, phone, readyTime, orderType } = item;

  const now = moment(new Date());
  const end = moment(readyTime);
  const duration = moment.duration(now.diff(end));
  const days = duration.asDays().toFixed();
  const hours = duration.asDays().toFixed();
  const minutes = (duration.asMinutes() % 60).toFixed();

  const timeFrom =
    Number(days) > 0
      ? `${days} д.`
      : hours
      ? `${hours}ч${minutes}м`
      : `ч${minutes}м`;

  const danger = duration.asMinutes() > 15;

  const wrapperClasses = classNames(classes.wrapper, {
    [classes.warningShadow]: !danger,
    [classes.dangerShadow]: danger,
  });

  return (
    <UIGrid className={wrapperClasses} onClick={handleClick}>
      <UIGrid colSizes="1fr auto 1fr" alignItems="start">
        <UITypography variant="textMd" weight="semibold">
          №{id}
        </UITypography>
        <UITypography variant="textMd" color="gray">
          ({ORDERS_ISSUING_MODE_CONFIG[orderType]})
        </UITypography>
        <UITypography
          variant="textMd"
          color={danger ? "red" : undefined}
          className={classes.alignRight}
        >
          {timeFrom}
        </UITypography>
      </UIGrid>
      <div className={classes.separator} />
      <UIGrid colSizes="1fr auto 1fr" alignItems="start">
        <UITypography variant="textMd">{name}</UITypography>
        <UITypography variant="textMd">{phone}</UITypography>
        <UITypography
          variant="textMd"
          weight="semibold"
          className={classes.alignRight}
        >
          {price}₽
        </UITypography>
      </UIGrid>
    </UIGrid>
  );
};

export default Order;

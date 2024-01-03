import classNames from "classnames";
import { isNil } from "ramda";
import { FC, useCallback } from "react";

import { UIGrid, UITypography, LONG_DASH } from "@book-eat/ui";
import { ORDERS_ISSUING_MODE_CONFIG } from "$constants";

import { useOrder, useOrdersContext } from "../../hooks";
import classes from "./Order.module.css";
import { EntityId } from "@reduxjs/toolkit";
import dayjs from "dayjs";

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

  const currentDate = dayjs();
  const readyTimeDate = dayjs(readyTime);

  const isExpired = currentDate.isAfter(readyTimeDate);

  const timesLeftInMinutes = isExpired
    ? currentDate.diff(readyTimeDate, "minute")
    : readyTimeDate.diff(currentDate, "minute");

  const timesLeftInHours = timesLeftInMinutes / 60;
  const timesLeftInDays = timesLeftInHours / 24;

  const danger = isExpired || timesLeftInMinutes < 15;

  const timeFrom =
    Math.floor(timesLeftInDays) > 0
      ? `${Math.floor(timesLeftInDays)} д.`
      : Math.floor(timesLeftInHours) > 0
      ? `${Math.floor(timesLeftInHours)}ч${timesLeftInMinutes}м`
      : `${timesLeftInMinutes}м`;

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
          {isExpired ? "Просрочено на" : "Осталось"} {timeFrom}
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
          {price ?? LONG_DASH} ₽
        </UITypography>
      </UIGrid>
    </UIGrid>
  );
};

export default Order;

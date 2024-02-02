import { isNil } from "ramda";
import { FC } from "react";

import {
  Grid,
  LeftArrowIcon,
  UIButton,
  UIGrid,
  UIIconButton,
} from "@book-eat/ui";

import { useActions, useOrder, useOrdersContext } from "../hooks";
import classes from "./OrderCard.module.css";
import Header from "./Header";
import Items from "./Items";
import ClientInfo from "./ClientInfo";

const OrderCard: FC = () => {
  const { activeOrderId = 0, setActiveOrderId } = useOrdersContext();

  const item = useOrder(activeOrderId);
  const actions = useActions(activeOrderId);

  const onCancel = () => setActiveOrderId?.(undefined);

  if (isNil(item)) {
    return null;
  }

  return (
    <div className={classes.wrapper}>
      <UIGrid gap="30px">
        <UIGrid padding="0 15px">
          <UIIconButton
            Icon={LeftArrowIcon}
            variant="secondary"
            onClick={onCancel}
          />
          <Header id={activeOrderId} />
        </UIGrid>
        <Items id={activeOrderId} />
        <UIGrid padding="0 15px" gap="45px">
          <ClientInfo id={activeOrderId} />
          <Grid gap={12} gridTemplateColumns="1fr 2fr">
            {actions.map(({ handler, title, variant }) => (
              <UIButton variant={variant} key={title} onClick={handler}>
                {title}
              </UIButton>
            ))}
          </Grid>
        </UIGrid>
      </UIGrid>
    </div>
  );
};

export default OrderCard;

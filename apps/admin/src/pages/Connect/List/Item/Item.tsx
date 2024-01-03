import { isNil } from "ramda";
import { FC } from "react";

import classes from "./Item.module.css";
import { TrashIcon, UIGrid, UITypography } from "@book-eat/ui";
import { cashiersEndpoints, cashiersSelectors } from "$api";
import { EntityId } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

interface IProps {
  id: EntityId;
}

const Item: FC<IProps> = ({ id }) => {
  const [trigger] = cashiersEndpoints.endpoints.deleteCashiers.useMutation();

  const item = useSelector((state) => cashiersSelectors.selectById(state, id));

  if (isNil(item)) {
    return null;
  }

  const deleteCashier = () => {
    trigger([id]);
  };

  const { phone, login } = item;

  return (
    <UIGrid
      colSizes="auto max-content"
      padding="0 0 10px"
      className={classes.wrapper}
    >
      <UIGrid gap="10px">
        <UITypography variant="textMd" weight="semibold">
          {login}
        </UITypography>
        <UITypography variant="textMd">{phone}</UITypography>
      </UIGrid>
      <TrashIcon onClick={deleteCashier} />
    </UIGrid>
  );
};

export default Item;

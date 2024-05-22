import { isNil } from "ramda";
import { FC } from "react";
import { cashiersSelectors } from "$api";
import { EntityId } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { navigateToPage, PageURLS } from "$constants";
import { NavItem } from "$components";

interface IProps {
  id: EntityId;
}

const Item: FC<IProps> = ({ id }) => {
  const navigate = useNavigate();

  const item = useSelector((state) => cashiersSelectors.selectById(state, id));

  if (isNil(item)) {
    return null;
  }

  const onEditClick = () =>
    navigate(navigateToPage(PageURLS.UsersEdit, { id }));

  const { firstName, secondName } = item;

  return (
    <NavItem onClick={onEditClick}>
      {firstName} {secondName}
    </NavItem>
  );
};

export default Item;

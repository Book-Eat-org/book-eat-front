import { ListNavigation } from "@book-eat/ui";
import { EntityId } from "@reduxjs/toolkit";
import { FC } from "react";

interface IProps {
  id: EntityId;
  title: string;
}

const Category: FC<IProps> = (props) => {
  const { id, title } = props;

  return (
    <ListNavigation.MenuNavItem id={id}>{title}</ListNavigation.MenuNavItem>
  );
};

export default Category;

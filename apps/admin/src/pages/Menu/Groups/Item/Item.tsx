import classNames from "classnames";
import { FC } from "react";

import {
  BrowsIcon,
  EyeIcon,
  TrashIcon,
  UIGrid,
  UITypography,
} from "@book-eat/ui";

import classes from "./Item.module.css";
import { EntityId } from "@reduxjs/toolkit";
import { categoriesEndpoints, categoriesSelectors } from "$api";
import { useSelector } from "react-redux";

interface IProps {
  id: EntityId;
}

const Item: FC<IProps> = (props) => {
  const { id } = props;

  const item = useSelector((state) =>
    categoriesSelectors.selectById(state, id),
  );
  const [triggerEdit] = categoriesEndpoints.useSaveGroupsMutation();
  const [triggerDelete] = categoriesEndpoints.useDeleteGroupsMutation();

  if (!item) {
    return null;
  }

  const { title, enabled } = item;

  const handleEyeIconClick = () => {
    triggerEdit([{ grouppingsId: id, enabled: !enabled, title }]);
  };

  const handleDelete = () => {
    triggerDelete(id);
  };

  const wrapperClasses = classNames(classes.wrapper, {
    [classes.semiTransparent]: !enabled,
  });

  return (
    <UIGrid
      colSizes="max-content auto max-content"
      className={wrapperClasses}
      padding="10px 0"
      gap="18px"
      alignItems="center"
    >
      <div onClick={handleEyeIconClick}>
        {enabled ? <EyeIcon /> : <BrowsIcon />}
      </div>
      <UITypography variant="textMd">{title}</UITypography>
      <TrashIcon onClick={handleDelete} />
    </UIGrid>
  );
};

export default Item;

import classNames from "classnames";
import { FC } from "react";

import { BrowsIcon, EyeIcon, TrashIcon, UIGrid } from "@book-eat/ui";

import classes from "./Item.module.css";
import { useSelector } from "react-redux";
import { additionsEndpoints, additionsSelectors } from "$api";
import { EntityId } from "@reduxjs/toolkit";

interface IProps {
  id: EntityId;
}

const Item: FC<IProps> = (props) => {
  const { id } = props;

  const data = useSelector(additionsSelectors.selectAll);
  const [triggerEdit] = additionsEndpoints.useSaveAdditionMutation();
  const [triggerDelete] = additionsEndpoints.useDeleteAdditionMutation();

  const item = data.find((item) => item.id === id);

  if (!item) {
    return null;
  }

  const { title, enabled, price } = item;

  const handleEyeIconClick = () => {
    triggerEdit([{ id, enabled: !enabled, title, price }]);
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
      padding="15px 0"
      gap="14px"
      alignItems="center"
    >
      <div onClick={handleEyeIconClick}>
        {enabled ? <EyeIcon /> : <BrowsIcon />}
      </div>
      <span>{title}</span>
      <TrashIcon onClick={handleDelete} />
    </UIGrid>
  );
};

export default Item;

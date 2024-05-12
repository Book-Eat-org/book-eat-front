import classNames from "classnames";
import { not } from "ramda";
import { FC, useState } from "react";

import AddItem from "../../../AddItem";
import classes from "./Item.module.css";
import { useSelector } from "react-redux";
import { menuEndpoints, menuSelectors } from "$api";
import { EntityId } from "@reduxjs/toolkit";
import { BrowsIcon, EyeIcon, PencilIcon } from "@book-eat/ui";

interface IProps {
  id: EntityId;
}

const Item: FC<IProps> = ({ id }) => {
  const item = useSelector((state) => menuSelectors.selectById(state, id));

  const [editing, setEditing] = useState(false);

  if (!item) {
    return null;
  }

  const { mainImageUrl, title, quantity, enabled, price } = item;

  const [saveMenu] = menuEndpoints.useSaveMenuMutation();

  const toggleEnabled = () => saveMenu([{ ...item, enabled: !item.enabled }]);

  const toggleEditing = () => setEditing(not);

  const wrapperClasses = classNames(classes.wrapper, {
    [classes.semiTransparent]: !enabled,
  });

  if (editing) {
    return (
      <AddItem id={id} onSubmit={toggleEditing} onCancel={toggleEditing} />
    );
  }

  return (
    <div className={wrapperClasses}>
      <div className={classes.titleWrapper}>
        <div className={classes.imageWrapper}>
          <div onClick={toggleEnabled} className={classes.eyeIcon}>
            {enabled ? <EyeIcon /> : <BrowsIcon />}
          </div>
          <img
            className={classes.image}
            src={mainImageUrl}
            width={80}
            height={80}
            alt=""
          />
        </div>
        <div className={classes.descriptionWrapper}>
          <span className={classes.title}>{title}</span>
          <div className={classes.descriptionFooterWrapper}>
            <span className={classes.weight}>{quantity} г</span>
            <span className={classes.count}>{price}₽</span>
          </div>
        </div>
      </div>
      <div className={classes.edit}>
        <PencilIcon onClick={toggleEditing} />
      </div>
    </div>
  );
};

export default Item;

import { difference, equals, innerJoin, isEmpty, prop, reject } from "ramda";
import { FC, useState } from "react";

import {
  BurgerMenuIcon,
  UICheckbox,
  UIGrid,
  UIPopupMenu,
  UITypography,
} from "@book-eat/ui";

import classes from "./Points.module.css";
import { useSelector } from "react-redux";
import { placesSelectors } from "$api";
import { EntityId } from "@reduxjs/toolkit";
import { pluralize } from "$utils";

interface IProps {
  points: EntityId[];
  setPoints: (points: EntityId[]) => void;
}

const Points: FC<IProps> = (props) => {
  const { points, setPoints } = props;

  const [opened, setOpened] = useState(false);

  const data = useSelector(placesSelectors.selectAll);

  const handleOpenSelectPlace = () => {
    setOpened(true);
  };
  const closeOpenPlace = () => setOpened(false);

  const selectedPoints = innerJoin((a, b) => a.placeId === b, data, points);

  const selectedText =
    selectedPoints.length === 0
      ? "Точки"
      : selectedPoints.length === 1
      ? selectedPoints[0].title
      : `Выбрано ${pluralize(
          selectedPoints.length,
          "%d точка",
          "%d точки",
          "%d точек",
        )}`;

  const placesIds = data.map(prop("placeId"));
  const notSelected = difference(placesIds, points);
  const allSelected = isEmpty(notSelected);

  const selectAll = () => {
    if (!allSelected) {
      setPoints(placesIds);
    } else {
      setPoints([]);
    }
  };

  return (
    <>
      <UIGrid
        colSizes="max-content auto"
        gap="15px"
        padding="0 0 32px"
        alignItems="center"
      >
        <BurgerMenuIcon onClick={handleOpenSelectPlace}>Заказы</BurgerMenuIcon>
        <UITypography variant="textMd">{selectedText}</UITypography>
      </UIGrid>
      {opened && (
        <UIPopupMenu onClose={closeOpenPlace}>
          <UIGrid gap="30px">
            <UIGrid
              colSizes="max-content auto"
              gap="13px"
              padding="0 0 10px 0"
              alignItems="center"
            >
              <UITypography variant="textMd" weight="semibold">
                Выбрать все ({placesIds.length})
              </UITypography>
              <UICheckbox
                className={classes.selectAll}
                selected={allSelected}
                onChange={selectAll}
              />
            </UIGrid>
            {data.map(({ placeId, title }) => (
              <UICheckbox
                selected={points.includes(placeId)}
                key={placeId}
                onChange={() =>
                  setPoints(
                    points.includes(placeId)
                      ? reject(equals(placeId), points)
                      : [...points, placeId],
                  )
                }
              >
                {title}
              </UICheckbox>
            ))}
          </UIGrid>
        </UIPopupMenu>
      )}
    </>
  );
};

export default Points;

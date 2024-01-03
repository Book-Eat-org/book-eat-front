import { not, prop, propEq, sortBy } from "ramda";
import { FC, MouseEvent, useState } from "react";

import {
  Grid,
  PlaceholderImage,
  TrashIcon,
  UIGrid,
  UITypography,
} from "@book-eat/ui";

import AddItem from "../AddItem";
import { WORK_TIME } from "./constants";
import classes from "./Item.module.css";
import { placesEndpoints, placesSelectors } from "$api";
import { useSelector } from "react-redux";

interface IProps {
  id: number | string;
}

const Item: FC<IProps> = (props) => {
  const [editing, setEditing] = useState(false);
  const { id } = props;
  const [fetchDeletePlace] =
    placesEndpoints.endpoints.deletePlace.useMutation();

  const item = useSelector((state) => placesSelectors.selectById(state, id));

  if (!item) {
    return;
  }

  const toggleEditing = () => setEditing(not);

  const { photo, title, address, phone, workingTime, placeId } = item;

  const sortedWorkingTime = sortBy(prop("dayOfWeek"), workingTime);
  console.log(sortedWorkingTime);

  if (editing) {
    return (
      <AddItem id={placeId} onSubmit={toggleEditing} onCancel={toggleEditing} />
    );
  }

  const handleDelete = (event: MouseEvent<HTMLDivElement>) => {
    const confirmed = confirm(
      `Вы уерены, что хотите удалить заведение ${title}?`,
    );

    if (confirmed) {
      fetchDeletePlace(Number(id));
    }

    event.stopPropagation();
  };

  return (
    <div className={classes.wrapper} onClick={toggleEditing}>
      <div className={classes.deleteIcon} onClick={handleDelete}>
        <TrashIcon />
      </div>
      <img className={classes.image} src={photo || PlaceholderImage} alt="" />
      <UIGrid padding="5px 10px 15px" gap="12px">
        <UIGrid gap="10px">
          <UITypography variant="textXl" className={classes.title}>
            {title}
          </UITypography>
          <UITypography variant="textXs">{address}</UITypography>
        </UIGrid>
        <UIGrid gap="10px">
          <UIGrid colSizes="max-content auto" gap="10px">
            <UITypography variant="textXs">Телефон:</UITypography>
            <UITypography variant="textXs" className={classes.phone}>
              {phone}
            </UITypography>
          </UIGrid>
          <UIGrid gap="5px">
            {sortedWorkingTime?.map(
              ({ dayOfWeek, workingTimeFrom, workingTimeTo }) => (
                <Grid
                  gridTemplateColumns="max-content auto"
                  gap={2}
                  key={dayOfWeek}
                >
                  <UITypography variant="textXs">
                    {WORK_TIME.find(propEq(dayOfWeek, "id"))?.name}:
                  </UITypography>
                  <UITypography variant="textXs">
                    {workingTimeFrom} - {workingTimeTo}
                  </UITypography>
                </Grid>
              ),
            )}
          </UIGrid>
        </UIGrid>
      </UIGrid>
    </div>
  );
};

export default Item;

import { not, prop, propEq, sortBy } from "ramda";
import { FC, MouseEvent, useState } from "react";

import {
  Box,
  EyeIcon,
  Flex,
  Grid,
  PlaceholderImage,
  TrashIcon,
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
  const [fetchEditPlace] = placesEndpoints.endpoints.savePlace.useMutation();

  const item = useSelector((state) => placesSelectors.selectById(state, id));

  if (!item) {
    return;
  }

  const toggleEditing = () => setEditing(not);

  const { photo, title, address, phone, enabled, workingTime, placeId } = item;

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

  const handleHide = (event: MouseEvent<HTMLDivElement>) => {
    fetchEditPlace({ ...item, enabled: !item.enabled });

    event.stopPropagation();
  };

  return (
    <Box
      backgroundColor="white"
      borderRadius={20}
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.1)"
      opacity={enabled ? 1 : 0.5}
      onClick={toggleEditing}
    >
      <div className={classes.deleteIcon} onClick={handleDelete}>
        <TrashIcon />
      </div>
      <div className={classes.hideIcon} onClick={handleHide}>
        <EyeIcon />
      </div>
      <img className={classes.image} src={photo || PlaceholderImage} alt="" />
      <Grid padding="5px 10px 15px" gap={2}>
        <Grid gap={2}>
          <UITypography variant="textXl" className={classes.title}>
            {title}
          </UITypography>
          <UITypography variant="textXs">{address}</UITypography>
        </Grid>
        <Grid gap={2}>
          <Flex gap={2}>
            <UITypography variant="textXs">Телефон:</UITypography>
            <UITypography variant="textXs" className={classes.phone}>
              {phone}
            </UITypography>
          </Flex>
          <Grid gap={1}>
            {sortedWorkingTime?.map(
              ({ dayOfWeek, workingTimeFrom, workingTimeTo }) => (
                <Flex gap={2} key={dayOfWeek}>
                  <UITypography variant="textXs">
                    {WORK_TIME.find(propEq(dayOfWeek, "id"))?.name}:
                  </UITypography>
                  <UITypography variant="textXs">
                    {workingTimeFrom} - {workingTimeTo}
                  </UITypography>
                </Flex>
              ),
            )}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Item;

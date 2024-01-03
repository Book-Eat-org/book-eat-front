import { FC } from "react";

import { UICheckbox, UIGrid, UIPopupMenu } from "@book-eat/ui";
import { placesSelectors } from "$api";
import { useSelector } from "react-redux";
import { EntityId } from "@reduxjs/toolkit";

interface IProps<T = EntityId> {
  selectedId?: T;
  setSelectedId: (value: T) => void;
  onClose: () => void;
}

const Points: FC<IProps> = (props) => {
  const { selectedId, setSelectedId, onClose } = props;

  const data = useSelector(placesSelectors.selectAll);

  return (
    <UIPopupMenu onClose={onClose}>
      <UIGrid gap="26px">
        {data.map(({ placeId, title }) => (
          <UICheckbox
            selected={placeId === selectedId}
            key={placeId}
            onChange={() => setSelectedId(placeId)}
          >
            {title}
          </UICheckbox>
        ))}
      </UIGrid>
    </UIPopupMenu>
  );
};

export default Points;

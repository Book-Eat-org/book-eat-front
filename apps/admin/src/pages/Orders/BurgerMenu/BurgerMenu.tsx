import { isNil } from "ramda";
import { FC, useEffect, useState } from "react";

import { UIGrid, BurgerMenuIcon } from "@book-eat/ui";
import { useOrdersContext } from "../hooks";
import { useSelector } from "react-redux";
import { placesByOrganizationSelectors } from "$api";
import Points from "../Points";

const BurgerMenu: FC = () => {
  const [pointsOpened, setPointsOpened] = useState(false);

  const placesData = useSelector(placesByOrganizationSelectors.selectAll);

  const { setPlaceId, placeId } = useOrdersContext();

  const selectedPlace = placesData.find((item) => item.id === placeId);

  useEffect(() => {
    if (!isNil(placesData)) {
      setPlaceId?.(placesData[0]?.id);
    }
  }, [placesData]);

  const handleSelectPlace = (id: number) => {
    setPlaceId?.(id);
    setPointsOpened(false);
  };

  const handleOpenSelectPlace = () => {
    setPointsOpened(true);
  };

  const closePopup = () => setPointsOpened(false);

  return (
    <>
      <UIGrid colSizes="max-content auto" gap="15px">
        <BurgerMenuIcon onClick={handleOpenSelectPlace}>Заказы</BurgerMenuIcon>
        <span>{selectedPlace?.title}</span>
      </UIGrid>
      {pointsOpened && (
        <Points
          selectedId={placeId}
          setSelectedId={handleSelectPlace}
          onClose={closePopup}
        />
      )}
    </>
  );
};

export default BurgerMenu;

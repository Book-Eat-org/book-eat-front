import { Grid } from "@book-eat/ui";
import { placesEndpoints } from "$api";
import { useSelector } from "react-redux";
import {
  getCurrentOrganizationSelector,
  placesSelectors,
} from "../../../../../store/entities";
import Item from "./Item";
import { Loader } from "./Loader";

export const Body = () => {
  const organization = useSelector(getCurrentOrganizationSelector);

  const { isLoading } = placesEndpoints.useFetchPlacesByOrganizationQuery(
    organization.id,
  );

  const ids = useSelector(placesSelectors.selectIds);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Grid gap={3}>
      {ids.map((id) => (
        <Item key={id} id={id} />
      ))}
    </Grid>
  );
};

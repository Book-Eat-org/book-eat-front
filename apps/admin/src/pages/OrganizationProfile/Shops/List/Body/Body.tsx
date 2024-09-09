import { Grid } from "@book-eat/ui";
import { placesEndpoints } from "$api";
import { useSelector } from "react-redux";
import { getCurrentOrganizationSelector } from "../../../../../store/entities";
import Item from "./Item";
import { Loader } from "./Loader";

export const Body = () => {
  const organization = useSelector(getCurrentOrganizationSelector);

  const { data, isLoading } = placesEndpoints.useFetchPlacesByOrganizationQuery(
    organization.id,
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Grid gap={3}>{data?.ids.map((id) => <Item key={id} id={id} />)}</Grid>
  );
};

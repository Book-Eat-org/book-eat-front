import { Grid } from "@book-eat/ui";
import Card from "./Card";
import { useShopsContext } from "../context.ts";
import { placesEndpoints } from "@book-eat/api";
import { useParams } from "react-router-dom";
import { isNil, isNotNil, values } from "ramda";

const List = () => {
  const { id } = useParams();
  const { data, isFetching } = placesEndpoints.useFetchPlacesQuery();
  const { searchValue } = useShopsContext();

  if (isFetching || !data) {
    return <div>loading...</div>;
  }
  const places = values(data.entities).filter(
    ({ organizationId }) => organizationId === id,
  );

  return (
    <Grid gap={2} p="0 12px 12px">
      {places.map(({ id }) => (
        <Card key={id} id={id} />
      ))}
    </Grid>
  );
};

export default List;

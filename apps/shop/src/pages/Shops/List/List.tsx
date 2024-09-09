import { Grid, Skeleton } from "@book-eat/ui";
import Card from "./Card";
import { useShopsContext } from "../context.ts";
import { placesEndpoints } from "@book-eat/api";
import { useParams } from "react-router-dom";
import { values } from "ramda";

const List = () => {
  const { id } = useParams();
  const { data, isFetching } = placesEndpoints.useFetchPlacesQuery();
  const { searchValue } = useShopsContext();

  if (isFetching || !data) {
    return <Skeleton count={4} gap={2} height={250} />;
  }
  const places = values(data.entities).filter(
    ({ organizationId }) => organizationId === id,
  );

  const filteredData = places.filter((item) =>
    searchValue
      ? item?.title.toLowerCase().includes(searchValue.toLowerCase())
      : true,
  );

  return (
    <Grid gap={2} p="0 12px 12px">
      {filteredData.map(({ id }) => (
        <Card key={id} id={id} />
      ))}
    </Grid>
  );
};

export default List;

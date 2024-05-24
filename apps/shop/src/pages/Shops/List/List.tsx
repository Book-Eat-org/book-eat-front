import { Grid } from "@book-eat/ui";
import Card from "./Card";
import { useShopsContext } from "../context.ts";
import { placesEndpoints } from "@book-eat/api";

const List = () => {
  const { data, isFetching } = placesEndpoints.useFetchPlacesQuery();
  const { searchValue } = useShopsContext();

  console.log(data);

  if (isFetching || !data) {
    return <div>loading...</div>;
  }

  return (
    <Grid gap={2} p="0 12px 12px">
      {data.ids.map((id) => (
        <Card key={id} id={id} />
      ))}
    </Grid>
  );
};

export default List;

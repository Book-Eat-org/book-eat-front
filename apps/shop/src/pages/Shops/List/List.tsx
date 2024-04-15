import { organizationsEndpoints } from "$api";
import { Grid } from "@book-eat/ui";
import Card from "./Card";
import { useShopsContext } from "../context.ts";

const List = () => {
  const { data, isFetching } = organizationsEndpoints.useGetOrganisationQuery();
  const { searchValue } = useShopsContext();

  if (isFetching || !data) {
    return <div>loading...</div>;
  }

  const filteredData = Object.values(data.entities).filter((item) =>
    searchValue ? item?.title.includes(searchValue) : true,
  );

  const ids = filteredData.map((item) => item?.id);

  return (
    <Grid gap={2} p="0 12px 12px">
      {ids.map((id) => (
        <Card key={id} id={id} />
      ))}
    </Grid>
  );
};

export default List;

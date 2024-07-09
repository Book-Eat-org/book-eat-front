import { Grid } from "@book-eat/ui";
import Card from "./Card";
import { useOrganizationsContext } from "../context.ts";
import { organizationsEndpoints } from "@book-eat/api";

const List = () => {
  const { data, isFetching } =
    organizationsEndpoints.useGetOrganisationsQuery();
  const { searchValue } = useOrganizationsContext();

  if (isFetching || !data) {
    return <div>loading...</div>;
  }

  const filteredData = Object.values(data.entities).filter((item) =>
    searchValue
      ? item?.title.toLowerCase().includes(searchValue.toLowerCase())
      : true,
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

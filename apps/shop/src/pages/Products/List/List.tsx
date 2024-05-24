import { Grid } from "@book-eat/ui";
import Card from "./Card";
import { useOrganizationsContext } from "../context.ts";
import { menuEndpoints } from "@book-eat/api";

const List = () => {
  const { data, isFetching } = menuEndpoints.useGetMenuByOrganizationQuery();
  const { searchValue } = useOrganizationsContext();

  if (isFetching || !data) {
    return <div>loading...</div>;
  }

  const filteredData = Object.values(data.entities).filter((item) =>
    searchValue ? item?.title.includes(searchValue) : true,
  );

  const ids = filteredData.map((item) => item?.id);

  return (
    <Grid gap={2} p="0 12px 12px" gridTemplateColumns="1fr 1fr">
      {ids.map((id) => (
        <Card key={id} id={id} />
      ))}
    </Grid>
  );
};

export default List;

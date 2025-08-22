import { Grid, Skeleton } from "@book-eat/ui";
import Card from "./Card";
import Empty from "./Empty";
import { useOrganizationsContext } from "../context.ts";
import { organizationsEndpoints } from "@book-eat/api";

const List = () => {
  const { data, isFetching } =
    organizationsEndpoints.useGetOrganisationsQuery();
  const { searchValue } = useOrganizationsContext();

  if (isFetching || !data) {
    return <Skeleton count={2} gap={2} height={350} />;
  }

  const filteredData = Object.values(data.entities).filter((item) => {
    if (!item) return false;
    
    if (!searchValue) return true;
    
    if (!item.title) return false;
    
    return item.title.toLowerCase().includes(searchValue.toLowerCase());
  });

  if (!filteredData.length) {
    return <Empty />
  }

  const ids = filteredData.map((item) => item?.id);

  return (
    <Grid gap={2} p="0 0 12px">
      {ids.map((id) => (
        <Card key={id} id={id} />
      ))}
    </Grid>
  );
};

export default List;

import { Flex, Grid, Skeleton } from "@book-eat/ui";
import Card from "./Card";
import { useOrganizationsContext } from "../context.ts";
import { IProduct, menuEndpoints } from "@book-eat/api";
import { useParams } from "react-router-dom";
import { prop } from "ramda";

const List = () => {
  const { id } = useParams();
  const { data, isFetching } = menuEndpoints.useGetMenuByPlaceIdQuery(id!);
  const { searchValue } = useOrganizationsContext();

  if (isFetching || !data) {
    return (
      <Flex gap={3}>
        <Skeleton count={4} gap={3} height={330} />
        <Skeleton count={4} gap={3} height={330} />
      </Flex>
    );
  }

  const entities: IProduct[] = Object.values(data.entities);

  const filteredByEnabled = entities.filter(prop("isActiveOnOrganization"));

  const filteredData = filteredByEnabled
    .filter((item) =>
      searchValue
        ? item?.title.toLowerCase().includes(searchValue.toLowerCase())
        : true,
    )
    .sort((a, b) => a.title.localeCompare(b.title));

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

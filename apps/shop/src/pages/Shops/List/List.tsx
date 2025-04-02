import { Grid, Flex, Skeleton, Typography } from "@book-eat/ui";
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

  if (!filteredData.length) {
    return (
      <Flex 
        p="40px 0"
        flexDirection="column"
        alignItems="center"
        gap={2}
      >
        <Typography size="18/18" fontWeight={700}>
          Ничего не нашлось
        </Typography>
        <Typography size="14/14" fontWeight={400} color="#6C6C6C">
          Попробуйте изменить запрос
        </Typography>
      </Flex>
    )
  }

  return (
    <Grid gap={2} p="0 0 12px">
      {filteredData.map(({ id }) => (
        <Card key={id} id={id} />
      ))}
    </Grid>
  );
};

export default List;

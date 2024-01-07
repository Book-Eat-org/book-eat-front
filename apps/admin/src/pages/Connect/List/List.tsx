import { FC } from "react";

import Item from "./Item";
import { cashiersEndpoints } from "$api";
import { Grid, Skeleton } from "@book-eat/ui";

const List: FC = () => {
  const { data, isFetching } = cashiersEndpoints.useGetCashiersQuery();

  if (isFetching) {
    return <Skeleton count={12} gap={3} height={40} />;
  }

  return (
    <Grid gap={6}>{data?.ids?.map((id) => <Item key={id} id={id} />)}</Grid>
  );
};

export default List;

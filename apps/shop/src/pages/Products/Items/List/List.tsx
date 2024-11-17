import { Flex, Grid, Skeleton } from "@book-eat/ui";
import Card from "./Card";
import { useOrganizationsContext } from "../context.ts";
import { IProduct, menuEndpoints } from "@book-eat/api";
import { useParams } from "react-router-dom";
import { isNotNil, prop } from "ramda";
import { ProductListContext } from "./context.ts";
import { useMemo, useState } from "react";
import { EntityId } from "@reduxjs/toolkit";
import { DetailProduct } from "./DetailProduct";

const List = () => {
  const [openedProductId, setOpenedProductId] = useState<undefined | EntityId>(
    undefined,
  );
  const { id } = useParams();
  const { data, isFetching } = menuEndpoints.useGetMenuByPlaceIdQuery(id!);
  const { searchValue } = useOrganizationsContext();

  const contextValue = useMemo(
    () => ({ openedProductId, setOpenedProductId }),
    [openedProductId, setOpenedProductId],
  );

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
    <ProductListContext.Provider value={contextValue}>
      {isNotNil(openedProductId) && <DetailProduct />}
      <Grid gap={2} p="0 12px 12px" gridTemplateColumns="1fr 1fr">
        {ids.map((id) => (
          <Card key={id} id={id} />
        ))}
      </Grid>
    </ProductListContext.Provider>
  );
};

export default List;

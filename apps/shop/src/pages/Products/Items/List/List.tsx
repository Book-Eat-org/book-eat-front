import { Flex, Grid, Skeleton, ListNavigation } from "@book-eat/ui";
import Card from "./Card";
import { useOrganizationsContext } from "../context.ts";
import { IProduct, menuEndpoints } from "@book-eat/api";
import { useParams } from "react-router-dom";
import { useSelector } from "$hooks";
import { isNotNil, keys, prop } from "ramda";
import { ProductListContext } from "./context.ts";
import { useMemo, useState } from "react";
import { EntityId } from "@reduxjs/toolkit";
import { DetailProduct } from "./DetailProduct";
import { Group } from "./Group";

const List = () => {
  const [openedProductId, setOpenedProductId] = useState<undefined | EntityId>(
    undefined,
  );
  const { id } = useParams();
  const { data, isFetching } = menuEndpoints.useGetMenuByPlaceIdQuery(id!);
  const { searchValue } = useOrganizationsContext();
  const { selectedCategory } = useSelector((state) => state.categories);

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
    .filter((item) => {
      if (
        searchValue &&
        !item?.title.toLowerCase().includes(searchValue.toLowerCase())
      ) {
        return false;
      }

      if (selectedCategory !== "" && selectedCategory !== "all") {
        return item.categoriesIds.includes(selectedCategory);
      }
      return true;
    })
    .sort((a, b) => a.title.localeCompare(b.title));

  const groupedByCategories: Record<string, string[]> = filteredData.reduce(
    (acc, item) => {
      item.categoriesIds.forEach((categoryId) => {
        if (!acc[categoryId]) {
          acc[categoryId] = [];
        }
        acc[categoryId].push(item.id);
      });
      return acc;
    },
    {},
  );

  return (
    <ProductListContext.Provider value={contextValue}>
      {isNotNil(openedProductId) && <DetailProduct />}
      <ListNavigation.Provider>
        <Grid gap={2} p="0 12px 12px">
          {keys(groupedByCategories).map((categoryId) => (
            <Group id={categoryId}>
              {groupedByCategories[categoryId].map((id) => (
                <Card key={id} id={id} />
              ))}
            </Group>
          ))}
        </Grid>
      </ListNavigation.Provider>
    </ProductListContext.Provider>
  );
};

export default List;

import { Flex, Grid, Skeleton, ListNavigation } from "@book-eat/ui";
import Card from "./Card";
import Empty from "./Empty";
import { useSelector } from "react-redux";
import { cartSelector } from "../../../../store/cart/selectors.ts";
import { useOrganizationsContext } from "../context.ts";
import { IProduct, menuEndpoints } from "@book-eat/api";
import { useParams } from "react-router-dom";
import { isNotNil, isEmpty, prop } from "ramda";
import { ProductListContext } from "./context.ts";
import { useMemo, useState } from "react";
import { EntityId } from "@reduxjs/toolkit";
import { DetailProduct } from "./DetailProduct";
import { Group } from "./Group";
import { useCategories } from "../hooks.ts";

const List = () => {
  const [openedProductId, setOpenedProductId] = useState<undefined | EntityId>(
    undefined,
  );
  const { id } = useParams();
  const { data, isFetching } = menuEndpoints.useGetMenuByPlaceIdQuery(id!);
  const { searchValue } = useOrganizationsContext();
  const categoriesByProducts = useCategories();
  const cartItems = useSelector(cartSelector);

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
      return !(
        searchValue &&
        !item?.title.toLowerCase().includes(searchValue.toLowerCase())
      );
    })
    .sort((a, b) => a.title.localeCompare(b.title));

  const groupedByCategories: Record<string, EntityId[]> = filteredData.reduce(
    (acc, item) => {
      item.categoriesIds.forEach((categoryId) => {
        if (!acc[categoryId]) {
          acc[categoryId] = [];
        }
        acc[categoryId].push(item.id);
      });
      return acc;
    },
    {} as Record<string, EntityId[]> 
  );

  if (!filteredData.length) {
    return <Empty />
  }

  return (
    <ListNavigation.ScrollContainer>
      <ProductListContext.Provider value={contextValue}>
        {isNotNil(openedProductId) && <DetailProduct />}
        <Grid gap={4} padding={`0 15px ${isEmpty(cartItems.items) ? 20 : 75}px`}>
          {categoriesByProducts
            .filter(categoryId => groupedByCategories[categoryId]?.length > 0)
            .map((categoryId) => (
              <Group key={categoryId} id={categoryId}>
                <Grid 
                  gridTemplateColumns="repeat(2, 1fr)"
                  gridAutoRows="auto"
                  gap={1.8}
                >
                  {(groupedByCategories[categoryId] || []).map((id) => (
                    <Card key={id} id={id} />
                  ))}
                </Grid>
              </Group>
            ))}
        </Grid>
      </ProductListContext.Provider>
    </ListNavigation.ScrollContainer>
  );
};

export default List;

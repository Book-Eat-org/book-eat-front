import { EntityId } from "@reduxjs/toolkit";
import { FC } from "react";

import { Flex, Grid } from "@book-eat/ui";
import { Additions, Footer, Header, Image } from "./Fields";
import { ItemContext } from "./context.ts";

interface IProps {
  id: EntityId;
}
export const Item: FC<IProps> = (props) => {
  const { id } = props;

  return (
    <ItemContext.Provider value={{ cartItemId: id }}>
      <Flex justifyContent="space-between">
        <Flex gap={6}>
          <Image />
          <Grid gap={3}>
            <Header />
            <Footer />
            <Additions />
          </Grid>
        </Flex>
      </Flex>
    </ItemContext.Provider>
  );
};

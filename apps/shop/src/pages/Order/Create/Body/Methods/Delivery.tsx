import { Grid } from "@book-eat/ui";
import { Address, Intercom, Floor, Entrance, Apartments } from "../Fields";

export const Delivery = () => (
  <>
    <Address />
    <Grid gridTemplateColumns="repeat(3,1fr)" gap={3}>
      <Entrance />
      <Floor />
      <Apartments />
      <Intercom />
    </Grid>
  </>
);

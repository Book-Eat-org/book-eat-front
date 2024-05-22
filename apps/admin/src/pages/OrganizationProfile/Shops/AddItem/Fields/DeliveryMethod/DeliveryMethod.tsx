import { Typography, UIGrid } from "@book-eat/ui";
import { Outside } from "./Outside";
import { Delivery } from "./Delivery";
import { InPlace } from "./InPlace";

export const DeliveryMethod = () => (
  <UIGrid gap="20px">
    <Typography>Способы выдачи заказов</Typography>
    <Outside />
    <Delivery />
    <InPlace />
  </UIGrid>
);

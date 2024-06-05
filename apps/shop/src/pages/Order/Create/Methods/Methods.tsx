import { useWatch } from "react-hook-form";
import { IFormValues } from "../models.ts";
import { Delivery } from "./Delivery.tsx";
import { Grid } from "@book-eat/ui";
import { DeliveryType } from "../Fields";
import { Inside } from "./Inside.tsx";
import { Outside } from "./Outside.tsx";
import { TakeUpVariants } from "$enums";

const ComponentByType = {
  [TakeUpVariants.Delivery]: Delivery,
  [TakeUpVariants.Inside]: Inside,
  [TakeUpVariants.Outside]: Outside,
};

export const Methods = () => {
  const deliveryType = useWatch<IFormValues, "deliveryType">({
    name: "deliveryType",
  });

  const Component = ComponentByType[deliveryType];

  return (
    <Grid gap={3}>
      <DeliveryType />
      <Component />
    </Grid>
  );
};

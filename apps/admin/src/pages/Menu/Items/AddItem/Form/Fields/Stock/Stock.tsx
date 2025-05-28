import { innerJoin, isNotNil, prop, symmetricDifference, values } from "ramda";
import { FC } from "react";
import { useController } from "react-hook-form";

import {
  Grid,
  UIMultipleSelect,
  UIMultipleSelectOption,
} from "@book-eat/ui";

import { IFormValues } from "../../models";
import { organizationsEndpoints, placesEndpoints } from "$api";

export const Stock: FC = () => {
  const { field, fieldState } = useController<IFormValues, "stock">({
    name: "stock",
  });
  const { onChange, value = [] } = field;
  const errorMessage = fieldState.error?.message;

  const { data } = organizationsEndpoints.useGetCurrentOrganisationQuery();

  const { data: productsData } =
    placesEndpoints.useFetchPlacesByOrganizationQuery(data.ids[0]);

  const places = values(productsData?.entities ?? {})
    .filter(isNotNil)
    .sort((a, b) => a.title.localeCompare(b.title));

  const selectedPlaces = innerJoin((shop, id) => id === shop.id, places, value);
  const title = selectedPlaces.map(prop("title")).join(" ,");

  const handleChange = (item: string) =>
    onChange(symmetricDifference(value, [item]));

  return (
    <Grid gap={1}>
      <UIMultipleSelect
        values={value}
        onChange={handleChange}
        title="Продается тут"
        displayValue={title}
        error={errorMessage}
      >
        {places?.map(({ title, id }) => (
          <UIMultipleSelectOption key={id} value={String(id)}>
            {title}
          </UIMultipleSelectOption>
        ))}
      </UIMultipleSelect>
    </Grid>
  );
};

export default Stock;

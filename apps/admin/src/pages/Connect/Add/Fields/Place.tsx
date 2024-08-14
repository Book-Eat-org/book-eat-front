import { FC } from "react";
import { useController } from "react-hook-form";

import { IFormValues } from "../models";
import { UIOption, UISelect } from "@book-eat/ui";
import {
  currentOrganizationSelector,
  organizationsEndpoints,
  placesByOrganizationSelectorsFactory,
  placesEndpoints,
} from "$api";
import { EntityId } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { isNil } from "ramda";
import { getCurrentOrganizationSelector } from "../../../../store/entities";

const OptionItem: FC<{ id: EntityId }> = ({ id }) => {
  const { data: organizaitionsData } =
    organizationsEndpoints.useGetCurrentOrganisationQuery();

  const item = useSelector((state) =>
    placesByOrganizationSelectorsFactory(organizaitionsData.ids[0]).selectById(
      state,
      id,
    ),
  );

  if (isNil(item)) {
    return null;
  }

  return <UIOption value={String(id)}>{item.title}</UIOption>;
};

export const Place: FC = () => {
  const { field, fieldState } = useController<IFormValues, "place">({
    name: "place",
    rules: { required: { value: true, message: "Укажите заведение" } },
  });

  const organization = useSelector(getCurrentOrganizationSelector);

  const { data } = placesEndpoints.useFetchPlacesByOrganizationQuery(
    organization.id,
  );

  const { onChange, value } = field;
  const errorMessage = fieldState.error?.message;

  return (
    <UISelect
      onChange={onChange}
      placeholder="Заведение"
      value={String(value)}
      error={errorMessage}
      renderValue={(id) => data?.entities[id]?.title}
    >
      {data?.ids?.map((id) => <OptionItem key={id} id={id} />)}
    </UISelect>
  );
};

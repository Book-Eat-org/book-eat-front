import { FC } from "react";
import Content from "./Content";
import { organizationsEndpoints } from "$api";

const Organization: FC = () => {
  const { data } = organizationsEndpoints.useGetCurrentOrganisationQuery();
  const id = data!.ids[0];
  const { isLoading } = organizationsEndpoints.useGetOrganisationQuery(id);

  if (isLoading) {
    return null;
  }

  return <Content />;
};

export default Organization;

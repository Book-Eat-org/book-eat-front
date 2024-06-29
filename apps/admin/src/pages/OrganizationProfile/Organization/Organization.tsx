import { FC } from "react";
import Content from "./Content";
import { organizationsEndpoints } from "$api";

const Organization: FC = () => {
  const { isLoading } = organizationsEndpoints.useGetCurrentOrganisationQuery();

  if (isLoading) {
    return null;
  }

  return <Content />;
};

export default Organization;

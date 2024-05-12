import { FC } from "react";
import Content from "./Content";
import { organizationsEndpoints } from "$api";

interface IProps {
  onCancel: VoidFunction;
  onSubmit: VoidFunction;
}
const Organization: FC<IProps> = (props) => {
  const { onCancel, onSubmit } = props;
  const { data } = organizationsEndpoints.useGetCurrentOrganisationQuery();
  const id = data!.ids[0];
  const { isLoading } = organizationsEndpoints.useGetOrganisationQuery(id);

  if (isLoading) {
    return null;
  }

  return <Content onCancel={onCancel} onSubmit={onSubmit} />;
};

export default Organization;

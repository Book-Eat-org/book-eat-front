import { FC } from "react";
import Content from "./Content";
import { organizationsEndpoints } from "$api";

interface IProps {
  onCancel: VoidFunction;
  onSubmit: VoidFunction;
}
const Organization: FC<IProps> = (props) => {
  const { onCancel, onSubmit } = props;
  const { isLoading } = organizationsEndpoints.useGetOrganisationQuery();

  if (isLoading) {
    return null;
  }

  return <Content onCancel={onCancel} onSubmit={onSubmit} />;
};

export default Organization;

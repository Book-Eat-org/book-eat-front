import { Page } from "@book-eat/ui";
import { menuEndpoints } from "@book-eat/api/src";
import { useParams } from "react-router-dom";
import { Body } from "./Body";

export const Card = () => {
  const { id } = useParams();
  const { isFetching } = menuEndpoints.useGetMenuByIdQuery(id!);

  if (isFetching) {
    return null;
  }

  return (
    <Page>
      <Page.Header>
        <Page.Header.Title>Продукт</Page.Header.Title>
      </Page.Header>
      <Page.Body>
        <Body />
      </Page.Body>
    </Page>
  );
};

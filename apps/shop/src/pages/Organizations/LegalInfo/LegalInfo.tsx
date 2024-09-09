import { BackIcon24, Flex, Grid, Page, theme } from "@book-eat/ui";
import { useSelector } from "react-redux";
import { organizationsSelectors } from "@book-eat/api";
import { useNavigate, useParams } from "react-router-dom";
import { Item } from "./Item";

export const LegalInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = useSelector((state) =>
    organizationsSelectors.selectById(state, id),
  );

  const { legalInfo, title } = item;

  const { inn, ogrn, legalAddress, actualAddress, email, phone } =
    legalInfo ?? {};

  const onBackClick = () => navigate("/");
  return (
    <Page>
      <Page.Header>
        <Page.Header.Buttons>
          <Flex
            backgroundColor={theme.colors.accent50}
            borderRadius={10}
            padding="6px"
          >
            <BackIcon24 onClick={onBackClick} />
          </Flex>
        </Page.Header.Buttons>
        <Page.Header.Title>Юридическая информация</Page.Header.Title>
      </Page.Header>
      <Page.Body>
        <Grid gap={6} p={3}>
          <Grid gap={3}>
            <Item title="Наименование организации">{title}</Item>
            <Item title="ИНН">{inn}</Item>
            <Item title="ОГРН/ОГРНИП">{ogrn}</Item>
          </Grid>
          <Grid gap={3}>
            <Item title="Фактический адрес">{actualAddress}</Item>
            <Item title="Телефон">{phone}</Item>
            <Item title="E-mail">{email}</Item>
          </Grid>
          <Grid gap={3}>
            <Item title="Юридический адрес">{legalAddress}</Item>
          </Grid>
        </Grid>
      </Page.Body>
    </Page>
  );
};

import {
  BackIcon24,
  Flex,
  Grid,
  NewPage,
  theme,
  Typography,
} from "@book-eat/ui";
import { useSelector } from "react-redux";
import { organizationsEndpoints } from "@book-eat/api";
import { useNavigate, useParams } from "react-router-dom";
import { Item } from "./Item";
import { Separator } from "./Separator";
import { organizationsSelectors } from "../../store/entities";
import { isNil } from "ramda";

export const LegalInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = useSelector((state) =>
    organizationsSelectors.selectById(state, id),
  );

  const { isFetching } = organizationsEndpoints.useGetOrganisationQuery(
    id ?? "",
  );

  if (isFetching || isNil(item)) {
    return null;
  }

  const { legalInfo, title } = item;

  const { inn, ogrn, legalAddress, actualAddress, email, phone, legalName } =
    legalInfo ?? {};

  const onBackClick = () => navigate(-1);

  return (
    <NewPage>
      <NewPage.Header>
        <NewPage.Header.Top>
          <NewPage.Header.Top.Left>
            <Flex
              backgroundColor={theme.colors.accent50}
              borderRadius={10}
              padding="6px"
            >
              <BackIcon24 onClick={onBackClick} />
            </Flex>
          </NewPage.Header.Top.Left>
          <NewPage.Header.Top.Central>
            <Grid
              gap={1}
              justifyContent="center"
              justifyItems="center"
              color={theme.colors.general50}
            >
              <Typography size="16/16" fontWeight={600}>
                Юридическая информация
              </Typography>
              <Typography size="16/16" fontWeight={700}>
                {title}
              </Typography>
            </Grid>
          </NewPage.Header.Top.Central>
        </NewPage.Header.Top>
      </NewPage.Header>
      <NewPage.Body padding="0">
        <Grid>
          <Grid gap={3} p={3}>
            <Item title="Наименование юридического лица">{legalName}</Item>
            <Item title="ИНН">{inn}</Item>
            <Item title="ОГРН/ОГРНИП">{ogrn}</Item>
          </Grid>
          <Separator />
          <Grid gap={3} p={3}>
            <Item title="Фактический адрес">{actualAddress}</Item>
            <Item title="Телефон">{phone}</Item>
            <Item title="E-mail">{email}</Item>
          </Grid>
          <Separator />
          <Grid gap={3} p={3}>
            <Item title="Юридический адрес">{legalAddress}</Item>
          </Grid>
        </Grid>
      </NewPage.Body>
    </NewPage>
  );
};

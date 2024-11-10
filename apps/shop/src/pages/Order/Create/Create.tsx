import { useNavigate } from "react-router-dom";
import {
  BackIcon24,
  Flex,
  Grid,
  NewPage,
  theme,
  Typography,
} from "@book-eat/ui";
import { IPlace, placesEndpoints, placesSelectors } from "@book-eat/api";
import { Body } from "./Body";
import { useSelector } from "$hooks";

export const Create = () => {
  const navigate = useNavigate();

  const { isFetching } = placesEndpoints.useFetchPlacesQuery();
  const cartState = useSelector((state) => state.cart);
  const shop: IPlace = useSelector((state) =>
    placesSelectors.selectById(state, cartState.shopId!),
  );

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
            <Grid gap={1} alignItems="center" justifyItems="center">
              <img
                src={shop?.logoUrl}
                alt=""
                width={80}
                height={80}
                style={{ borderRadius: "20px" }}
              />
              <Grid>
                <Typography
                  size="26/26"
                  fontWeight={700}
                  color={theme.colors.general50}
                >
                  Оформление заказа
                </Typography>
              </Grid>
            </Grid>
          </NewPage.Header.Top.Central>
        </NewPage.Header.Top>
      </NewPage.Header>
      <NewPage.Body>{isFetching ? <div>loading</div> : <Body />}</NewPage.Body>
    </NewPage>
  );
};

import { useNavigate } from "react-router-dom";
import {
  BackIcon24,
  Flex,
  Grid,
  NewPage,
  theme,
  TrashIcon,
  Typography,
} from "@book-eat/ui";
import { useSelector } from "$hooks";
import {
  additionsEndpoints,
  IPlace,
  menuEndpoints,
  placesEndpoints,
} from "@book-eat/api";
import { flatten, isEmpty, isNotNil, prop, values } from "ramda";
import { useEffect, useMemo } from "react";
import { Body } from "./Body";
import { useDispatch } from "react-redux";
import { clearCart } from "../../store/cart";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onBackClick = () => navigate(-1);
  const cart = useSelector((state) => state.cart);
  const additionsIds = useMemo(
    () =>
      flatten(values(cart.items).map((item) => item.additions.map(prop("id")))),
    [],
  );

  const [triggerAdditions] =
    additionsEndpoints.useFetchAdditionsByIdsMutation();

  useEffect(() => {
    if (!isEmpty(additionsIds.filter(isNotNil))) {
      triggerAdditions(additionsIds);
    }
  }, [additionsIds]);

  const { isSuccess } = menuEndpoints.useGetMenuByPlaceIdQuery(cart.shopId);
  const { data, isSuccess: isShopSuccess } =
    placesEndpoints.useFetchPlacesQuery();

  const onClearCart = () => dispatch(clearCart());

  if (!isSuccess || !isShopSuccess) {
    return null;
  }

  const place: IPlace = data.entities[cart.shopId];

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
                src={place.logoUrl}
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
                  {place.title}
                </Typography>
              </Grid>
            </Grid>
          </NewPage.Header.Top.Central>
          <NewPage.Header.Top.Right>
            <Flex
              backgroundColor={theme.colors.accent50}
              borderRadius={10}
              padding="6px"
            >
              <TrashIcon onClick={onClearCart} />
            </Flex>
          </NewPage.Header.Top.Right>
        </NewPage.Header.Top>
      </NewPage.Header>
      <NewPage.Body>
        <Body />
      </NewPage.Body>
    </NewPage>
  );
};

export default Cart;

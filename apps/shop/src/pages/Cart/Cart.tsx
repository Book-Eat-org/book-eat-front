import { useNavigate } from "react-router-dom";
import {
  BackIcon24,
  Button,
  Flex,
  Grid,
  Page,
  theme,
  Typography,
} from "@book-eat/ui";
import { Items } from "./Items";
import { Totals } from "./Totals";

const Cart = () => {
  const navigate = useNavigate();
  const onBackClick = () => navigate("..");

  return (
    <Page>
      <Page.Header>
        <Page.Header.Buttons>
          <Flex
            backgroundColor={theme.colors.primary90}
            borderRadius={10}
            padding="6px"
          >
            <BackIcon24 onClick={onBackClick} />
          </Flex>
        </Page.Header.Buttons>
        <Page.Header.Title>Корзина</Page.Header.Title>
      </Page.Header>
      <Page.Body>
        <div>
          <Grid gap={4}>
            <Grid gap={6}>
              <Items />
            </Grid>
            <Totals />
            <Button>Продолжить</Button>
          </Grid>
        </div>
      </Page.Body>
    </Page>
  );
};

export default Cart;

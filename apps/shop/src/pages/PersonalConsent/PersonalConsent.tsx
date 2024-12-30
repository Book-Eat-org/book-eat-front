import { useNavigate } from "react-router-dom";
import { BackIcon24, Flex, NewPage, theme, Typography } from "@book-eat/ui";
import { Body } from "./Body";

const PersonalConsent = () => {
  const navigate = useNavigate();
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
            <Typography
              size="16/16"
              fontWeight={600}
              color={theme.colors.general50}
            >
              Согласие на обработку персональных данных
            </Typography>
          </NewPage.Header.Top.Central>
        </NewPage.Header.Top>
      </NewPage.Header>
      <NewPage.Body>
        <Body />
      </NewPage.Body>
    </NewPage>
  );
};

export default PersonalConsent;

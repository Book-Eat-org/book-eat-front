import { EntityId } from "@reduxjs/toolkit";
import { FC } from "react";
import { useSelector } from "react-redux";
import { isNil } from "ramda";
import { Box, Grid } from "@book-eat/ui";
import classes from "./Card.module.css";
import { navigateToPage, PageURLS } from "$constants";
import { useNavigate } from "react-router-dom";
import { organizationsSelectors } from "@book-eat/api";
import { OrganizationCardContext } from "./context.ts";
import { Image } from "./Image";
import { Title } from "./Title";
import { Address } from "./Address";
import { LegalInfo } from "./LegalInfo";

interface IProps {
  id: EntityId;
}

const Card: FC<IProps> = (props) => {
  const navigate = useNavigate();
  const { id } = props;
  const item = useSelector((state) =>
    organizationsSelectors.selectById(state, id),
  );

  if (isNil(item)) {
    return null;
  }
  const onClick = () => {
    const url = navigateToPage(PageURLS.SHOPS, { id: item.id });
    navigate(url);
  };

  return (
    <OrganizationCardContext.Provider value={{ id }}>
      <Box
        bg="white"
        borderRadius="20px"
        width="100%"
        className={classes.wrapper}
        onClick={onClick}
      >
        <Box p="2px" borderRadius="20px">
          <Image />
          <Grid padding="5px 10px" gap={1}>
            <Title />
            <Address />
            <LegalInfo />
          </Grid>
        </Box>
      </Box>
    </OrganizationCardContext.Provider>
  );
};

export default Card;

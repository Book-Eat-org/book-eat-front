import { EntityId } from "@reduxjs/toolkit";
import { FC, SyntheticEvent } from "react";
import { useSelector } from "react-redux";
import { isNil } from "ramda";
import { Box, Grid, theme, Typography } from "@book-eat/ui";
import classes from "./Card.module.css";
import { navigateToPage, PageURLS } from "../../../../../constants/urls.ts";
import { useNavigate } from "react-router-dom";
import { organizationsSelectors } from "@book-eat/api";

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

  const { logoUrl, title, legalInfo } = item;

  const onClick = () => {
    const url = navigateToPage(PageURLS.SHOPS, { id: item.id });
    navigate(url);
  };

  const onLegalInfoClick = (e: SyntheticEvent) => {
    e.stopPropagation();
    const url = navigateToPage(PageURLS.ORGANIZATION_LEGAL_INFO, {
      id: item.id,
    });
    navigate(url);
  };

  return (
    <Box
      bg="white"
      borderRadius="20px"
      width="100%"
      className={classes.wrapper}
      onClick={onClick}
    >
      <Box p="2px" borderRadius="20px">
        <img
          src={
            logoUrl ??
            "https://archive.org/download/placeholder-image/placeholder-image.jpg"
          }
          alt=""
          style={{ height: 194, width: "100%" }}
          className={classes.image}
        />
        <Grid padding="5px 10px" gap={1}>
          <Typography size="18/18" fontWeight={700}>
            {title}
          </Typography>
          <Typography size="14/14">{legalInfo.actualAddress}</Typography>
          <Typography
            size="12/12"
            onClick={onLegalInfoClick}
            textDecoration="underline"
            color={theme.colors.general90}
          >
            Юридическая информация
          </Typography>
        </Grid>
      </Box>
    </Box>
  );
};

export default Card;

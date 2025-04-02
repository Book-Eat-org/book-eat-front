import { FC } from "react";

import { Flex, theme, TrashIcon, Typography } from "@book-eat/ui";

import { useSelector } from "react-redux";
import { EntityId } from "@reduxjs/toolkit";
import { navigateToPage, PageURLS } from "$constants";
import { useNavigate } from "react-router-dom";
import { Discount } from "./Discount";
import { Copy } from "./Copy";
import { promoCodesEndpoints } from "@book-eat/api";
import { promoCodesSelectors } from "$store";

interface IProps {
  id: EntityId;
}

const Item: FC<IProps> = (props) => {
  const navigate = useNavigate();
  const { id } = props;

  const item = useSelector((state) =>
    promoCodesSelectors.selectById(state, id),
  );
  const [triggerDelete] = promoCodesEndpoints.useDeletePromoCodeMutation();

  const openDetail = () => navigate(navigateToPage(PageURLS.PromoEdit, { id }));

  if (!item) {
    return null;
  }

  const handleDelete = () => {
    triggerDelete(id);
  };

  const { promoCode } = item;

  return (
    <Flex gap={2}>
      <Flex
        backgroundColor={theme.colors.general50}
        borderRadius={10}
        padding={9}
        alignItems="center"
      >
        <TrashIcon onClick={handleDelete} />
      </Flex>
      <Flex
        width="100%"
        alignItems="center"
        backgroundColor={theme.colors.general50}
        borderRadius={10}
        padding="6px 15px"
        onClick={openDetail}
        gap={3}
      >
        <Discount />
        <Typography size="14/14" fontWeight={500}>
          {promoCode}
        </Typography>
        <Copy id={id} />
      </Flex>
    </Flex>
  );
};

export default Item;

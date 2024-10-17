import { useOrganization } from "../context.ts";
import { theme, Typography } from "@book-eat/ui";
import { SyntheticEvent } from "react";
import { navigateToPage, PageURLS } from "$constants";
import { useNavigate } from "react-router-dom";

export const LegalInfo = () => {
  const { id } = useOrganization();
  const navigate = useNavigate();

  const onLegalInfoClick = (e: SyntheticEvent) => {
    e.stopPropagation();
    const url = navigateToPage(PageURLS.ORGANIZATION_LEGAL_INFO, {
      id: id,
    });
    navigate(url);
  };

  return (
    <Typography
      size="12/12"
      onClick={onLegalInfoClick}
      textDecoration="underline"
      color={theme.colors.general600}
    >
      Юридическая информация
    </Typography>
  );
};

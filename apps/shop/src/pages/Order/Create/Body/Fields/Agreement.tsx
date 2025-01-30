import { useController } from "react-hook-form";

import { theme, Typography, UICheckbox } from "@book-eat/ui";
import { IFormValues } from "../../models.ts";
import { identity } from "ramda";
import { navigateToPage, PageURLS } from "$constants";
import { useNavigate } from "react-router-dom";

const Agreement = () => {
  const navigate = useNavigate();
  const { field, fieldState } = useController<IFormValues, "agreement">({
    name: "agreement",
    rules: { required: true, validate: identity },
  });

  const { onChange, value } = field;

  const { error } = fieldState;

  const openAgreement = () => {
    navigate(navigateToPage(PageURLS.AGREEMENT, {}));
  };

  const openPersonalConsent = () => {
    navigate(navigateToPage(PageURLS.PERSONAL_CONSENT, {}));
  };

  const textColor = Boolean(error)
    ? theme.colors.red600
    : theme.colors.accent600;

  return (
    <UICheckbox selected={value} onChange={onChange} error={Boolean(error)}>
      Принимаю условия{" "}
      <Typography onClick={openAgreement} color={textColor}>
        пользовательского соглашения
      </Typography>{" "}
      и даю{" "}
      <Typography onClick={openPersonalConsent} color={textColor}>
        согласие на обработку персональных данных
      </Typography>
    </UICheckbox>
  );
};

export default Agreement;

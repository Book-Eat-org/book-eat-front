import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { Name, Phone } from "./Fields";
import { IFormValues } from "./models";
import { cashiersEndpoints } from "$api";
import { UIButton, UIGrid } from "@book-eat/ui";

interface IProps {
  onCancel?: () => void;
}

const Add: FC<IProps> = (props) => {
  const { onCancel } = props;

  const methods = useForm<IFormValues>();

  const [trigger] = cashiersEndpoints.useCreateCashierMutation();

  const handleSubmit = async (data: IFormValues) => {
    await trigger([{ phone: data.phone, login: data.name }]);
    onCancel?.();
  };

  return (
    <FormProvider {...methods}>
      <UIGrid gap="30px">
        <UIGrid gap="30px">
          <Name />
          <Phone />
        </UIGrid>
        <UIGrid justifyContent="space-between" colSizes="auto 1fr" gap="68px">
          <UIButton variant="secondary" onClick={onCancel}>
            Отменить
          </UIButton>
          <UIButton onClick={methods.handleSubmit(handleSubmit)}>
            Добавить
          </UIButton>
        </UIGrid>
      </UIGrid>
    </FormProvider>
  );
};

export default Add;

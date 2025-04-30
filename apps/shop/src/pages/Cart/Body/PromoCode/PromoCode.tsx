import { Button, UIInput } from "@book-eat/ui";
import { useEffect, useState } from "react";
import { promoCodesEndpoints } from "@book-eat/api";
import { isNil, isNotNil } from "ramda";
import { useDispatch } from "react-redux";
import { addPromoCodeAction } from "../../../../store/cart";

export const PromoCode = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const [trigger, { isLoading, data, isSuccess, isUninitialized }] =
    promoCodesEndpoints.useLazyFetchPromoCodesByParamsQuery();

  const submit = () => trigger({ value: [value] });

  const buttonEnabled = !isLoading && isNil(data);

  const error =
    !isUninitialized && !isLoading && !isSuccess && isNil(data)
      ? "Ой, у нас нет такого промокода"
      : undefined;

  useEffect(() => {
    if (isNil(data)) {
      return;
    }

    dispatch(addPromoCodeAction(data.id));
  }, [data]);

  console.log(isSuccess, isUninitialized, data);

  return (
    <UIInput
      value={value}
      onChange={setValue}
      disabled={isLoading || isNotNil(data)}
      title="Введите промокод"
      error={error}
      postfix={
        buttonEnabled && (
          <Button size="sm" onClick={submit}>
            Применить
          </Button>
        )
      }
    />
  );
};

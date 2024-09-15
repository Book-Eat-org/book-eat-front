import { FC, useEffect } from "react";
import { useController } from "react-hook-form";

import { IFormValues } from "../models";
import { UIOption, UISelect } from "@book-eat/ui";
import { isNil, isNotNil, keys } from "ramda";
import { TakeUpConfig } from "$constants";
import { DeliveryTypeName, IPlace, placesSelectors } from "@book-eat/api";
import { useSelector } from "$hooks";

export const DeliveryType: FC = () => {
  const { field, fieldState } = useController<IFormValues, "deliveryType">({
    name: "deliveryType",
    rules: { required: { value: true, message: "Укажите способ доставки" } },
  });

  const { shopId } = useSelector((state) => state.cart);

  const shop: IPlace = useSelector((state) =>
    placesSelectors.selectById(state, shopId!),
  );

  const { onChange, value } = field;

  const ENABLED_METHODS = {
    [DeliveryTypeName.ON_PLACE]: shop?.isInPlaceAvailable,
    [DeliveryTypeName.DELIVERY]: shop?.isDeliveryAvailable,
    [DeliveryTypeName.TO_OUTSIDE]: shop?.isOnPlaceAvailable,
  };

  const filteredKeys = keys(DeliveryTypeName).filter(
    (key) => ENABLED_METHODS[key],
  );

  useEffect(() => {
    const first = filteredKeys[0];
    if (isNotNil(first)) {
      onChange(first);
    }
  }, [filteredKeys]);

  if (isNil(shop)) {
    return null;
  }

  const errorMessage = fieldState.error?.message;

  return (
    <UISelect
      value={value}
      onChange={onChange}
      placeholder="Способ получения"
      renderValue={(value: DeliveryTypeName) => TakeUpConfig[value]}
    >
      {filteredKeys.map((key) => (
        <UIOption value={key} key={key}>
          {TakeUpConfig[key]}
        </UIOption>
      ))}
    </UISelect>
  );
};

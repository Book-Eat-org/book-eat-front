import { useFormContext, useWatch } from "react-hook-form";
import { IFormValues } from "../models.ts";
import { Button } from "@book-eat/ui";
import { values } from "ramda";
import {
  DeliveryTypeName,
  IOrder,
  menuEndpoints,
  ordersEndpoints,
} from "@book-eat/api";
import { navigateToPage, PageURLS } from "$constants";
import { useNavigate } from "react-router-dom";
import { useSelector } from "$hooks";
import { useTimeRemaining } from "./hooks.ts";
import { activePromoCodeSelector } from "$selectors";

export const Submit = () => {
  const methods = useFormContext<IFormValues>();
  const { deliveryType } = useWatch<IFormValues>();
  const navigate = useNavigate();

  const cartState = useSelector((state) => state.cart);
  const [triggerCreateOrder] = ordersEndpoints.useCreateOrderMutation();
  const { data: menuData } = menuEndpoints.useGetMenuByPlaceIdQuery(
    cartState.shopId!,
  );
  const promoCode = useSelector(activePromoCodeSelector);

  const { formatted, isFinished } = useTimeRemaining();

  const handleSubmit = async (data: IFormValues) => {
    const {
      personsCount,
      apartments,
      floor,
      entrance,
      intercom,
      address,
      comment,
      takeUpTime,
      name,
      phone,
      agreement,
    } = data;
    console.log(data);
    
    const cartItems = values(cartState.items);

    const products = cartItems.map((item) => ({
      ...menuData.entities[item.productId],
      additions: item?.additions?.map((item) => ({
        additionId: item.id,
        amount: item.col,
      })),
      amount: item.col,
      productId: item.productId,
    }));

    const places = { id: cartState.shopId };

    const payload: IOrder = {
      personsCount,
      comment,
      promoCode: promoCode?.promoCode,
      customerInfo: {
        customerName: name,
        customerPhone: phone,
      },
      readyTime: takeUpTime,
      delivery: {
        flat: apartments,
        floor,
        porch: entrance,
        address,
        doorCode: intercom,
        type: data.deliveryType,
      },
      products,
      places,
      clientLegalInfo: {
        isAgree: agreement,
        version: "2",
      },
    };

    const result = await triggerCreateOrder(payload);

    if (result.data) {
      const url = navigateToPage(PageURLS.ORDERS_DETAIL, {
        id: result.data.id,
      });

      navigate(`${url}?paymentUrl=${result.data.paymentUrl}`);
    }
  };

  const buttonLabel =
    deliveryType === DeliveryTypeName.DELIVERY
      ? "Рассчитать стоимость доставки"
      : "Оформить заказ";

  const buttonText = isFinished ? buttonLabel : `${buttonLabel} ${formatted}`;

  return (
    <Button disabled={isFinished} onClick={methods.handleSubmit(handleSubmit)}>
      {buttonText}
    </Button>
  );
};

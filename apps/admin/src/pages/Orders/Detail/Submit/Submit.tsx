import { Button, Flex } from "@book-eat/ui";
import { ordersEndpoints } from "$api";
import { useOrder } from "../useOrder.ts";
import { isNil } from "ramda";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { BUTTONS_ACTIONS_CONFIG, CONFIG_ACTION_MAP } from "./constants.ts";

export const Submit = () => {
  const [trigger] = ordersEndpoints.useUpdateOrderStatusMutation();
  const { id, status } = useOrder();
  const navigate = useNavigate();

  const configItem = CONFIG_ACTION_MAP[status];

  const navigateBack = useCallback(() => navigate(".."), [navigate]);

  if (isNil(configItem)) {
    return (
      <Button width="100%" variant="primary" onClick={navigateBack}>
        К списку заказов
      </Button>
    );
  }

  return (
    <Flex gap={4} width="100%">
      {configItem.map((status) => (
        <Button
          key={status}
          width="100%"
          variant={BUTTONS_ACTIONS_CONFIG[status]?.variant}
          onClick={() => trigger({ id, status })}
        >
          {BUTTONS_ACTIONS_CONFIG[status]?.title}
        </Button>
      ))}
    </Flex>
  );
};

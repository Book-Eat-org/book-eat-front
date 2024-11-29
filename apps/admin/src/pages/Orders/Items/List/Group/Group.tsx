import { DownArrowIcon, Flex, Grid, Typography } from "@book-eat/ui";
import { ORDER_STATUSES_TITLES_CONFIG } from "@book-eat/utils";
import { FC, ReactNode, useState } from "react";
import { OrderStatus } from "@book-eat/api";
import { not } from "ramda";
import { DEFAULT_OPENED_ORDER_STATUSES } from "../constants.ts";

interface IProps {
  status: OrderStatus;
  children: ReactNode;
}

export const Group: FC<IProps> = (props) => {
  const { status, children } = props;
  const [opened, setOpened] = useState(
    !DEFAULT_OPENED_ORDER_STATUSES.includes(status),
  );

  const title = ORDER_STATUSES_TITLES_CONFIG[status];

  const toggleClose = () => setOpened(not);

  return (
    <>
      <Grid gap={6}>
        <Flex alignItems="center" justifyContent="space-between">
          <Typography size="24/24" fontWeight={600}>
            {title}
          </Typography>
          <div style={{ transform: opened ? "rotate(180deg)" : undefined }}>
            <Flex
              onClick={toggleClose}
              width="24px"
              height="24px"
              alignItems="center"
              justifyContent="center"
            >
              <DownArrowIcon />
            </Flex>
          </div>
        </Flex>
        {opened && <Grid gap={3}>{children}</Grid>}
      </Grid>
    </>
  );
};

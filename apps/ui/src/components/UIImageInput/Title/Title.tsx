import { Typography } from "$components";
import { theme } from "$theme";
import React, { FC } from "react";

interface IProps {
  children?: React.ReactNode;
}

export const Title: FC<IProps> = ({ children }) => (
  <Typography size="14/14" color={theme.colors.general600}>
    {children}
  </Typography>
);

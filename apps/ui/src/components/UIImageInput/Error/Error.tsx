import { Typography } from "$components";
import { theme } from "$theme";
import React, { FC } from "react";

interface IProps {
  children?: React.ReactNode;
}

export const Error: FC<IProps> = ({ children }) => (
  <Typography size="12/12" color={theme.colors.red500}>
    {children}
  </Typography>
);

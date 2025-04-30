import { Typography } from "$components";
import { theme } from "$theme";
import React, { FC } from "react";

interface IProps {
  children?: React.ReactNode;
}

export const Caption: FC<IProps> = ({ children }) => (
  <Typography
    size="12/12"
    color={theme.colors.general900}
    textTransform="uppercase"
    fontWeight={600}
  >
    {children}
  </Typography>
);

import { Button, Flex, Grid, IconButton, Typography } from "$components";
import { CloseIcon } from "$assets";
import { FC, ReactNode } from "react";
import classes from "./Dialog.module.css";

interface IProps {
  onClose: () => void;
  children: ReactNode;
}

export const Dialog: FC<IProps> = (props) => {
  const { children, onClose } = props;
  return (
    <div className={classes.wrapper}>
      <div className={classes.backdrop} />
      <Grid gap={3} className={classes.content}>
        <Flex justifyContent="end">
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Flex>
        <Typography textAlign="center">{children}</Typography>
        <Button onClick={onClose}>Понятно</Button>
      </Grid>
    </div>
  );
};

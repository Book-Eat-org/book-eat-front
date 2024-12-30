import { CopyIcon16, theme, Typography } from "@book-eat/ui";
import { useSelector } from "react-redux";
import { additionsSelectors } from "$api";
import { EntityId } from "@reduxjs/toolkit";
import { FC, SyntheticEvent } from "react";
import { toast, ToastContainer } from "react-toastify";

interface IProps {
  id: EntityId;
}

const copyTextToClipboard = (text: string) =>
  navigator.clipboard.writeText(text);

export const Copy: FC<IProps> = (props) => {
  const { id } = props;

  const data = useSelector(additionsSelectors.selectAll);

  const item = data.find((item) => item.id === id);

  if (!item) {
    return null;
  }

  const { title } = item;

  const onClick = (event: SyntheticEvent) => {
    copyTextToClipboard(title);
    toast(
      <Typography size="14/14" color={theme.colors.general900} fontWeight={500}>
        Промокод скопирован!
      </Typography>,
    );
    event.stopPropagation();
  };

  return (
    <>
      <CopyIcon16 onClick={onClick} />
      <ToastContainer hideProgressBar position="top-center" autoClose={1500} />
    </>
  );
};

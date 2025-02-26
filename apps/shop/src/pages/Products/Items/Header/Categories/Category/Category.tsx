import { Flex, Typography } from "@book-eat/ui";
import { EntityId } from "@reduxjs/toolkit";
import { FC } from "react";

interface IProps {
  id: EntityId;
  background: string;
  color: string;
  title: string;
  onSelect: () => void;
}

const Category: FC<IProps> = (props) => {
  const { id, background, color, title, onSelect } = props;

  return (
    <Flex 
      p="10px"
      borderRadius="20px"
      backgroundColor={background}
      onClick={onSelect}
      data-id={id}
    >
      <Typography 
        size="14/14" 
        fontWeight={500} 
        color={color}>
        {title}
      </Typography>
    </Flex>
  )
}

export default Category;

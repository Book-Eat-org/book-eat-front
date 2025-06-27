import { FC, useState } from "react";
import { Flex, TrashIcon, ArrowDownIcon24, ArrowUpIcon24, Typography, Box } from "@book-eat/ui";
import { categoriesEndpoints } from "@book-eat/api";
import { EntityId } from "@reduxjs/toolkit";
import { theme } from "@book-eat/ui";
import { usePopup } from "../PopupProvider";
import styles from "../Settings.module.css";

interface IProps {
  id: EntityId;
  isFirst: boolean;
  isLast: boolean;
  onMove: (id: EntityId, direction: 'up' | 'down') => void;
  isMoving: boolean;
  className?: string;
}

const Item: FC<IProps> = (props) => {
  const { id, isFirst, isLast, onMove, isMoving, className } = props;
  const { openPopup } = usePopup();

  const [isAnimating, setIsAnimating] = useState(false);
  const [animationClass, setAnimationClass] = useState('');

  const { data } = categoriesEndpoints.useFetchCategoriesQuery();
  const item = data?.entities[id];

  if (!item) {
    return null;
  }

  const { title, isActive } = item;

  const handleDeleteClick = () => {
    openPopup({ 
      id: item.id, 
      title: item.title 
    });
  };

  const handleMove = (direction: 'up' | 'down') => {
    if (isMoving || isAnimating) return;
    
    setIsAnimating(true);
    setAnimationClass(direction === 'up' ? styles.itemMovingUp : styles.itemMovingDown);
    onMove(id, direction);
    
    setTimeout(() => {
      setAnimationClass('');
      setIsAnimating(false);
    }, 400);
  };

  const shouldShowArrows = !(isFirst && isLast);

  return (
    <Flex 
      gap={2} 
      className={`${className} ${animationClass}`}
    >
      <Flex
        backgroundColor={theme.colors.general50}
        borderRadius={10}
        padding={9}
        alignItems="center"
      >
        <TrashIcon onClick={handleDeleteClick} />
      </Flex>
      <Flex
        width="100%"
        alignItems="center"
        padding="6px 15px"
        backgroundColor={isActive ? theme.colors.general50 : theme.colors.general100}
        borderRadius={10}
      >
        <Typography 
          size="12/12" 
          fontWeight={600}
          color={isActive ? 'currentColor' : theme.colors.general650}
        >
          {title}
        </Typography>
      </Flex>
      
      {shouldShowArrows && (
        <>
          <Flex
            backgroundColor={!isLast ? theme.colors.general50 : 'transparent'}
            borderRadius={10}
            padding={9}
            alignItems="center"
          >
            {!isLast ? (
              <ArrowDownIcon24 
                onClick={() => handleMove('down')} 
                style={{ opacity: isMoving ? 0.5 : 1 }}
              />
            ): (
              <Box width={24} height={24}/>
            )}
          </Flex>
          <Flex
            backgroundColor={!isFirst ? theme.colors.general50 : 'transparent'}
            borderRadius={10}
            padding={9}
            alignItems="center"
          >
            {!isFirst ? (
              <ArrowUpIcon24 
                onClick={() => handleMove('up')} 
                style={{ opacity: isMoving ? 0.5 : 1 }}
              />
            ) : (
              <Box width={24} height={24}/>
            )}
          </Flex>
        </>
      )}
    </Flex>
  );
};

export default Item;

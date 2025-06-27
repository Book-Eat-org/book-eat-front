import { useCallback, useState, useEffect } from "react";
import { EntityId } from "@reduxjs/toolkit";
import Item from "./Item";
import { BackIcon24, Flex, Grid, theme } from "@book-eat/ui";
import { isNil } from "ramda";
import { categoriesEndpoints } from "@book-eat/api";
import { useNavigate } from "react-router-dom";
import { PopupProvider } from "./PopupProvider";
import { Page } from "$components";
import styles from "./Settings.module.css";

export const Settings = () => {
  const navigate = useNavigate();
  const [isMoving, setIsMoving] = useState(false);
  const [localCategories, setLocalCategories] = useState<EntityId[]>([]);

  const { isLoading, data } = categoriesEndpoints.useFetchCategoriesQuery();
  const [ trigger ] = categoriesEndpoints.useSetPrioritiesMutation();

  useEffect(() => {
    if (data?.ids) {
      setLocalCategories([...data.ids]);
    }
  }, [data?.ids]);

  const onBackClick = useCallback(() => navigate(".."), []);

  const handleMove = (id: EntityId, direction: 'up' | 'down') => {
    if (isMoving || localCategories.length <= 1) return;
    
    setIsMoving(true);
    
    const currentIndex = localCategories.findIndex((itemId) => itemId === id);
    if (currentIndex === -1) return;

    const newIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
    if (newIndex < 0 || newIndex >= localCategories.length) {
      setIsMoving(false);
      return;
    }
    
    const newCategories = [...localCategories];
    [newCategories[currentIndex], newCategories[newIndex]] = 
      [newCategories[newIndex], newCategories[currentIndex]];

    setLocalCategories(newCategories);
    trigger(newCategories);
    
    setTimeout(() => {
      setIsMoving(false);
    }, 400);
  };

  if (isLoading || isNil(data)) {
    return null;
  }

  return (
    <PopupProvider>
      <Page>
        <Page.Header>
          <Page.Header.Buttons>
            <Flex
              backgroundColor={theme.colors.accent50}
              borderRadius={10}
              padding="6px"
            >
              <BackIcon24 onClick={onBackClick} />
            </Flex>
          </Page.Header.Buttons>
          <Page.Header.Title>Категории</Page.Header.Title>
        </Page.Header>
        <Page.Body>
          <Grid gap={4}>
            {localCategories.map((id, index) => (
              <Item 
                id={id} 
                key={id}
                isFirst={index === 0}
                isLast={index === localCategories.length - 1}
                onMove={handleMove}
                isMoving={isMoving}
                className={styles.item}
              />
            ))}
          </Grid>
        </Page.Body>
      </Page>
    </PopupProvider>
  );
};

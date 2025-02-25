import { FC, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "$hooks";
import { EntityId } from "@reduxjs/toolkit";
import { categoriesEndpoints } from "@book-eat/api";
import { prop } from "ramda";
import { IProduct, menuEndpoints } from "@book-eat/api";
import { categoriesActions } from "../../../../../store/categories";
import { Flex, Typography, theme } from "@book-eat/ui";
import classes from "./Categories.module.css";

const Categories: FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { categoriesList, selectedCategory } = useSelector((state) => state.categories);
  const containerRef = useRef<HTMLDivElement>(null);

  const { data: menuList } = menuEndpoints.useGetMenuByPlaceIdQuery(id!);
  const [loadCategories, { data: list }] = categoriesEndpoints.useLoadCategoriesListMutation();

  const handleSelect = (categoryId: EntityId) => {
    dispatch(categoriesActions.onSelectCategory(categoryId));

    const container = containerRef.current;
    if (container) {
      const selectedElement = container.querySelector(`[data-id="${categoryId}"]`);
      if (selectedElement) {
        const rect = selectedElement.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const offset = rect.left - containerRect.left;

        container.scrollTo({
          left: container.scrollLeft + offset,
          behavior: 'smooth'
        });
      }
    }
  };

  useEffect(() => {
    if (menuList) {
      const entities: IProduct[] = Object.values(menuList.entities);
      const filteredByEnabled = entities.filter(prop("isActiveOnOrganization"));
      const categoriesIdsSet = new Set(filteredByEnabled.flat().flatMap((obj) => obj.categoriesIds));
      loadCategories([...categoriesIdsSet]);
    }
  }, [menuList]);

  useEffect(() => {
    if (list) {
      dispatch(categoriesActions.setCategoriesList(list.categories));
    }
  }, [list]);

  if (!list) return null;

  return (
    <div ref={containerRef} className={`${classes.wrap} overflow-x-auto`}>
      {categoriesList.map((item) => (
        <Flex 
          key={item.id}
          p="10px"
          borderRadius="20px"
          backgroundColor={selectedCategory === item.id ? theme.colors.general300 : 'transparent'}
          onClick={() => handleSelect(item.id)}
          data-id={item.id}
        >
          <Typography 
            size="14/14" 
            fontWeight={500} 
            color={selectedCategory === item.id ? theme.colors.general900 : '#6C6C6C'}>
            {item.title}
          </Typography>
        </Flex>
      ))}
    </div>
  );
};

export default Categories;
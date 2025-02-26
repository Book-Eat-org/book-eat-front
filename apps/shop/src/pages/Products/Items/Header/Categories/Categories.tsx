import { FC, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "$hooks";
import { EntityId } from "@reduxjs/toolkit";
import { categoriesEndpoints } from "@book-eat/api";
import { placesEndpoints } from "@book-eat/api";
import { categoriesActions } from "../../../../../store/categories";
import { theme } from "@book-eat/ui";
import Category from "./Category/Category";
import classes from "./Categories.module.css";

const Categories: FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { categoriesList, selectedCategory } = useSelector((state) => state.categories);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { data: places } = placesEndpoints.useFetchPlacesQuery();
  const [triggerCategories] = categoriesEndpoints.useLazyLoadCategoriesListQuery();

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
    if (!places && !id) {
      return;
    }

    const organizationId = places?.entities?.[id!].organizationId;

    if (organizationId) {
      const loadCategories = async () => {
        try {
          const { data } = await triggerCategories(organizationId);
          if (data) {
            dispatch(categoriesActions.setCategoriesList(data));
          }
        } catch (error) {
          throw new Error('Error load categories');
        }
      }
      loadCategories();
    }
  }, [places, id]);

  if (!categoriesList) return null;

  return (
    <div ref={containerRef} className={classes.wrap}>
      {categoriesList.map((item) => (
        <Category
          id={item.id}
          key={item.id}
          title={item.title}
          onSelect={() => handleSelect(item.id)}
          color={selectedCategory === item.id ? theme.colors.general900 : '#6C6C6C'}
          background={selectedCategory === item.id ? theme.colors.general300 : 'transparent'}
        />
      ))}
    </div>
  );
};

export default Categories;
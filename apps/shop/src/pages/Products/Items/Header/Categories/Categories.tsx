import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "$hooks";
import { categoriesEndpoints } from "@book-eat/api";
import { placesEndpoints } from "@book-eat/api";
import { categoriesActions } from "../../../../../store/categories";
import { Flex, Typography, theme } from "@book-eat/ui";
import classes from "./Categories.module.css";

const Categories: FC = () => {
  const dispatch = useDispatch();
  const { categoriesList, selectedCategory } = useSelector((state) => state.categories);
  const { data } = placesEndpoints.useFetchPlacesQuery();
  const [loadCategories] = categoriesEndpoints.useLoadCategoriesListMutation();

  const handleSelect = (category: string) => {
    dispatch(categoriesActions.onSelectCategory(category));
  }

  useEffect(() => {
    loadCategories(['4861ff24-14bb-459a-b02b-af5794131f18'])
  }, [])
  
  return (
    <div className={classes.wrap}>
      {categoriesList.map((item, index) => (
        <Flex 
          flexWrap="nowrap"
          backgroundColor={selectedCategory === item ? theme.colors.general300 : 'transparent'}
          p="10px"
          borderRadius="20px"
          key={index}
          onClick={() => handleSelect(item)}
        >
          <Typography size="14/14" fontWeight={500}>
            {item}
          </Typography>
        </Flex>
      ))}
    </div>
    );
  };
  
  export default Categories;
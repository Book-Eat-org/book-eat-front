import { createSlice, EntityId, PayloadAction } from "@reduxjs/toolkit";
import { ICategory } from "@book-eat/api";

interface IState {
  categoriesList: ICategory[];
  selectedCategory: EntityId;
}

const initialState: IState = {
  categoriesList: [],
  selectedCategory: 'all',
}

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategoriesList: (state, action: PayloadAction<ICategory[]>) => {
      state.categoriesList = [
        {
          id: 'all',
          title: 'Все',
          description: '',
          isActive: true,
          products: [],
        },
        ...action.payload
      ];
    },
    onSelectCategory: (state, action: PayloadAction<EntityId>) => {
      state.selectedCategory = action.payload;
    }
  }
})

export const { actions: categoriesActions } = categoriesSlice;
export const { reducer: categoriesReducer } = categoriesSlice;
import { createSlice } from "@reduxjs/toolkit";

interface IState {
  categoriesList: string[];
  selectedCategory: string;
}

const initialState: IState = {
  categoriesList: ['Все', 'Кофе с молоком', 'Черный кофе', 'Десерты', 'Закуски'],
  selectedCategory: 'Все',
}

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    onSelectCategory: (state, action) => {
      state.selectedCategory = action.payload;
    }
  }
})

export const { actions: categoriesActions } = categoriesSlice;
export const { reducer: categoriesReducer } = categoriesSlice;
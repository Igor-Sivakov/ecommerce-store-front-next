import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { CategoriesType, CategoryType } from '@/app/types/sorting.interface'


interface IInitialStateProducts {
  categories: CategoriesType[]
  searchTerm: string
  category: CategoryType
}

const initialState: IInitialStateProducts = {
  categories: [{
    name: 'dresses',
    category: 'dresses'
  },
  {
    name: 'jackets',
    category: 'jackets'
  },
  {
    name: 'shirts',
    category: 'shirts'
  },
  {
    name: 'pants',
    category: 'pants'
  },
  {
    name: 'polo',
    category: 'polo'
  },
  {
    name: 'all',
    category: null
  },
  ],
  searchTerm: '',
  category: null
}

const productsByValueSlice = createSlice({
  name: 'productsByValue',
  initialState,
  reducers: {
    addCategory(state, action: PayloadAction<CategoryType>) {
      state.category = action.payload
    },
    addSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload
    }
  }
})



export const productsByValueActions = productsByValueSlice.actions

export default productsByValueSlice.reducer
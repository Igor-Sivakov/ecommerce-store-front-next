export enum EnumSorting {
  PRICE_TO_HIGHT = 'ascending',
  PRICE_TO_LOW = 'descending',
  NEWEST = 'newest',
  OLDEST = 'oldest',
}

export interface ISortingItem {
  label: 'price: low to hight' | 'price: hight to low' | 'newest' | 'oldest'
  value: EnumSorting
}

export type CategoryType = 'dresses' | 'jackets' | 'pants' | 'shirts' | 'polo' | null

export type CategoriesType = {
  name: string
  category: CategoryType
}
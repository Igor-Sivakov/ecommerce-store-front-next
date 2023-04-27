import { RootState } from "@/app/types/common.types"

/* Cart slice */

export const getCartSelect = (state: RootState) => state.cart

/* Auth slice */

export const getErrorSelect = (state: RootState) => state.auth.error

/* Product by value slice */

export const getCategorySelect = (state: RootState) => state.productsByValue.category

export const getSearchTermSelect = (state: RootState) => state.productsByValue.searchTerm

export const getCategoriesSelect = (state: RootState) => state.productsByValue.categories
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist"
import storage from 'redux-persist/lib/storage'

import authSlice from "./slices/auth/auth.slice"
import cartSlice from "./slices/cart.slice"
import productsByValueSlice from './slices/products-by-value.slice'


const persistConfig = {
  key: 'lorian-shop',
  storage,
  whitelist: ['cart', 'auth']
}

const rootReducer = combineReducers({
  cart: cartSlice,
  productsByValue: productsByValueSlice,
  auth: authSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

export const persistor = persistStore(store)
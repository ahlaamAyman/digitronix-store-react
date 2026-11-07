import { configureStore } from '@reduxjs/toolkit'
import { api } from '../shared/api/api'
import authReducer from '../features/auth/store/authSlice'
import cartReducer from '../features/cart/store/cartSlice'
import addressReducer from '../features/checkout/store/addressSlice'
import paymentReducer from '../features/checkout/store/paymentSlice'
import { saveState } from '../shared/utils/storage'


export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    address: addressReducer,
    payment: paymentReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})


store.subscribe(() => {
  const state = store.getState()

  saveState('digitronix_addresses', state.address)
  saveState('digitronix_cart', state.cart)
})
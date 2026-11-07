import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    method: 'card',
    card: {
        number: '',
        holder: '',
        expiry: '',
        cvc: '',
    },
}

const paymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {
        setPaymentMethod: (state, { payload }) => {
            state.method = payload
        },
        setCardDetails: (state, { payload }) => {
            state.card = { ...state.card, ...payload }
        },
        resetPayment: () => initialState,
    },
})

export const { setPaymentMethod, setCardDetails, resetPayment } = paymentSlice.actions

export const setMethod = setPaymentMethod
export const setCard = setCardDetails

export const selectPaymentMethod = (state) => state.payment?.method ?? 'card'
export const selectCard = (state) => state.payment?.card ?? {}

export default paymentSlice.reducer


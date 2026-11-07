import { createSlice } from '@reduxjs/toolkit'

import { loadState } from '../../../shared/utils/storage'

const initialState = loadState('digitronix_cart') ?? {
    items: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,

    reducers: {
        addItem: (state, { payload }) => {
            const key = payload.key ?? payload.id
            const image = payload.image ?? (Array.isArray(payload.images) ? payload.images[0] : payload.images)
            const existing = state.items.find((item) => item.key === key)

            if (existing) {
                existing.quantity += payload.quantity
                return
            }

            state.items.push({
                ...payload,
                key,
                image,
                selected: true,
            })
        },

        removeItem: (state, { payload }) => {
            state.items = state.items.filter((item) => item.key !== payload)
        },

        updateQuantity: (state, { payload }) => {
            const item = state.items.find((i) => i.key === payload.key)
            if (item) item.quantity = payload.quantity
        },

        toggleSelected: (state, { payload }) => {
            const item = state.items.find((i) => i.key === payload)
            if (item) item.selected = !item.selected
        },

        toggleSelectAll: (state) => {
            const allSelected = state.items.every((item) => item.selected)
            state.items.forEach((item) => {
                item.selected = !allSelected
            })
        },

        removeSelected: (state) => {
            state.items = state.items.filter((item) => !item.selected)
        },

        clearCart: (state) => {
            state.items = []
        },
    },
})

export const {
    addItem,
    removeItem,
    updateQuantity,
    toggleSelected,
    toggleSelectAll,
    removeSelected,
    clearCart,
} = cartSlice.actions

export default cartSlice.reducer

export const selectCartItems = (state) => state.cart.items

export const selectCartCount = (state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)

export const selectSubtotal = (state) =>
    state.cart.items
        .filter((item) => item.selected)
        .reduce((total, item) => total + item.price * item.quantity, 0)
import { createSlice } from '@reduxjs/toolkit'
import { loadState } from '../../../shared/utils/storage'

const initialState = loadState('digitronix_addresses') ?? {
    addresses: [],
    selectedId: null,
}

const addressSlice = createSlice({
    name: 'address',
    initialState,

    reducers: {
        addAddress: (state, { payload }) => {
            const isFirst = state.addresses.length === 0

            state.addresses.push({
                ...payload,
                id: Date.now(),
                isDefault: isFirst,
            })

            if (isFirst) state.selectedId = state.addresses[0].id
        },

        removeAddress: (state, { payload }) => {
            state.addresses = state.addresses.filter((a) => a.id !== payload)

            if (state.selectedId === payload) {
                state.selectedId = state.addresses[0]?.id ?? null
            }
        },

        selectAddress: (state, { payload }) => {
            state.selectedId = payload
        },

        setDefaultAddress: (state, { payload }) => {
            state.addresses.forEach((address) => {
                address.isDefault = address.id === payload
            })
        },
    },
})

export const {
    addAddress,
    removeAddress,
    selectAddress,
    setDefaultAddress,
} = addressSlice.actions

export default addressSlice.reducer

export const selectAddresses = (state) => state.address.addresses
export const selectSelectedId = (state) => state.address.selectedId

export const selectDefaultAddress = (state) =>
    state.address.addresses.find((a) => a.isDefault) ?? null

export const selectOtherAddresses = (state) =>
    state.address.addresses.filter((a) => !a.isDefault)
import { createSlice } from '@reduxjs/toolkit'
import { tokenStorage } from '../../../shared/utils/tokenStorage'

const initialState = {
    user: null,
    accessToken: tokenStorage.getAccess(),
    refreshToken: tokenStorage.getRefresh(),
}

const authSlice = createSlice({
    name: 'auth',
    initialState,

    reducers: {
        setCredentials: (state, { payload }) => {
            const { user, tokens } = payload

            if (user) state.user = user

            if (tokens?.accessToken) {
                state.accessToken = tokens.accessToken
                state.refreshToken = tokens.refreshToken ?? state.refreshToken
                tokenStorage.set(tokens)
            }
        },

        setUser: (state, { payload }) => {
            state.user = payload
        },

        logout: (state) => {
            state.user = null
            state.accessToken = null
            state.refreshToken = null
            tokenStorage.clear()
        },
    },
})

export const { setCredentials, setUser, logout } = authSlice.actions
export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.user
export const selectAccessToken = (state) => state.auth.accessToken
export const selectIsAuthenticated = (state) => Boolean(state.auth.accessToken)

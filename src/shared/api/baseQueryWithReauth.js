import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { logout, setCredentials } from '../../features/auth/store/authSlice'

const rawBaseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.accessToken
        if (token) headers.set('authorization', `Bearer ${token}`)
        return headers
    },
})

let refreshPromise = null

const refreshTokens = (api, extraOptions) => {
    if (!refreshPromise) {
        refreshPromise = (async () => {
            const refreshToken = api.getState().auth.refreshToken
            if (!refreshToken) return null

            const result = await rawBaseQuery(
                {
                    url: '/auth/refresh-token',
                    method: 'POST',
                    body: { refreshToken },
                },
                api,
                extraOptions
            )

            const tokens = result.data?.data
            return tokens?.accessToken ? tokens : null
        })().finally(() => {
            refreshPromise = null
        })
    }

    return refreshPromise
}

export const baseQueryWithReauth = async (args, api, extraOptions) => {
    const result = await rawBaseQuery(args, api, extraOptions)

    if (result.error?.status !== 401) return result

    const tokens = await refreshTokens(api, extraOptions)

    if (!tokens) {
        api.dispatch(logout())
        return result
    }

    api.dispatch(setCredentials({ tokens }))

    return rawBaseQuery(args, api, extraOptions)
}
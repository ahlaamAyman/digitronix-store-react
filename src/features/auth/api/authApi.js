import { api } from '../../../shared/api/api'
import { setCredentials, logout as logoutAction } from '../store/authSlice'

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({

        login: builder.mutation({
            query: (credentials) => ({
                url: '/auth/login',
                method: 'POST',
                body: credentials,
            }),

            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled

                    dispatch(setCredentials({
                        user: data.data.user,
                        tokens: data.data.tokens,
                    }))
                } catch {
                    // Handled in page
                }
            },
        }),

        register: builder.mutation({
            query: (userData) => ({
                url: '/auth/register',
                method: 'POST',
                body: userData,
            }),

            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled

                    dispatch(setCredentials({
                        user: data.data.user,
                        tokens: data.data.tokens,
                    }))
                } catch {
                    // Handled in page
                }
            },
        }),



        forgotPassword: builder.mutation({
            query: (email) => ({
                url: '/auth/forgot-password',
                method: 'POST',
                body: { email },
            }),
        }),

        resetPassword: builder.mutation({
            query: ({ token, newPassword }) => ({
                url: '/auth/reset-password',
                method: 'POST',
                body: { token, newPassword },
            }),
        }),

        logout: builder.mutation({
            query: () => ({
                url: '/auth/logout',
                method: 'POST',
            }),

            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled
                } finally {
                    dispatch(logoutAction())
                    dispatch(api.util.resetApiState())
                }
            },
        }),

        getMe: builder.query({
            query: () => '/auth/me',
            transformResponse: (response) => response.data?.user ?? response.data,
            providesTags: ['User'],
        }),

    }),
})

export const {
    useLoginMutation,
    useRegisterMutation,
    useGetMeQuery,
    useLogoutMutation,
    useForgotPasswordMutation,
    useResetPasswordMutation,
} = authApi

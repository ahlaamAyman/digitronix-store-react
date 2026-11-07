const ACCESS_KEY = 'digitronix_access_token'
const REFRESH_KEY = 'digitronix_refresh_token'

export const tokenStorage = {
    getAccess: () => localStorage.getItem(ACCESS_KEY),

    getRefresh: () => localStorage.getItem(REFRESH_KEY),

    set: ({ accessToken, refreshToken } = {}) => {
        if (accessToken) localStorage.setItem(ACCESS_KEY, accessToken)
        if (refreshToken) localStorage.setItem(REFRESH_KEY, refreshToken)
    },

    clear: () => {
        localStorage.removeItem(ACCESS_KEY)
        localStorage.removeItem(REFRESH_KEY)
    },
}

export default tokenStorage

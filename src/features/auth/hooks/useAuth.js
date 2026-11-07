import { useSelector } from 'react-redux'
import { selectAccessToken, selectCurrentUser } from '../store/authSlice'
import { useGetMeQuery } from '../api/authApi'

export const useAuth = () => {
    const token = useSelector(selectAccessToken)
    const userInStore = useSelector(selectCurrentUser)

    const { data: fetchedUser } = useGetMeQuery(undefined, {
        skip: !token || Boolean(userInStore),
    })

    const user = userInStore ?? fetchedUser

    return {
        user,
        isAuthenticated: Boolean(token),
    }
}

export default useAuth

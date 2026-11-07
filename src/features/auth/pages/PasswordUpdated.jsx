import { Link } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'
import AuthCard from '../components/AuthCard'
import AuthButton from '../components/AuthButton'

function PasswordUpdated() {
    return (
        <AuthLayout>
            <AuthCard closeTo="/login" className="max-w-[260px] p-6 text-center">
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-950">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="9" />
                        <path d="m8.5 12 2.5 2.5 4.5-5" />
                    </svg>
                </div>

                <h2 className="mt-4 text-[15px] font-bold leading-5 text-neutral-900 dark:text-white">
                    Password Updated Successfully
                </h2>
                <p className="mt-1.5 text-[11px] text-neutral-500 dark:text-neutral-400">
                    Your password has been updated successfully
                </p>

                <AuthButton as={Link} to="/login" className="mt-5">
                    Back To Signin
                </AuthButton>
            </AuthCard>
        </AuthLayout>
    )
}

export default PasswordUpdated

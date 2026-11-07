import { useState } from 'react'
import AuthLayout from '../components/AuthLayout'
import AuthCard from '../components/AuthCard'
import AuthInput from '../components/AuthInput'
import AuthButton from '../components/AuthButton'
import FormError from '../../../shared/components/ui/FormError'
import { useForgotPasswordMutation } from '../api/authApi'

function ForgotPassword() {
    const [email, setEmail] = useState('')
    const [forgotPassword, { isLoading, error, isSuccess }] = useForgotPasswordMutation()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await forgotPassword(email).unwrap()
        } catch {
            // الخطأ بيتعرض تحت
        }
    }

    return (
        <AuthLayout>
            <AuthCard
                title="Forgot Password"
                subtitle="Enter your registered email address, we'll send you a code to reset your password."
                closeTo="/login"
            >
                {isSuccess ? (
                    <p className="mt-5 text-[13px] leading-5 text-green-700 dark:text-emerald-400">
                        Check your inbox. We sent a reset link to {email}.
                    </p>
                ) : (
                    <form onSubmit={handleSubmit} className="mt-5 space-y-4">

                        <AuthInput
                            id="email"
                            name="email"
                            label="Email Address"
                            type="email"
                            autoComplete="email"
                            placeholder="shane.watson@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <FormError error={error} />

                        <AuthButton type="submit" disabled={isLoading}>
                            {isLoading ? 'Sending…' : 'Send Link'}
                        </AuthButton>

                    </form>
                )}
            </AuthCard>
        </AuthLayout>
    )
}

export default ForgotPassword
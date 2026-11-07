import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'
import AuthCard from '../components/AuthCard'
import AuthButton from '../components/AuthButton'
import PasswordField from '../components/PasswordField'
import FormError from '../../../shared/components/ui/FormError'
import { useResetPasswordMutation } from '../api/authApi'

function ResetPassword() {
    const [form, setForm] = useState({ password: '', confirmPassword: '' })
    const [mismatch, setMismatch] = useState(false)

    const [searchParams] = useSearchParams()
    const token = searchParams.get('token')

    const navigate = useNavigate()
    const [resetPassword, { isLoading, error }] = useResetPasswordMutation()

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
        setMismatch(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (form.password !== form.confirmPassword) {
            setMismatch(true)
            return
        }

        try {
            await resetPassword({
                token,
                newPassword: form.password,
            }).unwrap()

            navigate('/password-updated')
        } catch {
            // الخطأ بيتعرض تحت
        }
    }

    return (
        <AuthLayout>
            <AuthCard
                title="Enter New Password"
                subtitle="Please Enter Your New Password"
                closeTo="/login"
            >
                <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">

                    <PasswordField
                        id="password"
                        name="password"
                        label="Password"
                        value={form.password}
                        onChange={handleChange}
                    />

                    <PasswordField
                        id="confirmPassword"
                        name="confirmPassword"
                        label="Confirm Password"
                        value={form.confirmPassword}
                        onChange={handleChange}
                    />

                    {mismatch && (
                        <p className="text-[12px] text-red-600 dark:text-rose-400">
                            Passwords do not match
                        </p>
                    )}

                    {!token && (
                        <p className="text-[12px] text-red-600 dark:text-rose-400">
                            Reset link is invalid or expired
                        </p>
                    )}

                    <FormError error={error} />

                    <AuthButton type="submit" disabled={isLoading || !token}>
                        {isLoading ? 'Saving…' : 'Submit'}
                    </AuthButton>

                </form>
            </AuthCard>
        </AuthLayout>
    )
}

export default ResetPassword
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'
import AuthCard from '../components/AuthCard'
import AuthInput from '../components/AuthInput'
import AuthButton from '../components/AuthButton'
import PasswordField from '../components/PasswordField'
import { useLoginMutation } from '../api/authApi'
import FormError from '../../../shared/components/ui/FormError'

function Login() {
    const [form, setForm] = useState({ email: '', password: '', rememberMe: true })

    const navigate = useNavigate()
    const [login, { isLoading, error }] = useLoginMutation()

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await login({
                email: form.email,
                password: form.password,
            }).unwrap()

            navigate('/')
        } catch {
            // Error displayed below
        }
    }

    return (
        <AuthLayout>
            <AuthCard title="Welcome" subtitle="Please login here">
                <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">

                    <AuthInput
                        id="email"
                        name="email"
                        label="Email Address"
                        type="email"
                        autoComplete="email"
                        placeholder="shane.watson@example.com"
                        value={form.email}
                        onChange={handleChange}
                    />

                    <PasswordField
                        id="password"
                        name="password"
                        label="Password"
                        autoComplete="current-password"
                        value={form.password}
                        onChange={handleChange}
                    />

                    <div className="flex items-center justify-between">
                        <label className="flex cursor-pointer items-center gap-2 text-[12px] text-neutral-700 dark:text-neutral-300">
                            <input
                                name="rememberMe"
                                type="checkbox"
                                checked={form.rememberMe}
                                onChange={handleChange}
                                className="h-3.5 w-3.5 rounded-sm accent-neutral-900 dark:accent-neutral-100"
                            />
                            Remember Me
                        </label>

                        <Link to="/forgot-password" className="text-[12px] text-neutral-900 hover:underline dark:text-neutral-200">
                            Forgot Password?
                        </Link>
                    </div>

                    <FormError error={error} />

                    <div className="space-y-2.5 pt-1">
                        <AuthButton type="submit" disabled={isLoading}>
                            {isLoading ? 'Signing in…' : 'Signin'}
                        </AuthButton>

                        <AuthButton as={Link} to="/register" variant="outline">
                            Register
                        </AuthButton>
                    </div>

                </form>
            </AuthCard>
        </AuthLayout>
    )
}

export default Login

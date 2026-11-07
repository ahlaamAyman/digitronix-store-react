import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'
import AuthCard from '../components/AuthCard'
import AuthInput from '../components/AuthInput'
import AuthButton from '../components/AuthButton'
import PasswordField from '../components/PasswordField'
import { useRegisterMutation } from '../api/authApi'
import FormError from '../../../shared/components/ui/FormError'

function Register() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        agreeTerms: true,
    })
    const navigate = useNavigate()
    const [register, { isLoading, error }] = useRegisterMutation()

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!form.agreeTerms) return

        try {
            await register({
                name: form.name,
                email: form.email,
                password: form.password,
                role: 'CUSTOMER',
            }).unwrap()

            navigate('/')
        } catch {
            // Error displayed below
        }
    }

    return (
        <AuthLayout>
            <AuthCard title="Create New Account" subtitle="Please Enter Details">
                <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">

                    <AuthInput
                        id="name"
                        name="name"
                        label="Name"
                        autoComplete="name"
                        placeholder="Shane Watson"
                        value={form.name}
                        onChange={handleChange}
                    />

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
                        value={form.password}
                        onChange={handleChange}
                    />

                    <label className="flex cursor-pointer items-center gap-2 text-[12px] text-neutral-700 dark:text-neutral-300">
                        <input
                            name="agreeTerms"
                            type="checkbox"
                            checked={form.agreeTerms}
                            onChange={handleChange}
                            className="h-3.5 w-3.5 rounded-sm accent-neutral-900 dark:accent-neutral-100"
                        />
                        I Agree The Terms &amp; Conditions
                    </label>

                    <div className="space-y-2.5 pt-1">
                        <FormError error={error} />

                        <AuthButton type="submit" disabled={isLoading}>
                            {isLoading ? 'Creating account…' : 'Register'}
                        </AuthButton>

                        <AuthButton as={Link} to="/login" variant="outline">
                            Signin
                        </AuthButton>
                    </div>

                </form>
            </AuthCard>
        </AuthLayout>
    )
}

export default Register

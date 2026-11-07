import { useState } from 'react'

function PasswordField({ id, name, label, value, onChange, autoComplete = 'new-password' }) {
    const [visible, setVisible] = useState(false)

    return (
        <div>
            <label htmlFor={id} className="mb-1 block text-[11px] text-neutral-500 dark:text-neutral-400">
                {label}
            </label>

            <div className="relative">
                <input
                    id={id}
                    name={name}
                    type={visible ? 'text' : 'password'}
                    autoComplete={autoComplete}
                    placeholder="••••••••••"
                    value={value}
                    onChange={onChange}
                    className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-3 pr-10 text-base text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-neutral-900 sm:py-2.5 sm:text-[13px] dark:border-neutral-700 dark:bg-[#18181b] dark:text-white dark:placeholder:text-neutral-500 dark:focus:border-neutral-400"
                />

                <button
                    type="button"
                    onClick={() => setVisible((v) => !v)}
                    aria-label={visible ? 'Hide password' : 'Show password'}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 transition hover:text-neutral-900 cursor-pointer dark:text-neutral-500 dark:hover:text-white"
                >
                    {visible ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                            <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
                            <circle cx="12" cy="12" r="3" />
                        </svg>
                    ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                            <path d="M3 3l18 18" />
                            <path d="M10.6 10.6a3 3 0 0 0 4.2 4.2" />
                            <path d="M9.4 5.2A9.6 9.6 0 0 1 12 5c6.5 0 10 7 10 7a17 17 0 0 1-3.2 4.1M6.2 6.7A17 17 0 0 0 2 12s3.5 7 10 7a9.7 9.7 0 0 0 3.4-.6" />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    )
}

export default PasswordField

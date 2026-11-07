import { Link } from 'react-router-dom'

function AuthCard({ title, subtitle, closeTo = '/', className = '', children }) {
    return (
        <div className={`relative z-20 w-full rounded-t-3xl bg-white px-6 pb-10 pt-7 shadow-2xl lg:max-w-[320px] lg:rounded-2xl lg:p-5 dark:border dark:border-neutral-800 dark:bg-[#141416] ${className}`}>
            <Link
                to={closeTo}
                aria-label="Close"
                className="absolute right-5 top-6 text-neutral-400 transition hover:text-neutral-900 lg:right-4 lg:top-4 dark:text-neutral-500 dark:hover:text-white"
            >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M18 6 6 18M6 6l12 12" />
                </svg>
            </Link>

            {title && (
                <h2 className="text-2xl font-bold tracking-tight text-neutral-900 lg:text-xl dark:text-white">{title}</h2>
            )}

            {subtitle && (
                <p className="mt-1 pr-6 text-sm leading-5 text-neutral-500 lg:mt-0.5 lg:text-[11px] lg:leading-4 dark:text-neutral-400">{subtitle}</p>
            )}

            {children}
        </div>
    )
}

export default AuthCard

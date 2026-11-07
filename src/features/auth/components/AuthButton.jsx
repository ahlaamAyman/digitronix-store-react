const variants = {
    primary: 'bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200',
    outline: 'border border-neutral-300 text-neutral-900 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800',
}

function AuthButton({ variant = 'primary', as: Tag = 'button', className = '', children, ...props }) {
    return (
        <Tag
            className={`block w-full rounded-full py-3 text-center text-sm font-medium transition cursor-pointer sm:py-2.5 sm:text-[13px] ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </Tag>
    )
}

export default AuthButton

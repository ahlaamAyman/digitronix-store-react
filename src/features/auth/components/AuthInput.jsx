function AuthInput({ id, name, label, type = 'text', value, onChange, ...props }) {
    return (
        <div>
            <label htmlFor={id} className="mb-1 block text-[11px] text-neutral-500 dark:text-neutral-400">
                {label}
            </label>

            <input
                id={id}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-3 text-base text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-neutral-900 sm:py-2.5 sm:text-[13px] dark:border-neutral-700 dark:bg-[#18181b] dark:text-white dark:placeholder:text-neutral-500 dark:focus:border-neutral-400"
                {...props}
            />
        </div>
    )
}

export default AuthInput

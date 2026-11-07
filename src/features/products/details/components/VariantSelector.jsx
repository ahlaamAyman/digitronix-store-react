function VariantSelector({ label, value, options, onChange }) {
    if (!options?.length) return null

    return (
        <div>
            <p className="text-[12px] text-gray-500 dark:text-neutral-400">
                {label}: <span className="text-gray-900 dark:text-white font-medium">{value}</span>
            </p>

            <div className="mt-2 flex flex-wrap gap-2">
                {options.map((option) => (
                    <button
                        key={option}
                        type="button"
                        onClick={() => onChange(option)}
                        className={`rounded-lg border px-4 py-2 text-[12px] transition cursor-pointer ${value === option
                                ? 'border-gray-900 dark:border-white text-gray-900 dark:text-white font-medium'
                                : 'border-gray-200 dark:border-neutral-800 text-gray-600 dark:text-neutral-300 hover:border-gray-400 dark:hover:border-neutral-600'
                            }`}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default VariantSelector
function ColorSelector({ value, options, onChange }) {
    if (!options?.length) return null

    return (
        <div>
            <p className="text-[12px] text-gray-500 dark:text-neutral-400">
                Color: <span className="text-gray-900 dark:text-white font-medium">{value?.name}</span>
            </p>

            <div className="mt-2 flex flex-wrap gap-2">
                {options.map((color) => (
                    <button
                        key={color.name}
                        type="button"
                        aria-label={color.name}
                        onClick={() => onChange(color)}
                        className={`h-14 w-14 overflow-hidden rounded-lg border p-1 transition cursor-pointer dark:bg-[#18181b] ${value?.name === color.name
                                ? 'border-gray-900 dark:border-white'
                                : 'border-gray-200 dark:border-neutral-800 hover:border-gray-400 dark:hover:border-neutral-600'
                            }`}
                    >
                        <img
                            src={color.image}
                            alt=""
                            className="h-full w-full object-contain"
                        />
                    </button>
                ))}
            </div>
        </div>
    )
}

export default ColorSelector
import { X } from 'lucide-react'

function FilterSection({ title, options, value, onChange }) {
    return (
        <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4">
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">{title}</h3>

            <div className="mt-3 space-y-2.5">
                {options.map((option) => (
                    <label
                        key={option}
                        className="flex cursor-pointer items-center gap-2.5 text-[13px] text-neutral-600 dark:text-neutral-300"
                    >
                        <input
                            type="radio"
                            checked={value === option}
                            onChange={() => onChange(option)}
                            className="h-3.5 w-3.5 accent-neutral-900 dark:accent-white"
                        />
                        {option}
                    </label>
                ))}
            </div>
        </div>
    )
}

function FilterPanel({
    isOpen,
    onClose,
    categories,
    brands,
    selectedCategory,
    setSelectedCategory,
    selectedBrand,
    setSelectedBrand,
    maxPrice,
    setMaxPrice,
    onReset,
}) {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-xs" onClick={onClose} />

            <div className="relative ml-auto flex h-full w-full max-w-sm flex-col bg-white dark:bg-[#121214] border-l border-neutral-100 dark:border-neutral-800 transition-colors">

                <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800 px-6 py-5">
                    <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">Filter</h2>

                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close filters"
                        className="text-neutral-400 transition hover:text-neutral-900 dark:hover:text-white cursor-pointer"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="flex-1 space-y-4 overflow-y-auto p-6">

                    <FilterSection
                        title="Categories"
                        options={categories}
                        value={selectedCategory}
                        onChange={setSelectedCategory}
                    />

                    <FilterSection
                        title="Brands"
                        options={brands}
                        value={selectedBrand}
                        onChange={setSelectedBrand}
                    />

                    <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4">
                        <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">Filter by Price</h3>

                        <p className="mt-2 text-[13px] text-neutral-600 dark:text-neutral-400">
                            Price: $0 – ${maxPrice}
                        </p>

                        <input
                            type="range"
                            min="400"
                            max="2000"
                            step="50"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(Number(e.target.value))}
                            className="mt-3 w-full accent-neutral-900 dark:accent-white"
                        />
                    </div>

                </div>

                <div className="flex gap-3 border-t border-neutral-100 dark:border-neutral-800 p-6">
                    <button
                        type="button"
                        onClick={onReset}
                        className="flex-1 rounded-full border border-neutral-300 dark:border-neutral-700 py-3 text-[13px] font-medium text-neutral-900 dark:text-neutral-200 transition hover:bg-neutral-50 dark:hover:bg-neutral-850 cursor-pointer"
                    >
                        Reset
                    </button>

                    <button
                        type="button"
                        onClick={onClose}
                        className="flex-1 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 py-3 text-[13px] font-medium transition hover:bg-neutral-800 dark:hover:bg-neutral-200 cursor-pointer"
                    >
                        Apply Filter
                    </button>
                </div>

            </div>
        </div>
    )
}

export default FilterPanel
import { Minus, Plus } from 'lucide-react'

function QuantityInput({ value, onChange, max = 99 }) {
    return (
        <div className="flex items-center gap-3 rounded-full border border-gray-200 dark:border-neutral-800 bg-white dark:bg-[#121214] px-3 py-2">
            <button
                type="button"
                aria-label="Decrease quantity"
                onClick={() => onChange(Math.max(1, value - 1))}
                disabled={value <= 1}
                className="text-gray-600 dark:text-neutral-400 transition hover:text-gray-900 dark:hover:text-white disabled:opacity-30 cursor-pointer"
            >
                <Minus size={14} />
            </button>

            <span className="min-w-[20px] text-center text-[13px] text-neutral-900 dark:text-white font-medium">{value}</span>

            <button
                type="button"
                aria-label="Increase quantity"
                onClick={() => onChange(Math.min(max, value + 1))}
                disabled={value >= max}
                className="text-gray-600 dark:text-neutral-400 transition hover:text-gray-900 dark:hover:text-white disabled:opacity-30 cursor-pointer"
            >
                <Plus size={14} />
            </button>
        </div>
    )
}

export default QuantityInput
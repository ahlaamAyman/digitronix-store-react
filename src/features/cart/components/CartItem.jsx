import { X, PackageCheck, Truck } from 'lucide-react'
import { formatPrice } from '../../../shared/utils/formatPrice'

function CartItem({ item, onRemove, onToggle, onQuantityChange }) {
    const itemImage = item.image || (Array.isArray(item.images) ? item.images[0] : item.images)
    const itemKey = item.key ?? item.id

    return (
        <article className="relative rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121214] p-4 transition-colors">

            <button
                type="button"
                onClick={() => onRemove(itemKey)}
                aria-label="Remove item"
                className="absolute right-4 top-4 text-neutral-400 transition hover:text-neutral-900 dark:hover:text-white cursor-pointer"
            >
                <X size={16} />
            </button>

            <div className="flex gap-4">

                <label className="flex cursor-pointer items-start pt-1">
                    <input
                        type="checkbox"
                        checked={item.selected}
                        onChange={() => onToggle(itemKey)}
                        className="h-4 w-4 accent-neutral-900 dark:accent-white cursor-pointer"
                    />
                </label>

                <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-neutral-100 dark:bg-[#18181b] flex items-center justify-center">
                    <img
                        src={itemImage}
                        alt={item.name}
                        className="h-full w-full object-contain p-2"
                    />
                </div>

                <div className="min-w-0 flex-1 pr-6">
                    <h3 className="line-clamp-2 text-[13px] font-medium leading-5 text-neutral-900 dark:text-white">
                        {item.name}
                    </h3>

                    <div className="mt-1.5 flex items-center gap-2">
                        <span className="text-[13px] font-semibold text-neutral-900 dark:text-white">
                            {formatPrice(item.price)}
                        </span>

                        {item.oldPrice > item.price && (
                            <span className="text-[11px] text-neutral-400 dark:text-neutral-500 line-through">
                                {formatPrice(item.oldPrice)}
                            </span>
                        )}
                    </div>

                    <select
                        value={item.quantity}
                        onChange={(e) => onQuantityChange(itemKey, Number(e.target.value))}
                        className="mt-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white px-3 py-1 text-[11px] outline-none cursor-pointer"
                    >
                        {Array.from({ length: 10 }).map((_, index) => (
                            <option key={index} value={index + 1}>
                                Qty: {index + 1}
                            </option>
                        ))}
                    </select>

                    <div className="mt-3 space-y-1.5 text-[11px] text-neutral-500 dark:text-neutral-400">
                        <p className="flex items-center gap-1.5">
                            <PackageCheck size={13} strokeWidth={1.6} />
                            <span className="text-neutral-900 dark:text-white font-medium">30 Days</span> return available
                        </p>

                        <p className="flex items-center gap-1.5">
                            <Truck size={13} strokeWidth={1.6} />
                            Delivered by <span className="text-neutral-900 dark:text-white font-medium">Mar 29, 2025</span>
                        </p>
                    </div>
                </div>
            </div>

        </article>
    )
}

export default CartItem
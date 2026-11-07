import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'

import { useCart } from '../hooks/useCart'
import { formatPrice } from '../../../shared/utils/formatPrice'

function CartDrawer({ isOpen, onClose }) {
    const { items, subtotal } = useCart()

    useEffect(() => {
        if (!isOpen) return

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose()
        }

        document.addEventListener('keydown', handleKeyDown)
        document.body.style.overflow = 'hidden'

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.body.style.overflow = ''
        }
    }, [isOpen, onClose])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex">

            <div className="absolute inset-0 bg-black/40 backdrop-blur-xs" onClick={onClose} />

            <aside className="relative ml-auto flex h-full w-full max-w-md flex-col bg-white dark:bg-[#121214] border-l border-neutral-100 dark:border-neutral-800 transition-colors">

                {/* Header */}
                <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800 px-6 py-5">
                    <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
                        Your Cart
                    </h2>

                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close cart"
                        className="text-neutral-400 transition hover:text-neutral-900 dark:hover:text-white cursor-pointer"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Items */}
                <div className="flex-1 overflow-y-auto px-6">
                    {items.length === 0 ? (
                        <p className="py-12 text-center text-[13px] text-neutral-500 dark:text-neutral-400">
                            Your cart is empty.
                        </p>
                    ) : (
                        items.map((item) => (
                            <article
                                key={item.key}
                                className="flex gap-4 border-b border-neutral-100 dark:border-neutral-800/80 py-4"
                            >
                                <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-neutral-100 dark:bg-[#18181b] flex items-center justify-center">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="h-full w-full object-contain p-1.5"
                                    />
                                </div>

                                <div className="min-w-0 flex-1">
                                    <h3 className="text-[13px] font-medium leading-5 text-neutral-900 dark:text-white">
                                        {item.name}
                                    </h3>

                                    <div className="mt-1 flex items-center gap-2">
                                        <span className="text-[13px] font-semibold text-neutral-900 dark:text-white">
                                            {formatPrice(item.price)}
                                        </span>

                                        {item.oldPrice > item.price && (
                                            <span className="text-[12px] text-neutral-400 dark:text-neutral-500 line-through">
                                                {formatPrice(item.oldPrice)}
                                            </span>
                                        )}
                                    </div>

                                    <p className="mt-0.5 text-[12px] text-neutral-600 dark:text-neutral-400">
                                        QTY: {item.quantity}
                                    </p>
                                </div>
                            </article>
                        ))
                    )}
                </div>

                {/* Footer */}
                <div className="border-t border-neutral-100 dark:border-neutral-800 px-6 py-5">
                    <div className="flex items-center justify-between">
                        <span className="text-[15px] font-semibold text-neutral-900 dark:text-white">
                            Subtotal
                        </span>
                        <span className="text-lg font-semibold text-neutral-900 dark:text-white">
                            {formatPrice(subtotal)}
                        </span>
                    </div>

                    <div className="mt-4 flex gap-3">
                        <Link
                            to="/cart"
                            onClick={onClose}
                            className="flex-1 rounded-full border border-neutral-300 dark:border-neutral-700 py-3 text-center text-[13px] font-medium text-neutral-900 dark:text-neutral-200 transition hover:bg-neutral-50 dark:hover:bg-neutral-850 cursor-pointer"
                        >
                            View Cart
                        </Link>

                        <Link
                            to="/checkout/address"
                            onClick={onClose}
                            className="flex-1 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 py-3 text-center text-[13px] font-medium transition hover:bg-neutral-800 dark:hover:bg-neutral-200 cursor-pointer"
                        >
                            Checkout
                        </Link>
                    </div>
                </div>

            </aside>
        </div>
    )
}

export default CartDrawer
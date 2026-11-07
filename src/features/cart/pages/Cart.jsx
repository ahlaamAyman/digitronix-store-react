import { Link } from 'react-router-dom'
import { Trash2 } from 'lucide-react'

import { useCart } from '../hooks/useCart'
import CartItem from '../components/CartItem'
import CartSummary from '../components/CartSummary'

function Cart() {
    const {
        items,
        subtotal,
        taxes,
        deliveryFee,
        grandTotal,
        selectedCount,
        allSelected,
        remove,
        setQuantity,
        toggle,
        toggleAll,
        removeChecked,
    } = useCart()

    if (items.length === 0) {
        return (
            <div className="px-5 py-20 text-center">
                <h1 className="text-xl font-semibold text-neutral-900 dark:text-white">
                    Your cart is empty
                </h1>

                <Link
                    to="/shop"
                    className="mt-5 inline-block rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 px-6 py-2.5 text-[13px] font-medium transition hover:bg-neutral-800 dark:hover:bg-neutral-200 cursor-pointer"
                >
                    Continue Shopping
                </Link>
            </div>
        )
    }

    return (
        <div className="px-5 py-6 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[1440px]">

                <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">My Cart</h1>

                <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_360px]">

                    <div>
                        <div className="flex flex-wrap items-center justify-between gap-3">
                            <label className="flex cursor-pointer items-center gap-2.5 text-[13px] text-neutral-900 dark:text-neutral-200">
                                <input
                                    type="checkbox"
                                    checked={allSelected}
                                    onChange={toggleAll}
                                    className="h-4 w-4 accent-neutral-900 dark:accent-white"
                                />
                                {selectedCount}/{items.length} Items Selected
                            </label>

                            <div className="flex items-center gap-2">
                                <button
                                    type="button"
                                    onClick={removeChecked}
                                    disabled={selectedCount === 0}
                                    aria-label="Delete selected"
                                    className="flex h-9 w-9 items-center justify-center rounded-full bg-red-50 dark:bg-red-950/40 text-red-500 dark:text-red-400 transition hover:bg-red-100 dark:hover:bg-red-900/50 disabled:opacity-40 cursor-pointer"
                                >
                                    <Trash2 size={15} />
                                </button>

                                <button
                                    type="button"
                                    className="rounded-full border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-[12px] font-medium text-neutral-900 dark:text-neutral-200 transition hover:bg-neutral-50 dark:hover:bg-neutral-850 cursor-pointer"
                                >
                                    Move To Wishlist
                                </button>
                            </div>
                        </div>

                        <div className="mt-4 space-y-3">
                            {items.map((item) => (
                                <CartItem
                                    key={item.key || item.id}
                                    item={item}
                                    onRemove={remove}
                                    onToggle={toggle}
                                    onQuantityChange={setQuantity}
                                />
                            ))}
                        </div>
                    </div>

                    <CartSummary
                        subtotal={subtotal}
                        taxes={taxes}
                        deliveryFee={deliveryFee}
                        grandTotal={grandTotal}
                    />

                </div>
            </div>
        </div>
    )
}

export default Cart
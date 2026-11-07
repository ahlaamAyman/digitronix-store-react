import { useState } from 'react'
import { formatPrice } from '../../../shared/utils/formatPrice'
import { Link } from 'react-router-dom'

function CartSummary({ subtotal, taxes, deliveryFee, grandTotal }) {
    const [code, setCode] = useState('')

    const handleApply = () => {
        console.log('apply code →', code)
    }

    return (
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121214] p-5 transition-colors">

            <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800 pb-4">
                <span className="text-[13px] text-neutral-600 dark:text-neutral-400">Subtotal</span>
                <span className="text-[15px] font-semibold text-neutral-900 dark:text-white">
                    {formatPrice(subtotal)}
                </span>
            </div>

            <div className="mt-4">
                <label className="text-[12px] text-neutral-500 dark:text-neutral-400">
                    Enter Discount Code
                </label>

                <div className="mt-2 flex overflow-hidden rounded-full border border-neutral-200 dark:border-neutral-750">
                    <input
                        type="text"
                        placeholder="OFFER50"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className="min-w-0 flex-1 px-4 py-2.5 text-[13px] bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 outline-none"
                    />

                    <button
                        type="button"
                        onClick={handleApply}
                        className="shrink-0 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 px-5 text-[12px] font-medium uppercase transition hover:bg-neutral-800 dark:hover:bg-neutral-200 cursor-pointer"
                    >
                        Apply
                    </button>
                </div>
            </div>

            <div className="mt-4 space-y-2.5 border-b border-neutral-100 dark:border-neutral-800 pb-4">
                <div className="flex items-center justify-between text-[13px]">
                    <span className="text-neutral-600 dark:text-neutral-400">Taxes</span>
                    <span className="text-neutral-900 dark:text-white">{formatPrice(taxes)}</span>
                </div>

                <div className="flex items-center justify-between text-[13px]">
                    <span className="text-neutral-600 dark:text-neutral-400">Delivery Fee</span>
                    <span className="font-medium text-green-600 dark:text-green-400">
                        {deliveryFee === 0 ? 'FREE' : formatPrice(deliveryFee)}
                    </span>
                </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
                <span className="text-[15px] font-semibold text-neutral-900 dark:text-white">
                    Grand Total
                </span>
                <span className="text-lg font-semibold text-neutral-900 dark:text-white">
                    {formatPrice(grandTotal)}
                </span>
            </div>

            <Link
                to="/checkout/address"
                className="mt-5 block w-full rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 py-3 text-center text-[13px] font-medium transition hover:bg-neutral-800 dark:hover:bg-neutral-200 cursor-pointer"
            >
                Checkout
            </Link>

        </div>
    )
}

export default CartSummary
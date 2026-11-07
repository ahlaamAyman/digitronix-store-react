
import { Check } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function OrderSuccessModal({ isOpen, onClose, orderId }) {
    const navigate = useNavigate()

    if (!isOpen) return null

    const handleBackToHome = () => {
        onClose()
        navigate('/')
    }

    const handleViewOrder = () => {
        onClose()
        navigate('/account/orders')
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 px-4 backdrop-blur-[1px]">

            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="order-success-title"
                className="w-full max-w-[400px] rounded-[32px] bg-white px-6 py-8 text-center shadow-xl sm:px-8 dark:border dark:border-neutral-800 dark:bg-[#141416]"
            >
                {/* Success Icon */}
                <div className="mx-auto flex size-[108px] items-center justify-center rounded-full bg-neutral-200 dark:bg-neutral-800">
                    <div className="flex size-[84px] items-center justify-center rounded-full bg-neutral-300 dark:bg-neutral-700">
                        <div className="flex size-16 items-center justify-center rounded-full bg-neutral-950 text-white dark:bg-white dark:text-neutral-950">
                            <Check size={24} strokeWidth={1.8} />
                        </div>
                    </div>
                </div>

                {/* Success Message */}
                <h2
                    id="order-success-title"
                    className="mx-auto mt-6 max-w-[280px] text-[28px] font-semibold leading-tight tracking-tight text-neutral-950 dark:text-white"
                >
                    Your Order is Confirmed
                </h2>

                <p className="mt-3 text-[13px] leading-5 text-neutral-600 dark:text-neutral-400">
                    Thanks for shopping! Your order hasn’t shipped yet,
                    but we will send you an email when it’s done.
                </p>

                {orderId && (
                    <p className="mt-3 text-xs text-neutral-500 dark:text-neutral-400">
                        Order number: {orderId}
                    </p>
                )}

                {/* Actions */}
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <button
                        type="button"
                        onClick={handleBackToHome}
                        className="flex-1 rounded-full border border-neutral-950 px-4 py-4 text-sm font-medium text-neutral-950 transition hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
                    >
                        Back To Home
                    </button>

                    <button
                        type="button"
                        onClick={handleViewOrder}
                        className="flex-1 rounded-full bg-neutral-950 px-4 py-4 text-sm font-medium text-white transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
                    >
                        View Order
                    </button>
                </div>
            </div>
        </div>
    )
}

export default OrderSuccessModal

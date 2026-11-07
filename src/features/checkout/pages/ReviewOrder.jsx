import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


import ReviewItem from '../components/ReviewItem'
import ReviewSection from '../components/ReviewSection'
import CheckoutSteps from '../components/CheckoutSteps'

import { selectAddresses, selectSelectedId } from '../store/addressSlice'
import { selectPaymentMethod, selectCard } from '../store/paymentSlice'
import { useCart } from '../../cart/hooks/useCart'
import formatPrice from '../../../shared/utils/formatPrice'

import { useState } from 'react'
import OrderSuccessModal from '../components/OrderSuccessModal'

function ReviewOrder() {
    const navigate = useNavigate()

    const { items, subtotal, taxes, deliveryFee, grandTotal } = useCart()

    const addresses = useSelector(selectAddresses)
    const selectedId = useSelector(selectSelectedId)
    const address = addresses.find((a) => a.id === selectedId)

    const method = useSelector(selectPaymentMethod)
    const card = useSelector(selectCard)

    const selectedItems = items.filter((item) => item.selected)

    const handlePlaceOrder = () => {
        console.log('place order →', { items: selectedItems, address, method })
    }

    const [isOrderSuccessOpen, setIsOrderSuccessOpen] = useState(false)

    return (
        <div className="px-5 py-6 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[1440px]">

                <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">
                    Review Order
                </h1>

                <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_360px]">

                    <div>
                        <CheckoutSteps current="review" />

                        <h2 className="mt-8 text-[15px] font-semibold text-neutral-900 dark:text-white">
                            Estimated Delivery: March 29, 2025
                        </h2>

                        <div className="mt-2">
                            {selectedItems.map((item) => (
                                <ReviewItem key={item.key} item={item} />
                            ))}
                        </div>

                        <ReviewSection
                            title="Shipping Address"
                            onEdit={() => navigate('/checkout/address')}
                        >
                            {address ? (
                                <>
                                    <p className="text-[13px] font-medium text-neutral-900 dark:text-white">
                                        {address.name}
                                    </p>
                                    <p className="mt-1 text-[13px] text-neutral-600 dark:text-neutral-400">
                                        {address.address}
                                    </p>
                                </>
                            ) : (
                                <p className="text-[13px] text-neutral-500 dark:text-neutral-400">
                                    No address selected
                                </p>
                            )}
                        </ReviewSection>

                        <ReviewSection
                            title="Payment Method"
                            onEdit={() => navigate('/checkout/payment')}
                        >
                            {method === 'card' ? (
                                <>
                                    <p className="text-[13px] font-medium text-neutral-900 dark:text-white">
                                        Credit Card
                                    </p>
                                    <p className="mt-1 text-[13px] text-neutral-600 dark:text-neutral-400">
                                        {card?.number || 'No card added'}
                                    </p>
                                </>
                            ) : (
                                <p className="text-[13px] font-medium text-neutral-900 dark:text-white">
                                    PayPal
                                </p>
                            )}
                        </ReviewSection>
                    </div>

                    {/* Summary */}
                    <div className="h-fit rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-[#121214]">

                        <div className="flex items-center justify-between border-b border-neutral-100 pb-4 text-[13px] dark:border-neutral-800">
                            <span className="text-neutral-600 dark:text-neutral-400">Subtotal</span>
                            <span className="font-semibold text-neutral-900 dark:text-white">
                                {formatPrice(subtotal)}
                            </span>
                        </div>

                        <div className="flex items-center justify-between border-b border-neutral-100 py-4 text-[13px] dark:border-neutral-800">
                            <span className="text-neutral-600 dark:text-neutral-400">Taxes</span>
                            <span className="text-neutral-900 dark:text-white">{formatPrice(taxes)}</span>
                        </div>

                        <div className="flex items-center justify-between border-b border-neutral-100 py-4 text-[13px] dark:border-neutral-800">
                            <span className="text-neutral-600 dark:text-neutral-400">Delivery Fee</span>
                            <span className="font-medium text-green-600 dark:text-emerald-400">
                                {deliveryFee === 0 ? 'FREE' : formatPrice(deliveryFee)}
                            </span>
                        </div>

                        <div className="flex items-center justify-between py-4">
                            <span className="text-[15px] font-semibold text-neutral-900 dark:text-white">
                                Grand Total
                            </span>
                            <span className="text-lg font-semibold text-neutral-900 dark:text-white">
                                {formatPrice(grandTotal)}
                            </span>
                        </div>

                        <button
                            type="button"
                            onClick={() => setIsOrderSuccessOpen(true)}
                            className="w-full rounded-full bg-neutral-950 py-3 text-[13px] font-medium text-white transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
                        >
                            Place Order
                        </button>

                    </div>

                </div>
            </div>
            <OrderSuccessModal
                isOpen={isOrderSuccessOpen}
                onClose={() => setIsOrderSuccessOpen(false)}
            />
        </div>
    )
}

export default ReviewOrder
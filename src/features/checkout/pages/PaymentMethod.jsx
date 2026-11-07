import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { useCart } from '../../cart/hooks/useCart'
import { formatPrice } from '../../../shared/utils/formatPrice'

import CheckoutSteps from '../components/CheckoutSteps'
import PaymentOption from '../components/PaymentOption'
import CardForm from '../components/CardForm'

import {
    selectPaymentMethod,
    selectCard,
    setPaymentMethod,
    setCardDetails,
} from '../store/paymentSlice'


function PaymentMethod() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const method = useSelector(selectPaymentMethod)
    const card = useSelector(selectCard)

    const { subtotal, taxes, deliveryFee, grandTotal } = useCart()

    const handleContinue = () => {
        navigate('/checkout/review')
    }

    return (
        <div className="px-5 py-6 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[1440px]">

                <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">
                    Payment Method
                </h1>

                <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_360px]">

                    <div>
                        <CheckoutSteps current="payment" />

                        <div className="mt-8 space-y-6">

                            <PaymentOption
                                id="card"
                                label="Credit/Debit Card"
                                isSelected={method === 'card'}
                                onSelect={(id) => dispatch(setPaymentMethod(id))}
                            >
                                <CardForm
                                    card={card}
                                    onChange={(patch) => dispatch(setCardDetails(patch))}
                                    onPay={handleContinue}
                                />
                            </PaymentOption>

                            <PaymentOption
                                id="paypal"
                                label="Paypal"
                                isSelected={method === 'paypal'}
                                onSelect={(id) => dispatch(setPaymentMethod(id))}
                            />

                        </div>
                    </div>

                    {/* Summary */}
                    <div className="h-fit rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121214] p-5 transition-colors">

                        <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800 pb-4 text-[13px]">
                            <span className="text-neutral-600 dark:text-neutral-400">Subtotal</span>
                            <span className="font-semibold text-neutral-900 dark:text-white">
                                {formatPrice(subtotal)}
                            </span>
                        </div>

                        <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800 py-4 text-[13px]">
                            <span className="text-neutral-600 dark:text-neutral-400">Taxes</span>
                            <span className="text-neutral-900 dark:text-white">{formatPrice(taxes)}</span>
                        </div>

                        <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800 py-4 text-[13px]">
                            <span className="text-neutral-600 dark:text-neutral-400">Delivery Fee</span>
                            <span className="font-medium text-green-600 dark:text-green-400">
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
                            onClick={handleContinue}
                            className="w-full rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 py-3 text-[13px] font-medium transition hover:bg-neutral-800 dark:hover:bg-neutral-200 cursor-pointer"
                        >
                            Continue
                        </button>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default PaymentMethod
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Plus } from 'lucide-react'

import { useCart } from '../../cart/hooks/useCart'
import formatPrice from '../../../shared/utils/formatPrice'
import CheckoutSteps from '../components/CheckoutSteps'
import AddressCard from '../components/AddressCard'
import {
    selectDefaultAddress,
    selectOtherAddresses,
    selectSelectedId,
    selectAddress,
    removeAddress,
    setDefaultAddress,
} from '../store/addressSlice'
import AddressForm from '../components/AddressForm'

function SelectAddress() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const defaultAddress = useSelector(selectDefaultAddress)
    const otherAddresses = useSelector(selectOtherAddresses)
    const selectedId = useSelector(selectSelectedId)

    const { subtotal, taxes, deliveryFee, grandTotal } = useCart()

    const [isFormOpen, setIsFormOpen] = useState(false)

    const handleSelect = (id) => dispatch(selectAddress(id))
    const handleRemove = (id) => dispatch(removeAddress(id))
    const handleSetDefault = (id) => dispatch(setDefaultAddress(id))

    return (
        <div className="px-5 py-6 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[1440px]">

                <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">
                    Select Address
                </h1>

                <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_360px]">

                    <div>
                        <CheckoutSteps current="address" />

                        {defaultAddress && (
                            <section className="mt-8">
                                <h2 className="text-[14px] font-semibold text-neutral-900 dark:text-white">
                                    Default Address
                                </h2>

                                <div className="mt-3">
                                    <AddressCard
                                        address={defaultAddress}
                                        isSelected={selectedId === defaultAddress.id}
                                        onSelect={handleSelect}
                                        onRemove={handleRemove}
                                        onSetDefault={handleSetDefault}
                                    />
                                </div>
                            </section>
                        )}

                        {otherAddresses.length > 0 && (
                            <section className="mt-8">
                                <h2 className="text-[14px] font-semibold text-neutral-900 dark:text-white">
                                    Other Address
                                </h2>

                                <div className="mt-3 space-y-3">
                                    {otherAddresses.map((address) => (
                                        <AddressCard
                                            key={address.id}
                                            address={address}
                                            isSelected={selectedId === address.id}
                                            onSelect={handleSelect}
                                            onRemove={handleRemove}
                                            onSetDefault={handleSetDefault}
                                        />
                                    ))}
                                </div>
                            </section>
                        )}

                        {!defaultAddress && otherAddresses.length === 0 && (
                            <p className="mt-8 rounded-2xl border border-dashed border-neutral-200 dark:border-neutral-800 p-8 text-center text-[13px] text-neutral-500 dark:text-neutral-400">
                                No saved addresses yet. Add one to continue.
                            </p>
                        )}

                        <button
                            type="button"
                            onClick={() => setIsFormOpen(true)}
                            className="mt-6 flex items-center gap-2 rounded-full border border-neutral-300 dark:border-neutral-700 px-5 py-2.5 text-[13px] font-medium text-neutral-900 dark:text-white transition hover:bg-neutral-50 dark:hover:bg-neutral-850 cursor-pointer"
                        >
                            <Plus size={16} strokeWidth={1.8} />
                            Add New Address
                        </button>
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
                            disabled={!selectedId}
                            onClick={() => navigate('/checkout/payment')}
                            className="w-full rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 py-3 text-[13px] font-medium transition hover:bg-neutral-800 dark:hover:bg-neutral-200 disabled:opacity-40 cursor-pointer"
                        >
                            Continue
                        </button>

                    </div>

                </div>
            </div>

            <AddressForm
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
            />
        </div>

    )
}

export default SelectAddress
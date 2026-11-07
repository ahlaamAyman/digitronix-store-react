function PaymentOption({ id, label, isSelected, onSelect, children }) {
    return (
        <div>
            <label className="flex cursor-pointer items-center gap-3">
                <input
                    type="radio"
                    name="payment-method"
                    checked={isSelected}
                    onChange={() => onSelect(id)}
                    className="h-4 w-4 accent-neutral-900 dark:accent-white cursor-pointer"
                />

                <span className="text-[15px] font-semibold text-neutral-900 dark:text-white">
                    {label}
                </span>
            </label>

            {isSelected && children && (
                <div className="mt-4">{children}</div>
            )}
        </div>
    )
}

export default PaymentOption
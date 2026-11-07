function CardForm({ card, onChange, onPay }) {
    const handleChange = (e) => {
        const { name, value } = e.target
        onChange({ [name]: value })
    }

    const inputClass =
        'w-full rounded-lg border border-neutral-200 dark:border-neutral-750 bg-white dark:bg-[#18181b] px-3 py-2.5 text-[13px] text-neutral-900 dark:text-white outline-none transition placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:border-neutral-900 dark:focus:border-white'

    return (
        <div>
            <div className="grid gap-4 sm:grid-cols-2">

                <div>
                    <label htmlFor="number" className="mb-1.5 block text-[12px] text-neutral-500 dark:text-neutral-400">
                        Card Number
                    </label>
                    <input
                        id="number"
                        name="number"
                        inputMode="numeric"
                        autoComplete="cc-number"
                        placeholder="7819 3726 XXXX 4625"
                        value={card.number}
                        onChange={handleChange}
                        className={inputClass}
                    />
                </div>

                <div>
                    <label htmlFor="holder" className="mb-1.5 block text-[12px] text-neutral-500 dark:text-neutral-400">
                        Card Holder Name
                    </label>
                    <input
                        id="holder"
                        name="holder"
                        autoComplete="cc-name"
                        placeholder="Shane Watson"
                        value={card.holder}
                        onChange={handleChange}
                        className={inputClass}
                    />
                </div>

                <div>
                    <label htmlFor="expiry" className="mb-1.5 block text-[12px] text-neutral-500 dark:text-neutral-400">
                        Expiry Date
                    </label>
                    <input
                        id="expiry"
                        name="expiry"
                        inputMode="numeric"
                        autoComplete="cc-exp"
                        placeholder="10/2030"
                        value={card.expiry}
                        onChange={handleChange}
                        className={inputClass}
                    />
                </div>

                <div>
                    <label htmlFor="cvc" className="mb-1.5 block text-[12px] text-neutral-500 dark:text-neutral-400">
                        CVC
                    </label>
                    <input
                        id="cvc"
                        name="cvc"
                        type="password"
                        inputMode="numeric"
                        autoComplete="cc-csc"
                        maxLength={4}
                        placeholder="••••"
                        value={card.cvc}
                        onChange={handleChange}
                        className={inputClass}
                    />
                </div>

            </div>

            <button
                type="button"
                onClick={onPay}
                className="mt-5 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 px-10 py-2.5 text-[13px] font-medium transition hover:bg-neutral-800 dark:hover:bg-neutral-200 cursor-pointer"
            >
                Pay Now
            </button>
        </div>
    )
}

export default CardForm
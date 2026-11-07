import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { X } from 'lucide-react'
import { addAddress } from '../store/addressSlice'

const emptyForm = {
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: 'United States',
    label: 'Home',
}

const cities = ['New Mexico', 'California', 'New Jersey', 'Illinois', 'South Dakota']
const countries = ['United States', 'Canada', 'United Kingdom']

function AddressForm({ isOpen, onClose }) {
    const dispatch = useDispatch()
    const [form, setForm] = useState(emptyForm)

    if (!isOpen) return null

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(addAddress(form))
        setForm(emptyForm)
        onClose()
    }

    const inputClass =
        'w-full rounded-lg border border-neutral-200 dark:border-neutral-750 bg-white dark:bg-[#18181b] px-3 py-2.5 text-[13px] text-neutral-900 dark:text-white outline-none transition placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:border-neutral-900 dark:focus:border-white'

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

            <div className="absolute inset-0 bg-black/40 backdrop-blur-xs" onClick={onClose} />

            <div className="relative z-10 max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white dark:bg-[#141416] border border-transparent dark:border-neutral-800 p-6 transition-colors shadow-2xl">

                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close"
                    className="absolute right-5 top-5 text-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition cursor-pointer"
                >
                    <X size={18} />
                </button>

                <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
                    Add New Address
                </h2>

                <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">

                    <div>
                        <label htmlFor="name" className="mb-1.5 block text-[12px] text-neutral-500">
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            placeholder="Shane Watson"
                            className={inputClass}
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="mb-1.5 block text-[12px] text-neutral-500">
                            Email Address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            placeholder="shane.watson@example.com"
                            className={inputClass}
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="mb-1.5 block text-[12px] text-neutral-500">
                            Phone Number
                        </label>
                        <input
                            id="phone"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            required
                            placeholder="(671) 555-0110"
                            className={inputClass}
                        />
                    </div>

                    <div>
                        <label htmlFor="address" className="mb-1.5 block text-[12px] text-neutral-500">
                            Address
                        </label>
                        <textarea
                            id="address"
                            name="address"
                            rows={2}
                            value={form.address}
                            onChange={handleChange}
                            required
                            placeholder="4140 Parker Rd. Allentown, New Mexico 31134"
                            className={`${inputClass} resize-none`}
                        />
                    </div>

                    <div>
                        <label htmlFor="city" className="mb-1.5 block text-[12px] text-neutral-500">
                            City
                        </label>
                        <select
                            id="city"
                            name="city"
                            value={form.city}
                            onChange={handleChange}
                            required
                            className={inputClass}
                        >
                            <option value="">Select a city</option>
                            {cities.map((city) => (
                                <option key={city} value={city}>{city}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="country" className="mb-1.5 block text-[12px] text-neutral-500">
                            Country
                        </label>
                        <select
                            id="country"
                            name="country"
                            value={form.country}
                            onChange={handleChange}
                            className={inputClass}
                        >
                            {countries.map((country) => (
                                <option key={country} value={country}>{country}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <p className="mb-2 text-[13px] font-medium text-neutral-900 dark:text-white">
                            Save Address As
                        </p>

                        <div className="flex gap-2">
                            {['Home', 'Work'].map((option) => (
                                <button
                                    key={option}
                                    type="button"
                                    onClick={() => setForm((prev) => ({ ...prev, label: option }))}
                                    className={`rounded-full px-5 py-1.5 text-[12px] transition cursor-pointer ${form.label === option
                                            ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 font-medium'
                                            : 'border border-neutral-200 dark:border-neutral-750 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-850'
                                        }`}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="mt-2 w-full rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 py-3.5 text-[14px] font-medium transition hover:bg-neutral-800 dark:hover:bg-neutral-200 cursor-pointer"
                    >
                        Add
                    </button>

                </form>
            </div>
        </div>
    )
}

export default AddressForm
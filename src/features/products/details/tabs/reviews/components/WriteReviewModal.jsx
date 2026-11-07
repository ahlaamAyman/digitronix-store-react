import { useState, useEffect } from 'react'
import { X, Star } from 'lucide-react'

const MAX_LENGTH = 100

const defaultForm = {
    rating: 5,
    name: '',
    email: '',
    body: '',
}

function WriteReviewModal({ isOpen, onClose, onSubmit }) {
    const [form, setForm] = useState(defaultForm)
    const [hovered, setHovered] = useState(0)

    useEffect(() => {
        if (!isOpen) return

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose()
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [isOpen, onClose])

    if (!isOpen) return null

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (onSubmit) {
            onSubmit(form)
        }
        setForm(defaultForm)
        onClose()
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 backdrop-blur-[2px] transition-opacity"
                onClick={onClose}
            />

            {/* Modal Dialog: 400px fixed width, rounded-3xl (xl3), 28px padding (Gap/11) */}
            <div className="relative z-10 w-full max-w-[400px] rounded-3xl bg-white dark:bg-[#141416] border border-transparent dark:border-neutral-800 p-7 shadow-2xl transition-all">
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close"
                    className="absolute right-5 top-5 rounded-full p-1 text-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
                >
                    <X size={18} />
                </button>

                <h2 className="text-[20px] font-semibold text-neutral-900 dark:text-white">
                    Write A Review
                </h2>

                <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                    {/* Rating */}
                    <div className="flex items-center gap-1.5">
                        {[1, 2, 3, 4, 5].map((value) => {
                            const isFilled = value <= (hovered || form.rating)
                            return (
                                <button
                                    key={value}
                                    type="button"
                                    onClick={() => setForm((prev) => ({ ...prev, rating: value }))}
                                    onMouseEnter={() => setHovered(value)}
                                    onMouseLeave={() => setHovered(0)}
                                    aria-label={`Rate ${value} star${value > 1 ? 's' : ''}`}
                                    className="transition-transform hover:scale-110 focus:outline-none"
                                >
                                    <Star
                                        size={22}
                                        className={`transition-colors ${
                                            isFilled
                                                ? 'fill-amber-400 text-amber-400'
                                                : 'fill-neutral-200 text-neutral-200 dark:fill-neutral-800 dark:text-neutral-800'
                                        }`}
                                    />
                                </button>
                            )
                        })}
                    </div>

                    {/* Name */}
                    <div>
                        <label
                            htmlFor="review-name"
                            className="mb-1.5 block text-[12px] font-medium text-neutral-500 dark:text-neutral-400"
                        >
                            Name
                        </label>
                        <input
                            id="review-name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            placeholder="Shane Watson"
                            className="w-full rounded-xl border border-neutral-200 dark:border-neutral-750 bg-white dark:bg-[#1c1c1f] px-4 py-3 text-[13px] text-neutral-900 dark:text-white outline-none transition placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:border-neutral-900 dark:focus:border-white"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label
                            htmlFor="review-email"
                            className="mb-1.5 block text-[12px] font-medium text-neutral-500 dark:text-neutral-400"
                        >
                            Email Address
                        </label>
                        <input
                            id="review-email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            placeholder="shane.watson@example.com"
                            className="w-full rounded-xl border border-neutral-200 dark:border-neutral-750 bg-white dark:bg-[#1c1c1f] px-4 py-3 text-[13px] text-neutral-900 dark:text-white outline-none transition placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:border-neutral-900 dark:focus:border-white"
                        />
                    </div>

                    {/* Review Body with 0/100 counter inside */}
                    <div className="relative">
                        <textarea
                            id="review-body"
                            name="body"
                            rows={4}
                            maxLength={MAX_LENGTH}
                            value={form.body}
                            onChange={handleChange}
                            required
                            placeholder="Enter Your Review"
                            className="w-full resize-none rounded-xl border border-neutral-200 dark:border-neutral-750 bg-white dark:bg-[#1c1c1f] p-4 pb-8 text-[13px] text-neutral-900 dark:text-white outline-none transition placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:border-neutral-900 dark:focus:border-white"
                        />
                        <span className="pointer-events-none absolute bottom-3 right-3.5 text-[11px] text-neutral-400 dark:text-neutral-500">
                            {form.body.length}/{MAX_LENGTH}
                        </span>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 py-3.5 text-[14px] font-medium transition hover:bg-neutral-800 dark:hover:bg-neutral-200 cursor-pointer"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default WriteReviewModal
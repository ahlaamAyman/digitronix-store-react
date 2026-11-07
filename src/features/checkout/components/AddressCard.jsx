import { useState, useEffect, useRef } from 'react'
import { Phone, MoreVertical } from 'lucide-react'

function AddressCard({ address, isSelected, onSelect, onRemove, onSetDefault }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuRef = useRef(null)

    useEffect(() => {
        if (!isMenuOpen) return

        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsMenuOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isMenuOpen])

    return (
        <article
            className={`relative rounded-2xl border p-5 transition bg-white dark:bg-[#121214] ${isSelected ? 'border-neutral-900 dark:border-white' : 'border-neutral-200 dark:border-neutral-800'
                }`}
        >
            <div className="flex gap-3">

                <input
                    type="radio"
                    checked={isSelected}
                    onChange={() => onSelect(address.id)}
                    className="mt-1 h-4 w-4 shrink-0 accent-neutral-900 dark:accent-white cursor-pointer"
                />

                <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                        <h3 className="text-[14px] font-semibold text-neutral-900 dark:text-white">
                            {address.name}
                        </h3>

                        {address.label && (
                            <span className="rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 px-2.5 py-0.5 text-[10px] font-medium">
                                {address.label}
                            </span>
                        )}
                    </div>

                    <p className="mt-1.5 text-[13px] text-neutral-600 dark:text-neutral-300">
                        {address.street}, {address.city}, {address.state} {address.zip}
                    </p>

                    <p className="mt-1.5 flex items-center gap-1.5 text-[13px] text-neutral-600 dark:text-neutral-300">
                        <Phone size={13} strokeWidth={1.6} />
                        {address.phone}
                    </p>
                </div>

                <div className="relative shrink-0" ref={menuRef}>
                    <button
                        type="button"
                        onClick={() => setIsMenuOpen((open) => !open)}
                        aria-label="Address options"
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400 transition hover:bg-neutral-50 dark:hover:bg-neutral-800 cursor-pointer"
                    >
                        <MoreVertical size={15} />
                    </button>

                    {isMenuOpen && (
                        <div className="absolute right-0 top-10 z-20 w-44 overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-[#1a1a1e] shadow-lg">

                            {!address.isDefault && (
                                <button
                                    type="button"
                                    onClick={() => {
                                        onSetDefault(address.id)
                                        setIsMenuOpen(false)
                                    }}
                                    className="block w-full px-4 py-2.5 text-left text-[13px] text-neutral-700 dark:text-neutral-200 transition hover:bg-neutral-50 dark:hover:bg-neutral-800 cursor-pointer"
                                >
                                    Set as default
                                </button>
                            )}

                            <button
                                type="button"
                                onClick={() => {
                                    onRemove(address.id)
                                    setIsMenuOpen(false)
                                }}
                                className="block w-full px-4 py-2.5 text-left text-[13px] text-red-600 dark:text-red-400 transition hover:bg-red-50 dark:hover:bg-red-950/40 cursor-pointer"
                            >
                                Delete
                            </button>

                        </div>
                    )}
                </div>

            </div>
        </article>
    )
}

export default AddressCard
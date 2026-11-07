import { Home, CreditCard, ClipboardList } from 'lucide-react'

const steps = [
    { id: 'address', label: 'Address', icon: Home },
    { id: 'payment', label: 'Payment Method', icon: CreditCard },
    { id: 'review', label: 'Review', icon: ClipboardList },
]

function CheckoutSteps({ current }) {
    const currentIndex = steps.findIndex((step) => step.id === current)

    return (
        <div className="flex items-start">
            {steps.map((step, index) => {
                const isActive = index <= currentIndex

                return (
                    <div
                        key={step.id}
                        className={`flex flex-col items-center ${index === 0 ? '' : 'flex-1'
                            }`}
                    >
                        <div className="flex w-full items-center">
                            {index > 0 && (
                                <div
                                    className={`h-px flex-1 ${isActive ? 'bg-neutral-900 dark:bg-white' : 'bg-neutral-200 dark:bg-neutral-800'
                                        }`}
                                />
                            )}

                            <div
                                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition ${isActive
                                        ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                                        : 'bg-neutral-100 dark:bg-neutral-850 text-neutral-400 dark:text-neutral-500'
                                    }`}
                            >
                                <step.icon size={17} strokeWidth={1.6} />
                            </div>
                        </div>

                        <span
                            className={`mt-2 text-[12px] ${isActive ? 'font-medium text-neutral-900 dark:text-white' : 'text-neutral-400 dark:text-neutral-500'
                                }`}
                        >
                            {step.label}
                        </span>
                    </div>
                )
            })}
        </div>
    )
}

export default CheckoutSteps
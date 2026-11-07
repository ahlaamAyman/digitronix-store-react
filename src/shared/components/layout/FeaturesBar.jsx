import { Package, RotateCcw, Headset, CreditCard } from 'lucide-react'

const features = [
    {
        icon: Package,
        title: 'Fast Free Shipping',
        description: 'You will love at great low prices',
    },
    {
        icon: RotateCcw,
        title: '30 Days Returns',
        description: 'Within 15 days for an exchange',
    },
    {
        icon: Headset,
        title: 'Customer Support',
        description: '24 hours a day, 7 days a week',
    },
    {
        icon: CreditCard,
        title: 'Secure Payment',
        description: 'Pay with multiple credit cards',
    },
]

function FeaturesBar() {
    return (
        <section className="border-t border-neutral-100 dark:border-neutral-800 bg-white dark:bg-[#0c0c0e] px-4 py-8 lg:px-8 lg:py-10 transition-colors">
            <div className="mx-auto grid max-w-[1440px] gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                {features.map((feature) => (
                    <div key={feature.title} className="flex items-start gap-3">
                        <feature.icon
                            size={26}
                            strokeWidth={1.3}
                            className="mt-0.5 shrink-0 text-neutral-900 dark:text-neutral-100"
                        />

                        <div>
                            <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                                {feature.title}
                            </h3>
                            <p className="mt-0.5 text-[13px] text-neutral-500 dark:text-neutral-400">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FeaturesBar

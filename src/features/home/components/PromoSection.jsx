import { Link } from 'react-router-dom'
import samsungpromo from '../../../assets/images/categories/samsung-promo.png.png'
import headphonespromo from '../../../assets/images/categories/headphones-promo.png.png'

const promos = [
    {
        id: 1,
        title: "Upgrade to 5G With Samsung’s Ultra-Fast Devices",
        description: 'Enjoy seamless, next-level connectivity with Samsung.',
        buttonText: 'Shop Now',
        image: samsungpromo,
        layout: 'bottom',
    },
    {
        id: 2,
        title: 'Find Your Perfect Headphones for Every Moment',
        description: 'Discover a range of wireless, noise-canceling headphones.',
        buttonText: 'Shop Now',
        image: headphonespromo,
        layout: 'float',
    },
]

function PromoCard({ promo }) {
    if (promo.layout === 'bottom') {
        return (
            <div className="relative flex min-h-[320px] flex-col overflow-hidden rounded-2xl bg-[#f5f5f5] px-5 pt-5 text-center sm:px-8 dark:border dark:border-neutral-800 dark:bg-[#141416]">
                <div className="relative z-10">
                    <h2 className="text-lg font-semibold leading-tight text-neutral-900 sm:text-xl dark:text-white">
                        {promo.title}
                    </h2>

                    <p className="mx-auto mt-3 max-w-[270px] text-[10px] leading-4 text-gray-600 sm:text-xs dark:text-neutral-400">
                        {promo.description}
                    </p>

                    <Link
                        to="/shop"
                        className="mt-4 inline-block rounded-full bg-white px-5 py-2 text-[10px] font-medium text-neutral-900 shadow-sm transition hover:bg-black hover:text-white sm:text-xs dark:bg-neutral-800 dark:text-white dark:hover:bg-white dark:hover:text-black"
                    >
                        {promo.buttonText}
                    </Link>
                </div>

                <img
                    src={promo.image}
                    alt={promo.title}
                    className="absolute bottom-0 left-0 h-[58%] w-full object-contain object-bottom"
                />
            </div>
        )
    }

    return (
        <div className="relative min-h-[320px] overflow-hidden rounded-2xl bg-[#f5f5f5] px-5 pt-4 text-center sm:px-8 dark:border dark:border-neutral-800 dark:bg-[#141416]">
            <img
                src={promo.image}
                alt={promo.title}
                className="absolute left-1/2 top-3 h-[54%] w-[68%] -translate-x-1/2 object-contain"
            />

            <div className="absolute inset-x-5 bottom-5 z-10 sm:inset-x-8">
                <h2 className="text-lg font-semibold leading-tight text-neutral-900 sm:text-xl dark:text-white">
                    {promo.title}
                </h2>

                <p className="mx-auto mt-3 max-w-[290px] text-[10px] leading-4 text-gray-600 sm:text-xs dark:text-neutral-400">
                    {promo.description}
                </p>

                <Link
                    to="/shop"
                    className="mt-4 inline-block rounded-full bg-white px-5 py-2 text-[10px] font-medium text-neutral-900 shadow-sm transition hover:bg-black hover:text-white sm:text-xs dark:bg-neutral-800 dark:text-white dark:hover:bg-white dark:hover:text-black"
                >
                    {promo.buttonText}
                </Link>
            </div>
        </div>
    )
}

function PromoSection() {
    return (
        <section className="px-6 py-10">
            <div className="mx-auto grid max-w-[1440px] gap-4 lg:grid-cols-2">
                {promos.map((promo) => (
                    <PromoCard key={promo.id} promo={promo} />
                ))}
            </div>
        </section>
    )
}

export default PromoSection

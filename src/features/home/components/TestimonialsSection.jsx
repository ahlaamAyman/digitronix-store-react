import { useRef } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import mark from '../../../assets/images/clients/mark.png'
import perry from '../../../assets/images/clients/perry.png'
import johnson from '../../../assets/images/clients/johnson.png'

const testimonials = [
    {
        id: 1,
        rating: 5,
        title: 'Authentic Products & Great Discounts!',
        body: 'Bought a MacBook Pro at a great price. The product was 100% original, and the EMI option made it so affordable.',
        name: 'Mark Allen',
        avatar: mark,
    },
    {
        id: 2,
        rating: 5,
        title: 'Fast Delivery & Hassle-Free Shopping!',
        body: 'Ordered a new iPhone, and it arrived earlier than expected. The packaging was secure, and the experience was seamless.',
        name: 'Perry Wilson',
        avatar: perry,
    },
    {
        id: 3,
        rating: 5,
        title: 'Best Online Store for Electronics!',
        body: 'I found the latest gadgets at unbeatable prices. The delivery was super fast, and the customer service was excellent!',
        name: 'Johnson Watson',
        avatar: johnson,
    },
]

function TestimonialsSection() {
    const scrollRef = useRef(null)

    const scroll = (direction) => {
        const container = scrollRef.current
        if (!container) return

        const amount = container.clientWidth * 0.8

        container.scrollBy({
            left: direction === 'next' ? amount : -amount,
            behavior: 'smooth',
        })
    }

    return (
        <section className="bg-gray-50 px-5 py-8 sm:px-6 sm:py-10 lg:px-8 dark:bg-[#0e0e11]">
            <div className="mx-auto max-w-[1440px]">

                <div className="mb-5 flex items-center justify-between gap-3">
                    <h2 className="text-base font-semibold text-neutral-900 sm:text-xl dark:text-white">
                        Our Happy Clients
                    </h2>

                    <div className="flex gap-2">
                        <button
                            type="button"
                            aria-label="Previous"
                            onClick={() => scroll('prev')}
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition hover:bg-gray-100 cursor-pointer dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
                        >
                            <ChevronLeft size={16} />
                        </button>

                        <button
                            type="button"
                            aria-label="Next"
                            onClick={() => scroll('next')}
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition hover:bg-gray-100 cursor-pointer dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
                        >
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                    {testimonials.map((item) => (
                        <article
                            key={item.id}
                            className="w-[85%] shrink-0 snap-start rounded-2xl bg-white p-5 shadow-sm sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] dark:border dark:border-neutral-800 dark:bg-[#141416]"
                        >
                            <div className="flex">
                                {Array.from({ length: item.rating }).map((_, index) => (
                                    <Star
                                        key={index}
                                        size={13}
                                        className="fill-amber-400 text-amber-400"
                                    />
                                ))}
                            </div>

                            <h3 className="mt-3 text-sm font-semibold leading-5 text-gray-900 dark:text-white">
                                &quot;{item.title}&quot;
                            </h3>

                            <p className="mt-2 text-[12px] leading-5 text-gray-500 dark:text-neutral-400">
                                {item.body}
                            </p>

                            <div className="mt-4 flex items-center gap-2.5">
                                <img
                                    src={item.avatar}
                                    alt={item.name}
                                    className="h-8 w-8 rounded-full object-cover"
                                />

                                <span className="text-[12px] font-medium text-gray-900 dark:text-neutral-200">
                                    {item.name}
                                </span>
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default TestimonialsSection

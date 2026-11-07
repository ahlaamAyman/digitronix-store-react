import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ProductCard from './ProductCard'
import { products } from '../data/products'

function BestsellerSection() {
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
        <section className="px-5 py-8 sm:px-6 sm:py-10 lg:px-8">
            <div className="mx-auto max-w-[1440px]">

                <div className="mb-5 flex items-center justify-between gap-3">
                    <h2 className="text-base font-semibold text-neutral-900 sm:text-xl dark:text-white">
                        Bestseller Products
                    </h2>

                    <div className="flex gap-2">
                        <button
                            type="button"
                            aria-label="Previous"
                            onClick={() => scroll('prev')}
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition hover:bg-gray-100 cursor-pointer dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-800"
                        >
                            <ChevronLeft size={16} />
                        </button>

                        <button
                            type="button"
                            aria-label="Next"
                            onClick={() => scroll('next')}
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition hover:bg-gray-100 cursor-pointer dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-800"
                        >
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 lg:gap-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="w-[calc(50%-6px)] shrink-0 snap-start sm:w-[calc(33.333%-8px)] lg:w-[calc(25%-15px)]"
                        >
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default BestsellerSection

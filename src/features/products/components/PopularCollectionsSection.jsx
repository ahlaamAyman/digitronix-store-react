import { useState } from 'react'
import ProductCard from './ProductCard'
import { products } from '../data/products'

const filters = [
    'All Products',
    'Mobile Phones',
    'Laptop & Computer',
    'Smart Watches',
    'Headphone',
]

function PopularCollectionsSection() {
    const [activeFilter, setActiveFilter] = useState(filters[0])

    const filteredProducts = activeFilter === 'All Products'
        ? products
        : products.filter((p) => p.category === activeFilter)

    const displayProducts = filteredProducts.length > 0 ? filteredProducts : products

    return (
        <section className="px-5 py-8 sm:px-6 sm:py-10 lg:px-8">
            <div className="mx-auto max-w-[1440px]">
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                    <h2 className="text-base font-semibold text-neutral-900 sm:text-xl dark:text-white">
                        Our Popular Collections
                    </h2>

                    <div className="flex flex-wrap items-center gap-1 rounded-full bg-gray-100 p-1 dark:bg-neutral-800">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                type="button"
                                onClick={() => setActiveFilter(filter)}
                                className={`whitespace-nowrap rounded-full px-3 py-1.5 text-[11px] font-medium transition cursor-pointer ${
                                    activeFilter === filter
                                        ? 'bg-white text-black shadow-sm font-semibold dark:bg-white dark:text-neutral-950'
                                        : 'text-gray-600 hover:bg-gray-200 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white'
                                }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-8">
                    {displayProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PopularCollectionsSection

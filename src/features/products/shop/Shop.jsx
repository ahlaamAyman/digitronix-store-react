import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LayoutGrid, List, SlidersHorizontal, ChevronDown } from 'lucide-react'

import ProductCard from '../components/ProductCard'
import FilterPanel from './components/FilterPanel'
import Pagination from './components/Pagination'
import { useProductFilters } from './hooks/useProductFilters'

const categories = ['All', 'Mobile Phones', 'Laptop & Computer', 'Smart Watches', 'Headphones']
const brands = ['All', 'Apple', 'Samsung', 'OnePlus']

const sortOptions = [
    { label: 'Popularity', value: 'featured' },
    { label: 'Price: Low to High', value: 'price-asc' },
    { label: 'Price: High to Low', value: 'price-desc' },
    { label: 'Top Rated', value: 'rating-desc' },
]

function Shop() {
    const [viewMode, setViewMode] = useState('grid')
    const [isFilterOpen, setIsFilterOpen] = useState(false)

    const {
        selectedCategory,
        setSelectedCategory,
        selectedBrand,
        setSelectedBrand,
        maxPrice,
        setMaxPrice,
        sortBy,
        setSortBy,
        currentPage,
        setCurrentPage,
        filteredProducts,
        visibleProducts,
        totalPages,
        resetFilters,
    } = useProductFilters()

    return (
        <div className="px-5 py-6 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[1440px]">

                <nav className="flex items-center gap-2 text-[11px] text-neutral-500 dark:text-neutral-400 sm:text-xs">
                    <Link to="/" className="hover:text-neutral-900 dark:hover:text-white">Home</Link>
                    <span>›</span>
                    <span className="text-neutral-900 dark:text-white">Shop</span>
                </nav>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-3">

                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                            <button
                                type="button"
                                aria-label="Grid view"
                                onClick={() => setViewMode('grid')}
                                className={`flex h-9 w-9 items-center justify-center rounded-full transition cursor-pointer ${viewMode === 'grid'
                                        ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                                        : 'text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                                    }`}
                            >
                                <LayoutGrid size={16} strokeWidth={1.8} />
                            </button>

                            <button
                                type="button"
                                aria-label="List view"
                                onClick={() => setViewMode('list')}
                                className={`flex h-9 w-9 items-center justify-center rounded-full transition cursor-pointer ${viewMode === 'list'
                                        ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                                        : 'text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                                    }`}
                            >
                                <List size={16} strokeWidth={1.8} />
                            </button>
                        </div>

                        <p className="text-[11px] text-neutral-600 dark:text-neutral-400 sm:text-xs">
                            Showing {visibleProducts.length} of {filteredProducts.length} results
                        </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={() => setIsFilterOpen(true)}
                            className="flex items-center gap-2 rounded-full bg-neutral-900 text-white dark:bg-neutral-800 dark:text-white px-4 py-2 text-[11px] font-medium transition hover:bg-neutral-800 dark:hover:bg-neutral-700 sm:text-xs cursor-pointer"
                        >
                            <SlidersHorizontal size={14} strokeWidth={1.8} />
                            Filter
                        </button>

                        <div className="relative">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="appearance-none rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 py-2 pl-4 pr-9 text-[11px] outline-none transition focus:border-neutral-900 dark:focus:border-white sm:text-xs cursor-pointer"
                            >
                                {sortOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        Sort By: {option.label}
                                    </option>
                                ))}
                            </select>

                            <ChevronDown
                                size={14}
                                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400"
                            />
                        </div>
                    </div>
                </div>

                {visibleProducts.length > 0 ? (
                    <div
                        className={
                            viewMode === 'grid'
                                ? 'mt-6 grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-8'
                                : 'mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2'
                        }
                    >
                        {visibleProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="mt-6 rounded-2xl border border-dashed border-neutral-200 dark:border-neutral-800 p-12 text-center">
                        <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                            No products match your criteria
                        </h3>

                        <button
                            type="button"
                            onClick={resetFilters}
                            className="mt-4 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 px-5 py-2 text-xs font-medium transition hover:bg-neutral-800 dark:hover:bg-neutral-200 cursor-pointer"
                        >
                            Clear All Filters
                        </button>
                    </div>
                )}

                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onChange={setCurrentPage}
                />

            </div>

            <FilterPanel
                isOpen={isFilterOpen}
                onClose={() => setIsFilterOpen(false)}
                categories={categories}
                brands={brands}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedBrand={selectedBrand}
                setSelectedBrand={setSelectedBrand}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
                onReset={resetFilters}
            />
        </div>
    )
}

export default Shop
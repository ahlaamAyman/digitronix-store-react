import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { products } from '../../data/products'

const PER_PAGE = 8

export function useProductFilters() {
    const [searchParams, setSearchParams] = useSearchParams()
    const categoryParam = searchParams.get('category') || 'All'

    const [selectedCategory, setSelectedCategory] = useState(categoryParam)
    const [selectedBrand, setSelectedBrand] = useState('All')
    const [maxPrice, setMaxPrice] = useState(2000)
    const [sortBy, setSortBy] = useState('featured')
    const [currentPage, setCurrentPage] = useState(1)

    const filteredProducts = useMemo(() => {
        return products
            .filter((p) => {
                if (selectedCategory !== 'All' && p.category !== selectedCategory) return false
                if (selectedBrand !== 'All' && p.brand !== selectedBrand) return false
                if (p.price > maxPrice) return false
                return true
            })
            .sort((a, b) => {
                if (sortBy === 'price-asc') return a.price - b.price
                if (sortBy === 'price-desc') return b.price - a.price
                if (sortBy === 'rating-desc') return b.rating - a.rating
                return 0
            })
    }, [selectedCategory, selectedBrand, maxPrice, sortBy])

    const totalPages = Math.ceil(filteredProducts.length / PER_PAGE)

    const visibleProducts = filteredProducts.slice(
        (currentPage - 1) * PER_PAGE,
        currentPage * PER_PAGE
    )

    const resetFilters = () => {
        setSelectedCategory('All')
        setSelectedBrand('All')
        setMaxPrice(2000)
        setCurrentPage(1)
        setSearchParams({})
    }

    return {
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
    }
}
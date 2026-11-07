import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Eye, Repeat, Mail, Truck, Share2, PackageCheck } from 'lucide-react'

import { products } from '../../data/products'
import { formatPrice } from '../../../../shared/utils/formatPrice'
import StarRating from '../../../../shared/components/ui/StarRating'

import ProductCard from '../../components/ProductCard'
import ProductGallery from '../components/ProductGallery'
import ColorSelector from '../components/ColorSelector'
import VariantSelector from '../components/VariantSelector'
import QuantityInput from '../components/QuantityInput'
import ProductTabs from '../tabs/pages/ProductTabs'
import { useCart } from '../../../cart/hooks/useCart'

function ProductDetails() {
    const { id } = useParams()
    const product = products.find((item) => item.id === Number(id))

    const [color, setColor] = useState(product?.colors?.[0] ?? null)
    const [size, setSize] = useState(product?.sizes?.[0] ?? null)
    const [style, setStyle] = useState(product?.styles?.[0] ?? null)
    const [pattern, setPattern] = useState(product?.patterns?.[0] ?? null)
    const [storage, setStorage] = useState(product?.storage?.[0] ?? null)
    const [quantity, setQuantity] = useState(1)
    const { add } = useCart()

    if (!product) {
        return (
            <div className="px-5 py-20 text-center">
                <h1 className="text-xl font-semibold">Product not found</h1>
                <Link to="/shop" className="mt-4 inline-block text-sm underline">
                    Back to shop
                </Link>
            </div>
        )
    }

    const images = product.images ?? [product.image]

    const similar = products
        .filter((item) => item.id !== product.id && item.category === product.category)
        .slice(0, 4)

    const handleAddToCart = () => {
        const key = [product.id, color?.name, size, storage, style, pattern]
            .filter(Boolean)
            .join("-")
        add({
            key,
            id: product.id,
            name: product.name,
            image: color?.image ?? product.image,
            price: product.price,
            oldPrice: product.oldPrice,
            color: color?.name ?? null,
            size,
            style,
            pattern,
            storage,
            quantity,
        })
    }

    return (
        <div className="px-5 py-6 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[1440px]">

                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-[11px] text-neutral-500 dark:text-neutral-400 sm:text-xs">
                    <Link to="/" className="hover:text-neutral-900 dark:hover:text-white">Home</Link>
                    <span>›</span>
                    <Link to="/shop" className="hover:text-neutral-900 dark:hover:text-white">Shop</Link>
                    <span>›</span>
                    <span className="line-clamp-1 text-neutral-900 dark:text-neutral-100">{product.name}</span>
                </nav>

                <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:gap-12">

                    <ProductGallery
                        images={images}
                        name={product.name}
                        activeImage={color?.image}
                    />

                    {/* Info */}
                    <div>
                        <h1 className="text-xl font-semibold leading-tight text-neutral-900 dark:text-white sm:text-2xl lg:text-[28px]">
                            {product.name}
                        </h1>

                        <div className="mt-3">
                            <StarRating rating={product.rating} reviews={product.reviews} />
                        </div>

                        <div className="mt-2 flex items-center gap-2">
                            <span className="text-lg font-semibold text-neutral-900 dark:text-white">
                                {formatPrice(product.price)}
                            </span>

                            {product.oldPrice > product.price && (
                                <span className="text-sm text-neutral-400 dark:text-neutral-500 line-through">
                                    {formatPrice(product.oldPrice)}
                                </span>
                            )}
                        </div>

                        {/* Viewers */}
                        {product.viewers && (
                            <div className="mt-4 flex items-center gap-2 border-t border-neutral-100 dark:border-neutral-800 pt-4 text-[12px] text-neutral-600 dark:text-neutral-400">
                                <Eye size={14} strokeWidth={1.6} />
                                {product.viewers} People are viewing this right now
                            </div>
                        )}

                        {/* Stock */}
                        {product.stock && (
                            <div className="mt-3">
                                <p className="text-[12px] text-neutral-600 dark:text-neutral-400">
                                    Only <span className="text-red-600 dark:text-red-400 font-medium">{product.stock} items</span> left in stock
                                </p>

                                <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
                                    <div
                                        className="h-full rounded-full bg-red-500 transition-all"
                                        style={{
                                            width: `${Math.max(8, Math.min(100, (product.stock / 20) * 100))}%`,
                                        }}
                                    />
                                </div>
                            </div>
                        )}

                        {/* Variants */}
                        <div className="mt-5 space-y-4">
                            <ColorSelector
                                value={color}
                                options={product.colors}
                                onChange={setColor}
                            />

                            <VariantSelector
                                label="Size"
                                value={size}
                                options={product.sizes}
                                onChange={setSize}
                            />

                            <VariantSelector
                                label="Storage"
                                value={storage}
                                options={product.storage}
                                onChange={setStorage}
                            />

                            <VariantSelector
                                label="Style Name"
                                value={style}
                                options={product.styles}
                                onChange={setStyle}
                            />

                            <VariantSelector
                                label="Pattern Name"
                                value={pattern}
                                options={product.patterns}
                                onChange={setPattern}
                            />
                        </div>

                        {/* Actions */}
                        <div className="mt-6 flex items-center gap-3">
                            <div className="shrink-0">
                                <QuantityInput
                                    value={quantity}
                                    onChange={setQuantity}
                                    max={product.stock ?? 99}
                                />
                            </div>

                            <button
                                type="button"
                                onClick={handleAddToCart}
                                className="flex-1 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 py-3 text-[13px] font-medium transition hover:bg-neutral-800 dark:hover:bg-neutral-200 cursor-pointer"
                            >
                                Add To Cart
                            </button>
                        </div>

                        <button
                            type="button"
                            className="mt-3 w-full rounded-full border border-neutral-300 dark:border-neutral-700 py-3 text-[13px] font-medium text-neutral-900 dark:text-white transition hover:bg-neutral-50 dark:hover:bg-neutral-850 cursor-pointer"
                        >
                            Buy Now
                        </button>

                        {/* Secondary links */}
                        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-b border-neutral-100 dark:border-neutral-800 pb-5 text-[12px] text-neutral-600 dark:text-neutral-400">
                            <button type="button" className="flex items-center gap-1.5 hover:text-neutral-900 dark:hover:text-white cursor-pointer">
                                <Repeat size={14} strokeWidth={1.6} /> Compare
                            </button>

                            <button type="button" className="flex items-center gap-1.5 hover:text-neutral-900 dark:hover:text-white cursor-pointer">
                                <Mail size={14} strokeWidth={1.6} /> Contact Us
                            </button>

                            <button type="button" className="flex items-center gap-1.5 hover:text-neutral-900 dark:hover:text-white cursor-pointer">
                                <Truck size={14} strokeWidth={1.6} /> Shipping Info
                            </button>

                            <button type="button" className="flex items-center gap-1.5 hover:text-neutral-900 dark:hover:text-white cursor-pointer">
                                <Share2 size={14} strokeWidth={1.6} /> Share
                            </button>
                        </div>

                        {/* Shipping notes */}
                        <div className="mt-4 space-y-2 text-[12px] text-neutral-600 dark:text-neutral-400">
                            <p className="flex items-center gap-2">
                                <Truck size={14} strokeWidth={1.6} />
                                Free worldwide shipping on all order over $200
                            </p>

                            <p className="flex items-center gap-2">
                                <PackageCheck size={14} strokeWidth={1.6} />
                                Delivers in 2–4 working days
                                <span className="underline">Shipping &amp; Return</span>
                            </p>
                        </div>
                    </div>

                </div>

                <ProductTabs product={product} />

                {/* Similar products */}
                {similar.length > 0 && (
                    <section className="mt-12">
                        <h2 className="text-base font-semibold text-neutral-900 dark:text-white sm:text-xl">
                            Similar Products
                        </h2>

                        <div className="mt-5 grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-5">
                            {similar.map((item) => (
                                <ProductCard key={item.id} product={item} />
                            ))}
                        </div>
                    </section>
                )}

            </div>
        </div>
    )
}

export default ProductDetails
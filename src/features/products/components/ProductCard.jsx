import { Link } from 'react-router-dom'
import StarRating from '../../../shared/components/ui/StarRating'
import { formatPrice } from '../../../shared/utils/formatPrice'

const ProductCard = ({ product }) => {
    return (
        <article className="group flex flex-col h-full bg-white dark:bg-transparent rounded-xl transition duration-200">
            <Link
                to={`/product/${product.id}`}
                className="relative aspect-square overflow-hidden rounded-xl bg-[#f5f5f5] dark:bg-[#151518] border border-transparent dark:border-neutral-800/80 block"
            >
                {product.tag && (
                    <span className="absolute top-2.5 left-2.5 z-10 rounded-full bg-white/95 dark:bg-neutral-900/90 dark:border dark:border-neutral-750 backdrop-blur-xs px-2.5 py-0.5 text-[9px] font-semibold tracking-wide text-neutral-800 dark:text-neutral-200 shadow-xs">
                        {product.tag}
                    </span>
                )}
                <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-contain p-4 transition duration-300 group-hover:scale-105"
                />
            </Link>

            <div className="mt-2.5 flex flex-col flex-1">
                <StarRating rating={product.rating} reviews={product.reviews} />

                <h3 className="mt-1.5 line-clamp-2 text-xs font-medium leading-[1.3] text-gray-900 dark:text-neutral-100 group-hover:text-neutral-700 dark:group-hover:text-white transition">
                    <Link to={`/product/${product.id}`}>
                        {product.name}
                    </Link>
                </h3>

                <div className="mt-auto pt-2 flex items-center gap-2">
                    <span className="text-xs font-semibold text-gray-900 dark:text-white">
                        {formatPrice(product.price)}
                    </span>

                    {product.oldPrice && product.oldPrice > product.price && (
                        <span className="text-[10px] text-gray-400 dark:text-neutral-500 line-through">
                            {formatPrice(product.oldPrice)}
                        </span>
                    )}
                </div>
            </div>
        </article>
    )
}

export default ProductCard

import { Star } from 'lucide-react'

function StarRating({ rating = 0, reviews }) {
    return (
        <div className="flex items-center gap-1">
            <div className="flex">
                {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                        key={index}
                        size={10}
                        className={
                            index < rating
                                ? 'fill-amber-400 text-amber-400'
                                : 'fill-gray-300 text-gray-300 dark:fill-neutral-700 dark:text-neutral-700'
                        }
                    />
                ))}
            </div>

            {reviews && (
                <span className="text-[8px] text-gray-500 dark:text-neutral-400 sm:text-[9px]">
                    ({reviews} Reviews)
                </span>
            )}
        </div>
    )
}

export default StarRating

import { Star } from 'lucide-react'
import ReviewsSummary from '../components/ReviewsSummary'
import { defaultReviews } from '../data/defaultReviews'
import { useState } from 'react'
import WriteReviewModal from '../components/WriteReviewModal'

function ReviewsTab({ product }) {
    const data = product?.reviewsData ?? defaultReviews
    const [reviews, setReviews] = useState(data.list)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleAddReview = (newReview) => {
        const item = {
            id: Date.now(),
            rating: newReview.rating || 5,
            title: newReview.body.length > 35 ? `${newReview.body.slice(0, 35)}...` : newReview.body,
            body: newReview.body,
            name: newReview.name || 'Shane Watson',
        }
        setReviews((prev) => [item, ...prev])
    }

    return (
        <div className="grid gap-8 lg:grid-cols-[360px_1fr]">

            <ReviewsSummary
                average={data.average}
                total={reviews.length}
                distribution={data.distribution}
                onWriteReview={() => setIsModalOpen(true)}
            />
            <div className="space-y-6">
                {reviews.map((review) => (
                    <article
                        key={review.id}
                        className="border-b border-neutral-100 dark:border-neutral-800 pb-6 last:border-0"
                    >
                        <div className="flex">
                            {Array.from({ length: review.rating }).map((_, index) => (
                                 <Star
                                     key={index}
                                     size={13}
                                     className="fill-amber-400 text-amber-400"
                                 />
                            ))}
                        </div>

                        <h3 className="mt-2 text-[14px] font-semibold text-neutral-900 dark:text-white">
                            &quot;{review.title}&quot;
                        </h3>

                        <p className="mt-1.5 text-[13px] leading-5 text-neutral-600 dark:text-neutral-300">
                            {review.body}
                        </p>

                        <div className="mt-3 flex items-center gap-2.5">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-200 dark:bg-neutral-800 text-[11px] font-medium text-neutral-600 dark:text-neutral-300">
                                {review.name.charAt(0)}
                            </div>

                            <span className="text-[13px] font-medium text-neutral-900 dark:text-white">
                                {review.name}
                            </span>
                        </div>
                    </article>
                ))}
            </div>
            <WriteReviewModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleAddReview}
            />
        </div>


    )
}

export default ReviewsTab
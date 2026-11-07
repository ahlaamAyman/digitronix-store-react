import { Star } from 'lucide-react'

function ReviewsSummary({ average, total, distribution, onWriteReview }) {
    return (
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121214] p-5 transition-colors">
            <div className="flex gap-8">

                <div className="shrink-0">
                    <p className="text-2xl font-semibold text-neutral-900 dark:text-white">
                        {average}/5.0
                    </p>

                    <p className="mt-1 text-[12px] text-neutral-500 dark:text-neutral-400">
                        {total} Reviews
                    </p>

                    <div className="mt-2 flex">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <Star
                                key={index}
                                size={13}
                                className="fill-amber-400 text-amber-400"
                            />
                        ))}
                    </div>
                    <button
                        type="button"
                        onClick={onWriteReview}
                        className="mt-4 rounded-full border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-[12px] font-medium text-neutral-900 dark:text-neutral-200 transition hover:bg-neutral-50 dark:hover:bg-neutral-800 cursor-pointer"
                    >
                        Write A Review
                    </button>
                </div>

                <div className="flex-1 space-y-2">
                    {[5, 4, 3, 2, 1].map((stars) => (
                        <div key={stars} className="flex items-center gap-3">
                            <span className="w-10 shrink-0 text-[11px] text-neutral-600 dark:text-neutral-400">
                                {stars} Star
                            </span>

                            <div className="h-1 flex-1 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
                                <div
                                    className="h-full rounded-full bg-amber-400"
                                    style={{ width: `${distribution[stars] ?? 0}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default ReviewsSummary
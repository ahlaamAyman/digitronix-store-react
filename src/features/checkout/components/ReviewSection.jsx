import { Pencil } from 'lucide-react'

function ReviewSection({ title, onEdit, children }) {
    return (
        <section className="border-b border-neutral-100 py-5 dark:border-neutral-800">

            <h2 className="text-[15px] font-semibold text-neutral-900 dark:text-white">
                {title}
            </h2>

            <div className="mt-3 flex items-start justify-between gap-4">

                <div className="min-w-0 flex-1">
                    {children}
                </div>

                <button
                    type="button"
                    onClick={onEdit}
                    aria-label={`Edit ${title}`}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800"
                >
                    <Pencil size={14} strokeWidth={1.6} />
                </button>

            </div>
        </section>
    )
}

export default ReviewSection
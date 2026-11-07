function Pagination({ currentPage, totalPages, onChange }) {
    if (totalPages <= 1) return null

    const pages = Array.from({ length: totalPages }, (_, index) => index + 1)

    return (
        <div className="mt-10 flex items-center justify-center gap-2">

            <button
                type="button"
                onClick={() => onChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 px-5 py-2 text-[13px] transition hover:bg-neutral-50 dark:hover:bg-neutral-850 disabled:opacity-40 cursor-pointer"
            >
                Prev
            </button>

            {pages.map((page) => (
                <button
                    key={page}
                    type="button"
                    onClick={() => onChange(page)}
                    className={`h-9 w-9 rounded-full text-[13px] transition cursor-pointer ${currentPage === page
                            ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 font-medium'
                            : 'border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-850'
                        }`}
                >
                    {String(page).padStart(2, '0')}
                </button>
            ))}

            <button
                type="button"
                onClick={() => onChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 px-5 py-2 text-[13px] transition hover:bg-neutral-800 dark:hover:bg-neutral-200 disabled:opacity-40 cursor-pointer"
            >
                Next
            </button>

        </div>
    )
}

export default Pagination
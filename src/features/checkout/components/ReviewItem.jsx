import { formatPrice } from '../../../shared/utils/formatPrice'

function ReviewItem({ item }) {
    return (
        <article className="flex gap-4 border-b border-neutral-100 py-4 dark:border-neutral-800">

            <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900">
                <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-contain p-2"
                />
            </div>

            <div className="min-w-0 flex-1">
                <h3 className="text-[13px] font-medium leading-5 text-neutral-900 dark:text-white">
                    {item.name}
                </h3>

                <div className="mt-1 flex items-center gap-2">
                    <span className="text-[13px] font-semibold text-neutral-900 dark:text-white">
                        {formatPrice(item.price)}
                    </span>

                    {item.oldPrice > item.price && (
                        <span className="text-[12px] text-neutral-400 line-through dark:text-neutral-500">
                            {formatPrice(item.oldPrice)}
                        </span>
                    )}
                </div>

                <p className="mt-1 text-[12px] text-neutral-600 dark:text-neutral-400">
                    QTY: {item.quantity}
                </p>
            </div>

        </article>
    )
}

export default ReviewItem
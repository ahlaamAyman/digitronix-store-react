function DescriptionsTab({ product }) {
    if (!product.description?.length) {
        return (
            <p className="text-[13px] text-neutral-500">
                No description available.
            </p>
        )
    }

    return (
        <div className="space-y-4">
            {product.description.map((section) => (
                <p key={section.heading} className="text-[13px] leading-6 text-neutral-600 dark:text-neutral-300">
                    <span className="font-semibold text-neutral-900 dark:text-white">
                        {section.heading} —
                    </span>{' '}
                    {section.body}
                </p>
            ))}
        </div>
    )
}

export default DescriptionsTab

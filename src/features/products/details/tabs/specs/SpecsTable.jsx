function SpecsTable({ specs }) {
    if (!specs) {
        return (
            <p className="text-[13px] text-neutral-500">
                No specifications available.
            </p>
        )
    }

    return (
        <div className="space-y-6">
            {Object.entries(specs).map(([section, rows]) => (
                <div key={section}>

                    <h3 className="rounded-t-lg bg-neutral-100 dark:bg-neutral-800/80 px-4 py-3 text-[13px] font-medium text-neutral-900 dark:text-white">
                        {section}
                    </h3>

                    <dl>
                        {Object.entries(rows).map(([label, value]) => (
                            <div
                                key={label}
                                className="flex gap-6 border-b border-neutral-100 dark:border-neutral-800 px-4 py-3"
                            >
                                <dt className="w-44 shrink-0 text-[13px] text-neutral-500 dark:text-neutral-400">
                                    {label}
                                </dt>

                                <dd className="text-[13px] text-neutral-900 dark:text-neutral-200">
                                    {value}
                                </dd>
                            </div>
                        ))}
                    </dl>

                </div>
            ))}
        </div>
    )
}

export default SpecsTable
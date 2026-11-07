function FormError({ error }) {
    if (!error) return null

    const errors = error.data?.errors

    if (errors?.length) {
        return (
            <div className="space-y-1">
                {errors.map((err) => (
                    <p key={err.field} className="text-[12px] text-red-600 dark:text-rose-400">
                        {err.message}
                    </p>
                ))}
            </div>
        )
    }

    return (
        <p className="text-[12px] text-red-600 dark:text-rose-400">
            {error.data?.message || 'Something went wrong'}
        </p>
    )
}

export default FormError

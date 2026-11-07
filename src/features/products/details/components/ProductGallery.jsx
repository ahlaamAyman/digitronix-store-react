function ProductGallery({ images, name }) {
    return (
        <div className="grid w-full max-w-[634px] grid-cols-2 gap-3">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`flex h-[275px] items-center justify-center overflow-hidden rounded-xl border border-[#e7e5e4] dark:border-neutral-800 bg-white dark:bg-[#121214] transition-colors ${index % 3 === 0 ? 'col-span-2 h-[550px]' : ''
                        }`}
                >
                    <img
                        src={image}
                        alt={`${name} — view ${index + 1}`}
                        loading="lazy"
                        className="max-h-full max-w-full object-contain p-6"
                    />
                </div>
            ))}
        </div>
    )
}

export default ProductGallery
import { Link } from 'react-router-dom'
import mobilephone from '../../../assets/images/categories/mobile-phone.png.png'
import smartwatch from '../../../assets/images/categories/smart-watch.png.png'
import headphones from '../../../assets/images/categories/headphones.png.png'
import laptop from '../../../assets/images/categories/laptop.png.png'

const categories = [
    {
        id: 1,
        name: 'Mobile Phones',
        slug: 'Mobile Phones',
        image: mobilephone,
    },
    {
        id: 2,
        name: 'Smart Watches',
        slug: 'Smart Watches',
        image: smartwatch,
    },
    {
        id: 3,
        name: 'Headphones',
        slug: 'Headphones',
        image: headphones,
    },
    {
        id: 4,
        name: 'Laptop & Desktops',
        slug: 'Laptop & Computer',
        image: laptop,
    },
]

function CategorySection() {
    return (
        <section className="px-6 py-10">
            <div className="mx-auto max-w-[1440px]">
                <h2 className="mb-6 text-xl font-semibold text-neutral-900 dark:text-white">
                    Shop By Category
                </h2>

                <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            to={`/shop?category=${encodeURIComponent(category.slug)}`}
                            className="group flex flex-col items-center"
                        >
                            <div className="relative w-full overflow-hidden rounded-2xl bg-gray-100 p-6 transition duration-300 group-hover:shadow-md dark:border dark:border-neutral-800 dark:bg-[#141416]">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="h-40 w-full object-contain transition duration-300 group-hover:scale-105"
                                />

                                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-4 py-1.5 text-xs font-medium text-neutral-900 shadow-sm transition group-hover:bg-neutral-900 group-hover:text-white dark:bg-neutral-800 dark:text-neutral-100 dark:group-hover:bg-white dark:group-hover:text-neutral-950">
                                    {category.name}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CategorySection

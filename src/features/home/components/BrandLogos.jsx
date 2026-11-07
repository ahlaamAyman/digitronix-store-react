import samsung from '../../../assets/images/brands/samsung.png'
import sony from '../../../assets/images/brands/sony.png'
import xiaomi from '../../../assets/images/brands/xiaomi.png'
import logitech from '../../../assets/images/brands/logitech.png'
import jbl from '../../../assets/images/brands/jbl.png'
import bose from '../../../assets/images/brands/bose.png'

const brands = [
    {
        name: 'Samsung',
        image: samsung,
    },
    {
        name: 'Sony',
        image: sony,
    },
    {
        name: 'Logitech',
        image: logitech,
    },
    {
        name: 'Xiaomi',
        image: xiaomi,
    },
    {
        name: 'JBL',
        image: jbl,
    },
    {
        name: 'Bose',
        image: bose,
    },
]

function BrandLogos() {
    return (
        <section className="bg-white px-4 py-8 lg:px-8 dark:bg-[#0a0a0c]">
            <div className="mx-auto grid max-w-[1440px] grid-cols-3 items-center gap-x-6 gap-y-6 sm:grid-cols-6 sm:gap-x-8">
                {brands.map((brand) => (
                    <img
                        key={brand.name}
                        src={brand.image}
                        alt={brand.name}
                        className="mx-auto h-6 w-auto max-w-full object-contain transition duration-200 sm:h-8 lg:h-9 dark:brightness-0 dark:invert dark:opacity-80"
                    />
                ))}
            </div>
        </section>
    )
}

export default BrandLogos

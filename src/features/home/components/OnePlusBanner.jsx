import { Link } from 'react-router-dom'
import bannerImage from '../../../assets/images/oneplus-banner.png'

function OnePlusBanner() {
    return (
        <section className="px-5 py-8 sm:px-6 sm:py-10 lg:px-8">
            <div className="mx-auto max-w-[1440px]">

                <div className="relative overflow-hidden rounded-2xl bg-neutral-900">

                    <img
                        src={bannerImage}
                        alt="OnePlus Smartphones"
                        className="absolute inset-y-0 right-0 h-full w-full object-cover object-right sm:w-[62%]"
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/60 sm:bg-gradient-to-r sm:from-neutral-900 sm:via-neutral-900/80 sm:to-transparent" />

                    <div className="relative z-10 max-w-lg px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-20">
                        <h2 className="text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-[40px]">
                            Experience Speed &amp; Innovation With OnePlus Smartphones
                        </h2>

                        <p className="mt-3 text-[13px] leading-5 text-white/70 sm:mt-4 sm:text-sm">
                            Discover ultra-fast performance, stunning displays, and premium
                            design with the latest OnePlus models.
                        </p>

                        <Link
                            to="/shop"
                            className="mt-6 inline-block rounded-full bg-white px-6 py-2.5 text-[13px] font-medium text-black transition hover:bg-gray-200 sm:text-sm"
                        >
                            Shop Now
                        </Link>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default OnePlusBanner

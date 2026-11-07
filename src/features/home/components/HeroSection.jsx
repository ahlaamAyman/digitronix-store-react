import { Link } from 'react-router-dom'
import heroImage from '../../../assets/images/hero-woman.jpg'

function HeroSection() {
    return (
        <section className="relative min-h-[520px] overflow-hidden bg-[#111111]">

            {/* Hero Image */}
            <img
                src={heroImage}
                alt="Woman wearing headphones"
                className="absolute inset-0 h-full w-full object-cover object-center lg:object-right"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/55 lg:bg-gradient-to-r lg:from-[#111111] lg:via-[#111111]/35 lg:to-transparent" />

            {/* Content */}
            <div className="relative z-10 mx-auto flex min-h-[520px] max-w-[1440px] items-center">
                <div className="w-full px-6 py-20 lg:w-[52%] lg:px-12">

                    <h1 className="max-w-[560px] text-4xl font-semibold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-[52px]">
                        Elevate Your Audio Experience With Sony Headphones
                    </h1>

                    <p className="mt-5 max-w-[500px] text-sm leading-6 text-white/70 sm:text-base">
                        Immerse yourself in high-quality sound with noise-canceling
                        and deep bass technology.
                    </p>

                    <Link
                        to="/shop"
                        className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-sm font-medium text-black transition hover:bg-gray-200"
                    >
                        Shop Now
                    </Link>
                </div>

                {/* Next button */}
                <Link
                    to="/shop"
                    aria-label="Next slide"
                    className="absolute right-5 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black transition hover:bg-gray-200 sm:flex lg:right-8"
                >
                    →
                </Link>
            </div>
        </section>
    )
}

export default HeroSection

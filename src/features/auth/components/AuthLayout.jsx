import { Link } from 'react-router-dom'
import Navbar from '../../../shared/components/layout/Navbar'
import ShippingBar from '../../../shared/components/layout/ShippingBar'
import BrandLogos from '../../home/components/BrandLogos'
import heroImage from '../../../assets/images/hero-woman.jpg'

function AuthLayout({ children }) {
    return (
        <main className="flex min-h-screen flex-col bg-white dark:bg-[#0a0a0c]">
            <ShippingBar />
            <Navbar />
            <div className="relative flex w-full flex-1 flex-col justify-end overflow-hidden bg-neutral-950 lg:block lg:flex-none">
                {/* Hero background */}
                <img
                    src={heroImage}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover object-center opacity-90 lg:object-[70%_center]"
                />
                <div className="absolute inset-0 bg-neutral-950/25 lg:bg-gradient-to-r lg:from-neutral-950 lg:via-neutral-950/70 lg:to-transparent" />

                {/* Hero copy */}
                <div className="pointer-events-none relative mx-auto flex min-h-[280px] max-w-[1440px] items-center px-6 pb-16 pt-10 sm:min-h-[360px] lg:min-h-[560px] lg:px-14 lg:pb-0 lg:pt-0">
                    <div className="max-w-md text-white">
                        <h1 className="text-3xl font-bold leading-tight sm:text-4xl xl:text-5xl">
                            Elevate Your Audio Experience With Sony Headphones
                        </h1>
                        <p className="mt-4 hidden text-sm text-neutral-300 lg:block">
                            Immerse yourself in high-quality sound with noise-canceling and deep bass technology.
                        </p>
                        <Link
                            to="/shop"
                            className="pointer-events-auto mt-6 inline-block rounded-full bg-white px-6 py-2.5 text-sm font-medium text-neutral-900 transition hover:bg-neutral-200 lg:block lg:w-max"
                        >
                            Shop Now
                        </Link>
                    </div>
                </div>

                {/* Auth card slot */}
                <div className="relative z-10 -mt-8 lg:absolute lg:inset-0 lg:mt-0 lg:flex lg:items-center lg:justify-start lg:px-4 lg:pl-[38%]">
                    {children}
                </div>

            </div>

            <div className="hidden sm:block">
                <BrandLogos />
            </div>
        </main>
    )
}

export default AuthLayout

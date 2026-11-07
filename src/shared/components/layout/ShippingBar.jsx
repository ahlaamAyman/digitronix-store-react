import { Link } from 'react-router-dom'

function ShippingBar() {
    return (
        <div className="flex items-center justify-between bg-black px-4 py-2 text-[11px] text-white lg:px-8">
            <p className="truncate">
                Enjoy free shipping on all orders this week!{' '}
                <Link to="/shop" className="underline font-medium hover:text-neutral-300">Shop Now</Link>
            </p>

            <div className="hidden shrink-0 gap-4 sm:flex">
                <span>USD $</span>
                <span>English</span>
            </div>
        </div>
    )
}

export default ShippingBar

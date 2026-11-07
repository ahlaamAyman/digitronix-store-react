import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, UserRound, Heart, ShoppingCart, Menu, X } from 'lucide-react'
import { useAuth } from "../../../features/auth/hooks/useAuth";
import { useLogoutMutation } from "../../../features/auth/api/authApi";
import { useSelector } from 'react-redux';
import { selectCartCount } from '../../../features/cart/store/cartSlice';
import CartDrawer from '../../../features/cart/components/CartDrawer';
import ThemeToggle from '../ui/ThemeToggle';

const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Shop', to: '/shop' },
    { label: 'Sale', to: '/shop' },
    { label: 'Blog', to: '/blog' },
    { label: 'Contact Us', to: '/contact' },
]

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)
    const { user, isAuthenticated } = useAuth()
    const [logout] = useLogoutMutation()
    const cartCount = useSelector(selectCartCount);

    return (
        <header className="relative bg-white text-black dark:bg-[#0c0c0e] dark:text-white border-b border-neutral-100 dark:border-neutral-800/80 transition-colors">
            <div className="flex items-center justify-between px-4 py-4 lg:px-8">

                {/* Burger — mobile only */}
                <button
                    type="button"
                    aria-label="Menu"
                    onClick={() => setIsMenuOpen((v) => !v)}
                    className="lg:hidden text-neutral-800 dark:text-neutral-200"
                >
                    {isMenuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
                </button>

                {/* Logo */}
                <Link to="/" className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-white">
                    Digitronix
                </Link>

                {/* Desktop nav */}
                <nav className="hidden items-center gap-7 text-sm lg:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            to={link.to}
                            className="text-neutral-700 dark:text-neutral-300 transition hover:text-neutral-900 dark:hover:text-white"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-3 sm:gap-4">
                    <ThemeToggle />

                    <button type="button" aria-label="Search" className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white">
                        <Search size={20} strokeWidth={1.5} />
                    </button>

                    {isAuthenticated ? (
                        <div className="hidden items-center gap-3 text-sm lg:flex">
                            <span className="flex items-center gap-1.5 text-neutral-800 dark:text-neutral-200">
                                <UserRound size={20} strokeWidth={1.5} />
                                {user?.name ?? 'Account'}
                            </span>

                            <button
                                type="button"
                                onClick={() => logout()}
                                className="cursor-pointer text-neutral-500 transition hover:text-neutral-900 dark:hover:text-white"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <Link to="/login" className="hidden items-center gap-1.5 text-sm text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white lg:flex">
                            <UserRound size={20} strokeWidth={1.5} />
                            <span>Sign in / Register</span>
                        </Link>
                    )}

                    <button type="button" aria-label="Wishlist" className="hidden text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white sm:block">
                        <Heart size={20} strokeWidth={1.5} />
                    </button>

                    <button
                        type="button"
                        onClick={() => setIsCartOpen(true)}
                        aria-label="Cart"
                        className="relative cursor-pointer text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
                    >
                        <ShoppingCart size={20} strokeWidth={1.5} />
                        {cartCount > 0 && (
                            <span className="absolute -right-1.5 -top-1.5 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-neutral-900 dark:bg-white px-1 text-[9px] font-medium text-white dark:text-neutral-950">
                                {cartCount}
                            </span>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <nav className="absolute inset-x-0 top-full z-40 border-t border-neutral-100 dark:border-neutral-800 bg-white dark:bg-[#121214] px-4 py-2 shadow-lg lg:hidden">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            to={link.to}
                            onClick={() => setIsMenuOpen(false)}
                            className="block border-b border-neutral-100 dark:border-neutral-800/80 py-3 text-sm text-neutral-800 dark:text-neutral-200 last:border-0"
                        >
                            {link.label}
                        </Link>
                    ))}

                    {isAuthenticated ? (
                        <>
                            <span className="flex items-center gap-2 py-3 text-sm font-medium text-neutral-800 dark:text-neutral-200">
                                <UserRound size={18} strokeWidth={1.5} />
                                {user?.name ?? 'Account'}
                            </span>

                            <button
                                type="button"
                                onClick={() => {
                                    logout()
                                    setIsMenuOpen(false)
                                }}
                                className="w-full py-3 text-left text-sm text-neutral-500 dark:text-neutral-400"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link
                            to="/login"
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center gap-2 py-3 text-sm font-medium text-neutral-800 dark:text-neutral-200"
                        >
                            <UserRound size={18} strokeWidth={1.5} />
                            Sign in / Register
                        </Link>
                    )}
                </nav>
            )}

            <CartDrawer
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
            />
        </header>
    )
}

export default Navbar
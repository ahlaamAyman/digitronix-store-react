import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6'

const footerColumns = [
    {
        title: 'About Company',
        links: [
            { label: 'Our Story', to: '/about' },
            { label: 'Shop', to: '/shop' },
            { label: 'Blog', to: '/blog' },
            { label: 'FAQ', to: '/faq' },
        ],
    },
    {
        title: 'Help Information',
        links: [
            { label: 'Shipping Information', to: '/shipping' },
            { label: 'Returns & Refunds', to: '/returns' },
            { label: 'Payment Options', to: '/payment' },
            { label: 'Contact Us', to: '/contact' },
        ],
    },
    {
        title: 'Terms of Service',
        links: [
            { label: 'Privacy Policy', to: '/privacy' },
            { label: 'Terms of Service', to: '/terms' },
            { label: 'Cookie Policy', to: '/cookies' },
        ],
    },
    {
        title: 'Account Information',
        links: [
            { label: 'Login/Create Account', to: '/login' },
            { label: 'Track Order', to: '/orders' },
            { label: 'Wishlist', to: '/wishlist' },
        ],
    },
]

const socialLinks = [
    { icon: FaFacebookF, label: 'Facebook', href: '#' },
    { icon: FaInstagram, label: 'Instagram', href: '#' },
    { icon: FaXTwitter, label: 'X', href: '#' },
    { icon: FaYoutube, label: 'YouTube', href: '#' },
]

function Footer() {
    const [email, setEmail] = useState('')

    const handleSubscribe = (e) => {
        e.preventDefault()
        console.log('subscribe →', email)
    }

    return (
        <footer className="bg-black dark:bg-[#060608] px-4 py-10 text-white lg:px-8 lg:py-14 transition-colors">
            <div className="mx-auto max-w-[1440px]">

                {/* Top: brand + newsletter */}
                <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">

                    <div>
                        <h2 className="text-2xl font-semibold tracking-tight">Digitronix</h2>
                        <p className="mt-3 text-sm text-white/70">(704) 555-0127</p>

                        <div className="mt-4 flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="text-white/70 transition hover:text-white"
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="rounded-2xl bg-white dark:bg-neutral-900 border border-transparent dark:border-neutral-800 p-6 text-neutral-900 dark:text-white lg:max-w-[560px] lg:flex-1 shadow-sm">
                        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Let&apos;s Get In Touch!</h3>
                        <p className="mt-1 text-[13px] text-neutral-500 dark:text-neutral-400">
                            What&apos;s inside? Exclusive sales, new arrivals &amp; much more.
                        </p>

                        <form onSubmit={handleSubscribe} className="mt-4 flex flex-col gap-2 sm:flex-row">
                            <input
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex-1 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800/90 px-4 py-2.5 text-base text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 outline-none transition focus:border-neutral-900 dark:focus:border-white sm:text-sm"
                            />

                            <button
                                type="submit"
                                className="rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 px-6 py-2.5 text-sm font-medium transition hover:bg-neutral-800"
                            >
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>

                {/* Link columns */}
                <div className="mt-10 grid grid-cols-2 gap-8 lg:mt-14 lg:grid-cols-4">
                    {footerColumns.map((column) => (
                        <div key={column.title}>
                            <h3 className="text-sm font-semibold">{column.title}</h3>

                            <ul className="mt-4 space-y-3">
                                {column.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            to={link.to}
                                            className="text-[13px] text-white/70 transition hover:text-white"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom */}
                <div className="mt-10 border-t border-white/10 pt-6 text-center lg:mt-14">
                    <p className="text-[13px] text-white/60">
                        Copyright © 2025 Digitronix, All Rights Reserved.
                    </p>
                </div>

            </div>
        </footer>
    )
}

export default Footer

import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

export default function ThemeToggle({ className = '' }) {
    const { isDark, toggleTheme } = useTheme()

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className={`cursor-pointer relative flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 text-neutral-700 transition hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-amber-400 ${className}`}
        >
            {isDark ? (
                <Sun size={18} strokeWidth={1.8} className="transition-transform rotate-0 scale-100 text-amber-400" />
            ) : (
                <Moon size={18} strokeWidth={1.8} className="transition-transform -rotate-12 scale-100 text-neutral-700" />
            )}
        </button>
    )
}

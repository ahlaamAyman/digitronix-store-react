import { Outlet } from 'react-router-dom'
import ShippingBar from './ShippingBar'
import Navbar from './Navbar'
import FeaturesBar from './FeaturesBar'
import Footer from './Footer'

function MainLayout() {
    return (
        <div className="min-h-screen flex flex-col bg-white text-neutral-900 dark:bg-[#0a0a0c] dark:text-neutral-100 transition-colors">
            <ShippingBar />
            <Navbar />

            <main className="flex-1">
                <Outlet />
            </main>

            <FeaturesBar />
            <Footer />
        </div>
    )
}

export default MainLayout

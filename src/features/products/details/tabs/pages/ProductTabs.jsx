import { useState } from 'react'
import DescriptionsTab from '../descriptions/DescriptionsTab'
import SpecsTab from '../specs/SpecsTab'
import ReviewsTab from '../reviews/pages/ReviewsTab'
import ShippingTab from '../shipping/ShippingTab'

const tabs = [
    { id: 'description', label: 'Descriptions' },
    { id: 'specs', label: 'Product Specifications' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'shipping', label: 'Shipping & Returns' },
]

function ProductTabs({ product }) {
    const [activeTab, setActiveTab] = useState('description')

    return (
        <div className="mt-12">

            <div className="flex gap-6 overflow-x-auto border-b border-neutral-200 dark:border-neutral-800 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveTab(tab.id)}
                        className={`whitespace-nowrap border-b-2 pb-3 text-[13px] transition cursor-pointer ${activeTab === tab.id
                                ? 'border-neutral-900 dark:border-white font-medium text-neutral-900 dark:text-white'
                                : 'border-transparent text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="mt-6">
                {activeTab === 'description' && <DescriptionsTab product={product} />}
                {activeTab === 'specs' && <SpecsTab specs={product.specs} />}
                {activeTab === 'reviews' && <ReviewsTab product={product} />}
                {activeTab === 'shipping' && <ShippingTab />}
            </div>

        </div>
    )
}

export default ProductTabs
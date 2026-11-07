import HeroSection from '../components/HeroSection'
import BrandLogos from '../components/BrandLogos'
import CategorySection from '../components/CategorySection'
import PromoSection from '../components/PromoSection'
import PopularCollectionsSection from '../../products/components/PopularCollectionsSection'
import OnePlusBanner from '../components/OnePlusBanner'
import BestsellerSection from '../../products/components/BestsellerSection'
import TestimonialsSection from '../components/TestimonialsSection'

function Home() {
    return (
        <>
            <HeroSection />
            <BrandLogos />
            <CategorySection />
            <PromoSection />
            <PopularCollectionsSection />
            <OnePlusBanner />
            <BestsellerSection />
            <TestimonialsSection />
        </>
    )
}

export default Home

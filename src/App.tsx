import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import BlogSection from './components/blog-section'
import CeoVideo from './components/ceo-video'
// import DeveloperAPISection from './components/developper-api'
import Features from './components/features'
import FinalCTA from './components/final-cta'
import MobileAppSection from './components/mobile-section'
import Pricing from './components/pricing'
import Testimonials from './components/testimonial'
import TrustedLogos from './components/trusted-logos'
import WhyCloudPay from './components/whycloudpaie'
import FAQ from './components/faq'
import CloudPayFooter from './components/footer'
import VideoCapsules from './components/videos-capsules'

function App() {

  return (
    <div className="App flex min-h-screen flex-col">
      <Navbar />
       <main className="flex-1">
        <Hero />
        <TrustedLogos />
        <About />
        <Features />
        {/* <DeveloperAPISection /> */}
        <MobileAppSection />
        <WhyCloudPay />
        <Testimonials />
        <CeoVideo />
        <VideoCapsules/>
        <BlogSection />
        <Pricing />
        <FinalCTA />
        <FAQ />
       </main>
       <CloudPayFooter />
    </div>
  )
}

export default App

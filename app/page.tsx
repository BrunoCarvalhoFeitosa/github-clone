import StickyNavbar from "@/components/Navbar/StickyNavbar"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Productivity from "@/components/Productivity/Productivity"
import Collaboration from "@/components/Collaboration/Collaboration"
import Security from "@/components/Security/Security"
import Globe from "@/components/Globe"
import Footer from "@/components/Footer"

const Home = () => {
  return (
    <main>
      <div>
        <StickyNavbar />
        <div className="relative z-50">
          <div className="absolute w-full">
            <Navbar />
          </div>
        </div>
        <div>
          <div className="overflow-hidden">
            <div className="relative">
              <img
                src="https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp"
                alt="Background lunar"
                width="4377"
                className="absolute top-0 transition ease-in duration-200 max-xl:right-[-1050px] xl:right-[-970px] image"
              />
            </div>
            <div className="Hero-section px-3">
              <Hero />
            </div>
            <div className="px-4 pt-8 overflow-hidden" id="productivity">
              <Productivity />
            </div>
            <div className="px-4 pt-8 overflow-hidden" id="collaboration">
              <Collaboration />
            </div>
            <div className="px-4 pt-8 overflow-hidden" id="security">
              <Security />
            </div>
            <div>
              <Globe />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  )
}

export default Home
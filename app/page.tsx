import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ReassuranceBar from '@/components/ReassuranceBar'
import Services from '@/components/Services'
import AnxietySection from '@/components/AnxietySection'
import Reviews from '@/components/Reviews'
import Team from '@/components/Team'
import NewPatientSteps from '@/components/NewPatientSteps'
import PracticalInfo from '@/components/PracticalInfo'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import MobileCTA from '@/components/MobileCTA'

export default function Home() {
  return (
    <>
      <Header />
      {/* pb-24 md:pb-0 = room for the mobile sticky CTA bar incl. safe-area-inset */}
      <main id="main" className="pb-24 md:pb-0">
        <Hero />
        <ReassuranceBar />
        <Services />
        <AnxietySection />
        <Reviews />
        <Team />
        <NewPatientSteps />
        <PracticalInfo />
        <Contact />
      </main>
      <Footer />
      <MobileCTA />
    </>
  )
}

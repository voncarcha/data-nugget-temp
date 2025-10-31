import TopNavigation from '@/components/top-navigation'
import HeaderSection from '@/components/header-section'
import FooterSection from '@/components/footer-section'
import PrivacySection from '@/components/privacy-section'

const PrivacyAndCookiePolicyPage = () => {
  return (
    <main>
      <TopNavigation />
      <HeaderSection title="Privacy & Cookie Policy" />
      <PrivacySection />
      <FooterSection />
    </main>
  )
}

export default PrivacyAndCookiePolicyPage
import React from 'react'
import TopNavigation from '@/components/top-navigation'
import HeaderSection from '@/components/header-section'
import FooterSection from '@/components/footer-section'
import TermsSection from '@/components/terms-section'

const TermsAndConditionsPage = () => {
  return (
    <main>
      <TopNavigation />
      <HeaderSection title="Terms & Conditions" />
      <TermsSection />
      <FooterSection />
    </main>
  )
}

export default TermsAndConditionsPage
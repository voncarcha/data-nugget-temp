import FooterSection from "@/components/footer-section";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import SolutionsSection from "@/components/solutions-section";
import TopNavigation from "@/components/top-navigation";

export default function Home() {
  return (
    <main>
      <TopNavigation />
      <HeroSection />
      <ServicesSection />
      <SolutionsSection />
      <FooterSection />
    </main>
  );
}

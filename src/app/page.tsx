import { Metadata } from "next";

import { AboutMeSection, BenefitsSection, ContactSection, HeroSection, ProjectsShowcase, ServicesSection } from "@/components";

export const metadata: Metadata = {
  title: 'Home - Fernando Gorordo',
  description: 'Portfolio personal de Fernando Gorordo, fullstack developer basado en javascript',
  applicationName: 'Personal Portfolio',
  creator: 'Fernando Gorordo',
  category: 'Developer',
  keywords:'developer, javascript, fullstack, programador, desarrollador, páginas web, crear mi página web, eccommerce, tienda online'
};

export default function Home() {
  return (
   <main className=''>
      <HeroSection />
      <ServicesSection />
      <BenefitsSection />
      {/* <ProjectsShowcase /> */}
      <AboutMeSection />
      <ContactSection />
   </main>
  );
};

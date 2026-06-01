import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import SkillsSection from '@/components/sections/SkillsSection'
import LearningSection from '@/components/sections/LearningSection'
import ContactSection from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main
        style={{
          background: 'var(--bg)',
          overflow: 'hidden',
          transition: 'background var(--T)',
        }}
      >
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <LearningSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  )
}

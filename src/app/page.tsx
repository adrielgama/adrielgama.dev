'use client'

import dynamic from 'next/dynamic'
import Footer from '@/components/footer'

const NavMenu = dynamic(() => import('@/components/nav-menu'), { ssr: false })
const AboutMe = dynamic(() => import('@/components/about-me'), { ssr: false })
const Contact = dynamic(() => import('@/components/contact'), { ssr: false })
const ProjectsGallerySection = dynamic(
  () => import('@/components/projects-gallery'),
  { ssr: false }
)
const ThreeDMarqueeComponent = dynamic(
  () => import('@/components/three-d-marquee-bg'),
  { ssr: false }
)

export default function Home() {
  return (
    <div>
      <main className="min-h-screen">
        <NavMenu />
        <section className="from-background to-muted mt-28 flex h-auto items-center justify-center bg-gradient-to-b">
          <ThreeDMarqueeComponent />
        </section>

        <section className="bg-muted/50 flex min-h-screen items-center justify-center">
          <div className="container mx-auto md:py-8">
            <ProjectsGallerySection />
          </div>
        </section>

        <section className="bg-muted/50 flex items-center justify-center">
          <div className="container mx-auto px-4 py-8">
            <AboutMe />
          </div>
        </section>

        <section className="bg-muted/50 flex items-center justify-center">
          <div className="container mx-auto px-4 pt-8">
            <Contact />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

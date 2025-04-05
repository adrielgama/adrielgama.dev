import AboutMe from '@/components/about-me'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import NavMenu from '@/components/nav-menu'
import ProjectsGallerySection from '@/components/projects-gallery'
import ThreeDMarqueeComponent from '@/components/three-d-marquee-bg'

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

'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ExternalLink, Plus } from 'lucide-react'
import { FiGithub } from 'react-icons/fi'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const projects = [
  {
    id: 'josiane-mendonca',
    title: 'Josiane Mendonça - Lawyer',

    description:
      'Professional platform for labor lawyer, offering legal services and consultations.',
    image: '/hero/josiane-adv.webp',
    technologies: [
      'Next.js 15',
      'TypeScript',
      'Tailwind CSS',
      'EmailJS',
      'React Hook Form',
      'Zustand',
      'Vercel',
    ],
    liveUrl: 'https://www.josianemendonca.adv.br/',
    githubUrl: 'https://github.com/adrielgama/josianemendonca.adv',
    featured: true,
  },
  {
    id: 'fapp-e-commercer',
    title: 'Fármacias APP',
    description: 'Pharmacy delivery, supplements, hygiene products, and more.',
    image: '/hero/fappdev.webp',
    technologies: [
      'Next.js 13',
      'Typescript',
      'Styled Components',
      'React Google Maps',
      'JWT',
      'Axios',
    ],
    liveUrl: 'https://www.fappdev.com/home',
    featured: true,
  },
  {
    id: 'onboarding-fapp',
    title: 'Seller Onboarding',
    description:
      'Digital services onboarding platform for pharmacies, with a summary of solutions and costs.',
    image: '/hero/onboarding-seller.webp',
    technologies: [
      'Next.js 15',
      'Tailwind CSS',
      'TypeScript',
      'SEO',
      'Zustand',
    ],
    liveUrl: 'https://onboarding.farmaciasdigitais.com.br/',
    featured: true,
  },
  {
    id: 'tapetes-e-tal',
    title: 'Tapetes & Tal',
    description:
      'Landing page for a carpet store, showcasing products and services.',
    image: '/hero/tapetes-e-tal.webp',
    technologies: [
      'Vite',
      'TypeScript',
      'React Marquee',
      'Tailwind CSS',
      'EmailJS',
      'React Hook Form',
      'Zustand',
      'Vercel',
    ],
    liveUrl: 'https://www.tapetesetal.com.br/',
    featured: false,
  },
  {
    id: 'ui-kit-fapp',
    title: 'UI-Kit - Fármacias APP',
    description:
      'Design system for Fármacias APP, providing reusable components and styles.',
    image: '/hero/fapp-old-ui-kit.webp',
    technologies: [
      'ReactJS',
      'Markdown',
      'TypeScript',
      'Storybook',
      'Styled Components',
      'NPM',
      'Prism React Renderer',
      'Jest',
    ],
    liveUrl: 'https://ui-kit.poc.fappdev.com/',
    featured: false,
  },
  {
    id: 'rapid-resume',
    title: 'Rapid Resume',
    description:
      'Create a professional resume in minutes with this easy-to-use tool.',
    image: '/hero/rapid-resume.webp',
    technologies: [
      'Next.js 15',
      'Axios',
      'TypeScript',
      'Tailwind CSS',
      'Clerk',
      'Zustand',
      'React Hook Form',
      'React PDF',
    ],
    liveUrl: 'https://rapid-resume.adrielgama.dev/',
    githubUrl: 'https://github.com/adrielgama/rapid-resume',
    featured: false,
  },
  {
    id: 'blag-dashboard',
    title: 'BLAG Dashboard',
    description:
      'A dashboard for managing and createing blog posts, with a user-friendly interface.',
    image: '/hero/blag.webp',
    technologies: [
      'Next.js 15',
      'Axios',
      'TypeScript',
      'Tailwind CSS',
      'Next Auth',
      'Zustand',
      'React Hook Form',
      'React Tanstack Query',
      'TinyMCE',
    ],
    liveUrl: 'https://blag.adrielgama.dev/',
    githubUrl: 'https://github.com/adrielgama/blag-dashboard',
    featured: false,
  },
  {
    id: 'blag-api',
    title: 'BLAG API',
    description:
      'A RESTful API for managing blog posts, with authentication and authorization.',
    image: '/placeholder.svg?height=800&width=600',
    technologies: [
      'Next.js 15',
      'Axios',
      'TypeScript',
      'Tailwind CSS',
      'Next Auth',
      'Zustand',
      'React Hook Form',
      'React Tanstack Query',
      'TinyMCE',
    ],
    liveUrl: 'https://blag.adrielgama.dev/',
    githubUrl: 'https://github.com/adrielgama/blag-dashboard',
    featured: false,
  },
]

export default function ProjectsGallerySection() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const [showAll, setShowAll] = useState(false)

  const displayedProjects = showAll
    ? projects
    : projects.filter((project) => project.featured)

  return (
    <section className="py-24 text-white" id="projects">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-5xl font-bold tracking-tighter text-zinc-950 dark:text-white">
            My Projects
          </h2>
          <div className="mx-auto mb-6 h-1 w-20 bg-cyan-500"></div>
        </div>

        <div className="grid auto-rows-fr grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayedProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="group relative h-[400px] overflow-hidden rounded-xl"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 to-transparent"></div>
              <Image
                src={project.image || '/placeholder.svg'}
                alt={project.title}
                fill
                className={`object-cover transition-transform duration-700 ${
                  hoveredProject === project.id ? 'scale-110' : 'scale-100'
                }`}
              />

              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 transition-all duration-300">
                <h3 className="mb-2 text-2xl font-bold">{project.title}</h3>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    hoveredProject === project.id
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="mb-4 text-gray-200">{project.description}</p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-none bg-white/10 text-white"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white/20 bg-zinc-800 hover:bg-zinc-800/90 hover:text-blue-400 dark:bg-zinc-50 dark:hover:bg-white/10"
                        asChild
                      >
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FiGithub className="mr-2 size-4" />
                          Code
                        </Link>
                      </Button>
                    )}
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                      asChild
                    >
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="!text-white"
                      >
                        <ExternalLink className="mr-2 size-4" />
                        View Project
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {!showAll && (
          <div className="mt-12 flex justify-center">
            <Button
              onClick={() => setShowAll(true)}
              className="cursor-pointer text-white hover:from-cyan-600 hover:to-blue-700"
            >
              <Plus className="mr-2 size-4" />
              View All Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

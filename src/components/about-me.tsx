import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { FaXTwitter, FaGithub, FaLinkedin } from 'react-icons/fa6'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import ResumeDownload from './resume-download'

export default function AboutMe() {
  const skills = [
    'Next.js',
    'React.js',
    'TypeScript',
    'Tailwind CSS',
    'Styled Components',
    'Figma',
    'UI/UX',
    'SEO',
    'NPM',
    'Jira',
    'Bitbucket',
    'Storybook',
    'Git',
    'GitHub',
    'Kanban',
    'Scrum',
    'Azure DevOps',
    'Context API',
    'React Query',
    'Zustand',
  ]

  return (
    <section id="about" className="pt-0 md:pt-8 md:pb-20">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Image Column */}
          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src="/about-me/adrielgama-3d.webp"
                alt="Adriel Gama - PIXAR 3D Character"
                fill
                className="object-cover object-top"
                quality={100}
              />
            </div>
            <div className="absolute -right-6 -bottom-6 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 p-6 shadow-xl">
              <p className="text-xl font-bold text-white">
                5+ Years Experience
              </p>
              <p className="text-emerald-100">Front-end Development</p>
            </div>
          </div>

          {/* Content Column */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-2" variant="outline">
                About Me
              </Badge>
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Hi, I&apos;m{' '}
                <span className="text-blue-500 dark:text-blue-400">
                  Adriel Gama
                </span>
                , a Front-end Developer based in Salvador, Brazil
              </h2>
              <p className="mb-6 text-lg text-slate-600 dark:text-slate-400">
                I specialize in building responsive, user-friendly web
                applications with modern JavaScript frameworks. With 5+ years of
                experience, I&apos;ve worked on projects ranging from small
                business websites to complex enterprise applications.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                When I&apos;m not coding, you can find me hiking in video games
                or experimenting with new recipes.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold">My Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <ResumeDownload isDarkMode />
              <Button variant="outline" asChild>
                <Link href="#contact">
                  Contact Me
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>

            <div className="flex gap-4 pt-2">
              <Link
                href="https://github.com/adrielgama"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="icon" variant="ghost" className="cursor-pointer">
                  <FaGithub className="size-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link
                href="https://linkedin.com/in/adrielgama"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="icon" variant="ghost" className="cursor-pointer">
                  <FaLinkedin className="size-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link
                href="https://x.com/adrielgama"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="icon" variant="ghost" className="cursor-pointer">
                  <FaXTwitter className="size-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

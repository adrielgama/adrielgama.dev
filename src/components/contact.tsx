'use client'

import Lottie from 'lottie-react'
import { Mail, MapPin, Phone, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import {
  FaXTwitter as Twitter,
  FaGithub as Github,
  FaLinkedin as Linkedin,
} from 'react-icons/fa6'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

import contactAnimation from '../../public/contact-animation.json'

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h2 className="mb-4 text-3xl font-bold tracking-tighter">
                Get In Touch
              </h2>
              <div className="mb-6 h-1 w-20 bg-cyan-500"></div>
              <p className="max-w-md text-lg text-slate-600 dark:text-slate-400">
                I&apos;m always open to discussing new projects, creative ideas
                or opportunities to be part of your vision.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="border-none bg-slate-50 shadow-none dark:bg-slate-900">
                <CardContent className="flex items-start p-4">
                  <div className="mr-4 rounded-full bg-cyan-100 p-3 dark:bg-cyan-900/30">
                    <Mail className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Email</h3>
                    <Link
                      href="mailto:adrielgama@gmail.com"
                      className="text-cyan-600 hover:underline dark:text-cyan-400"
                    >
                      adrielgama@gmail.com
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none bg-slate-50 shadow-none dark:bg-slate-900">
                <CardContent className="flex items-start p-4">
                  <div className="mr-4 rounded-full bg-cyan-100 p-3 dark:bg-cyan-900/30">
                    <MapPin className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Location</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Salvador, Bahia - Brazil
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none bg-slate-50 shadow-none dark:bg-slate-900">
                <CardContent className="flex items-start p-4">
                  <div className="mr-4 rounded-full bg-cyan-100 p-3 dark:bg-cyan-900/30">
                    <Phone className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Phone</h3>
                    <Link
                      href="tel:+5571996559476"
                      className="text-cyan-600 hover:underline dark:text-cyan-400"
                    >
                      +55 (71) 99655-9476
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-semibold">Social Profiles</h3>
              <div className="flex gap-3">
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-full"
                  asChild
                >
                  <Link
                    href="https://github.com/adrielgama"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-full"
                  asChild
                >
                  <Link
                    href="https://linkedin.com/in/adrielgama"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-full"
                  asChild
                >
                  <Link
                    href="https://twitter.com/adrielgama"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </Button>
              </div>
            </div>

            <Button className="bg-cyan-600 hover:bg-cyan-700" asChild>
              <Link href="https://calendly.com/adrielgama" target="_blank">
                <ExternalLink className="mr-2 h-4 w-4" />
                Schedule a Meeting
              </Link>
            </Button>
          </div>

          <div className="relative h-[400px] overflow-hidden rounded-xl lg:h-auto">
            <Lottie animationData={contactAnimation} loop={true} />
          </div>
        </div>
      </div>
    </section>
  )
}

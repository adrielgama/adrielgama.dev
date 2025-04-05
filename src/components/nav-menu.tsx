'use client'

import { useState, useEffect } from 'react'

import { Menu } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

import { ModeToggle } from './theme-toggle'
import { VisuallyHidden } from './ui/visually-hidden'

export default function NavMenu() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#', id: '' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'About Me', href: '#about', id: 'about' },
    // { name: 'Resume', href: '#resume', id: 'resume' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  const handleSmoothScroll =
    (id: string) => (e: { preventDefault: () => void }) => {
      e.preventDefault()
      if (id === '') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      } else {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
          })
        }
      }
      setIsMobileMenuOpen(false)
    }

  return (
    <header
      className={cn(
        'fixed top-0 right-0 left-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled
          ? 'bg-background/80 shadow-sm backdrop-blur-md'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Adriel Gama
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-zinc-800 transition-colors hover:text-blue-500 dark:text-zinc-50 dark:hover:text-blue-300"
                onClick={handleSmoothScroll(item.id)}
              >
                {item.name}
              </Link>
            ))}
            <ModeToggle />
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <VisuallyHidden>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription></SheetDescription>
            </VisuallyHidden>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="size-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80%] sm:w-[350px]">
              <div className="flex h-full flex-col">
                <div className="ml-4 flex flex-1 flex-col justify-between py-2">
                  <nav className="flex flex-col space-y-6 pt-16">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-foreground hover:text-primary text-lg font-medium transition-colors"
                        onClick={handleSmoothScroll(item.id)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                  <ModeToggle />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

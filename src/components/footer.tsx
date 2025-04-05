import Link from 'next/link'
import { Button } from './ui/button'

function Footer() {
  return (
    <footer className="h-auto bg-zinc-100 py-16 text-sm text-zinc-800 dark:bg-zinc-950 dark:text-white">
      <div className="container mx-auto flex flex-col items-start justify-between px-4 lg:flex-row">
        <div className="flex max-w-sm flex-col gap-12">
          <p>
            Working with front-end development and UI/UX design has sharpened my
            eye for digital excellence, driving me to craft intuitive and
            impactful user experiences.
          </p>

          <p className="text-zinc-500">
            © Adriel Gama. All rights reserved 2025
          </p>
        </div>
        <div className="flex h-full w-full flex-row justify-between gap-12 pt-12 lg:w-auto lg:flex-col lg:pt-0">
          <div className="flex flex-col gap-1">
            <Link
              href="https://github.com/adrielgama"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-blue-500 dark:hover:text-blue-300"
            >
              GitHub
            </Link>
            <Link
              href="https://linkedin.com/in/adrielgama"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-blue-500 dark:hover:text-blue-300"
            >
              LinkedIn
            </Link>
            <Link
              href="https://x.com/adrielgama"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-blue-500 dark:hover:text-blue-300"
            >
              X
            </Link>
          </div>
          {/* <div className="flex gap-2">
            <Button
              variant="secondary"
              size="icon"
              className="size-8 cursor-pointer text-xs"
            >
              EN
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="size-8 cursor-pointer text-xs"
            >
              BR
            </Button>
          </div> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer

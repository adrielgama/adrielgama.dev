import Link from 'next/link'
import { Download } from 'lucide-react'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { cn } from '@/lib/utils'

export default function ResumeDownload({
  isDarkMode,
}: {
  isDarkMode?: boolean
}) {
  return (
    <DropdownMenu>
      {/* Botão que abre o dropdown */}
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            'cursor-pointer',
            isDarkMode &&
              'bg-zinc-800 text-white hover:bg-zinc-700 hover:text-white dark:!bg-zinc-50 dark:!text-zinc-800 dark:hover:!bg-zinc-300 dark:hover:!text-zinc-800'
          )}
        >
          <Download className="mr-2 size-4" />
          Download Resume
        </Button>
      </DropdownMenuTrigger>

      {/* Conteúdo do dropdown */}
      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <Link
            href="/adriel-gama-en.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            English
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="/adriel-gama-pt.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Português
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

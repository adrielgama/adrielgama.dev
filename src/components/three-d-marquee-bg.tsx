'use client'

import ResumeDownload from './resume-download'
import { ThreeDMarquee } from './ui/3d-marquee'

export function ThreeDMarqueeDemo() {
  const images = [
    '/hero/fapp-old-ui-kit.webp',
    '/hero/image-converter.webp',
    '/hero/josiane-adv.webp',
    '/hero/onboarding-seller.webp',
    '/hero/tapetes-e-tal.webp',
    '/hero/rapid-resume.webp',
    '/hero/fappdev.webp',
    '/hero/blag.webp',

    '/hero/blag.webp',
    '/hero/fapp-old-ui-kit.webp',
    '/hero/fappdev.webp',
    '/hero/rapid-resume.webp',
    '/hero/onboarding-seller.webp',
    '/hero/josiane-adv.webp',
    '/hero/tapetes-e-tal.webp',
    '/hero/image-converter.webp',
    '/hero/blag.webp',

    '/hero/fapp-old-ui-kit.webp',
    '/hero/fappdev.webp',
    '/hero/onboarding-seller.webp',
    '/hero/blag.webp',
    '/hero/image-converter.webp',
    '/hero/josiane-adv.webp',
    '/hero/tapetes-e-tal.webp',
    '/hero/rapid-resume.webp',

    '/hero/blag.webp',
    '/hero/fapp-old-ui-kit.webp',
    '/hero/fappdev.webp',
    '/hero/image-converter.webp',
    '/hero/josiane-adv.webp',
    '/hero/onboarding-seller.webp',
    '/hero/rapid-resume.webp',
    '/hero/tapetes-e-tal.webp',
    '/hero/image-converter.webp',
  ]
  return (
    <div className="relative container mx-auto flex h-[400px] flex-col items-center justify-center lg:h-[600px]">
      <div className="z-20 flex flex-col items-center px-4">
        <h2 className="relative mx-auto max-w-4xl text-center text-2xl font-bold text-balance text-zinc-950 md:text-4xl lg:text-6xl dark:text-white">
          Adriel Gama{' '}
          <span className="relative inline-block rounded-sm bg-blue-500/40 px-2 py-1 text-zinc-950 underline decoration-sky-500 decoration-[6px] underline-offset-[16px] backdrop-blur-sm dark:text-white">
            Front-end
          </span>{' '}
          Developer.
        </h2>
        <p className="relative mx-auto max-w-2xl pt-8 text-center text-sm text-neutral-600 md:text-base dark:text-neutral-200">
          I&apos;m a front-end developer with a passion for creating beautiful
          experiences.
        </p>
        <div className="pt-2">
          <ResumeDownload />
        </div>
      </div>

      <div className="absolute inset-0 z-10 h-full w-full bg-white/70 dark:bg-black/70" />
      <ThreeDMarquee
        images={images}
        className="pointer-events-none absolute inset-0 h-full w-full"
      />
    </div>
  )
}

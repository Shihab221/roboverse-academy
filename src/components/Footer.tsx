"use client"

import React from 'react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { ChevronUp } from 'lucide-react'

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M15 3h-2.5A3.5 3.5 0 0 0 9 6.5V9H6.5v3H9v9h3v-9h2.5l.5-3H12V6.8c0-.7.3-1 .8-.8H15V3z" strokeLinejoin="round" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M5 4l14 16M19 4L5 20" strokeLinecap="round" />
    </svg>
  )
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <rect x="3" y="6" width="18" height="12" rx="3.5" />
      <path d="M10.5 9.8v4.4l4-2.2-4-2.2z" fill="currentColor" stroke="none" />
    </svg>
  )
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 3a9 9 0 0 0-2.85 17.54c.45.08.62-.19.62-.43v-1.5c-2.53.55-3.07-1.08-3.07-1.08-.41-1.05-1.01-1.33-1.01-1.33-.83-.56.06-.55.06-.55.92.06 1.4.94 1.4.94.82 1.4 2.14 1 2.66.76.08-.6.32-1 .58-1.23-2.02-.23-4.14-1.01-4.14-4.49 0-.99.35-1.8.93-2.44-.09-.23-.4-1.15.09-2.4 0 0 .76-.24 2.5.93a8.7 8.7 0 0 1 4.55 0c1.74-1.17 2.5-.93 2.5-.93.49 1.25.18 2.17.09 2.4.58.64.93 1.45.93 2.44 0 3.49-2.13 4.25-4.16 4.48.33.29.63.85.63 1.72v2.55c0 .24.17.52.63.43A9 9 0 0 0 12 3z" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M6.5 8.8v12H3V8.8h3.5zM4.75 3.5a2 2 0 1 1 0 4.05 2 2 0 0 1 0-4.05zM20.5 13.4v7.4h-3.5v-6.5c0-1.5-.8-2.5-2.1-2.5-1.1 0-1.7.8-2 1.5-.1.3-.1.6-.1 1v6.5H9.3V8.8h3.5v1.5c.5-.7 1.3-1.7 3.1-1.7 2.3 0 4.6 1.5 4.6 4.8z" />
    </svg>
  )
}

export function Footer() {
  const { t } = useLanguage()

  const columns: { heading: string; links: { href: string; label: string }[] }[] = [
    {
      heading: t('footer.learn'),
      links: [
        { href: '/lessons', label: t('nav.lessons') },
        { href: '/projects', label: t('nav.projects') },
        { href: '/dashboard', label: t('nav.dashboard') },
        { href: '/blog', label: t('nav.blog') },
        { href: '/about', label: t('nav.about') },
      ],
    },
    {
      heading: t('footer.explore'),
      links: [
        { href: '/arduino', label: 'Arduino' },
        { href: '/esp32', label: 'ESP32' },
        { href: '/raspberrypi', label: 'Raspberry Pi' },
        { href: '/projects', label: t('nav.projects') },
      ],
    },
    {
      heading: t('footer.support'),
      links: [
        { href: '/faq', label: 'FAQ' },
        { href: '/contact', label: 'Contact' },
        { href: '/blog', label: t('nav.blog') },
      ],
    },
    {
      heading: t('footer.company'),
      links: [
        { href: '/about', label: t('nav.about') },
        { href: 'https://roboversebd.com', label: 'RoboverseBD' },
        { href: '/contact', label: 'Contact' },
      ],
    },
  ]

  const socials = [
    { href: '#', label: 'Facebook', Icon: FacebookIcon },
    { href: '#', label: 'Instagram', Icon: InstagramIcon },
    { href: '#', label: 'X', Icon: XIcon },
    { href: '#', label: 'YouTube', Icon: YoutubeIcon },
    { href: '#', label: 'GitHub', Icon: GithubIcon },
    { href: '#', label: 'LinkedIn', Icon: LinkedinIcon },
  ]

  const legalLinks = [
    { href: '/sitemap', label: t('footer.siteMap') },
    { href: '/terms', label: t('footer.legal') },
    { href: '/privacy', label: t('footer.privacy') },
    { href: '/cookies', label: t('footer.cookies') },
  ]

  return (
    <footer className="relative z-10 mt-auto bg-[#111111] text-[#999999] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
          {/* Link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 flex-1">
            {columns.map((col) => (
              <div key={col.heading}>
                <h3 className="text-[15px] font-normal text-[#eeeeee] mb-4">
                  {col.heading}
                </h3>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={`${link.href}-${link.label}`}>
                      <Link
                        href={link.href}
                        className="text-[13px] text-[#888888] hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Follow Us */}
            <div>
              <h3 className="text-[15px] font-normal text-[#eeeeee] mb-4">
                {t('footer.follow')}
              </h3>
              <ul className="space-y-2.5">
                {socials.map(({ href, label, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      aria-label={label}
                      className="w-8 h-8 rounded-full border border-white/25 flex items-center justify-center text-[#aaaaaa] hover:text-white hover:border-white/60 transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Slogan — the single green accent */}
          <p className="text-cyan-400 text-[15px] font-medium tracking-wide whitespace-nowrap lg:text-right shrink-0">
            {t('footer.slogan')}
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-5 border-t border-white/10 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
          <p className="text-[13px] text-[#888888]">
            Copyright &copy; {new Date().getFullYear()} Robotics Academy by RoboverseBD.{' '}
            {t('footer.rights')}
          </p>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px]">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[#888888] hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="text-[13px] md:ml-auto pr-14">
            <span className="text-white">{t('footer.location')}</span>
            <span className="mx-2 text-[#555555]">|</span>
            <a href="#" className="text-[#888888] hover:text-white transition-colors">
              {t('footer.changeLocation')}
            </a>
          </p>
        </div>
      </div>

      {/* Back to top */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className="absolute bottom-6 right-6 w-11 h-11 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors"
      >
        <ChevronUp className="w-6 h-6 text-cyan-400" strokeWidth={3} />
      </button>
    </footer>
  )
}

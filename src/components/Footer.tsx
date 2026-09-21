"use client"

import React from 'react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { Bot, Mail, Phone, MapPin, ExternalLink, MessageCircle, Video, Heart } from 'lucide-react'
import { CircuitLine } from '@/components/ui/robotics-ui'

export function Footer() {
  const { t } = useLanguage()

  const quickLinks = [
    { href: '/lessons', label: t('nav.lessons') },
    { href: '/projects', label: t('nav.projects') },
    { href: '/dashboard', label: t('nav.dashboard') },
  ]

  const resources = [
    { href: '/blog', label: t('nav.blog') },
    { href: '/about', label: t('nav.about') },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <footer className="relative z-10 mt-auto bg-gray-800 border-t border-cyan-900/30">
      {/* Top circuit decoration */}
      <div className="absolute top-0 left-0 right-0 h-1">
        <CircuitLine variant="thick" className="text-cyan-400" />
      </div>
      
      {/* Corner accents */}
      <svg className="absolute top-4 left-4 w-16 h-16 opacity-20 text-cyan-500" viewBox="0 0 50 50" fill="none">
        <path d="M0 0h20l5 5v20" stroke="currentColor" strokeWidth="1" />
        <circle cx="20" cy="0" r="2" fill="currentColor" />
      </svg>
      <svg className="absolute top-4 right-4 w-16 h-16 opacity-20 text-cyan-500 rotate-90" viewBox="0 0 50 50" fill="none">
        <path d="M0 0h20l5 5v20" stroke="currentColor" strokeWidth="1" />
        <circle cx="20" cy="0" r="2" fill="currentColor" />
      </svg>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 pt-14 sm:pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 clip-corner-tl flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Robotics Academy
                </span>
                <span className="text-[10px] text-cyan-500/70 -mt-0.5">by RoboverseBD</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('footer.description')} A RoboverseBD initiative bringing quality robotics education to Bangladesh.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-gray-900/80 border border-cyan-900/30 hover:border-cyan-500/50 flex items-center justify-center transition-all hover:text-cyan-400 hover:bg-cyan-500/10 clip-corner-tl"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-900/80 border border-cyan-900/30 hover:border-cyan-500/50 flex items-center justify-center transition-all hover:text-cyan-400 hover:bg-cyan-500/10 clip-corner-tl"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-900/80 border border-cyan-900/30 hover:border-cyan-500/50 flex items-center justify-center transition-all hover:text-cyan-400 hover:bg-cyan-500/10 clip-corner-tl"
              >
                <Video className="w-4 h-4" />
              </a>
              <a
                href="mailto:info@roboversebd.com"
                className="w-9 h-9 bg-gray-900/80 border border-cyan-900/30 hover:border-cyan-500/50 flex items-center justify-center transition-all hover:text-cyan-400 hover:bg-cyan-500/10 clip-corner-tl"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.quicklinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.resources')}</h3>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.connect')}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-cyan-400" />
                info@roboversebd.com
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-cyan-400" />
                +88 01770-716570
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-cyan-400" />
                Dhaka, Bangladesh
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="relative mt-8 pt-8 text-center text-gray-400 text-sm">
          <CircuitLine variant="dashed" className="absolute top-0 left-0 right-0" />
          <p className="flex items-center justify-center gap-2 flex-wrap">
            <span className="w-2 h-2 bg-cyan-500/50 rounded-full animate-pulse" />
            © {new Date().getFullYear()} Robotics Academy by{' '}
            <a href="https://roboversebd.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
              RoboverseBD
            </a>. {t('footer.rights')}
            <span className="w-2 h-2 bg-cyan-500/50 rounded-full animate-pulse" />
          </p>
          <p className="mt-2 flex items-center justify-center gap-1 text-gray-500">
            Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> in Bangladesh
          </p>
        </div>
      </div>
    </footer>
  )
}

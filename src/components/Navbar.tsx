"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useLanguage } from '@/contexts/LanguageContext'
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Languages, 
  BookOpen,
  Bot,
  FolderOpen,
  LayoutDashboard,
  Search,
  ChevronRight,
  Home,
  User
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { CircuitLine } from '@/components/ui/robotics-ui'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()

  React.useEffect(() => setMounted(true), [])

  const isDark = mounted ? resolvedTheme !== 'light' : true

  const navItems = [
    { href: '/', label: t('nav.home'), icon: Home },
    { href: '/lessons', label: t('nav.lessons'), icon: BookOpen },
    { href: '/projects', label: t('nav.projects'), icon: FolderOpen },
    { href: '/dashboard', label: t('nav.dashboard'), icon: LayoutDashboard },
  ]

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl border-b border-cyan-200/60 dark:border-cyan-900/30">
        {/* Circuit line decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-px">
          <CircuitLine variant="default" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left Side - Hamburger + Logo */}
            <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1 lg:flex-none">
              {/* Hamburger Menu Button */}
              <button
                onClick={() => setIsOpen(true)}
                className="relative p-2 hover:bg-cyan-500/10 transition-colors lg:hidden clip-corner-tl border border-transparent hover:border-cyan-500/30"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>

              {/* Logo */}
              <Link href="/" className="flex items-center gap-2 group shrink-0">
                <div className="w-10 h-10 bg-cyan-500 flex items-center justify-center clip-corner-tl shadow-lg shadow-cyan-500/20">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div className="hidden sm:flex flex-col">
                  <span className="text-lg font-bold text-green-700 dark:text-cyan-400 leading-tight">
                    Robotics Academy
                  </span>
                  <span className="text-[10px] text-green-700/80 dark:text-cyan-500/70 -mt-0.5">by RoboverseBD</span>
                </div>
              </Link>
            </div>

            {/* Desktop Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <form className="w-full">
                <div className="relative group">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-cyan-400 transition-colors z-10" />
                  <input
                    type="text"
                    placeholder={t('common.search')}
                    className="w-full pl-11 pr-4 py-2.5 bg-slate-100 dark:bg-gray-900 border border-cyan-200 dark:border-cyan-900/40 focus:border-cyan-500/50 focus:outline-none text-sm text-slate-900 dark:text-slate-100 placeholder-gray-500 transition-all clip-corners"
                  />
                  <div className="absolute top-0 left-3 w-1 h-1 bg-cyan-500/50 rounded-full" />
                  <div className="absolute bottom-0 right-3 w-1 h-1 bg-cyan-500/50 rounded-full" />
                </div>
              </form>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center relative">
              <div className="relative flex items-center gap-0.5 bg-slate-100/80 dark:bg-gray-900/80 px-3 py-1.5 clip-nav-tech">
                {/* SVG stroke border */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="navBorderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgb(0,230,0)" stopOpacity="0.5" />
                      <stop offset="50%" stopColor="rgb(0,179,0)" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="rgb(0,230,0)" stopOpacity="0.5" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 14 0 L 100% 0 L 100% calc(100% - 14px) L calc(100% - 14px) 100% L 0 100% L 0 14 Z"
                    fill="none"
                    stroke="url(#navBorderGradient)"
                    strokeWidth="1"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative px-3.5 py-1.5 transition-all text-sm font-medium text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-gray-800/50"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              {/* Decorative circuit nodes */}
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-cyan-500/50 rounded-full" />
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-cyan-500/50 rounded-full" />
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
              {/* Mobile Search Toggle */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 hover:bg-slate-200/70 dark:hover:bg-gray-800 rounded-lg transition-colors md:hidden"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Language Toggle */}
              <button
                onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
                className="flex items-center gap-1 p-2 hover:bg-slate-200/60 dark:hover:bg-gray-800/50 transition-colors text-sm text-slate-500 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400"
              >
                <Languages className="w-4 h-4" />
                <span className="text-xs font-medium">{language === 'en' ? 'বাং' : 'EN'}</span>
              </button>

              {/* Theme Toggle */}
              <button
                onClick={() => setTheme(isDark ? 'light' : 'dark')}
                className="relative p-2 hover:bg-slate-200/60 dark:hover:bg-gray-800/50 transition-colors text-slate-500 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400"
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDark ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>

              {/* Auth buttons - Desktop */}
              <div className="hidden md:flex items-center gap-2">
                <Link
                  href="/login"
                  className="px-4 py-2 text-sm text-slate-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  {t('nav.login')}
                </Link>
                <Link
                  href="/signup"
                  className="relative px-5 py-2 text-sm font-medium text-black"
                  style={{ clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)" }}
                >
                  <span className="absolute inset-0 bg-cyan-400"
                    style={{ clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)" }}
                  />
                  <span className="relative z-10">{t('nav.signup')}</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Search Bar - Expandable */}
          <div className={cn(
            "overflow-hidden transition-all duration-300 md:hidden",
            searchOpen ? "max-h-16 py-3" : "max-h-0"
          )}>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-gray-400" />
              <input
                type="text"
                placeholder={t('common.search')}
                className="w-full pl-12 pr-4 py-3 bg-slate-100 dark:bg-gray-900 border border-slate-300 dark:border-gray-700 focus:border-cyan-500 focus:outline-none text-sm text-slate-900 dark:text-slate-100 placeholder-gray-500 clip-corners"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
          />

          {/* Sidebar */}
          <div className="fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-white dark:bg-gray-800 border-r border-cyan-200 dark:border-cyan-900/30 z-50 lg:hidden overflow-y-auto">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-gray-700">
              <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                <div className="w-9 h-9 bg-cyan-500 clip-corner-tl flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold">Robotics Academy</span>
                  <span className="text-[10px] text-green-700/80 dark:text-cyan-500/70 -mt-0.5">by RoboverseBD</span>
                </div>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-slate-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="p-4">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Menu</p>
              <nav className="space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between p-3 rounded-lg transition-colors hover:bg-slate-200 dark:hover:bg-gray-700 text-slate-700 dark:text-gray-300"
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 dark:text-gray-500" />
                  </Link>
                ))}
              </nav>
            </div>

            {/* Account Section */}
            <div className="p-4 border-t border-slate-200 dark:border-gray-700">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Account</p>
              <div className="space-y-2">
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-200 dark:hover:bg-gray-700 text-slate-700 dark:text-gray-300 transition-colors w-full"
                >
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5" />
                    <span className="font-medium">{t('nav.login')}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 dark:text-gray-500" />
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 p-3 bg-cyan-400 text-black font-medium clip-corner-br"
                >
                  {t('nav.signup')}
                </Link>
              </div>
            </div>

            {/* Footer branding */}
            <div className="p-4 border-t border-slate-200 dark:border-gray-700 mt-auto">
              <p className="text-xs text-gray-500 text-center">
                A project by <span className="text-green-700 dark:text-cyan-400">RoboverseBD</span>
              </p>
            </div>
          </div>
        </>
      )}
    </>
  )
}

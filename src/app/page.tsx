"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { RoboCard, RoboButton, HexBadge, CircuitLine } from '@/components/ui/robotics-ui'
import { cn } from '@/lib/utils'
import { 
  Cpu, 
  Bot, 
  Zap, 
  ArrowRight, 
  BookOpen, 
  Code, 
  Lightbulb, 
  Trophy,
  Users,
  Award,
  Sparkles,
  ChevronRight,
  Play,
  Star,
  Package,
  Truck,
  Shield,
  Headphones,
  CheckCircle2,
} from 'lucide-react'

export default function Home() {
  const { t } = useLanguage()

  const learningPaths = [
    {
      title: t('path.arduino.title'),
      description: t('path.arduino.description'),
      icon: <Cpu className="w-8 h-8" />,
      href: '/lessons/arduino/what-is-arduino',
      lessons: 45,
      projects: 20,
    },
    {
      title: t('path.esp32.title'),
      description: t('path.esp32.description'),
      icon: <Zap className="w-8 h-8" />,
      href: '/lessons/esp32/what-is-esp32',
      lessons: 30,
      projects: 15,
    },
    {
      title: t('path.raspberrypi.title'),
      description: t('path.raspberrypi.description'),
      icon: <Bot className="w-8 h-8" />,
      href: '/lessons/raspberrypi/what-is-raspberry-pi',
      lessons: 40,
      projects: 18,
    },
  ]

  const features = [
    {
      title: t('features.simple.title'),
      description: t('features.simple.description'),
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      title: t('features.visual.title'),
      description: t('features.visual.description'),
      icon: <Lightbulb className="w-6 h-6" />,
    },
    {
      title: t('features.interactive.title'),
      description: t('features.interactive.description'),
      icon: <Code className="w-6 h-6" />,
    },
    {
      title: t('features.progress.title'),
      description: t('features.progress.description'),
      icon: <Trophy className="w-6 h-6" />,
    },
  ]

  const stats = [
    { value: '100+', label: t('stats.lessons'), icon: <BookOpen className="w-5 h-5" /> },
    { value: '50+', label: t('stats.projects'), icon: <Code className="w-5 h-5" /> },
    { value: '10K+', label: t('stats.students'), icon: <Users className="w-5 h-5" /> },
    { value: '500+', label: t('stats.certificates'), icon: <Award className="w-5 h-5" /> },
  ]

  const featuredProjects = [
    {
      title: 'Smart Home System',
      description: 'Control lights, fans, and appliances with your phone',
      level: 'intermediate',
    },
    {
      title: 'Line Following Robot',
      description: 'Build a robot that follows a black line automatically',
      level: 'beginner',
    },
    {
      title: 'Weather Station',
      description: 'Monitor temperature, humidity, and display on LCD',
      level: 'beginner',
    },
  ]

  const testimonials = [
    {
      name: 'Rahim Ahmed',
      role: 'Engineering Student',
      content: 'I had no idea about electronics. Now I build my own robots! The simple explanations made everything easy.',
    },
    {
      name: 'Sarah Khan',
      role: 'Hobbyist Maker',
      content: 'Best platform for learning Arduino. The step-by-step approach and Bangla support is amazing!',
    },
    {
      name: 'Mohammad Ali',
      role: 'Teacher',
      content: 'I use this to teach my students. The visual diagrams and simple code explanations are perfect.',
    },
  ]

  const trustBadges = [
    { icon: Package, text: 'Free Lessons' },
    { icon: Truck, text: 'Learn Anywhere' },
    { icon: Shield, text: 'Quality Content' },
    { icon: Headphones, text: '24/7 Support' },
  ]

  return (
    <div className="relative w-full overflow-x-clip">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden isolate">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] -translate-x-1/2" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] translate-x-1/2" />
        
        {/* Decorative icons — pinned to viewport sides so they never sit on the headline */}
        <div
          className="pointer-events-none absolute inset-0 z-0 hidden lg:block"
          aria-hidden
        >
          <div className="absolute top-[22%] left-[clamp(1rem,5vw,4rem)] animate-float">
            <div className="w-16 h-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-cyan-500/30 flex items-center justify-center clip-corner-tl">
              <Cpu className="w-8 h-8 text-green-700 dark:text-cyan-400" />
            </div>
          </div>
          <div
            className="absolute bottom-[28%] right-[clamp(1rem,5vw,4rem)] animate-float"
            style={{ animationDelay: '1s' }}
          >
            <div className="w-16 h-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-cyan-500/30 flex items-center justify-center clip-corner-br">
              <Bot className="w-8 h-8 text-green-700 dark:text-cyan-400" />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10 w-full px-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <HexBadge className="mb-6">
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Free for Everyone
              </span>
            </HexBadge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-slate-900 dark:text-white">
                {t('hero.title')}
              </span>
              <br />
              <span className="text-slate-600 dark:text-gray-300 text-3xl md:text-5xl lg:text-6xl">
                {t('hero.subtitle')}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-gray-400 max-w-2xl mx-auto mb-4">
              {t('hero.description')}
            </p>
            <p className="text-sm text-green-700/70 dark:text-cyan-500/70 mb-10">
              A <span className="text-green-700 dark:text-cyan-400 font-semibold">RoboverseBD</span> Initiative
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <RoboButton size="lg" variant="primary" onClick={() => window.location.href = '/lessons'}>
                {t('hero.cta')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </RoboButton>
              <RoboButton size="lg" variant="outline" onClick={() => window.location.href = '/projects'}>
                <Play className="w-5 h-5 mr-2" />
                {t('hero.secondary')}
              </RoboButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-slate-100/80 dark:bg-gray-800/50 border-y border-slate-200 dark:border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-0 sm:divide-x sm:divide-slate-200 dark:sm:divide-gray-700 py-3 sm:py-0">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-3 py-2 sm:py-4 px-2 text-center">
                <badge.icon className="w-4 h-4 sm:w-5 sm:h-5 text-green-700 dark:text-cyan-400 flex-shrink-0" />
                <span className="text-[11px] sm:text-sm text-slate-700 dark:text-gray-300 leading-snug">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-20 px-4 relative isolate">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your <span className="text-green-700 dark:text-cyan-400">Learning Path</span>
            </h2>
            <p className="text-slate-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Start from zero and become a pro. Each path is designed with simple, step-by-step lessons.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {learningPaths.map((path, index) => (
              <motion.div
                key={path.href}
                className="min-w-0 w-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={path.href}>
                  <RoboCard className="h-full cursor-pointer" variant="circuit" cornerCut="both">
                    <div className="p-6">
                      <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-6 text-green-700 dark:text-cyan-400 clip-corner-br">
                        {path.icon}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{path.title}</h3>
                      <p className="text-slate-600 dark:text-gray-400 mb-6">{path.description}</p>
                      <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-gray-500">
                        <span>{path.lessons} {t('path.arduino.lessons')}</span>
                        <span>•</span>
                        <span>{path.projects} {t('path.arduino.projects')}</span>
                      </div>
                      <div className="mt-6 flex items-center text-green-700 dark:text-cyan-400 group-hover:text-green-600 dark:group-hover:text-cyan-300 transition-colors">
                        <span className="text-sm font-medium">{t('path.start')}</span>
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </RoboCard>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features — horizontal timeline */}
      <section className="py-20 px-4 bg-slate-100/60 dark:bg-gray-800/30 relative isolate overflow-hidden">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('features.title')}
            </h2>
          </motion.div>

          {/* Desktop / tablet: center horizontal line + 4 dots */}
          <div className="hidden md:block relative pt-4 pb-4">
            <div
              className="absolute left-[6%] right-[6%] top-1/2 h-[2px] -translate-y-1/2 pointer-events-none"
              aria-hidden
            >
              <div className="h-full w-full bg-cyan-500/40" />
              <CircuitLine variant="default" className="absolute inset-0 opacity-40" />
            </div>

            <div className="grid grid-cols-4 gap-2 lg:gap-4 relative">
              {features.map((feature, index) => {
                const contentAbove = index % 2 === 0
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: contentAbove ? -16 : 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ delay: index * 0.12 }}
                    className="relative flex flex-col items-center min-h-[280px] lg:min-h-[300px]"
                  >
                    {contentAbove ? (
                      <div className="flex-1 flex flex-col items-center justify-end pb-10 px-1 text-center">
                        <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-3 text-green-700 dark:text-cyan-400 clip-corner-br">
                          {feature.icon}
                        </div>
                        <h3 className="text-base lg:text-lg font-semibold text-slate-900 dark:text-white mb-2 leading-snug">
                          {feature.title}
                        </h3>
                        <p className="text-slate-600 dark:text-gray-400 text-xs lg:text-sm leading-relaxed max-w-[14rem]">
                          {feature.description}
                        </p>
                      </div>
                    ) : (
                      <div className="flex-1" aria-hidden />
                    )}

                    <div
                      className="relative z-10 flex items-center justify-center shrink-0"
                      aria-hidden
                    >
                      <span className="absolute w-8 h-8 rounded-full bg-cyan-400/20 animate-pulse" />
                      <span className="relative w-4 h-4 rounded-full border-2 border-cyan-300 bg-white dark:bg-gray-900 shadow-[0_0_14px_rgba(0,255,0,0.75)]" />
                    </div>

                    {!contentAbove ? (
                      <div className="flex-1 flex flex-col items-center justify-start pt-10 px-1 text-center">
                        <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-3 text-green-700 dark:text-cyan-400 clip-corner-br">
                          {feature.icon}
                        </div>
                        <h3 className="text-base lg:text-lg font-semibold text-slate-900 dark:text-white mb-2 leading-snug">
                          {feature.title}
                        </h3>
                        <p className="text-slate-600 dark:text-gray-400 text-xs lg:text-sm leading-relaxed max-w-[14rem]">
                          {feature.description}
                        </p>
                      </div>
                    ) : (
                      <div className="flex-1" aria-hidden />
                    )}
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Mobile: vertical timeline */}
          <div className="md:hidden relative pl-8 border-l-2 border-cyan-500/30 ml-2 space-y-10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="relative"
              >
                <span
                  className="absolute -left-[calc(2rem+5px)] top-1 w-3.5 h-3.5 rounded-full border-2 border-cyan-300 bg-white dark:bg-gray-900 shadow-[0_0_10px_rgba(0,255,0,0.6)]"
                  aria-hidden
                />
                <div className="w-11 h-11 bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-3 text-green-700 dark:text-cyan-400 clip-corner-br">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats — 2×2 squares + description */}
      <section className="py-16 md:py-20 px-4 bg-cyan-500/10 relative isolate">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-md mx-auto lg:mx-0 w-full">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="aspect-square flex flex-col items-center justify-center text-center p-4 bg-white dark:bg-gray-900/70 border border-cyan-200 dark:border-cyan-500/25 hover:border-cyan-500/45 transition-colors clip-corner-tl shadow-lg shadow-slate-200 dark:shadow-black/20"
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-3 text-green-700 dark:text-cyan-400 clip-corner-tl">
                    {stat.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-green-700 dark:text-cyan-400 mb-1 leading-none">
                    {stat.value}
                  </div>
                  <div className="text-slate-600 dark:text-gray-400 text-xs sm:text-sm leading-snug px-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45 }}
              className="text-center lg:text-left"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-5 leading-tight">
                {t('stats.sectionTitle')}
              </h2>
              <p className="text-slate-700 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-4">
                {t('stats.sectionLead')}
              </p>
              <p className="text-slate-600 dark:text-gray-400 leading-relaxed mb-6">
                {t('stats.sectionBody')}
              </p>
              <p className="text-sm font-medium text-green-700/90 dark:text-cyan-400/90 border-l-2 border-cyan-500/50 pl-4 inline-block text-left">
                {t('stats.sectionHighlight')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certificates — W3Schools-style split */}
      <section className="relative py-20 md:py-24 px-4 isolate bg-slate-100/70 dark:bg-gray-800/25 border-y border-slate-200 dark:border-gray-800/60">
        <div className="absolute inset-0 bg-cyan-500/[0.04] pointer-events-none" />
        <div className="max-w-6xl mx-auto w-full relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left"
            >
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-green-700 dark:text-cyan-400 mb-4">
                {t('certificates.eyebrow')}
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                {t('certificates.title')}
              </h2>
              <p className="text-slate-600 dark:text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                {t('certificates.description')}
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center lg:justify-start">
                <RoboButton
                  size="lg"
                  variant="primary"
                  onClick={() => {
                    window.location.href = '/dashboard'
                  }}
                >
                  {t('certificates.ctaPrimary')}
                </RoboButton>
                <RoboButton
                  size="lg"
                  variant="outline"
                  onClick={() => {
                    window.location.href = '/lessons'
                  }}
                >
                  {t('certificates.ctaSecondary')}
                </RoboButton>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="w-full max-w-[22rem] rounded-2xl bg-white dark:bg-gray-900/90 border border-slate-200 dark:border-gray-700/60 shadow-[0_24px_64px_-12px_rgba(15,23,42,0.25)] dark:shadow-[0_24px_64px_-12px_rgba(0,0,0,0.55)] p-8 md:p-10 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-cyan-500" />
                <div className="flex justify-center mb-8 mt-2">
                  <div className="relative w-[7.5rem] h-[7.5rem]">
                    <svg
                      className="absolute inset-0 w-full h-full -rotate-90"
                      viewBox="0 0 120 120"
                      aria-hidden
                    >
                      <circle
                        cx="60"
                        cy="60"
                        r="54"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="text-cyan-500/25"
                      />
                    </svg>
                    <div className="absolute inset-2 rounded-full bg-cyan-500 flex flex-col items-center justify-center shadow-lg shadow-cyan-500/25 ring-2 ring-white/10">
                      <Bot className="w-10 h-10 text-white mb-0.5" />
                      <span className="text-[9px] font-bold tracking-wider text-black/80 uppercase">
                        {t('certificates.eyebrow')}
                      </span>
                    </div>
                    <span className="absolute -top-1 left-1/2 -translate-x-1/2 text-[8px] font-semibold text-green-700/90 dark:text-cyan-400/90 uppercase tracking-widest">
                      Robotics
                    </span>
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[10px] font-medium text-gray-500">
                      {t('certificates.badgeYear')}
                    </span>
                  </div>
                </div>
                <h3 className="text-center text-xl font-bold text-slate-900 dark:text-white mb-1 leading-snug">
                  {t('certificates.sampleTitle')}
                </h3>
                <p className="text-center text-slate-500 dark:text-gray-500 text-sm mb-8">
                  {t('certificates.sampleIssuer')}
                </p>
                <div className="border-t border-slate-200 dark:border-gray-700/70 pt-6 flex items-start gap-2 justify-center text-sm text-slate-600 dark:text-gray-400 text-center">
                  <CheckCircle2 className="w-5 h-5 text-green-700 dark:text-cyan-400 shrink-0 mt-0.5" />
                  <span>{t('certificates.verified')}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="relative py-20 px-4 isolate">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Featured <span className="text-green-700 dark:text-cyan-400">Projects</span>
              </h2>
              <p className="text-slate-600 dark:text-gray-400">Build real-world projects step by step</p>
            </div>
            <RoboButton variant="outline" onClick={() => window.location.href = '/projects'}>
              View All Projects
              <ChevronRight className="w-4 h-4 ml-1" />
            </RoboButton>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className="min-w-0 w-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
              >
                <RoboCard className="h-full cursor-pointer" cornerCut="both" variant="circuit">
                  <div className="aspect-video bg-slate-200 dark:bg-gray-700 relative overflow-hidden flex items-center justify-center">
                    <Cpu className="w-16 h-16 text-slate-400 dark:text-gray-600" />
                    <HexBadge className="absolute top-3 right-3">
                      {project.level === 'beginner' ? t('common.beginner') : t('common.intermediate')}
                    </HexBadge>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-gray-400 text-sm">{project.description}</p>
                  </div>
                </RoboCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-20 px-4 bg-slate-100/60 dark:bg-gray-800/30 isolate">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What <span className="text-green-700 dark:text-cyan-400">Students</span> Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="min-w-0 w-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
              >
                <RoboCard className="h-full" cornerCut="both">
                  <div className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <p className="text-slate-700 dark:text-gray-300 mb-6 italic">&quot;{testimonial.content}&quot;</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-cyan-500 flex items-center justify-center text-white font-semibold clip-corner-tl">
                        {testimonial.name[0]}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 dark:text-white">{testimonial.name}</div>
                        <div className="text-sm text-slate-500 dark:text-gray-400">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </RoboCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-20 px-4 pb-24 isolate">
        <div className="max-w-4xl mx-auto w-full">
          <RoboCard className="relative overflow-hidden" cornerCut="all" variant="glow">
            <div className="p-8 md:p-12 text-center">
              {/* Circuit decoration */}
              <CircuitLine variant="thick" className="absolute top-0 left-0 right-0" />
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Start Your <span className="text-green-700 dark:text-cyan-400">Robotics Journey</span>?
                </h2>
                <p className="text-slate-600 dark:text-gray-400 text-lg mb-4 max-w-2xl mx-auto">
                  Join thousands of students learning Arduino, Raspberry Pi, and Robotics. It&apos;s free and fun!
                </p>
                <p className="text-sm text-green-700/70 dark:text-cyan-500/70 mb-8">
                  Powered by <span className="text-green-700 dark:text-cyan-400 font-semibold">RoboverseBD</span>
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <RoboButton size="lg" variant="primary" onClick={() => window.location.href = '/signup'}>
                    Get Started for Free
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </RoboButton>
                  <RoboButton size="lg" variant="outline" onClick={() => window.location.href = '/lessons'}>
                    Browse Lessons
                  </RoboButton>
                </div>
              </div>
            </div>
          </RoboCard>
        </div>
      </section>
    </div>
  )
}

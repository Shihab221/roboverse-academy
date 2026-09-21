"use client"

import React from 'react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { RoboButton } from '@/components/ui/robotics-ui'
import { DEFAULT_LESSON_PATH, LESSON_TRACKS, lessonHref } from '@/data/lesson-tracks'
import { ArrowRight, BookOpen, Cpu, Zap, Bot } from 'lucide-react'

const trackIcons = {
  arduino: Cpu,
  esp32: Zap,
  raspberrypi: Bot,
} as const

export default function LessonsHomePage() {
  const { language, t } = useLanguage()
  const isBn = language === 'bn'

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-14">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center clip-corner-tl">
          <BookOpen className="w-6 h-6 text-cyan-400" />
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            {t('lessons.homeTitle')}
          </h1>
          <p className="text-sm text-gray-500">{t('lessons.homeSubtitle')}</p>
        </div>
      </div>

      <p className="text-gray-400 leading-relaxed mb-8">{t('lessons.homeIntro')}</p>

      <RoboButton size="lg" variant="primary" onClick={() => { window.location.href = DEFAULT_LESSON_PATH }}>
        {t('lessons.startArduino')}
        <ArrowRight className="w-5 h-5 ml-2" />
      </RoboButton>

      <div className="mt-12 space-y-4">
        <h2 className="text-lg font-semibold text-white">{t('lessons.tracksHeading')}</h2>
        {LESSON_TRACKS.map((track) => {
          const Icon = trackIcons[track.id]
          const first = track.modules[0]?.lessons[0]
          const href = first ? lessonHref(track.id, first.id) : '/lessons'

          return (
            <Link
              key={track.id}
              href={href}
              className="flex items-center gap-4 p-4 rounded-lg border border-gray-800 bg-gray-800/40 hover:border-cyan-500/40 hover:bg-gray-800/70 transition-colors group"
            >
              <div className="w-11 h-11 rounded-lg bg-gray-900 border border-cyan-900/40 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/50">
                <Icon className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-white group-hover:text-cyan-300">
                  {isBn ? track.titleBn : track.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {track.modules.reduce((n, m) => n + m.lessons.length, 0)}{' '}
                  {t('lessons.lessonCount')}
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-cyan-400 shrink-0" />
            </Link>
          )
        })}
      </div>

      <p className="mt-10 text-sm text-gray-500 border-t border-gray-800 pt-6">
        {t('lessons.sidebarHint')}
      </p>
    </div>
  )
}

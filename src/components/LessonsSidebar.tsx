"use client"

import React, { useMemo, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, ChevronRight, Menu, X, BookOpen } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import {
  LESSON_TRACKS,
  lessonHref,
  type LessonTrackId,
} from '@/data/lesson-tracks'
import { getArduinoLesson } from '@/data/arduino-lessons'
import { cn } from '@/lib/utils'

function parseLessonPath(pathname: string): {
  track: LessonTrackId | null
  slug: string | null
} {
  const match = pathname.match(/^\/lessons\/(arduino|esp32|raspberrypi)(?:\/([^/]+))?/)
  if (!match) return { track: null, slug: null }
  return { track: match[1] as LessonTrackId, slug: match[2] ?? null }
}

const DEFAULT_EXPANDED_TRACKS: Record<LessonTrackId, boolean> = {
  arduino: true,
  esp32: true,
  raspberrypi: true,
}

function getDefaultExpandedModules(): Record<string, boolean> {
  const result: Record<string, boolean> = {}
  for (const track of LESSON_TRACKS) {
    for (const mod of track.modules) {
      result[`${track.id}-${mod.id}`] = true
    }
  }
  return result
}

interface LessonsSidebarProps {
  mobileOpen: boolean
  onMobileClose: () => void
}

export function LessonsSidebar({ mobileOpen, onMobileClose }: LessonsSidebarProps) {
  const pathname = usePathname()
  const { language, t } = useLanguage()
  const isBn = language === 'bn'
  const { track: activeTrack, slug: activeSlug } = parseLessonPath(pathname)

  const [expandedTracks, setExpandedTracks] = useState(DEFAULT_EXPANDED_TRACKS)
  const [expandedModules, setExpandedModules] = useState(getDefaultExpandedModules)

  const lessonLabel = (trackId: LessonTrackId, lessonId: string, fallback: string) => {
    if (trackId === 'arduino') {
      const full = getArduinoLesson(lessonId)
      if (full) return isBn ? full.titleBn : full.title
    }
    return fallback
  }

  const sidebarInner = useMemo(
    () => (
      <div className="flex flex-col h-full min-h-0">
        <div className="p-4 border-b border-cyan-200 dark:border-cyan-900/30 bg-slate-100/80 dark:bg-gray-900/80">
          <Link
            href="/lessons"
            onClick={onMobileClose}
            className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 font-semibold"
          >
            <BookOpen className="w-5 h-5 shrink-0" />
            {t('nav.lessons')}
          </Link>
          <p className="text-xs text-slate-500 dark:text-gray-500 mt-2 leading-relaxed">
            {t('lessons.sidebarHint')}
          </p>
        </div>

        <nav className="flex-1 min-h-0 overflow-y-auto overscroll-contain py-2 robotics-scrollbar">
          {LESSON_TRACKS.map((track) => {
            const trackOpen = expandedTracks[track.id] ?? true
            const trackTitle = isBn ? track.titleBn : track.title

            return (
              <div key={track.id} className="border-b border-slate-200 dark:border-gray-800/80">
                <button
                  type="button"
                  onClick={() =>
                    setExpandedTracks((prev) => ({
                      ...prev,
                      [track.id]: !trackOpen,
                    }))
                  }
                  className={cn(
                    'w-full flex items-center justify-between px-4 py-3 text-left text-sm font-semibold transition-colors',
                    activeTrack === track.id
                      ? 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300'
                      : 'text-slate-700 dark:text-gray-200 hover:bg-slate-200/60 dark:hover:bg-gray-800/60'
                  )}
                >
                  <span>{trackTitle}</span>
                  {trackOpen ? (
                    <ChevronDown className="w-4 h-4 shrink-0 opacity-70" />
                  ) : (
                    <ChevronRight className="w-4 h-4 shrink-0 opacity-70" />
                  )}
                </button>

                {trackOpen && (
                  <div className="pb-2">
                    {track.modules.map((mod) => {
                      const modKey = `${track.id}-${mod.id}`
                      const modOpen = expandedModules[modKey] ?? true
                      const modTitle = isBn ? mod.titleBn : mod.title

                      return (
                        <div key={modKey}>
                          <button
                            type="button"
                            onClick={() =>
                              setExpandedModules((prev) => ({
                                ...prev,
                                [modKey]: !modOpen,
                              }))
                            }
                            className="w-full flex items-center justify-between pl-6 pr-4 py-2 text-left text-xs font-medium text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-gray-200 hover:bg-slate-200/50 dark:hover:bg-gray-800/40"
                          >
                            <span className="line-clamp-2">{modTitle}</span>
                            {modOpen ? (
                              <ChevronDown className="w-3.5 h-3.5 shrink-0 ml-1" />
                            ) : (
                              <ChevronRight className="w-3.5 h-3.5 shrink-0 ml-1" />
                            )}
                          </button>

                          {modOpen && (
                            <ul className="pb-1">
                              {mod.lessons.map((lesson) => {
                                const href = lessonHref(track.id, lesson.id)
                                const isActive =
                                  activeTrack === track.id && activeSlug === lesson.id
                                const label = lessonLabel(
                                  track.id,
                                  lesson.id,
                                  lesson.title
                                )

                                return (
                                  <li key={lesson.id}>
                                    <Link
                                      href={href}
                                      onClick={onMobileClose}
                                      className={cn(
                                        'block pl-8 pr-4 py-2 text-sm border-l-2 transition-colors',
                                        isActive
                                          ? 'border-cyan-500 dark:border-cyan-400 bg-cyan-500/15 text-cyan-800 dark:text-cyan-100 font-medium'
                                          : 'border-transparent text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-gray-800/50 hover:border-slate-300 dark:hover:border-gray-600'
                                      )}
                                    >
                                      {label}
                                    </Link>
                                  </li>
                                )
                              })}
                            </ul>
                          )}
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </nav>
      </div>
    ),
    [
      activeSlug,
      activeTrack,
      expandedModules,
      expandedTracks,
      isBn,
      onMobileClose,
      t,
    ]
  )

  return (
    <>
      {/* Desktop sidebar — sticks under the navbar, scrolls independently */}
      <aside className="hidden lg:flex lg:flex-col lg:w-72 xl:w-80 shrink-0 self-start sticky top-16 h-[calc(100dvh-4rem)] border-r border-cyan-200 dark:border-cyan-900/30 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm overflow-hidden">
        {sidebarInner}
      </aside>

      {/* Mobile toggle — shown in layout via separate button; backdrop + drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 flex">
          <button
            type="button"
            className="flex-1 bg-black/60 backdrop-blur-sm"
            aria-label="Close lesson menu"
            onClick={onMobileClose}
          />
          <aside className="w-[min(20rem,88vw)] h-full bg-white dark:bg-gray-900 border-l border-cyan-200 dark:border-cyan-900/30 flex flex-col shadow-xl">
            <div className="flex items-center justify-between p-3 border-b border-slate-200 dark:border-gray-800 lg:hidden shrink-0">
              <span className="text-sm font-medium text-slate-700 dark:text-gray-300">
                {t('lessons.tutorialMenu')}
              </span>
              <button
                type="button"
                onClick={onMobileClose}
                className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-gray-800"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain">{sidebarInner}</div>
          </aside>
        </div>
      )}
    </>
  )
}

export function LessonsMobileMenuButton({
  onClick,
}: {
  onClick: () => void
}) {
  const { t } = useLanguage()
  return (
    <button
      type="button"
      onClick={onClick}
      className="lg:hidden fixed bottom-6 right-6 z-30 flex items-center gap-2 px-4 py-3 bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-medium shadow-lg shadow-cyan-900/40 clip-corner-br"
      aria-label={t('lessons.tutorialMenu')}
    >
      <Menu className="w-5 h-5" />
      {t('lessons.tutorialMenu')}
    </button>
  )
}

"use client"

import React from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useLanguage } from '@/contexts/LanguageContext'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArduinoLessonContent } from '@/components/ArduinoLessonContent'
import {
  findLessonInTrack,
  getAdjacentLessons,
  getTrackById,
  lessonHref,
  type LessonTrackId,
} from '@/data/lesson-tracks'
import { ArrowLeft, ArrowRight, Construction } from 'lucide-react'

const VALID_TRACKS: LessonTrackId[] = ['arduino', 'esp32', 'raspberrypi']

function isValidTrack(track: string): track is LessonTrackId {
  return VALID_TRACKS.includes(track as LessonTrackId)
}

function PlaceholderLesson({
  trackId,
  slug,
}: {
  trackId: LessonTrackId
  slug: string
}) {
  const { language, t } = useLanguage()
  const isBn = language === 'bn'
  const track = getTrackById(trackId)
  const found = findLessonInTrack(trackId, slug)
  const { prev, next } = getAdjacentLessons(trackId, slug)

  const title = found
    ? found.lesson.title
    : slug.replace(/-/g, ' ')

  return (
    <div className="pb-20">
      <section className="py-8 px-4 md:px-8 border-b border-slate-800/50">
        <p className="text-sm text-cyan-500/80 mb-2">
          {track ? (isBn ? track.titleBn : track.title) : trackId}
        </p>
        <h1 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">{title}</h1>
      </section>

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <Card className="p-8 text-center">
          <Construction className="w-12 h-12 text-amber-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-white mb-2">{t('lessons.comingSoonTitle')}</h2>
          <p className="text-slate-400 mb-6 max-w-md mx-auto">{t('lessons.comingSoonBody')}</p>
          <Button asChild variant="outline">
            <Link href="/lessons">{t('nav.lessons')}</Link>
          </Button>
        </Card>

        <div className="flex items-center justify-between gap-4 pt-10 mt-10 border-t border-slate-800/50">
          {prev ? (
            <Button variant="outline" asChild>
              <Link href={lessonHref(trackId, prev.slug)}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('lesson.previous')}
              </Link>
            </Button>
          ) : (
            <div />
          )}
          {next ? (
            <Button asChild>
              <Link href={lessonHref(trackId, next.slug)}>
                {t('lesson.next')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  )
}

export default function TrackLessonPage() {
  const params = useParams()
  const track = params.track as string
  const slug = params.slug as string
  const { t } = useLanguage()

  if (!isValidTrack(track)) {
    return (
      <div className="flex items-center justify-center px-4 py-20">
        <Card className="p-8 max-w-md text-center">
          <h1 className="text-2xl font-bold text-white mb-4">{t('lessons.notFound')}</h1>
          <Button asChild>
            <Link href="/lessons">{t('nav.lessons')}</Link>
          </Button>
        </Card>
      </div>
    )
  }

  const inSidebar = findLessonInTrack(track, slug)
  if (!inSidebar) {
    return (
      <div className="flex items-center justify-center px-4 py-20">
        <Card className="p-8 max-w-md text-center">
          <h1 className="text-2xl font-bold text-white mb-4">{t('lessons.notFound')}</h1>
          <p className="text-slate-400 mb-6">{t('lessons.notFoundHint')}</p>
          <Button asChild>
            <Link href="/lessons">{t('nav.lessons')}</Link>
          </Button>
        </Card>
      </div>
    )
  }

  if (track === 'arduino') {
    return <ArduinoLessonContent slug={slug} />
  }

  return <PlaceholderLesson trackId={track} slug={slug} />
}

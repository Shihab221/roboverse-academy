"use client"

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { Button } from '@/components/ui/button'
import { TechButton } from '@/components/ui/robotics-ui'
import { Card, GlassCard } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CodeEditor } from '@/components/CodeEditor'
import { getArduinoLesson } from '@/data/arduino-lessons'
import { getEsp32Lesson } from '@/data/esp32-lessons'
import { lessonHref, type LessonTrackId } from '@/data/lesson-tracks'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Lightbulb,
  Package,
  CircuitBoard,
  Clock,
  Play,
} from 'lucide-react'

export function ArduinoLessonContent({ slug, track }: { slug: string; track: LessonTrackId }) {
  const { language, t } = useLanguage()
  const router = useRouter()
  const lesson = track === 'esp32' ? getEsp32Lesson(slug) : getArduinoLesson(slug)
  const isEn = language === 'en'

  if (!lesson) {
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

  const learnItems = isEn ? lesson.whatYouWillLearn : lesson.whatYouWillLearnBn
  const tryItItems = isEn ? lesson.tryItTips : lesson.tryItTipsBn
  const aboutParagraphs = isEn
    ? lesson.overview.length > 0 ? lesson.overview : [lesson.description]
    : lesson.overviewBn.length > 0 ? lesson.overviewBn : [lesson.descriptionBn]

  return (
    <div className="relative pb-20">
      <section className="relative py-8 px-4 md:px-8 border-b border-slate-800/50">
        <div className="max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge
                variant={
                  lesson.level === 'beginner'
                    ? 'beginner'
                    : lesson.level === 'intermediate'
                      ? 'intermediate'
                      : 'advanced'
                }
              >
                {lesson.level === 'beginner'
                  ? t('common.beginner')
                  : lesson.level === 'intermediate'
                    ? t('common.intermediate')
                    : t('common.advanced')}
              </Badge>
              <div className="flex items-center gap-1 text-slate-400 text-sm">
                <Clock className="w-4 h-4" />
                {lesson.duration}
              </div>
            </div>

            <h1 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {isEn ? lesson.title : lesson.titleBn}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
              {isEn ? lesson.description : lesson.descriptionBn}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-10">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="flex items-center gap-3 text-xl font-semibold text-slate-900 dark:text-white mb-4">
            <FileText className="w-5 h-5 text-green-700 dark:text-cyan-400" />
            {t('lesson.about')}
          </h2>
          <Card className="p-6">
            <div className="space-y-4">
              {aboutParagraphs.map((para, i) => (
                <p key={i} className="text-slate-300 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </Card>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="flex items-center gap-3 text-xl font-semibold text-slate-900 dark:text-white mb-4">
            <BookOpen className="w-5 h-5 text-green-700 dark:text-cyan-400" />
            {t('lesson.whatlearn')}
          </h2>
          <Card className="p-6">
            <ul className="grid sm:grid-cols-2 gap-3">
              {learnItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="flex items-center gap-3 text-xl font-semibold text-slate-900 dark:text-white mb-4">
            <Package className="w-5 h-5 text-green-700 dark:text-cyan-400" />
            {t('lesson.components')}
          </h2>
          <Card className="p-6">
            <ul className="flex flex-wrap gap-3">
              {lesson.components.map((item, i) => (
                <li
                  key={i}
                  className="px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="flex items-center gap-3 text-xl font-semibold text-slate-900 dark:text-white mb-4">
            <CircuitBoard className="w-5 h-5 text-green-700 dark:text-cyan-400" />
            {t('lesson.circuit')}
          </h2>
          <Card className="p-6">
            <div className="h-64 bg-slate-800/50 rounded-xl flex items-center justify-center mb-4 border border-slate-700/50">
              <div className="text-center px-4">
                <CircuitBoard className="w-16 h-16 text-slate-600 mx-auto mb-3" />
                <p className="text-slate-500 text-sm">
                  {isEn ? 'Wire as described below' : 'নিচের বর্ণনা অনুযায়ী সংযোগ করুন'}
                </p>
              </div>
            </div>
            <p className="text-slate-300">
              {isEn ? lesson.circuitDescription : lesson.circuitDescriptionBn}
            </p>
          </Card>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="flex items-center gap-3 text-xl font-semibold text-slate-900 dark:text-white mb-4">
            <Play className="w-5 h-5 text-green-700 dark:text-cyan-400" />
            {t('lesson.code')}
          </h2>
          <CodeEditor
            code={lesson.code}
            language="cpp"
            title={`${slug}.ino`}
            editable={true}
            explanation={lesson.codeExplanation.map((e) => ({
              line: e.line,
              text: isEn ? e.text : e.textBn,
            }))}
          />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="flex items-center gap-3 text-xl font-semibold text-slate-900 dark:text-white mb-4">
            <Lightbulb className="w-5 h-5 text-yellow-400" />
            {t('lesson.tryit')}
          </h2>
          <GlassCard className="p-6">
            <p className="text-slate-300 mb-4">
              {isEn
                ? 'Try modifying the code above! Here are ideas for this lesson:'
                : 'উপরের কোড পরিবর্তন করে দেখুন! এই পাঠের জন্য কিছু আইডিয়া:'}
            </p>
            <ul className="space-y-2 text-slate-400">
              {tryItItems.map((tip, i) => (
                <li key={i}>• {tip}</li>
              ))}
            </ul>
          </GlassCard>
        </motion.section>

        {lesson.commonMistakes.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="flex items-center gap-3 text-xl font-semibold text-slate-900 dark:text-white mb-4">
              <AlertTriangle className="w-5 h-5 text-orange-400" />
              {t('lesson.mistakes')}
            </h2>
            <div className="space-y-4">
              {lesson.commonMistakes.map((item, i) => (
                <Card key={i} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-red-400 font-bold">{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-400 mb-2">
                        {isEn ? item.mistake : item.mistakeBn}
                      </h4>
                      <p className="text-slate-400">
                        <span className="text-green-400 font-medium">Solution: </span>
                        {isEn ? item.solution : item.solutionBn}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.section>
        )}

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between gap-4 pt-8 border-t border-slate-800/50"
        >
          {lesson.prevLesson ? (
            <TechButton
              variant="outline"
              onClick={() => lesson.prevLesson && router.push(lessonHref(track, lesson.prevLesson))}
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
              {t('lesson.previous')}
            </TechButton>
          ) : (
            <div />
          )}

          {lesson.nextLesson ? (
            <TechButton
              onClick={() => lesson.nextLesson && router.push(lessonHref(track, lesson.nextLesson))}
            >
              {t('lesson.next')}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </TechButton>
          ) : (
            <TechButton variant="outline" onClick={() => router.push('/lessons')}>
              {t('lessons.finishTrack')}
            </TechButton>
          )}
        </motion.section>
      </div>
    </div>
  )
}

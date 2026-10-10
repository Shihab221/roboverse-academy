"use client"

import React from 'react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CodeEditor } from '@/components/CodeEditor'
import { TechButton } from '@/components/ui/robotics-ui'
import { WiringDiagram } from '@/components/WiringDiagram'
import { getProject, getProjectGuide, getProjectsByLevel } from '@/data/projects'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  CircuitBoard,
  Clock,
  Cpu,
  FileText,
  Lightbulb,
  ListOrdered,
  Package,
  Star,
  Users,
  Wrench,
} from 'lucide-react'

export default function ProjectDetailPage() {
  const params = useParams()
  const id = params.id as string
  const router = useRouter()
  const { language, t } = useLanguage()
  const isEn = language === 'en'

  const project = getProject(id)
  const guide = getProjectGuide(id)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-20">
        <Card className="p-8 max-w-md text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Project Not Found</h1>
          <p className="text-slate-400 mb-6">This project does not exist yet.</p>
          <Button asChild>
            <Link href="/projects">Back to Projects</Link>
          </Button>
        </Card>
      </div>
    )
  }

  const levelLabel =
    project.level === 'beginner'
      ? t('common.beginner')
      : project.level === 'intermediate'
        ? t('common.intermediate')
        : t('common.advanced')

  const ordered = getProjectsByLevel()
  const idx = ordered.findIndex((p) => p.id === id)
  const prevProject = idx > 0 ? ordered[idx - 1] : null
  const nextProject = idx >= 0 && idx < ordered.length - 1 ? ordered[idx + 1] : null

  const overview = guide ? (isEn ? guide.overview : guide.overviewBn) : [project.description]
  const howItWorks = guide ? (isEn ? guide.howItWorks : guide.howItWorksBn) : []
  const steps = guide ? (isEn ? guide.steps : guide.stepsBn) : []
  const tips = guide ? (isEn ? guide.tips : guide.tipsBn) : []

  return (
    <div className="relative min-h-screen pb-20">
      {/* Header */}
      <section className="relative py-10 px-4 md:px-8 border-b border-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <button
              onClick={() => router.push('/projects')}
              className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Projects
            </button>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge
                variant={
                  project.level === 'beginner'
                    ? 'beginner'
                    : project.level === 'intermediate'
                      ? 'intermediate'
                      : 'advanced'
                }
              >
                {levelLabel}
              </Badge>
              <Badge className="bg-slate-900/80 border-slate-700">{project.track}</Badge>
              <div className="flex items-center gap-1 text-slate-400 text-sm">
                <Clock className="w-4 h-4" />
                {project.duration}
              </div>
              <div className="flex items-center gap-1 text-slate-400 text-sm">
                <Users className="w-4 h-4" />
                {project.students}
              </div>
              <div className="flex items-center gap-1 text-yellow-400 text-sm">
                <Star className="w-4 h-4 fill-yellow-400" />
                {project.rating}
              </div>
            </div>

            <h1 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-10">
        {/* About */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="flex items-center gap-3 text-xl font-semibold text-slate-900 dark:text-white mb-4">
            <FileText className="w-5 h-5 text-green-700 dark:text-cyan-400" />
            About This Project
          </h2>
          <Card className="p-6">
            <div className="space-y-4">
              {overview.map((para, i) => (
                <p key={i} className="text-slate-300 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </Card>
        </motion.section>

        {/* How it works */}
        {howItWorks.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="flex items-center gap-3 text-xl font-semibold text-slate-900 dark:text-white mb-4">
              <BookOpen className="w-5 h-5 text-green-700 dark:text-cyan-400" />
              How It Works
            </h2>
            <Card className="p-6">
              <div className="space-y-4">
                {howItWorks.map((para, i) => (
                  <p key={i} className="text-slate-300 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </Card>
          </motion.section>
        )}

        {/* Components */}
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
              {project.components.map((item, i) => (
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

        {/* Wiring */}
        {guide && guide.pins.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="flex items-center gap-3 text-xl font-semibold text-slate-900 dark:text-white mb-4">
              <CircuitBoard className="w-5 h-5 text-green-700 dark:text-cyan-400" />
              Circuit & Pinout
            </h2>
            <WiringDiagram
              boardLabel={isEn ? guide.boardLabel : guide.boardLabelBn}
              pins={guide.pins}
            />
            <Card className="p-6 mt-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-slate-500 border-b border-slate-700/50">
                      <th className="pb-3 pr-4 font-medium">{guide.boardLabel}</th>
                      <th className="pb-3 pr-4 font-medium">Module pin</th>
                      <th className="pb-3 font-medium">Part</th>
                    </tr>
                  </thead>
                  <tbody>
                    {guide.pins.map((pin, i) => (
                      <tr key={i} className="border-b border-slate-800/50 last:border-0">
                        <td className="py-2.5 pr-4 font-mono text-cyan-700 dark:text-cyan-300">
                          {pin.from}
                        </td>
                        <td className="py-2.5 pr-4 font-mono text-slate-300">{pin.to}</td>
                        <td className="py-2.5 text-slate-400">
                          {pin.part}
                          {(isEn ? pin.note : pin.noteBn) && (
                            <span className="block text-xs text-slate-500">
                              {isEn ? pin.note : pin.noteBn}
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.section>
        )}

        {/* Build steps */}
        {steps.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="flex items-center gap-3 text-xl font-semibold text-slate-900 dark:text-white mb-4">
              <ListOrdered className="w-5 h-5 text-green-700 dark:text-cyan-400" />
              Build Steps
            </h2>
            <div className="space-y-3">
              {steps.map((step, i) => (
                <Card key={i} className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-cyan-700 dark:text-cyan-300 font-bold">{i + 1}</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed pt-1">{step}</p>
                  </div>
                </Card>
              ))}
            </div>
          </motion.section>
        )}

        {/* Code */}
        {guide && guide.code && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="flex items-center gap-3 text-xl font-semibold text-slate-900 dark:text-white mb-4">
              <Cpu className="w-5 h-5 text-green-700 dark:text-cyan-400" />
              {t('lesson.code')}
            </h2>
            <CodeEditor
              code={guide.code}
              language={guide.codeLanguage === 'python' ? 'python' : 'cpp'}
              title={guide.codeTitle}
              editable={true}
              explanation={[]}
            />
          </motion.section>
        )}

        {/* Tips */}
        {tips.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="flex items-center gap-3 text-xl font-semibold text-slate-900 dark:text-white mb-4">
              <Lightbulb className="w-5 h-5 text-yellow-400" />
              Pro Tips
            </h2>
            <Card className="p-6">
              <ul className="space-y-2">
                {tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    {tip}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.section>
        )}

        {/* Prev / Next */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between gap-4 pt-8 border-t border-slate-800/50"
        >
          {prevProject ? (
            <TechButton
              variant="outline"
              onClick={() => router.push(`/projects/${prevProject.id}`)}
            >
              <ArrowRight className="w-4 h-4 rotate-180 transition-transform duration-300 group-hover:-translate-x-1" />
              <span className="hidden sm:inline">{prevProject.title}</span>
              <span className="sm:hidden">{t('lesson.previous')}</span>
            </TechButton>
          ) : (
            <div />
          )}
          {nextProject ? (
            <TechButton onClick={() => router.push(`/projects/${nextProject.id}`)}>
              <span className="hidden sm:inline">{nextProject.title}</span>
              <span className="sm:hidden">{t('lesson.next')}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </TechButton>
          ) : (
            <TechButton variant="outline" onClick={() => router.push('/projects')}>
              <Wrench className="w-4 h-4" />
              Projects
            </TechButton>
          )}
        </motion.section>
      </div>
    </div>
  )
}

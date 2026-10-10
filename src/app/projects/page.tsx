"use client"

import React, { useMemo, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { projects, getProjectsByLevel } from '@/data/projects'
import type { ProjectLevel, ProjectMeta } from '@/data/project-types'
import {
  Search,
  Filter,
  Cpu,
  Zap,
  Bot,
  Clock,
  Star,
  BookOpen,
  ArrowDownWideNarrow,
} from 'lucide-react'

const trackIcons: Record<string, React.ReactNode> = {
  'Arduino': <Cpu className="w-5 h-5" />,
  'ESP32': <Zap className="w-5 h-5" />,
  'Raspberry Pi': <Bot className="w-5 h-5" />,
}

const trackColors: Record<string, string> = {
  'Arduino': 'bg-cyan-500',
  'ESP32': 'bg-cyan-500',
  'Raspberry Pi': 'bg-cyan-500',
}

type SortMode = 'level' | 'popular' | 'rating'

const LEVEL_GROUPS: ProjectLevel[] = ['beginner', 'intermediate', 'advanced']

function ProjectCard({ project, index }: { project: ProjectMeta; index: number }) {
  const { t } = useLanguage()
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: Math.min(index, 5) * 0.05 }}
    >
      <Link href={`/projects/${project.id}`}>
        <Card glow className="h-full overflow-hidden group cursor-pointer">
          <div className="h-40 bg-slate-800 relative overflow-hidden">
            <div className={`absolute inset-0 ${trackColors[project.track]} opacity-10`} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`w-20 h-20 rounded-2xl ${trackColors[project.track]} flex items-center justify-center shadow-lg opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all`}>
                {trackIcons[project.track]}
              </div>
            </div>
            <Badge
              variant={
                project.level === 'beginner' ? 'beginner' :
                project.level === 'intermediate' ? 'intermediate' : 'advanced'
              }
              className="absolute top-4 right-4"
            >
              {project.level === 'beginner' ? t('common.beginner') :
               project.level === 'intermediate' ? t('common.intermediate') :
               t('common.advanced')}
            </Badge>
            <Badge className="absolute top-4 left-4 bg-slate-900/80 border-slate-700">
              {project.track}
            </Badge>
          </div>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-slate-400 text-sm mb-4 line-clamp-2">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.components.slice(0, 3).map((comp, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 rounded bg-slate-800/80 text-slate-400"
                >
                  {comp}
                </span>
              ))}
              {project.components.length > 3 && (
                <span className="text-xs px-2 py-1 rounded bg-slate-800/80 text-slate-400">
                  +{project.components.length - 3}
                </span>
              )}
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-3 text-slate-400">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {project.duration}
                </span>
                <span className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  {project.students}
                </span>
              </div>
              <div className="flex items-center gap-1 text-yellow-400">
                <Star className="w-4 h-4 fill-yellow-400" />
                {project.rating}
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}

export default function ProjectsPage() {
  const { t } = useLanguage()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null)
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null)
  const [sortMode, setSortMode] = useState<SortMode>('level')

  const levelLabel = (level: ProjectLevel) =>
    level === 'beginner' ? t('common.beginner') :
    level === 'intermediate' ? t('common.intermediate') :
    t('common.advanced')

  const visibleProjects = useMemo(() => {
    const filtered = projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            project.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesTrack = !selectedTrack || project.track === selectedTrack
      const matchesLevel = !selectedLevel || project.level === selectedLevel
      return matchesSearch && matchesTrack && matchesLevel
    })
    const sorted = [...filtered]
    if (sortMode === 'level') {
      const base = getProjectsByLevel()
      sorted.sort((a, b) => base.indexOf(a) - base.indexOf(b))
    } else if (sortMode === 'popular') {
      sorted.sort((a, b) => b.students - a.students)
    } else {
      sorted.sort((a, b) => b.rating - a.rating)
    }
    return sorted
  }, [searchQuery, selectedTrack, selectedLevel, sortMode])

  const isSearching = searchQuery.trim().length > 0
  // Grouped by level when sorting by level and not searching
  const showGroups = sortMode === 'level' && !isSearching && !selectedLevel

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Project <span className="text-green-700 dark:text-cyan-400">Gallery</span>
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
              Build real-world projects step by step. From simple LED circuits to smart robots.
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
              />
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              <div className="flex items-center gap-2 text-slate-400 mr-4">
                <Filter className="w-4 h-4" />
                <span>Filter:</span>
              </div>

              {/* Track filters */}
              {['Arduino', 'ESP32', 'Raspberry Pi'].map((track) => (
                <Button
                  key={track}
                  variant={selectedTrack === track ? 'default' : 'secondary'}
                  size="sm"
                  onClick={() => setSelectedTrack(selectedTrack === track ? null : track)}
                  className="gap-2"
                >
                  {trackIcons[track]}
                  {track}
                </Button>
              ))}

              <div className="w-px h-8 bg-slate-700 mx-2" />

              {/* Level filters */}
              {(['beginner', 'intermediate', 'advanced'] as ProjectLevel[]).map((level) => (
                <Button
                  key={level}
                  variant={selectedLevel === level ? 'default' : 'secondary'}
                  size="sm"
                  onClick={() => setSelectedLevel(selectedLevel === level ? null : level)}
                >
                  {levelLabel(level)}
                </Button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex flex-wrap gap-3 justify-center items-center mt-4">
              <div className="flex items-center gap-2 text-slate-400">
                <ArrowDownWideNarrow className="w-4 h-4" />
                <span>{t('projects.sortBy')}</span>
              </div>
              {(
                [
                  { id: 'level', label: t('projects.sortLevel') },
                  { id: 'popular', label: t('projects.sortPopular') },
                  { id: 'rating', label: t('projects.sortRating') },
                ] as { id: SortMode; label: string }[]
              ).map((opt) => (
                <Button
                  key={opt.id}
                  variant={sortMode === opt.id ? 'default' : 'secondary'}
                  size="sm"
                  onClick={() => setSortMode(opt.id)}
                >
                  {opt.label}
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <p className="text-slate-400">
              Showing {visibleProjects.length} of {projects.length} projects
            </p>
          </div>

          {showGroups ? (
            <div className="space-y-12">
              {LEVEL_GROUPS.map((level) => {
                const group = visibleProjects.filter((p) => p.level === level)
                if (group.length === 0) return null
                return (
                  <div key={level}>
                    <div className="flex items-center gap-3 mb-5">
                      <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                        {levelLabel(level)}
                      </h2>
                      <span className="text-xs font-mono px-2 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300">
                        {group.length}
                      </span>
                      <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700/50" />
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {group.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          )}

          {visibleProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-600 dark:text-slate-400 text-lg">No projects found matching your criteria.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchQuery('')
                  setSelectedTrack(null)
                  setSelectedLevel(null)
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

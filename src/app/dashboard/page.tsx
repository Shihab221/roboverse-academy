"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { Button } from '@/components/ui/button'
import { Card, CardContent, GlassCard } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import {
  Cpu,
  Bot,
  Zap,
  Trophy,
  Award,
  BookOpen,
  Clock,
  Target,
  Flame,
  ChevronRight,
  Play,
  Star,
  Medal,
} from 'lucide-react'

// Mock user data
const userData = {
  name: 'Rahim Ahmed',
  email: 'rahim@example.com',
  joinedDate: 'March 2024',
  streak: 7,
  totalLessons: 45,
  completedLessons: 12,
  totalProjects: 8,
  completedProjects: 3,
  certificates: 1,
  badges: [
    { name: 'First Steps', icon: '🚀', description: 'Completed your first lesson', date: 'Mar 15, 2024' },
    { name: 'LED Master', icon: '💡', description: 'Completed all LED tutorials', date: 'Mar 20, 2024' },
    { name: 'Week Streak', icon: '🔥', description: '7 days of learning in a row', date: 'Mar 22, 2024' },
  ],
  recentActivity: [
    { type: 'lesson', title: 'LCD with I2C Module', track: 'Arduino', date: 'Today' },
    { type: 'lesson', title: '16x2 LCD Display', track: 'Arduino', date: 'Yesterday' },
    { type: 'project', title: 'Smart Dustbin', track: 'Arduino', date: '2 days ago' },
  ],
  progress: {
    arduino: { completed: 10, total: 45, percent: 22 },
    esp32: { completed: 0, total: 30, percent: 0 },
    raspberrypi: { completed: 2, total: 40, percent: 5 },
  }
}

const recommendedLessons = [
  {
    id: 'servo-motor',
    title: 'Servo Motor Control',
    track: 'Arduino',
    duration: '10 min',
    level: 'beginner',
  },
  {
    id: 'ultrasonic-sensor',
    title: 'Ultrasonic Distance Sensor',
    track: 'Arduino',
    duration: '12 min',
    level: 'beginner',
  },
  {
    id: 'intro-esp32',
    title: 'Introduction to ESP32',
    track: 'ESP32',
    duration: '8 min',
    level: 'beginner',
  },
]

export default function DashboardPage() {
  const { t } = useLanguage()
  const overallProgress = Math.round(
    (userData.completedLessons / userData.totalLessons) * 100
  )

  return (
    <div className="relative min-h-screen pb-20">
      {/* Header */}
      <section className="relative py-12 px-4 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/25 text-2xl font-bold text-white">
                {userData.name[0]}
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-white">
                  {t('dashboard.welcome')}, {userData.name}!
                </h1>
                <p className="text-slate-400">Keep up the great work! 🎉</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-500/20 border border-orange-500/30">
                <Flame className="w-5 h-5 text-orange-400" />
                <span className="text-orange-400 font-semibold">{userData.streak} day streak</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
        >
          <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-4">
              <BookOpen className="w-8 h-8 text-cyan-400" />
              <Badge>{overallProgress}%</Badge>
            </div>
            <h3 className="text-2xl font-bold text-white">{userData.completedLessons}</h3>
            <p className="text-slate-400">Lessons Completed</p>
          </GlassCard>
          
          <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Target className="w-8 h-8 text-green-400" />
              <Badge variant="success">{Math.round((userData.completedProjects / userData.totalProjects) * 100)}%</Badge>
            </div>
            <h3 className="text-2xl font-bold text-white">{userData.completedProjects}</h3>
            <p className="text-slate-400">Projects Built</p>
          </GlassCard>
          
          <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Trophy className="w-8 h-8 text-yellow-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">{userData.badges.length}</h3>
            <p className="text-slate-400">Badges Earned</p>
          </GlassCard>
          
          <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Award className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">{userData.certificates}</h3>
            <p className="text-slate-400">Certificates</p>
          </GlassCard>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Learning Progress by Track */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl font-semibold text-white mb-4">{t('dashboard.progress')}</h2>
              <div className="space-y-4">
                <Card className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/25">
                      <Cpu className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-white">Arduino Track</h3>
                        <span className="text-cyan-400 font-medium">{userData.progress.arduino.percent}%</span>
                      </div>
                      <Progress value={userData.progress.arduino.percent} />
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm">
                    {userData.progress.arduino.completed} of {userData.progress.arduino.total} lessons completed
                  </p>
                  <Button className="mt-4 w-full" asChild>
                    <Link href="/lessons/arduino/what-is-arduino">
                      <Play className="w-4 h-4 mr-2" />
                      Continue Learning
                    </Link>
                  </Button>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center shadow-lg shadow-yellow-500/25">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-white">ESP32 Track</h3>
                        <span className="text-yellow-400 font-medium">{userData.progress.esp32.percent}%</span>
                      </div>
                      <Progress value={userData.progress.esp32.percent} />
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm">
                    {userData.progress.esp32.completed} of {userData.progress.esp32.total} lessons completed
                  </p>
                  <Button variant="outline" className="mt-4 w-full" asChild>
                    <Link href="/lessons/esp32/what-is-esp32">
                      Start Learning
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg shadow-purple-500/25">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-white">Raspberry Pi Track</h3>
                        <span className="text-purple-400 font-medium">{userData.progress.raspberrypi.percent}%</span>
                      </div>
                      <Progress value={userData.progress.raspberrypi.percent} />
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm">
                    {userData.progress.raspberrypi.completed} of {userData.progress.raspberrypi.total} lessons completed
                  </p>
                  <Button variant="outline" className="mt-4 w-full" asChild>
                    <Link href="/lessons/raspberrypi/what-is-raspberry-pi">
                      Continue Learning
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </Card>
              </div>
            </motion.section>

            {/* Recommended Next */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl font-semibold text-white mb-4">{t('dashboard.recommended')}</h2>
              <div className="space-y-3">
                {recommendedLessons.map((lesson) => (
                  <Link
                    key={lesson.id}
                    href={`/lessons/arduino/${lesson.id}`}
                    className="block"
                  >
                    <Card className="p-4 hover:border-cyan-500/50 transition-colors group">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/30 transition-colors">
                            <Play className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                              {lesson.title}
                            </h4>
                            <div className="flex items-center gap-2 text-sm text-slate-400">
                              <span>{lesson.track}</span>
                              <span>•</span>
                              <span>{lesson.duration}</span>
                            </div>
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Badges */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl font-semibold text-white mb-4">{t('dashboard.badges')}</h2>
              <Card className="p-6">
                <div className="space-y-4">
                  {userData.badges.map((badge, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-2xl">
                        {badge.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-white">{badge.name}</h4>
                        <p className="text-sm text-slate-400">{badge.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-6">
                  View All Badges
                </Button>
              </Card>
            </motion.section>

            {/* Recent Activity */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
              <Card className="p-6">
                <div className="space-y-4">
                  {userData.recentActivity.map((activity, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        activity.type === 'lesson' 
                          ? 'bg-cyan-500/20 text-cyan-400'
                          : 'bg-purple-500/20 text-purple-400'
                      }`}>
                        {activity.type === 'lesson' ? (
                          <BookOpen className="w-4 h-4" />
                        ) : (
                          <Target className="w-4 h-4" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-medium text-white text-sm">{activity.title}</h4>
                        <p className="text-xs text-slate-400">{activity.track} • {activity.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.section>

            {/* Certificates */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl font-semibold text-white mb-4">{t('dashboard.certificates')}</h2>
              <Card className="p-6 text-center">
                <Medal className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2">Arduino Basics</h4>
                <p className="text-sm text-slate-400 mb-4">Completed on March 25, 2024</p>
                <Button variant="outline" size="sm">
                  Download Certificate
                </Button>
              </Card>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  )
}

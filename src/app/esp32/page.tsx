"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { Button } from '@/components/ui/button'
import { Card, GlassCard } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import {
  Zap,
  Wifi,
  Bluetooth,
  Cpu,
  ChevronRight,
  CheckCircle2,
  Play,
  Cloud,
  Smartphone,
  Home,
} from 'lucide-react'

const modules = [
  {
    id: 'intro',
    title: 'Introduction to ESP32',
    description: 'Learn what ESP32 is, how it differs from Arduino, and why it is perfect for IoT.',
    lessons: [
      { id: 'what-is-esp32', title: 'What is ESP32?', duration: '6 min', completed: false },
      { id: 'esp32-vs-arduino', title: 'ESP32 vs Arduino - What is the difference?', duration: '8 min', completed: false },
      { id: 'esp32-board-overview', title: 'ESP32 Board Overview', duration: '7 min', completed: false },
      { id: 'setup-esp32-arduino-ide', title: 'Setting up ESP32 in Arduino IDE', duration: '12 min', completed: false },
      { id: 'first-esp32-sketch', title: 'Your First ESP32 Sketch', duration: '10 min', completed: false },
    ],
    icon: <Zap className="w-6 h-6" />,
    color: 'bg-cyan-500 shadow-cyan-500/25',
  },
  {
    id: 'wifi',
    title: 'WiFi with ESP32',
    description: 'Connect your ESP32 to the internet and build web-based projects.',
    lessons: [
      { id: 'wifi-basics', title: 'Understanding WiFi Basics', duration: '8 min', completed: false },
      { id: 'connect-wifi', title: 'Connecting ESP32 to WiFi', duration: '10 min', completed: false },
      { id: 'web-server', title: 'Creating a Simple Web Server', duration: '15 min', completed: false },
      { id: 'control-led-web', title: 'Control LED from Web Browser', duration: '12 min', completed: false },
      { id: 'display-sensor-web', title: 'Display Sensor Data on Webpage', duration: '15 min', completed: false },
    ],
    icon: <Wifi className="w-6 h-6" />,
    color: 'bg-blue-500 shadow-blue-500/25',
  },
  {
    id: 'bluetooth',
    title: 'Bluetooth with ESP32',
    description: 'Use ESP32 Bluetooth to control projects from your phone.',
    lessons: [
      { id: 'bluetooth-basics', title: 'Understanding Bluetooth', duration: '6 min', completed: false },
      { id: 'classic-bluetooth', title: 'ESP32 Classic Bluetooth', duration: '12 min', completed: false },
      { id: 'ble-intro', title: 'Introduction to BLE', duration: '10 min', completed: false },
      { id: 'bluetooth-car', title: 'Bluetooth Controlled Car', duration: '20 min', completed: false },
    ],
    icon: <Bluetooth className="w-6 h-6" />,
    color: 'bg-cyan-500 shadow-cyan-500/25',
  },
  {
    id: 'iot',
    title: 'IoT Projects',
    description: 'Build real Internet of Things projects with cloud connectivity.',
    lessons: [
      { id: 'iot-intro', title: 'What is IoT?', duration: '8 min', completed: false },
      { id: 'blynk-setup', title: 'Getting Started with Blynk', duration: '12 min', completed: false },
      { id: 'thingspeak', title: 'Send Data to ThingSpeak', duration: '15 min', completed: false },
      { id: 'firebase-esp32', title: 'ESP32 with Firebase', duration: '18 min', completed: false },
      { id: 'smart-home', title: 'Smart Home Project', duration: '25 min', completed: false },
    ],
    icon: <Cloud className="w-6 h-6" />,
    color: 'bg-emerald-500 shadow-emerald-500/25',
  },
  {
    id: 'advanced',
    title: 'Advanced Projects',
    description: 'Combine everything you learned to build professional IoT solutions.',
    lessons: [
      { id: 'weather-station-iot', title: 'IoT Weather Station', duration: '30 min', completed: false },
      { id: 'security-camera', title: 'WiFi Security Camera', duration: '35 min', completed: false },
      { id: 'home-automation', title: 'Complete Home Automation', duration: '40 min', completed: false },
    ],
    icon: <Home className="w-6 h-6" />,
    color: 'bg-cyan-500 shadow-cyan-500/25',
  },
]

export default function ESP32TrackPage() {
  const { t } = useLanguage()
  
  const totalLessons = modules.reduce((acc, m) => acc + m.lessons.length, 0)
  const completedLessons = modules.reduce(
    (acc, m) => acc + m.lessons.filter(l => l.completed).length,
    0
  )
  const progressPercent = Math.round((completedLessons / totalLessons) * 100)

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-12"
          >
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/25">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">Learning Path</Badge>
                  <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-1">
                    ESP32 Track
                  </h1>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl">
                Master ESP32 - the powerful WiFi and Bluetooth enabled microcontroller. 
                Build IoT projects, smart home systems, and connected devices!
              </p>
              
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500/20 border border-blue-500/30">
                  <Wifi className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-400">WiFi Built-in</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/20 border border-cyan-500/30">
                  <Bluetooth className="w-5 h-5 text-cyan-400" />
                  <span className="text-cyan-400">Bluetooth Ready</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/20 border border-emerald-500/30">
                  <Cloud className="w-5 h-5 text-emerald-400" />
                  <span className="text-emerald-400">IoT Ready</span>
                </div>
              </div>
            </div>
            
            <GlassCard className="p-6 min-w-[280px]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-slate-400">Your Progress</span>
                <span className="text-2xl font-bold text-cyan-400">{progressPercent}%</span>
              </div>
              <Progress value={progressPercent} className="mb-4" />
              <div className="flex items-center justify-between text-sm text-slate-400">
                <span>{completedLessons} of {totalLessons} lessons</span>
                <span>{modules.length} modules</span>
              </div>
              <Button className="w-full mt-4 bg-cyan-400 hover:bg-cyan-500" asChild>
                <Link href="/esp32/lessons/what-is-esp32">
                  <Play className="w-4 h-4 mr-2" />
                  Start Learning
                </Link>
              </Button>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Why ESP32 Section */}
      <section className="py-10 px-4 bg-slate-900 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Why Learn ESP32?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="p-6 text-center">
              <Wifi className="w-10 h-10 text-blue-400 mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Built-in WiFi</h3>
              <p className="text-slate-400 text-sm">Connect your projects to the internet instantly</p>
            </Card>
            <Card className="p-6 text-center">
              <Bluetooth className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Bluetooth Support</h3>
              <p className="text-slate-400 text-sm">Control projects from your smartphone</p>
            </Card>
            <Card className="p-6 text-center">
              <Cpu className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">More Powerful</h3>
              <p className="text-slate-400 text-sm">Faster processor than Arduino Uno</p>
            </Card>
            <Card className="p-6 text-center">
              <Smartphone className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">App Control</h3>
              <p className="text-slate-400 text-sm">Build phone apps for your projects</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Modules List */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6">
            {modules.map((module, moduleIndex) => {
              const moduleCompleted = module.lessons.filter(l => l.completed).length
              const moduleProgress = Math.round((moduleCompleted / module.lessons.length) * 100)
              
              return (
                <motion.div
                  key={module.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: moduleIndex * 0.05 }}
                >
                  <Card className="overflow-hidden">
                    <div className="p-6 border-b border-slate-700/50">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl ${module.color} flex items-center justify-center shadow-lg`}>
                          {module.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <h3 className="text-xl font-semibold text-white">{module.title}</h3>
                            <Badge variant="secondary">{module.lessons.length} lessons</Badge>
                          </div>
                          <p className="text-slate-400">{module.description}</p>
                          {moduleProgress > 0 && (
                            <div className="mt-3 flex items-center gap-3">
                              <Progress value={moduleProgress} className="flex-1 h-2" />
                              <span className="text-sm text-slate-400">{moduleProgress}%</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="divide-y divide-slate-800/50">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <Link
                          key={lesson.id}
                          href={`/esp32/lessons/${lesson.id}`}
                          className="flex items-center justify-between p-4 hover:bg-slate-800/30 transition-colors group"
                        >
                          <div className="flex items-center gap-4">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                              lesson.completed 
                                ? 'bg-green-500/20 text-green-400' 
                                : 'bg-slate-800 text-slate-400 group-hover:text-cyan-400'
                            }`}>
                              {lesson.completed ? (
                                <CheckCircle2 className="w-5 h-5" />
                              ) : (
                                <span className="text-sm font-medium">{lessonIndex + 1}</span>
                              )}
                            </div>
                            <div>
                              <h4 className="text-white group-hover:text-cyan-400 transition-colors">
                                {lesson.title}
                              </h4>
                              <span className="text-sm text-slate-500">{lesson.duration}</span>
                            </div>
                          </div>
                          <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

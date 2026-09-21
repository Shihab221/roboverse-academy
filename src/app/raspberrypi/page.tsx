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
  Bot,
  Terminal,
  Code2,
  Camera,
  Cog,
  Brain,
  ChevronRight,
  CheckCircle2,
  Play,
  Cpu,
  MonitorSmartphone,
} from 'lucide-react'

const modules = [
  {
    id: 'intro',
    title: 'Introduction to Raspberry Pi',
    description: 'Learn what Raspberry Pi is and how to set it up for the first time.',
    lessons: [
      { id: 'what-is-raspberry-pi', title: 'What is Raspberry Pi?', duration: '6 min', completed: true },
      { id: 'raspberry-pi-models', title: 'Raspberry Pi Models Explained', duration: '8 min', completed: true },
      { id: 'setup-raspberry-pi', title: 'Setting Up Your Raspberry Pi', duration: '15 min', completed: false },
      { id: 'first-boot', title: 'First Boot and Configuration', duration: '12 min', completed: false },
    ],
    icon: <Bot className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-600 shadow-purple-500/25',
  },
  {
    id: 'linux',
    title: 'Linux Basics',
    description: 'Learn the essential Linux commands to navigate and control your Pi.',
    lessons: [
      { id: 'linux-intro', title: 'Introduction to Linux', duration: '8 min', completed: false },
      { id: 'terminal-basics', title: 'Terminal Basics', duration: '10 min', completed: false },
      { id: 'file-navigation', title: 'File System Navigation', duration: '12 min', completed: false },
      { id: 'file-management', title: 'Creating and Managing Files', duration: '10 min', completed: false },
      { id: 'permissions', title: 'File Permissions', duration: '8 min', completed: false },
      { id: 'package-management', title: 'Installing Software', duration: '10 min', completed: false },
    ],
    icon: <Terminal className="w-6 h-6" />,
    color: 'from-slate-500 to-slate-700 shadow-slate-500/25',
  },
  {
    id: 'python',
    title: 'Python Programming',
    description: 'Learn Python - the most popular language for Raspberry Pi projects.',
    lessons: [
      { id: 'python-intro', title: 'Introduction to Python', duration: '10 min', completed: false },
      { id: 'variables-types', title: 'Variables and Data Types', duration: '12 min', completed: false },
      { id: 'conditionals', title: 'If Statements', duration: '10 min', completed: false },
      { id: 'loops', title: 'Loops in Python', duration: '12 min', completed: false },
      { id: 'functions', title: 'Functions', duration: '15 min', completed: false },
      { id: 'lists-dicts', title: 'Lists and Dictionaries', duration: '12 min', completed: false },
    ],
    icon: <Code2 className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-600 shadow-blue-500/25',
  },
  {
    id: 'gpio',
    title: 'GPIO & Electronics',
    description: 'Control LEDs, sensors, and motors using Python and GPIO pins.',
    lessons: [
      { id: 'gpio-intro', title: 'Understanding GPIO Pins', duration: '10 min', completed: false },
      { id: 'led-python', title: 'Control LED with Python', duration: '12 min', completed: false },
      { id: 'button-input', title: 'Reading Button Input', duration: '10 min', completed: false },
      { id: 'pwm-basics', title: 'PWM for LED Brightness', duration: '12 min', completed: false },
      { id: 'sensors-pi', title: 'Connecting Sensors', duration: '15 min', completed: false },
      { id: 'motor-control', title: 'Motor Control with Pi', duration: '18 min', completed: false },
    ],
    icon: <Cpu className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-600 shadow-green-500/25',
  },
  {
    id: 'camera',
    title: 'Camera & Vision',
    description: 'Use Raspberry Pi camera for photos, video, and computer vision.',
    lessons: [
      { id: 'camera-setup', title: 'Setting Up Pi Camera', duration: '10 min', completed: false },
      { id: 'take-photos', title: 'Taking Photos with Python', duration: '12 min', completed: false },
      { id: 'record-video', title: 'Recording Video', duration: '10 min', completed: false },
      { id: 'opencv-intro', title: 'Introduction to OpenCV', duration: '15 min', completed: false },
      { id: 'face-detection', title: 'Face Detection', duration: '20 min', completed: false },
    ],
    icon: <Camera className="w-6 h-6" />,
    color: 'from-red-500 to-orange-600 shadow-red-500/25',
  },
  {
    id: 'robotics',
    title: 'Robotics Fundamentals',
    description: 'Learn the basics of building and programming robots.',
    lessons: [
      { id: 'robotics-intro', title: 'Introduction to Robotics', duration: '10 min', completed: false },
      { id: 'robot-chassis', title: 'Building Robot Chassis', duration: '15 min', completed: false },
      { id: 'motor-drivers', title: 'Motor Drivers for Robots', duration: '12 min', completed: false },
      { id: 'basic-movement', title: 'Programming Basic Movement', duration: '15 min', completed: false },
      { id: 'obstacle-avoidance', title: 'Obstacle Avoidance', duration: '18 min', completed: false },
      { id: 'line-following', title: 'Line Following Robot', duration: '20 min', completed: false },
    ],
    icon: <Cog className="w-6 h-6" />,
    color: 'from-yellow-500 to-amber-600 shadow-yellow-500/25',
  },
  {
    id: 'ai',
    title: 'AI & Machine Learning',
    description: 'Build intelligent robots with AI and machine learning.',
    lessons: [
      { id: 'ai-intro', title: 'Introduction to AI', duration: '10 min', completed: false },
      { id: 'ml-basics', title: 'Machine Learning Basics', duration: '15 min', completed: false },
      { id: 'tensorflow-lite', title: 'TensorFlow Lite on Pi', duration: '20 min', completed: false },
      { id: 'object-detection', title: 'Object Detection', duration: '25 min', completed: false },
      { id: 'voice-control', title: 'Voice Controlled Robot', duration: '25 min', completed: false },
    ],
    icon: <Brain className="w-6 h-6" />,
    color: 'from-violet-500 to-purple-600 shadow-violet-500/25',
  },
]

export default function RaspberryPiTrackPage() {
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
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-[80px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-12"
          >
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg shadow-purple-500/25">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <div>
                  <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">Learning Path</Badge>
                  <h1 className="text-3xl md:text-4xl font-bold text-white mt-1">
                    Raspberry Pi & Robotics
                  </h1>
                </div>
              </div>
              <p className="text-slate-400 text-lg max-w-2xl">
                Build intelligent robots and automation systems with Raspberry Pi. 
                Learn Linux, Python programming, computer vision, and AI!
              </p>
              
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-500/20 border border-purple-500/30">
                  <Terminal className="w-5 h-5 text-purple-400" />
                  <span className="text-purple-400">Learn Linux</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500/20 border border-blue-500/30">
                  <Code2 className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-400">Python Programming</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-violet-500/20 border border-violet-500/30">
                  <Brain className="w-5 h-5 text-violet-400" />
                  <span className="text-violet-400">AI & Robotics</span>
                </div>
              </div>
            </div>
            
            <GlassCard className="p-6 min-w-[280px]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-slate-400">Your Progress</span>
                <span className="text-2xl font-bold text-purple-400">{progressPercent}%</span>
              </div>
              <Progress value={progressPercent} className="mb-4" />
              <div className="flex items-center justify-between text-sm text-slate-400">
                <span>{completedLessons} of {totalLessons} lessons</span>
                <span>{modules.length} modules</span>
              </div>
              <Button className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700" asChild>
                <Link href="/raspberrypi/lessons/what-is-raspberry-pi">
                  <Play className="w-4 h-4 mr-2" />
                  Continue Learning
                </Link>
              </Button>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Why Raspberry Pi Section */}
      <section className="py-10 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Why Learn Raspberry Pi?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="p-6 text-center">
              <MonitorSmartphone className="w-10 h-10 text-purple-400 mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Full Computer</h3>
              <p className="text-slate-400 text-sm">A complete Linux computer in your hand</p>
            </Card>
            <Card className="p-6 text-center">
              <Code2 className="w-10 h-10 text-blue-400 mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Python Power</h3>
              <p className="text-slate-400 text-sm">Program complex projects with Python</p>
            </Card>
            <Card className="p-6 text-center">
              <Camera className="w-10 h-10 text-red-400 mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Computer Vision</h3>
              <p className="text-slate-400 text-sm">Add eyes to your robots with cameras</p>
            </Card>
            <Card className="p-6 text-center">
              <Brain className="w-10 h-10 text-violet-400 mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">AI Ready</h3>
              <p className="text-slate-400 text-sm">Run machine learning models</p>
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
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center shadow-lg`}>
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
                          href={`/raspberrypi/lessons/${lesson.id}`}
                          className="flex items-center justify-between p-4 hover:bg-slate-800/30 transition-colors group"
                        >
                          <div className="flex items-center gap-4">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                              lesson.completed 
                                ? 'bg-green-500/20 text-green-400' 
                                : 'bg-slate-800 text-slate-400 group-hover:text-purple-400'
                            }`}>
                              {lesson.completed ? (
                                <CheckCircle2 className="w-5 h-5" />
                              ) : (
                                <span className="text-sm font-medium">{lessonIndex + 1}</span>
                              )}
                            </div>
                            <div>
                              <h4 className="text-white group-hover:text-purple-400 transition-colors">
                                {lesson.title}
                              </h4>
                              <span className="text-sm text-slate-500">{lesson.duration}</span>
                            </div>
                          </div>
                          <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
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

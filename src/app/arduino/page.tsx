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
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Lock,
  ChevronRight,
  Lightbulb,
  Zap,
  Volume2,
  Radio,
  Thermometer,
  Droplets,
  Eye,
  Flame,
  Wifi,
  Bluetooth,
  Gauge,
  Settings,
  Play,
} from 'lucide-react'

const modules = [
  {
    id: 'intro',
    title: 'Introduction to Arduino',
    description: 'Learn what Arduino is, its types, and why it is amazing for beginners.',
    lessons: [
      { id: 'what-is-arduino', title: 'What is Arduino?', duration: '5 min', completed: true },
      { id: 'arduino-types', title: 'Types of Arduino Boards', duration: '8 min', completed: true },
      { id: 'arduino-ide', title: 'Installing Arduino IDE', duration: '10 min', completed: false },
      { id: 'first-sketch', title: 'Your First Sketch', duration: '12 min', completed: false },
    ],
    icon: <Cpu className="w-6 h-6" />,
    color: 'cyan',
  },
  {
    id: 'basics',
    title: 'Basic Electronics',
    description: 'Understand LEDs, resistors, breadboards, and how electricity flows.',
    lessons: [
      { id: 'understanding-circuits', title: 'Understanding Circuits', duration: '8 min', completed: false },
      { id: 'breadboard-basics', title: 'Breadboard Basics', duration: '6 min', completed: false },
      { id: 'resistors-explained', title: 'Resistors Explained', duration: '7 min', completed: false },
      { id: 'leds-and-colors', title: 'LEDs and Colors', duration: '5 min', completed: false },
    ],
    icon: <Lightbulb className="w-6 h-6" />,
    color: 'yellow',
  },
  {
    id: 'outputs',
    title: 'Output Devices',
    description: 'Control LEDs, buzzers, relays, motors, and displays.',
    lessons: [
      { id: 'led-blink', title: 'LED Blink Tutorial', duration: '10 min', completed: false },
      { id: 'buzzer-control', title: 'Buzzer Control', duration: '8 min', completed: false },
      { id: 'relay-module', title: 'Relay Module', duration: '12 min', completed: false },
      { id: 'lcd-16x2', title: '16x2 LCD Display', duration: '15 min', completed: false },
      { id: 'lcd-i2c', title: 'LCD with I2C Module', duration: '12 min', completed: false },
      { id: 'servo-motor', title: 'Servo Motor Control', duration: '10 min', completed: false },
    ],
    icon: <Zap className="w-6 h-6" />,
    color: 'green',
  },
  {
    id: 'sensors',
    title: 'Sensors',
    description: 'Read data from ultrasonic, temperature, motion, and other sensors.',
    lessons: [
      { id: 'ultrasonic-sensor', title: 'Ultrasonic Distance Sensor', duration: '12 min', completed: false },
      { id: 'ldr-sensor', title: 'LDR Light Sensor', duration: '8 min', completed: false },
      { id: 'ir-sensor', title: 'IR Sensor', duration: '10 min', completed: false },
      { id: 'pir-motion', title: 'PIR Motion Sensor', duration: '10 min', completed: false },
      { id: 'dht11-temp', title: 'DHT11 Temperature Sensor', duration: '12 min', completed: false },
      { id: 'ds18b20-temp', title: 'DS18B20 Waterproof Temp', duration: '10 min', completed: false },
      { id: 'gas-sensors', title: 'Gas Sensors (MQ Series)', duration: '15 min', completed: false },
      { id: 'soil-moisture', title: 'Soil Moisture Sensor', duration: '8 min', completed: false },
      { id: 'rain-sensor', title: 'Rain Sensor', duration: '8 min', completed: false },
      { id: 'flame-sensor', title: 'Flame Sensor', duration: '8 min', completed: false },
      { id: 'water-level', title: 'Water Level Sensor', duration: '8 min', completed: false },
    ],
    icon: <Thermometer className="w-6 h-6" />,
    color: 'orange',
  },
  {
    id: 'motors',
    title: 'Motor Drivers',
    description: 'Control DC motors, stepper motors with L298N, L293D, BTS7960.',
    lessons: [
      { id: 'l298n-driver', title: 'L298N Motor Driver', duration: '15 min', completed: false },
      { id: 'l293d-driver', title: 'L293D Motor Shield', duration: '12 min', completed: false },
      { id: 'bts7960-driver', title: 'BTS7960 High Power Driver', duration: '12 min', completed: false },
      { id: 'stepper-motor', title: 'Stepper Motor Control', duration: '15 min', completed: false },
    ],
    icon: <Settings className="w-6 h-6" />,
    color: 'purple',
  },
  {
    id: 'wireless',
    title: 'Wireless Communication',
    description: 'Add Bluetooth and RF wireless to your projects.',
    lessons: [
      { id: 'bluetooth-hc05', title: 'HC-05 Bluetooth Module', duration: '15 min', completed: false },
      { id: 'nrf24l01', title: 'NRF24L01 RF Module', duration: '18 min', completed: false },
    ],
    icon: <Bluetooth className="w-6 h-6" />,
    color: 'blue',
  },
  {
    id: 'projects',
    title: 'Intermediate Projects',
    description: 'Combine your skills to build amazing real-world projects.',
    lessons: [
      { id: 'smart-dustbin', title: 'Smart Dustbin', duration: '25 min', completed: false },
      { id: 'security-alarm', title: 'Security Alarm System', duration: '30 min', completed: false },
      { id: 'plant-watering', title: 'Auto Plant Watering', duration: '25 min', completed: false },
      { id: 'obstacle-robot', title: 'Obstacle Avoiding Robot', duration: '35 min', completed: false },
    ],
    icon: <Gauge className="w-6 h-6" />,
    color: 'pink',
  },
]

const colorMap: Record<string, string> = {
  cyan: 'bg-cyan-500 shadow-cyan-500/25',
  yellow: 'bg-cyan-400 shadow-cyan-500/25',
  green: 'bg-green-500 shadow-green-500/25',
  orange: 'bg-cyan-500 shadow-cyan-500/25',
  purple: 'bg-blue-500 shadow-blue-500/25',
  blue: 'bg-blue-500 shadow-blue-500/25',
  pink: 'bg-cyan-500 shadow-cyan-500/25',
}

export default function ArduinoTrackPage() {
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
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-12"
          >
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/25">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <div>
                  <Badge>Learning Path</Badge>
                  <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-1">
                    Arduino Track
                  </h1>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl">
                Master Arduino programming from the very basics to advanced projects. 
                Learn sensors, motors, displays, and build real robots!
              </p>
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
              <Button className="w-full mt-4" asChild>
                <Link href="/arduino/lessons/what-is-arduino">
                  <Play className="w-4 h-4 mr-2" />
                  Continue Learning
                </Link>
              </Button>
            </GlassCard>
          </motion.div>
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
                        <div className={`w-12 h-12 rounded-xl ${colorMap[module.color]} flex items-center justify-center shadow-lg`}>
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
                          href={`/arduino/lessons/${lesson.id}`}
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

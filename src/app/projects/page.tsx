"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Search,
  Filter,
  Cpu,
  Zap,
  Bot,
  ChevronRight,
  Clock,
  Star,
  BookOpen,
} from 'lucide-react'

const projects = [
  {
    id: 'smart-dustbin',
    title: 'Smart Dustbin',
    description: 'Build a dustbin that opens automatically when you approach it using ultrasonic sensor.',
    track: 'Arduino',
    level: 'beginner',
    duration: '25 min',
    components: ['Arduino', 'Ultrasonic Sensor', 'Servo Motor'],
    rating: 4.8,
    students: 1250,
  },
  {
    id: 'line-follower-robot',
    title: 'Line Following Robot',
    description: 'Create a robot that follows a black line on the ground automatically.',
    track: 'Arduino',
    level: 'intermediate',
    duration: '35 min',
    components: ['Arduino', 'IR Sensors', 'L298N', 'DC Motors'],
    rating: 4.9,
    students: 2100,
  },
  {
    id: 'bluetooth-car',
    title: 'Bluetooth Controlled Car',
    description: 'Build a car you can control from your smartphone using Bluetooth.',
    track: 'Arduino',
    level: 'intermediate',
    duration: '40 min',
    components: ['Arduino', 'HC-05', 'L298N', 'DC Motors'],
    rating: 4.7,
    students: 1890,
  },
  {
    id: 'weather-station',
    title: 'Weather Station',
    description: 'Monitor temperature, humidity and display on LCD. Save data to SD card.',
    track: 'Arduino',
    level: 'beginner',
    duration: '30 min',
    components: ['Arduino', 'DHT11', 'LCD I2C', 'SD Card Module'],
    rating: 4.6,
    students: 980,
  },
  {
    id: 'smart-home-iot',
    title: 'Smart Home System',
    description: 'Control lights and appliances from anywhere using ESP32 and WiFi.',
    track: 'ESP32',
    level: 'intermediate',
    duration: '45 min',
    components: ['ESP32', 'Relay Module', 'LED', 'Blynk App'],
    rating: 4.9,
    students: 1560,
  },
  {
    id: 'security-camera',
    title: 'WiFi Security Camera',
    description: 'Build a security camera that streams video to your phone.',
    track: 'ESP32',
    level: 'advanced',
    duration: '50 min',
    components: ['ESP32-CAM', 'OV2640 Camera'],
    rating: 4.8,
    students: 890,
  },
  {
    id: 'obstacle-avoiding-robot',
    title: 'Obstacle Avoiding Robot',
    description: 'Create a robot that detects and avoids obstacles automatically.',
    track: 'Arduino',
    level: 'intermediate',
    duration: '35 min',
    components: ['Arduino', 'Ultrasonic Sensor', 'Servo', 'L298N'],
    rating: 4.7,
    students: 1670,
  },
  {
    id: 'home-automation-pi',
    title: 'Home Automation with Pi',
    description: 'Control your home devices using Raspberry Pi and voice commands.',
    track: 'Raspberry Pi',
    level: 'advanced',
    duration: '60 min',
    components: ['Raspberry Pi', 'Relay Module', 'Google Assistant'],
    rating: 4.9,
    students: 750,
  },
  {
    id: 'face-detection-pi',
    title: 'Face Detection System',
    description: 'Build a system that detects and recognizes faces using Pi Camera.',
    track: 'Raspberry Pi',
    level: 'advanced',
    duration: '55 min',
    components: ['Raspberry Pi', 'Pi Camera', 'OpenCV'],
    rating: 4.8,
    students: 620,
  },
  {
    id: 'plant-watering',
    title: 'Automatic Plant Watering',
    description: 'Keep your plants happy with automatic watering based on soil moisture.',
    track: 'Arduino',
    level: 'beginner',
    duration: '25 min',
    components: ['Arduino', 'Soil Moisture Sensor', 'Water Pump', 'Relay'],
    rating: 4.7,
    students: 1340,
  },
  {
    id: 'fire-alarm',
    title: 'Fire Alarm System',
    description: 'Create a fire detection and alarm system using flame and gas sensors.',
    track: 'Arduino',
    level: 'beginner',
    duration: '20 min',
    components: ['Arduino', 'Flame Sensor', 'MQ-2 Gas Sensor', 'Buzzer'],
    rating: 4.5,
    students: 1120,
  },
  {
    id: 'robotic-arm',
    title: 'Robotic Arm',
    description: 'Build a robotic arm that can pick and place objects.',
    track: 'Raspberry Pi',
    level: 'advanced',
    duration: '70 min',
    components: ['Raspberry Pi', 'Servo Motors', '3D Printed Parts'],
    rating: 4.9,
    students: 450,
  },
]

const trackIcons: Record<string, React.ReactNode> = {
  'Arduino': <Cpu className="w-5 h-5" />,
  'ESP32': <Zap className="w-5 h-5" />,
  'Raspberry Pi': <Bot className="w-5 h-5" />,
}

const trackColors: Record<string, string> = {
  'Arduino': 'from-cyan-500 to-blue-600',
  'ESP32': 'from-yellow-500 to-orange-600',
  'Raspberry Pi': 'from-purple-500 to-pink-600',
}

export default function ProjectsPage() {
  const { t } = useLanguage()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null)
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null)

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTrack = !selectedTrack || project.track === selectedTrack
    const matchesLevel = !selectedLevel || project.level === selectedLevel
    return matchesSearch && matchesTrack && matchesLevel
  })

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Project <span className="text-cyan-400">Gallery</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
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
              {['beginner', 'intermediate', 'advanced'].map((level) => (
                <Button
                  key={level}
                  variant={selectedLevel === level ? 'default' : 'secondary'}
                  size="sm"
                  onClick={() => setSelectedLevel(selectedLevel === level ? null : level)}
                >
                  {level === 'beginner' ? t('common.beginner') : 
                   level === 'intermediate' ? t('common.intermediate') : 
                   t('common.advanced')}
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
              Showing {filteredProjects.length} of {projects.length} projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={`/projects/${project.id}`}>
                  <Card glow className="h-full overflow-hidden group cursor-pointer">
                    <div className="h-40 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${trackColors[project.track]} opacity-10`} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${trackColors[project.track]} flex items-center justify-center shadow-lg opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all`}>
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
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-400 text-lg">No projects found matching your criteria.</p>
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

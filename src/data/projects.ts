import { LEVEL_ORDER, type ProjectGuide, type ProjectMeta } from './project-types'
import { guides as guides1 } from './project-guides-1'
import { guides as guides2 } from './project-guides-2'
import { guides as guides3 } from './project-guides-3'

export const projects: ProjectMeta[] = [
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

const allGuides: Record<string, ProjectGuide> = {
  ...guides1,
  ...guides2,
  ...guides3,
}

export function getProject(id: string): ProjectMeta | null {
  return projects.find((p) => p.id === id) ?? null
}

export function getProjectGuide(id: string): ProjectGuide | null {
  return allGuides[id] ?? null
}

/** Projects sorted beginner → intermediate → advanced (then by students). */
export function getProjectsByLevel(): ProjectMeta[] {
  return [...projects].sort(
    (a, b) => LEVEL_ORDER[a.level] - LEVEL_ORDER[b.level] || b.students - a.students
  )
}

export type LessonTrackId = 'arduino' | 'esp32' | 'raspberrypi'

export interface SidebarLesson {
  id: string
  title: string
}

export interface SidebarModule {
  id: string
  title: string
  titleBn: string
  lessons: SidebarLesson[]
}

export interface LessonTrack {
  id: LessonTrackId
  title: string
  titleBn: string
  modules: SidebarModule[]
}

export const LESSON_TRACKS: LessonTrack[] = [
  {
    id: 'arduino',
    title: 'Arduino',
    titleBn: 'আর্ডুইনো',
    modules: [
      {
        id: 'intro',
        title: 'Introduction to Arduino',
        titleBn: 'আর্ডুইনো পরিচিতি',
        lessons: [
          { id: 'what-is-arduino', title: 'What is Arduino?' },
          { id: 'arduino-types', title: 'Types of Arduino Boards' },
          { id: 'arduino-ide', title: 'Installing Arduino IDE' },
          { id: 'first-sketch', title: 'Your First Sketch' },
        ],
      },
      {
        id: 'basics',
        title: 'Basic Electronics',
        titleBn: 'বেসিক ইলেকট্রনিক্স',
        lessons: [
          { id: 'understanding-circuits', title: 'Understanding Circuits' },
          { id: 'breadboard-basics', title: 'Breadboard Basics' },
          { id: 'resistors-explained', title: 'Resistors Explained' },
          { id: 'leds-and-colors', title: 'LEDs and Colors' },
        ],
      },
      {
        id: 'outputs',
        title: 'Output Devices',
        titleBn: 'আউটপুট ডিভাইস',
        lessons: [
          { id: 'led-blink', title: 'LED Blink Tutorial' },
          { id: 'buzzer-control', title: 'Buzzer Control' },
          { id: 'relay-module', title: 'Relay Module' },
          { id: 'lcd-16x2', title: '16x2 LCD Display' },
          { id: 'lcd-i2c', title: 'LCD with I2C Module' },
          { id: 'servo-motor', title: 'Servo Motor Control' },
        ],
      },
      {
        id: 'sensors',
        title: 'Sensors',
        titleBn: 'সেন্সর',
        lessons: [
          { id: 'ultrasonic-sensor', title: 'Ultrasonic Distance Sensor' },
          { id: 'ldr-sensor', title: 'LDR Light Sensor' },
          { id: 'ir-sensor', title: 'IR Sensor' },
          { id: 'pir-motion', title: 'PIR Motion Sensor' },
          { id: 'dht11-temp', title: 'DHT11 Temperature Sensor' },
          { id: 'ds18b20-temp', title: 'DS18B20 Waterproof Temp' },
          { id: 'gas-sensors', title: 'Gas Sensors (MQ Series)' },
          { id: 'soil-moisture', title: 'Soil Moisture Sensor' },
          { id: 'rain-sensor', title: 'Rain Sensor' },
          { id: 'flame-sensor', title: 'Flame Sensor' },
          { id: 'water-level', title: 'Water Level Sensor' },
        ],
      },
      {
        id: 'motors',
        title: 'Motor Drivers',
        titleBn: 'মোটর ড্রাইভার',
        lessons: [
          { id: 'l298n-driver', title: 'L298N Motor Driver' },
          { id: 'l293d-driver', title: 'L293D Motor Shield' },
          { id: 'bts7960-driver', title: 'BTS7960 High Power Driver' },
          { id: 'stepper-motor', title: 'Stepper Motor Control' },
        ],
      },
      {
        id: 'wireless',
        title: 'Wireless Communication',
        titleBn: 'ওয়্যারলেস যোগাযোগ',
        lessons: [
          { id: 'bluetooth-hc05', title: 'HC-05 Bluetooth Module' },
          { id: 'nrf24l01', title: 'NRF24L01 RF Module' },
        ],
      },
      {
        id: 'projects',
        title: 'Intermediate Projects',
        titleBn: 'ইন্টারমিডিয়েট প্রজেক্ট',
        lessons: [
          { id: 'smart-dustbin', title: 'Smart Dustbin' },
          { id: 'security-alarm', title: 'Security Alarm System' },
          { id: 'plant-watering', title: 'Auto Plant Watering' },
          { id: 'obstacle-robot', title: 'Obstacle Avoiding Robot' },
        ],
      },
    ],
  },
  {
    id: 'esp32',
    title: 'ESP32',
    titleBn: 'ESP32',
    modules: [
      {
        id: 'intro',
        title: 'Introduction to ESP32',
        titleBn: 'ESP32 পরিচিতি',
        lessons: [
          { id: 'what-is-esp32', title: 'What is ESP32?' },
          { id: 'esp32-vs-arduino', title: 'ESP32 vs Arduino' },
          { id: 'esp32-board-overview', title: 'ESP32 Board Overview' },
          { id: 'setup-esp32-arduino-ide', title: 'Setting up ESP32 in Arduino IDE' },
          { id: 'first-esp32-sketch', title: 'Your First ESP32 Sketch' },
        ],
      },
      {
        id: 'wifi',
        title: 'WiFi with ESP32',
        titleBn: 'ESP32 WiFi',
        lessons: [
          { id: 'wifi-basics', title: 'Understanding WiFi Basics' },
          { id: 'connect-wifi', title: 'Connecting ESP32 to WiFi' },
          { id: 'web-server', title: 'Creating a Simple Web Server' },
          { id: 'control-led-web', title: 'Control LED from Web Browser' },
          { id: 'display-sensor-web', title: 'Display Sensor Data on Webpage' },
        ],
      },
      {
        id: 'bluetooth',
        title: 'Bluetooth with ESP32',
        titleBn: 'ESP32 Bluetooth',
        lessons: [
          { id: 'bluetooth-basics', title: 'Understanding Bluetooth' },
          { id: 'classic-bluetooth', title: 'ESP32 Classic Bluetooth' },
          { id: 'ble-intro', title: 'Introduction to BLE' },
          { id: 'bluetooth-car', title: 'Bluetooth Controlled Car' },
        ],
      },
      {
        id: 'iot',
        title: 'IoT Projects',
        titleBn: 'IoT প্রজেক্ট',
        lessons: [
          { id: 'iot-intro', title: 'What is IoT?' },
          { id: 'blynk-setup', title: 'Getting Started with Blynk' },
          { id: 'thingspeak', title: 'Send Data to ThingSpeak' },
          { id: 'firebase-esp32', title: 'ESP32 with Firebase' },
          { id: 'smart-home', title: 'Smart Home Project' },
        ],
      },
      {
        id: 'advanced',
        title: 'Advanced Projects',
        titleBn: 'অ্যাডভান্সড প্রজেক্ট',
        lessons: [
          { id: 'weather-station-iot', title: 'IoT Weather Station' },
          { id: 'security-camera', title: 'WiFi Security Camera' },
          { id: 'home-automation', title: 'Complete Home Automation' },
        ],
      },
    ],
  },
  {
    id: 'raspberrypi',
    title: 'Raspberry Pi & Robotics',
    titleBn: 'রাস্পবেরি পাই ও রোবোটিক্স',
    modules: [
      {
        id: 'intro',
        title: 'Introduction to Raspberry Pi',
        titleBn: 'রাস্পবেরি পাই পরিচিতি',
        lessons: [
          { id: 'what-is-raspberry-pi', title: 'What is Raspberry Pi?' },
          { id: 'raspberry-pi-models', title: 'Raspberry Pi Models Explained' },
          { id: 'setup-raspberry-pi', title: 'Setting Up Your Raspberry Pi' },
          { id: 'first-boot', title: 'First Boot and Configuration' },
        ],
      },
      {
        id: 'linux',
        title: 'Linux Basics',
        titleBn: 'Linux বেসিক',
        lessons: [
          { id: 'linux-intro', title: 'Introduction to Linux' },
          { id: 'terminal-basics', title: 'Terminal Basics' },
          { id: 'file-navigation', title: 'File System Navigation' },
          { id: 'file-management', title: 'Creating and Managing Files' },
          { id: 'permissions', title: 'File Permissions' },
          { id: 'package-management', title: 'Installing Software' },
        ],
      },
      {
        id: 'python',
        title: 'Python Programming',
        titleBn: 'Python প্রোগ্রামিং',
        lessons: [
          { id: 'python-intro', title: 'Introduction to Python' },
          { id: 'variables-types', title: 'Variables and Data Types' },
          { id: 'conditionals', title: 'If Statements' },
          { id: 'loops', title: 'Loops in Python' },
          { id: 'functions', title: 'Functions' },
          { id: 'lists-dicts', title: 'Lists and Dictionaries' },
        ],
      },
      {
        id: 'gpio',
        title: 'GPIO & Electronics',
        titleBn: 'GPIO ও ইলেকট্রনিক্স',
        lessons: [
          { id: 'gpio-intro', title: 'Understanding GPIO Pins' },
          { id: 'led-python', title: 'Control LED with Python' },
          { id: 'button-input', title: 'Reading Button Input' },
          { id: 'pwm-basics', title: 'PWM for LED Brightness' },
          { id: 'sensors-pi', title: 'Connecting Sensors' },
          { id: 'motor-control', title: 'Motor Control with Pi' },
        ],
      },
      {
        id: 'camera',
        title: 'Camera & Vision',
        titleBn: 'ক্যামেরা ও ভিশন',
        lessons: [
          { id: 'camera-setup', title: 'Setting Up Pi Camera' },
          { id: 'take-photos', title: 'Taking Photos with Python' },
          { id: 'record-video', title: 'Recording Video' },
          { id: 'opencv-intro', title: 'Introduction to OpenCV' },
          { id: 'face-detection', title: 'Face Detection' },
        ],
      },
      {
        id: 'robotics',
        title: 'Robotics Fundamentals',
        titleBn: 'রোবোটিক্স ফান্ডামেন্টাল',
        lessons: [
          { id: 'robotics-intro', title: 'Introduction to Robotics' },
          { id: 'robot-chassis', title: 'Building Robot Chassis' },
          { id: 'motor-drivers', title: 'Motor Drivers for Robots' },
          { id: 'basic-movement', title: 'Programming Basic Movement' },
          { id: 'obstacle-avoidance', title: 'Obstacle Avoidance' },
          { id: 'line-following', title: 'Line Following Robot' },
        ],
      },
      {
        id: 'ai',
        title: 'AI & Machine Learning',
        titleBn: 'AI ও মেশিন লার্নিং',
        lessons: [
          { id: 'ai-intro', title: 'Introduction to AI' },
          { id: 'ml-basics', title: 'Machine Learning Basics' },
          { id: 'tensorflow-lite', title: 'TensorFlow Lite on Pi' },
          { id: 'object-detection', title: 'Object Detection' },
          { id: 'voice-control', title: 'Voice Controlled Robot' },
        ],
      },
    ],
  },
]

export function lessonHref(track: LessonTrackId, slug: string): string {
  return `/lessons/${track}/${slug}`
}

export function getTrackById(id: string): LessonTrack | undefined {
  return LESSON_TRACKS.find((t) => t.id === id)
}

export function findLessonInTrack(
  trackId: LessonTrackId,
  slug: string
): { lesson: SidebarLesson; module: SidebarModule } | null {
  const track = getTrackById(trackId)
  if (!track) return null
  for (const mod of track.modules) {
    const lesson = mod.lessons.find((l) => l.id === slug)
    if (lesson) return { lesson, module: mod }
  }
  return null
}

export function getAdjacentLessons(
  trackId: LessonTrackId,
  slug: string
): { prev: { slug: string; title: string } | null; next: { slug: string; title: string } | null } {
  const track = getTrackById(trackId)
  if (!track) return { prev: null, next: null }

  const flat = track.modules.flatMap((m) => m.lessons)
  const index = flat.findIndex((l) => l.id === slug)
  if (index === -1) return { prev: null, next: null }

  return {
    prev: index > 0 ? { slug: flat[index - 1].id, title: flat[index - 1].title } : null,
    next:
      index < flat.length - 1
        ? { slug: flat[index + 1].id, title: flat[index + 1].title }
        : null,
  }
}

export const DEFAULT_LESSON_PATH = lessonHref('arduino', 'what-is-arduino')

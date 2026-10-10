export type ProjectLevel = 'beginner' | 'intermediate' | 'advanced'

export interface ProjectMeta {
  id: string
  title: string
  description: string
  track: 'Arduino' | 'ESP32' | 'Raspberry Pi'
  level: ProjectLevel
  duration: string
  components: string[]
  rating: number
  students: number
}

export interface PinConnection {
  /** Pin on the controller board, e.g. 'D9', 'GPIO 25', '5V', 'GND' */
  from: string
  /** Pin on the module/component, e.g. 'TRIG', 'VCC', 'IN1' */
  to: string
  /** Which part this row belongs to, e.g. 'Ultrasonic HC-SR04' */
  part: string
  note?: string
  noteBn?: string
}

export interface ProjectGuide {
  /** Controller board label shown on the wiring diagram, e.g. 'Arduino Uno' */
  boardLabel: string
  boardLabelBn: string
  overview: string[]
  overviewBn: string[]
  howItWorks: string[]
  howItWorksBn: string[]
  pins: PinConnection[]
  steps: string[]
  stepsBn: string[]
  /** Complete uploadable code. Empty string when no code applies. */
  code: string
  codeTitle: string
  codeLanguage: 'cpp' | 'python'
  tips: string[]
  tipsBn: string[]
}

export const LEVEL_ORDER: Record<ProjectLevel, number> = {
  beginner: 0,
  intermediate: 1,
  advanced: 2,
}

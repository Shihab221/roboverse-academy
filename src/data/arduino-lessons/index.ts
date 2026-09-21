import { ArduinoLesson, ArduinoLessonsMap } from './types'
import { ARDUINO_LESSON_ORDER } from './order'
import { introLessons } from './intro'
import { basicsLessons } from './basics'
import { outputLessons } from './outputs'
import { sensorLessons } from './sensors'
import { motorLessons } from './motors'
import { wirelessLessons } from './wireless'
import { projectLessons } from './projects'

const rawLessons: ArduinoLessonsMap = {
  ...introLessons,
  ...basicsLessons,
  ...outputLessons,
  ...sensorLessons,
  ...motorLessons,
  ...wirelessLessons,
  ...projectLessons,
}

export interface LessonWithNav extends ArduinoLesson {
  slug: string
  prevLesson: string | null
  nextLesson: string | null
}

function withNavigation(): Record<string, LessonWithNav> {
  const result: Record<string, LessonWithNav> = {}

  ARDUINO_LESSON_ORDER.forEach((slug, index) => {
    const lesson = rawLessons[slug]
    if (!lesson) return

    result[slug] = {
      ...lesson,
      slug,
      prevLesson: index > 0 ? ARDUINO_LESSON_ORDER[index - 1] : null,
      nextLesson:
        index < ARDUINO_LESSON_ORDER.length - 1
          ? ARDUINO_LESSON_ORDER[index + 1]
          : null,
    }
  })

  return result
}

export const arduinoLessons = withNavigation()

export function getArduinoLesson(slug: string): LessonWithNav | null {
  return arduinoLessons[slug] ?? null
}

export function getAllArduinoLessonSlugs(): string[] {
  return [...ARDUINO_LESSON_ORDER]
}

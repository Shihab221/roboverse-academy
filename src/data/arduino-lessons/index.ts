import { ArduinoLesson, ArduinoLessonsMap } from './types'
import { ARDUINO_LESSON_ORDER } from './order'
import { introLessons } from './intro'
import { basicsLessons } from './basics'
import { outputLessons } from './outputs'
import { sensorLessons } from './sensors'
import { motorLessons } from './motors'
import { wirelessLessons } from './wireless'
import { projectLessons } from './projects'
import { overviews as overviews1 } from './overviews-1'
import { overviews as overviews2 } from './overviews-2'
import { overviews as overviews3 } from './overviews-3'
import { overviews as overviews4 } from './overviews-4'
import { overviews as overviews5 } from './overviews-5'

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
  overview: string[]
  overviewBn: string[]
}

const allOverviews = {
  ...overviews1,
  ...overviews2,
  ...overviews3,
  ...overviews4,
  ...overviews5,
}

function withNavigation(): Record<string, LessonWithNav> {
  const result: Record<string, LessonWithNav> = {}

  ARDUINO_LESSON_ORDER.forEach((slug, index) => {
    const lesson = rawLessons[slug]
    if (!lesson) return

    result[slug] = {
      ...lesson,
      slug,
      overview: allOverviews[slug]?.en ?? [],
      overviewBn: allOverviews[slug]?.bn ?? [],
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

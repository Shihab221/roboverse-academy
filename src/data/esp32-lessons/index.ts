import { Esp32Lesson, Esp32LessonsMap } from './types'
import { ESP32_LESSON_ORDER } from './order'
import { introLessons } from './intro'
import { wifiLessons } from './wifi'
import { bluetoothLessons } from './bluetooth'
import { iotLessons } from './iot'
import { advancedLessons } from './advanced'
import { overviews as overviews1 } from './overviews-1'
import { overviews as overviews2 } from './overviews-2'

const rawLessons: Esp32LessonsMap = {
  ...introLessons,
  ...wifiLessons,
  ...bluetoothLessons,
  ...iotLessons,
  ...advancedLessons,
}

export interface LessonWithNav extends Esp32Lesson {
  slug: string
  prevLesson: string | null
  nextLesson: string | null
  overview: string[]
  overviewBn: string[]
}

const allOverviews = {
  ...overviews1,
  ...overviews2,
}

function withNavigation(): Record<string, LessonWithNav> {
  const result: Record<string, LessonWithNav> = {}

  ESP32_LESSON_ORDER.forEach((slug, index) => {
    const lesson = rawLessons[slug]
    if (!lesson) return

    result[slug] = {
      ...lesson,
      slug,
      overview: allOverviews[slug]?.en ?? [],
      overviewBn: allOverviews[slug]?.bn ?? [],
      prevLesson: index > 0 ? ESP32_LESSON_ORDER[index - 1] : null,
      nextLesson:
        index < ESP32_LESSON_ORDER.length - 1
          ? ESP32_LESSON_ORDER[index + 1]
          : null,
    }
  })

  return result
}

export const esp32Lessons = withNavigation()

export function getEsp32Lesson(slug: string): LessonWithNav | null {
  return esp32Lessons[slug] ?? null
}

export function getAllEsp32LessonSlugs(): string[] {
  return [...ESP32_LESSON_ORDER]
}

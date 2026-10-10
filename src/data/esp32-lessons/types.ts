import type { ArduinoLesson, ArduinoLessonsMap } from '../arduino-lessons/types'

// ESP32 lessons share the exact same shape as Arduino lessons so the same
// lesson-page UI can render both tracks.
export type Esp32Lesson = ArduinoLesson
export type Esp32LessonsMap = ArduinoLessonsMap

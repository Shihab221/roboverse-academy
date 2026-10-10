export interface LessonCodeExplanation {
  line: number
  text: string
  textBn: string
}

export interface LessonMistake {
  mistake: string
  mistakeBn: string
  solution: string
  solutionBn: string
}

// 2-4 short prose paragraphs describing what a lesson is about.
// Stored in separate overview files and merged in at index time.
export interface LessonOverview {
  en: string[]
  bn: string[]
}

export interface ArduinoLesson {
  title: string
  titleBn: string
  duration: string
  level: 'beginner' | 'intermediate' | 'advanced'
  description: string
  descriptionBn: string
  whatYouWillLearn: string[]
  whatYouWillLearnBn: string[]
  components: string[]
  circuitDescription: string
  circuitDescriptionBn: string
  code: string
  codeExplanation: LessonCodeExplanation[]
  commonMistakes: LessonMistake[]
  tryItTips: string[]
  tryItTipsBn: string[]
  // Merged in from overview files at index time; falls back to [].
  overview?: string[]
  overviewBn?: string[]
}

export type ArduinoLessonsMap = Record<string, ArduinoLesson>

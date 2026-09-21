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
}

export type ArduinoLessonsMap = Record<string, ArduinoLesson>

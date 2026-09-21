"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'en' | 'bn'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.arduino': 'Arduino Track',
    'nav.raspberrypi': 'Raspberry Pi & Robotics',
    'nav.esp32': 'ESP32 Track',
    'nav.projects': 'Projects',
    'nav.dashboard': 'Dashboard',
    'nav.blog': 'Blog / Tips',
    'nav.about': 'About',
    'nav.login': 'Login',
    'nav.signup': 'Sign Up',
    'nav.lessons': 'Lessons',

    // Lessons hub
    'lessons.sidebarHint': 'Pick a track in the sidebar — Arduino, ESP32, or Raspberry Pi — then choose a lesson.',
    'lessons.tutorialMenu': 'Tutorial menu',
    'lessons.homeTitle': 'Robotics Tutorials',
    'lessons.homeSubtitle': 'W3Schools-style learning paths',
    'lessons.homeIntro':
      'All courses live in one place. Expand a track on the left, open any lesson, and move through topics with Previous / Next at the bottom of each page.',
    'lessons.startArduino': 'Start with Arduino',
    'lessons.tracksHeading': 'Learning tracks',
    'lessons.lessonCount': 'lessons',
    'lessons.notFound': 'Lesson not found',
    'lessons.notFoundHint': 'This lesson is not in the tutorial menu yet.',
    'lessons.comingSoonTitle': 'Full lesson coming soon',
    'lessons.comingSoonBody':
      'This topic is listed in the curriculum. Arduino lessons are live now; ESP32 and Raspberry Pi content is being added.',
    'lessons.finishTrack': 'Back to tutorials',
    
    // Hero
    'hero.title': 'Master Arduino & Robotics',
    'hero.subtitle': 'From Absolute Beginner to Professional',
    'hero.description': 'Learn Arduino, Raspberry Pi, and Robotics step by step. Simple lessons. Easy code. Real projects.',
    'hero.cta': 'Start Learning Free',
    'hero.secondary': 'View Projects',
    
    // Paths
    'path.arduino.title': 'Arduino Path',
    'path.arduino.description': 'Start your journey with Arduino. Learn electronics, sensors, and build amazing projects.',
    'path.arduino.lessons': 'lessons',
    'path.arduino.projects': 'projects',
    'path.raspberrypi.title': 'Raspberry Pi & Robotics',
    'path.raspberrypi.description': 'Build intelligent robots with Raspberry Pi. Learn Python, AI, and advanced robotics.',
    'path.esp32.title': 'ESP32 Track',
    'path.esp32.description': 'Master WiFi and Bluetooth projects with ESP32. Build IoT and smart devices.',
    'path.start': 'Start Learning',
    
    // Features
    'features.title': 'Why Learn With Us?',
    'features.simple.title': 'Simple Language',
    'features.simple.description': 'Every lesson uses short, easy sentences. Even a 12-year-old can understand.',
    'features.visual.title': 'Visual Learning',
    'features.visual.description': 'Circuit diagrams, images, and step-by-step guides for every project.',
    'features.interactive.title': 'Try It Yourself',
    'features.interactive.description': 'Interactive code editor. Test your code right in the browser.',
    'features.progress.title': 'Track Progress',
    'features.progress.description': 'See how far you have come. Earn badges. Get certificates.',
    
    // Stats
    'stats.lessons': 'Lessons',
    'stats.projects': 'Projects',
    'stats.students': 'Students',
    'stats.certificates': 'Certificates Earned',
    'stats.sectionTitle': 'Growing with makers across Bangladesh',
    'stats.sectionLead':
      'Robotics Academy is built for learners who start from zero. Every lesson, project, and certificate on the platform is designed to be clear, practical, and free to access.',
    'stats.sectionBody':
      'Join students, hobbyists, and teachers who use our Arduino, ESP32, and Raspberry Pi tracks to build real circuits and robots — with Bangla and English support, step by step.',
    'stats.sectionHighlight': 'A RoboverseBD initiative for hands-on robotics education.',

    // Certificates promo
    'certificates.eyebrow': 'Certificates',
    'certificates.title': 'Kickstart your robotics career.',
    'certificates.description':
      'Get certified by completing a learning track. Document your Arduino, ESP32, and Raspberry Pi skills with a credential backed by RoboverseBD.',
    'certificates.ctaPrimary': 'Get certified',
    'certificates.ctaSecondary': 'See your progress',
    'certificates.sampleTitle': 'Certified Arduino Developer',
    'certificates.sampleIssuer': 'Issued by Robotics Academy · RoboverseBD',
    'certificates.verified': 'Verified credential you can share',
    'certificates.badgeYear': '2026',
    
    // Footer
    'footer.description': 'Your journey into robotics starts here. Learn Arduino, Raspberry Pi, and build real robots.',
    'footer.quicklinks': 'Quick Links',
    'footer.resources': 'Resources',
    'footer.connect': 'Connect',
    'footer.rights': 'All rights reserved.',
    
    // Lesson
    'lesson.whatlearn': 'What You Will Learn',
    'lesson.components': 'Required Components',
    'lesson.circuit': 'Circuit Diagram',
    'lesson.code': 'The Code',
    'lesson.explanation': 'Step-by-Step Explanation',
    'lesson.tryit': 'Try It Yourself',
    'lesson.mistakes': 'Common Mistakes & Solutions',
    'lesson.next': 'Next Lesson',
    'lesson.previous': 'Previous Lesson',
    'lesson.download': 'Download Code',
    
    // Dashboard
    'dashboard.welcome': 'Welcome back',
    'dashboard.progress': 'Your Progress',
    'dashboard.completed': 'Completed Lessons',
    'dashboard.continue': 'Continue Learning',
    'dashboard.recommended': 'Recommended Next',
    'dashboard.badges': 'Your Badges',
    'dashboard.certificates': 'Certificates',
    
    // Common
    'common.beginner': 'Beginner',
    'common.intermediate': 'Intermediate',
    'common.advanced': 'Advanced',
    'common.search': 'Search lessons, projects...',
    'common.loading': 'Loading...',
  },
  bn: {
    // Navigation
    'nav.home': 'হোম',
    'nav.arduino': 'আরডুইনো ট্র্যাক',
    'nav.raspberrypi': 'রাস্পবেরি পাই ও রোবোটিক্স',
    'nav.esp32': 'ইএসপি৩২ ট্র্যাক',
    'nav.projects': 'প্রজেক্ট',
    'nav.dashboard': 'ড্যাশবোর্ড',
    'nav.blog': 'ব্লগ / টিপস',
    'nav.about': 'সম্পর্কে',
    'nav.login': 'লগইন',
    'nav.signup': 'সাইন আপ',
    'nav.lessons': 'পাঠসমূহ',

    // Lessons hub
    'lessons.sidebarHint':
      'বাম দিকের মেনু থেকে ট্র্যাক বেছে নিন — আরডুইনো, ESP32 বা রাস্পবেরি পাই — তারপর পাঠ খুলুন।',
    'lessons.tutorialMenu': 'টিউটোরিয়াল মেনু',
    'lessons.homeTitle': 'রোবোটিক্স টিউটোরিয়াল',
    'lessons.homeSubtitle': 'ধাপে ধাপে শেখার পথ',
    'lessons.homeIntro':
      'সব কোর্স এক জায়গায়। বামে ট্র্যাক খুলুন, যেকোনো পাঠ বেছে নিন, এবং প্রতিটি পাতার নিচে পূর্ববর্তী / পরবর্তী দিয়ে এগিয়ে যান।',
    'lessons.startArduino': 'আরডুইনো দিয়ে শুরু করুন',
    'lessons.tracksHeading': 'শেখার ট্র্যাক',
    'lessons.lessonCount': 'টি পাঠ',
    'lessons.notFound': 'পাঠ পাওয়া যায়নি',
    'lessons.notFoundHint': 'এই পাঠটি এখনও টিউটোরিয়াল মেনুতে নেই।',
    'lessons.comingSoonTitle': 'সম্পূর্ণ পাঠ শীঘ্রই আসছে',
    'lessons.comingSoonBody':
      'এই বিষয়টি কারিকুলামে আছে। আরডুইনো পাঠগুলো প্রস্তুত; ESP32 ও রাস্পবেরি পাই কনটেন্ট যোগ করা হচ্ছে।',
    'lessons.finishTrack': 'টিউটোরিয়ালে ফিরে যান',
    
    // Hero
    'hero.title': 'আরডুইনো ও রোবোটিক্স শিখুন',
    'hero.subtitle': 'একদম নতুন থেকে প্রফেশনাল পর্যন্ত',
    'hero.description': 'ধাপে ধাপে আরডুইনো, রাস্পবেরি পাই এবং রোবোটিক্স শিখুন। সহজ পাঠ। সহজ কোড। আসল প্রজেক্ট।',
    'hero.cta': 'বিনামূল্যে শেখা শুরু করুন',
    'hero.secondary': 'প্রজেক্ট দেখুন',
    
    // Paths
    'path.arduino.title': 'আরডুইনো পাথ',
    'path.arduino.description': 'আরডুইনো দিয়ে আপনার যাত্রা শুরু করুন। ইলেকট্রনিক্স, সেন্সর শিখুন এবং অসাধারণ প্রজেক্ট তৈরি করুন।',
    'path.arduino.lessons': 'পাঠ',
    'path.arduino.projects': 'প্রজেক্ট',
    'path.raspberrypi.title': 'রাস্পবেরি পাই ও রোবোটিক্স',
    'path.raspberrypi.description': 'রাস্পবেরি পাই দিয়ে বুদ্ধিমান রোবট তৈরি করুন। পাইথন, এআই এবং উন্নত রোবোটিক্স শিখুন।',
    'path.esp32.title': 'ইএসপি৩২ ট্র্যাক',
    'path.esp32.description': 'ইএসপি৩২ দিয়ে ওয়াইফাই ও ব্লুটুথ প্রজেক্ট মাস্টার করুন। আইওটি ও স্মার্ট ডিভাইস তৈরি করুন।',
    'path.start': 'শেখা শুরু করুন',
    
    // Features
    'features.title': 'কেন আমাদের সাথে শিখবেন?',
    'features.simple.title': 'সহজ ভাষা',
    'features.simple.description': 'প্রতিটি পাঠ ছোট, সহজ বাক্যে লেখা। একটি ১২ বছরের বাচ্চাও বুঝতে পারবে।',
    'features.visual.title': 'ভিজ্যুয়াল লার্নিং',
    'features.visual.description': 'প্রতিটি প্রজেক্টের জন্য সার্কিট ডায়াগ্রাম, ছবি এবং ধাপে ধাপে গাইড।',
    'features.interactive.title': 'নিজে চেষ্টা করুন',
    'features.interactive.description': 'ইন্টারেক্টিভ কোড এডিটর। ব্রাউজারেই আপনার কোড টেস্ট করুন।',
    'features.progress.title': 'অগ্রগতি ট্র্যাক করুন',
    'features.progress.description': 'দেখুন আপনি কতদূর এসেছেন। ব্যাজ অর্জন করুন। সার্টিফিকেট পান।',
    
    // Stats
    'stats.lessons': 'পাঠ',
    'stats.projects': 'প্রজেক্ট',
    'stats.students': 'শিক্ষার্থী',
    'stats.certificates': 'সার্টিফিকেট অর্জিত',
    'stats.sectionTitle': 'বাংলাদেশ জুড়ে মেকারদের সাথে বেড়ে উঠছি',
    'stats.sectionLead':
      'Robotics Academy তৈরি এমন শিক্ষার্থীদের জন্য যারা একদম শূন্য থেকে শুরু করেন। প্ল্যাটফর্মের প্রতিটি পাঠ, প্রজেক্ট ও সার্টিফিকেট সহজ, ব্যবহারযোগ্য এবং বিনামূল্যে।',
    'stats.sectionBody':
      'আমাদের আরডুইনো, ESP32 ও রাস্পবেরি পাই ট্র্যাক দিয়ে শিক্ষার্থী, হবিবিস্ট ও শিক্ষকরা আসল সার্কিট ও রোবট বানাচ্ছেন — বাংলা ও ইংরেজিতে, ধাপে ধাপে।',
    'stats.sectionHighlight': 'হাতে-কলমে রোবোটিক্স শিক্ষার জন্য RoboverseBD-এর উদ্যোগ।',

    // Certificates promo
    'certificates.eyebrow': 'সার্টিফিকেট',
    'certificates.title': 'রোবোটিক্স ক্যারিয়ার শুরু করুন।',
    'certificates.description':
      'একটি লার্নিং ট্র্যাক সম্পন্ন করে সার্টিফিকেট নিন। আরডুইনো, ESP32 ও রাস্পবেরি পাই দক্ষতা RoboverseBD-এর সমর্থনে প্রমাণ করুন।',
    'certificates.ctaPrimary': 'সার্টিফিকেট নিন',
    'certificates.ctaSecondary': 'অগ্রগতি দেখুন',
    'certificates.sampleTitle': 'সার্টিফাইড আরডুইনো ডেভেলপার',
    'certificates.sampleIssuer': 'Robotics Academy · RoboverseBD কর্তৃক প্রদত্ত',
    'certificates.verified': 'শেয়ারযোগ্য যাচাইকৃত সনদ',
    'certificates.badgeYear': '২০২৬',
    
    // Footer
    'footer.description': 'রোবোটিক্সে আপনার যাত্রা এখান থেকেই শুরু। আরডুইনো, রাস্পবেরি পাই শিখুন এবং সত্যিকারের রোবট তৈরি করুন।',
    'footer.quicklinks': 'দ্রুত লিংক',
    'footer.resources': 'রিসোর্স',
    'footer.connect': 'যোগাযোগ',
    'footer.rights': 'সর্বস্বত্ব সংরক্ষিত।',
    
    // Lesson
    'lesson.whatlearn': 'আপনি যা শিখবেন',
    'lesson.components': 'প্রয়োজনীয় উপাদান',
    'lesson.circuit': 'সার্কিট ডায়াগ্রাম',
    'lesson.code': 'কোড',
    'lesson.explanation': 'ধাপে ধাপে ব্যাখ্যা',
    'lesson.tryit': 'নিজে চেষ্টা করুন',
    'lesson.mistakes': 'সাধারণ ভুল ও সমাধান',
    'lesson.next': 'পরবর্তী পাঠ',
    'lesson.previous': 'পূর্ববর্তী পাঠ',
    'lesson.download': 'কোড ডাউনলোড করুন',
    
    // Dashboard
    'dashboard.welcome': 'স্বাগতম',
    'dashboard.progress': 'আপনার অগ্রগতি',
    'dashboard.completed': 'সম্পন্ন পাঠ',
    'dashboard.continue': 'শেখা চালিয়ে যান',
    'dashboard.recommended': 'পরবর্তী সুপারিশ',
    'dashboard.badges': 'আপনার ব্যাজ',
    'dashboard.certificates': 'সার্টিফিকেট',
    
    // Common
    'common.beginner': 'শুরুর স্তর',
    'common.intermediate': 'মধ্যম স্তর',
    'common.advanced': 'উন্নত স্তর',
    'common.search': 'পাঠ, প্রজেক্ট খুঁজুন...',
    'common.loading': 'লোড হচ্ছে...',
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language
    if (saved && (saved === 'en' || saved === 'bn')) {
      setLanguageState(saved)
    }
  }, [])

  useEffect(() => {
    const root = document.documentElement
    root.lang = language === 'bn' ? 'bn' : 'en'
    root.classList.toggle('lang-bn', language === 'bn')
  }, [language])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

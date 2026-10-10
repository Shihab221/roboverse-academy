"use client"

import React, { useState } from 'react'
import { LessonsSidebar, LessonsMobileMenuButton } from '@/components/LessonsSidebar'

export default function LessonsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    // Single document scroll: the sidebar sticks independently while the
    // lesson content scrolls with the window. (Previously this was a fixed
    // h-[calc(100vh-4rem)] + overflow-hidden inner scroller, which created
    // double scrollbars, broke scroll restoration, and broke
    // framer-motion whileInView inside lesson pages.)
    <div className="flex w-full flex-1 items-start">
      <LessonsSidebar
        mobileOpen={mobileOpen}
        onMobileClose={() => setMobileOpen(false)}
      />
      <div className="flex-1 min-w-0">
        {children}
      </div>
      <LessonsMobileMenuButton onClick={() => setMobileOpen(true)} />
    </div>
  )
}

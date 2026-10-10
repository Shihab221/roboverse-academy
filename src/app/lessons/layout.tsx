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
    //
    // -mt-16 cancels the root <main>'s pt-16 (meant for regular pages) so the
    // sidebar/content attach flush under the sticky navbar — otherwise a
    // 64px void sits between the navbar and the lessons shell, and the page
    // can be scrolled up into that empty gap.
    <div className="flex w-full flex-1 items-start -mt-16">
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

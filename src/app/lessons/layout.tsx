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
    <div className="flex w-full flex-1 min-h-0 h-[calc(100vh-4rem)] max-h-[calc(100vh-4rem)] overflow-hidden">
      <LessonsSidebar
        mobileOpen={mobileOpen}
        onMobileClose={() => setMobileOpen(false)}
      />
      <div className="flex-1 min-w-0 min-h-0 h-full overflow-y-auto overflow-x-hidden bg-gray-900/40 robotics-scrollbar">
        {children}
      </div>
      <LessonsMobileMenuButton onClick={() => setMobileOpen(true)} />
    </div>
  )
}

"use client"

import React, { useMemo } from 'react'
import { Cpu } from 'lucide-react'
import type { PinConnection } from '@/data/project-types'
import { cn } from '@/lib/utils'

function wireColor(pin: string): string {
  const p = pin.toUpperCase()
  if (p.includes('GND')) return 'bg-slate-500'
  if (/(5V|3V3|VCC|VIN|VDD)/.test(p)) return 'bg-red-400'
  return 'bg-cyan-400'
}

function chipBorder(pin: string): string {
  const p = pin.toUpperCase()
  if (p.includes('GND')) return 'border-slate-500/50 text-slate-300'
  if (/(5V|3V3|VCC|VIN|VDD)/.test(p)) return 'border-red-400/50 text-red-300'
  return 'border-cyan-500/40 text-cyan-700 dark:text-cyan-300'
}

export function WiringDiagram({
  boardLabel,
  pins,
}: {
  boardLabel: string
  pins: PinConnection[]
}) {
  const groups = useMemo(() => {
    const map = new Map<string, PinConnection[]>()
    for (const pin of pins) {
      const list = map.get(pin.part) ?? []
      list.push(pin)
      map.set(pin.part, list)
    }
    return [...map.entries()]
  }, [pins])

  return (
    <div className="rounded-2xl border border-slate-700/50 bg-slate-900/80 overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-700/50 bg-slate-800/40">
        <div
          className="w-9 h-9 bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400"
          style={{ clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)' }}
        >
          <Cpu className="w-5 h-5" />
        </div>
        <div>
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-slate-500">
            // wiring_map
          </p>
          <p className="font-semibold text-white">{boardLabel} ↔ modules</p>
        </div>
        <div className="ml-auto hidden sm:flex items-center gap-4 font-mono text-[11px] text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400" /> power
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-500" /> gnd
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" /> signal
          </span>
        </div>
      </div>

      <div className="p-5 space-y-6">
        {groups.map(([part, rows]) => (
          <div key={part}>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-cyan-500/80 mb-3">
              ▸ {part}
            </p>
            <div className="space-y-2">
              {rows.map((row, i) => (
                <div
                  key={`${row.from}-${row.to}-${i}`}
                  className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-3"
                >
                  <div className="flex justify-end">
                    <span
                      className={cn(
                        'font-mono text-xs sm:text-sm px-3 py-1.5 rounded-lg border bg-slate-800/80 whitespace-nowrap',
                        chipBorder(row.from)
                      )}
                    >
                      {row.from}
                    </span>
                  </div>
                  <div className="relative w-10 sm:w-20 h-[2px]">
                    <div className={cn('absolute inset-0 rounded', wireColor(row.from))} />
                    <span className={cn('absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full', wireColor(row.from))} />
                    <span className={cn('absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full', wireColor(row.to))} />
                  </div>
                  <div className="flex justify-start">
                    <span
                      className={cn(
                        'font-mono text-xs sm:text-sm px-3 py-1.5 rounded-lg border bg-slate-800/80 whitespace-nowrap',
                        chipBorder(row.to)
                      )}
                    >
                      {row.to}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="px-5 py-3 border-t border-slate-700/50 bg-slate-800/40">
        <p className="font-mono text-[11px] text-slate-500">
          {boardLabel} on the left — connect each pin to the matching module pin on the right.
        </p>
      </div>
    </div>
  )
}

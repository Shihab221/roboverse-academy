"use client"

import React, { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Button } from '@/components/ui/button'
import { Copy, Check, Play, Download, RotateCcw } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CodeEditorProps {
  code: string
  language?: string
  title?: string
  editable?: boolean
  showLineNumbers?: boolean
  explanation?: Array<{ line: number; text: string }>
}

export function CodeEditor({
  code,
  language = 'cpp',
  title,
  editable = false,
  showLineNumbers = true,
  explanation
}: CodeEditorProps) {
  const [editableCode, setEditableCode] = useState(code)
  const [copied, setCopied] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(editable ? editableCode : code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownload = () => {
    const blob = new Blob([editable ? editableCode : code], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${title || 'code'}.${language === 'cpp' ? 'ino' : language}`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleReset = () => {
    setEditableCode(code)
  }

  const customStyle = {
    ...atomDark,
    'pre[class*="language-"]': {
      ...atomDark['pre[class*="language-"]'],
      background: 'transparent',
      margin: 0,
      padding: '1.5rem',
      fontSize: '0.875rem',
      lineHeight: '1.7',
    },
    'code[class*="language-"]': {
      ...atomDark['code[class*="language-"]'],
      background: 'transparent',
    }
  }

  return (
    <div className="relative rounded-2xl border border-slate-700/50 bg-slate-900/80 backdrop-blur-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-700/50 bg-slate-800/50">
        <div className="flex items-center gap-3">
          {/* Window controls */}
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          {title && (
            <span className="text-sm text-slate-400 font-mono">{title}</span>
          )}
        </div>
        
        {/* Actions */}
        <div className="flex items-center gap-1">
          {editable && (
            <>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleReset}
                className="h-8 px-2 text-slate-400 hover:text-cyan-400"
              >
                <RotateCcw className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 px-3 text-slate-400 hover:text-cyan-400 gap-1"
              >
                <Play className="w-4 h-4" />
                <span className="text-xs">Run</span>
              </Button>
            </>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={handleDownload}
            className="h-8 px-2 text-slate-400 hover:text-cyan-400"
          >
            <Download className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            className="h-8 px-2 text-slate-400 hover:text-cyan-400"
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </Button>
        </div>
      </div>

      {/* Code */}
      <div className="relative overflow-auto max-h-[600px]">
        {editable && isEditing ? (
          <textarea
            value={editableCode}
            onChange={(e) => setEditableCode(e.target.value)}
            onBlur={() => setIsEditing(false)}
            className="w-full h-full min-h-[300px] p-4 bg-transparent text-slate-100 font-mono text-sm resize-none focus:outline-none"
            spellCheck={false}
          />
        ) : (
          <div 
            onClick={() => editable && setIsEditing(true)}
            className={cn(editable && "cursor-text")}
          >
            <SyntaxHighlighter
              language={language}
              style={customStyle}
              showLineNumbers={showLineNumbers}
              wrapLines={true}
              lineNumberStyle={{
                minWidth: '2.5em',
                paddingRight: '1em',
                color: '#475569',
                textAlign: 'right',
              }}
            >
              {editable ? editableCode : code}
            </SyntaxHighlighter>
          </div>
        )}
      </div>

      {/* Line explanations */}
      {explanation && explanation.length > 0 && (
        <div className="border-t border-slate-700/50 p-4 space-y-2">
          <h4 className="text-sm font-semibold text-slate-300 mb-3">Line-by-Line Explanation:</h4>
          {explanation.map((item, index) => (
            <div key={index} className="flex gap-3 text-sm">
              <span className="text-cyan-400 font-mono min-w-[3rem]">Line {item.line}:</span>
              <span className="text-slate-400">{item.text}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

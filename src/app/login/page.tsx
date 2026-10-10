"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { GlassCard } from '@/components/ui/card'
import { TechInput, TechButton, ScanLine, CircuitCorner } from '@/components/ui/robotics-ui'
import {
  Bot,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Fingerprint,
} from 'lucide-react'

export default function LoginPage() {
  const { t } = useLanguage()
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login:', { email, password })
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px]" />
      {/* faint grid */}
      <div
        className="absolute inset-0 opacity-[0.15] dark:opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(68,214,45,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(68,214,45,0.15) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 75%)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        <GlassCard className="p-8 relative overflow-hidden">
          <ScanLine />
          <CircuitCorner position="tl" className="absolute top-2 left-2 w-8 h-8 opacity-70" />
          <CircuitCorner position="br" className="absolute bottom-2 right-2 w-8 h-8 opacity-70" />

          {/* status header */}
          <div className="flex items-center justify-between mb-6 font-mono text-[11px] tracking-[0.25em] uppercase text-slate-500">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-cyan-400 animate-circuit-pulse" />
              // secure_login
            </span>
            <span className="text-cyan-600 dark:text-cyan-500/70">v2.0</span>
          </div>

          {/* Logo */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
              <div
                className="w-12 h-12 bg-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/25 transition-shadow group-hover:shadow-[0_0_25px_rgba(68,214,45,0.5)]"
                style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}
              >
                <Bot className="w-6 h-6 text-black" />
              </div>
              <span className="text-2xl font-bold text-green-700 dark:text-cyan-400">
                Robotics Academy
              </span>
            </Link>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Welcome Back!</h1>
            <p className="text-slate-500 dark:text-slate-400">Sign in to continue your learning journey</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <TechInput
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              icon={<Mail className="w-5 h-5" />}
              required
            />

            <TechInput
              label="Password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              icon={<Lock className="w-5 h-5" />}
              required
              rightSlot={
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className="p-1.5 text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              }
            />

            <div className="flex items-center justify-between">
              <label className="group/check flex items-center gap-2.5 cursor-pointer">
                <span className="relative inline-flex">
                  <input type="checkbox" className="peer sr-only" />
                  <span
                    className="block w-5 h-5 border border-slate-400 dark:border-white/20 bg-transparent transition-all peer-checked:bg-cyan-400 peer-checked:border-cyan-400 peer-checked:shadow-[0_0_12px_rgba(68,214,45,0.5)] peer-focus-visible:outline-2 peer-focus-visible:outline-cyan-500"
                    style={{ clipPath: 'polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)' }}
                  />
                  <svg viewBox="0 0 12 12" className="absolute inset-0 m-auto w-3 h-3 text-black opacity-0 peer-checked:opacity-100 pointer-events-none">
                    <path d="M2 6.5 5 9l5-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="square" />
                  </svg>
                </span>
                <span className="text-sm text-slate-500 dark:text-slate-400 group-hover/check:text-slate-700 dark:group-hover/check:text-slate-200 transition-colors">Remember me</span>
              </label>
              <Link href="/forgot-password" className="text-sm font-mono tracking-wide text-green-700 dark:text-cyan-400 hover:text-green-600 dark:hover:text-cyan-300 transition-colors">
                // forgot_password?
              </Link>
            </div>

            <TechButton type="submit" fullWidth>
              Sign In
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </TechButton>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-white/15 to-slate-300 dark:to-white/15" />
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-slate-500">or continue with</span>
            <div className="flex-1 h-px bg-gradient-to-r from-slate-300 dark:from-white/15 via-slate-300 dark:via-white/15 to-transparent" />
          </div>

          {/* Social Login */}
          <TechButton variant="outline" fullWidth type="button">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </TechButton>

          {/* Biometric hint */}
          <p className="mt-4 flex items-center justify-center gap-2 font-mono text-[11px] tracking-widest uppercase text-slate-500">
            <Fingerprint className="w-4 h-4 text-cyan-600 dark:text-cyan-500/60" />
            encrypted // end-to-end
          </p>

          {/* Sign up link */}
          <p className="text-center text-slate-500 dark:text-slate-400 mt-4">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="text-green-700 dark:text-cyan-400 hover:text-green-600 dark:hover:text-cyan-300 font-medium transition-colors">
              Sign up free
            </Link>
          </p>
        </GlassCard>
      </motion.div>
    </div>
  )
}

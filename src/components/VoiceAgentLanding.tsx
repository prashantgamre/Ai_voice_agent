'use client';

import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { motion, AnimatePresence } from 'motion/react';
import {
  Mic,
  Radio,
  Activity,
  Sun,
  Moon,
  Layers,
  Shield,
  ArrowRight,
  RefreshCw,
  Cpu,
  Database,
  Link as LinkIcon,
  Users,
  Phone,
  BarChart,
  FileText,
  TrendingUp,
  CheckCircle,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';

export type VoiceAgentLandingProps = {
  onStart: () => void;
  isConnecting?: boolean;
  error?: string | null;
  sessionId?: string | null;
};

const AnimatedGrid = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]" />
    <motion.div
      className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    />
  </div>
);

const FloatingParticles = () => {
  // Avoid SSR hydration mismatch by rendering particles only after mount
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const particles = Array.from({ length: 18 });

  if (!mounted) {
    // Render an empty layer during SSR/first client render
    return <div className="absolute inset-0 overflow-hidden pointer-events-none" />;
  }

  const w = window.innerWidth;
  const h = window.innerHeight;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-500/30 dark:bg-cyan-400/30 rounded-full"
          initial={{ x: Math.random() * w, y: Math.random() * h }}
          animate={{ y: [null as any, Math.random() * h], x: [null as any, Math.random() * w] }}
          transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, ease: 'linear' }}
        />
      ))}
    </div>
  );
};

const AudioWaveform = ({ isActive }: { isActive: boolean }) => {
  const bars = Array.from({ length: 36 });
  return (
    <div className="flex items-center justify-center gap-1 h-24">
      {bars.map((_, i) => (
        <motion.div
          key={i}
          className="w-1 bg-gradient-to-t from-cyan-500 via-blue-500 to-purple-500 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400 rounded-full"
          animate={isActive ? { height: [Math.random() * 60 + 10, Math.random() * 60 + 10, Math.random() * 60 + 10] } : { height: 4 }}
          transition={{ duration: Math.random() * 0.5 + 0.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
};

const GlowingOrb = ({ isActive }: { isActive: boolean }) => (
  <div className="relative w-48 h-48 flex items-center justify-center">
    <motion.div
      className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 dark:from-cyan-400/30 dark:via-blue-400/30 dark:to-purple-400/30 blur-2xl"
      animate={isActive ? { scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] } : { scale: 1, opacity: 0.3 }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute w-32 h-32 rounded-full border-2 border-cyan-500/30 dark:border-cyan-400/40"
      animate={{ rotate: 360 }}
      transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
    >
      <div className="absolute top-0 left-1/2 w-3 h-3 bg-cyan-500 dark:bg-cyan-400 rounded-full -translate-x-1/2 shadow-lg shadow-cyan-500/50" />
    </motion.div>
    <motion.div
      className="relative w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 dark:from-cyan-300 dark:via-blue-400 dark:to-purple-500 flex items-center justify-center shadow-2xl"
      animate={isActive ? { scale: [1, 1.1, 1], boxShadow: ['0 0 20px rgba(6, 182, 212, 0.5)','0 0 40px rgba(6, 182, 212, 0.8)','0 0 20px rgba(6, 182, 212, 0.5)'] } : {}}
      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <Mic className="w-10 h-10 text-white drop-shadow-lg" />
    </motion.div>
    <AnimatePresence>
      {isActive && (
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-cyan-400 dark:border-cyan-300"
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          exit={{ scale: 1, opacity: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
        />
      )}
    </AnimatePresence>
  </div>
);

export function VoiceAgentLanding({ onStart, isConnecting, error, sessionId }: VoiceAgentLandingProps) {
  const [isListening, setIsListening] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    const prefersDark = typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)').matches : false;
    const shouldUseDarkMode = savedTheme === 'dark' || (!savedTheme && prefersDark);
    setIsDarkMode(shouldUseDarkMode);
    updateTheme(shouldUseDarkMode);
  }, []);

  const updateTheme = (dark: boolean) => {
    if (typeof document === 'undefined') return;
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    updateTheme(newDarkMode);
  };

  const handleStart = () => {
    setIsListening(true);
    onStart();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950 transition-colors duration-500 relative overflow-hidden">
      <AnimatedGrid />
      <FloatingParticles />

      <div className="fixed top-6 right-6 z-50">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Button onClick={toggleTheme} variant="outline" size="icon" className="bg-background/60 backdrop-blur-xl border-border/50 hover:bg-accent shadow-lg hover:shadow-cyan-500/20 dark:hover:shadow-cyan-400/20 transition-all">
            <motion.div initial={false} animate={{ rotate: isDarkMode ? 180 : 0 }} transition={{ duration: 0.3 }}>
              {isDarkMode ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5 text-indigo-600" />}
            </motion.div>
          </Button>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className="inline-block mb-6">
            <div className="px-6 py-2 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 dark:from-cyan-400/20 dark:via-blue-400/20 dark:to-purple-400/20 border border-cyan-500/20 dark:border-cyan-400/30 rounded-full backdrop-blur-sm">
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent font-semibold">⚡ Next-Gen Voice Technology</span>
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-7xl mb-6 tracking-tight">
            <motion.span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent inline-block" animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }} transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}>
              VAUCH AI
            </motion.span>
          </h1>

          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-xl md:text-3xl text-muted-foreground mb-12">
            Your Intelligent <span className="text-cyan-600 dark:text-cyan-400 font-semibold">Voice Agent</span> for the Future
          </motion.h2>

          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6, duration: 0.8, type: 'spring' }} className="flex justify-center mb-12">
            <GlowingOrb isActive={isListening || !!isConnecting} />
          </motion.div>

          <AnimatePresence>
            {(isListening || !!isConnecting) && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="mb-8">
                <AudioWaveform isActive={true} />
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button onClick={handleStart} className={`relative px-10 py-6 text-lg rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden group ${isListening ? 'bg-gradient-to-r from-red-500 via-pink-500 to-rose-500 hover:from-red-600 hover:via-pink-600 hover:to-rose-600' : 'bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-600 hover:via-blue-700 hover:to-purple-700'}`} disabled={!!isConnecting}>
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <span className="relative flex items-center gap-3">
                  {isListening || isConnecting ? <Radio className="w-6 h-6 animate-pulse" /> : <Mic className="w-6 h-6" />}
                  {isConnecting ? 'Connecting…' : isListening ? 'End Voice Session' : 'Start Voice Session'}
                </span>
              </Button>
            </motion.div>

            {sessionId && (
              <div className="mt-4 text-xs text-muted-foreground">Session ID: <span className="font-mono">{sessionId}</span></div>
            )}

            {error && (
              <div className="mt-2 text-sm text-red-600" role="alert">{error}</div>
            )}

            <motion.p className="text-sm text-muted-foreground mt-4 flex items-center justify-center gap-2" animate={isListening ? { opacity: [1, 0.5, 1] } : {}} transition={{ duration: 2, repeat: Infinity }}>
              {isListening ? (<><Activity className="w-4 h-4 text-cyan-500 dark:text-cyan-400" /><span className="text-cyan-600 dark:text-cyan-400">Listening... Speak now</span></>) : 'Click to activate AI voice assistant'}
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Main Feature Card */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }} className="max-w-5xl mx-auto mb-16">
          <Card className="relative overflow-hidden shadow-2xl border border-cyan-500/20 dark:border-cyan-400/30 bg-gradient-to-br from-background/80 via-background/60 to-background/80 backdrop-blur-xl">
            <motion.div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0 dark:from-cyan-400/0 dark:via-cyan-400/30 dark:to-cyan-400/0" animate={{ x: ['-100%','100%'] }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} />
            <div className="relative p-8 md:p-12">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 dark:from-cyan-400/20 dark:to-blue-400/20 rounded-full mb-6 border border-cyan-500/20 dark:border-cyan-400/30">
                  <Layers className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span className="text-sm text-cyan-600 dark:text-cyan-400 font-semibold">Enterprise Features</span>
                </div>
                <h3 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">AI Voice Agent for Smarter Customer Calls</h3>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">Automate customer calls, provide instant answers, and integrate seamlessly with Zoho CRM & Zoho Commerce. Available 24/7 to boost efficiency and improve customer satisfaction.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[{icon: Users, title: 'CRM Integration', desc: 'Seamless Zoho sync'},{icon: Phone, title: 'Smart Routing', desc: 'Intelligent call distribution'},{icon: Activity, title: 'Live Analytics', desc: 'Real-time insights'}].map((item, i) => (
                  <motion.div key={i} className="relative p-6 bg-gradient-to-br from-accent/50 to-background/50 rounded-xl border border-border/50 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 transition-all duration-300 group" whileHover={{ scale: 1.05 }}>
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-background to-accent rounded-xl flex items-center justify-center mb-3 border border-border/50">
                        <item.icon className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                      </div>
                      <h4 className="mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="text-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/privacy-policy">
                    <Button variant="outline" className="bg-background/60 backdrop-blur-sm border-cyan-500/30 dark:border-cyan-400/40 text-foreground hover:bg-accent hover:border-cyan-500/50 dark:hover:border-cyan-400/60 px-8 py-2 shadow-lg hover:shadow-cyan-500/20 dark:hover:shadow-cyan-400/20 transition-all">
                      <Shield className="w-4 h-4 mr-2 text-cyan-600 dark:text-cyan-400" />
                      View Privacy Policy
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="text-center mt-12">
          <Card className="relative overflow-hidden bg-gradient-to-br from-emerald-500/10 via-green-500/5 to-teal-500/10 dark:from-emerald-400/20 dark:via-green-400/10 dark:to-teal-400/20 backdrop-blur-xl border border-emerald-500/30 dark:border-emerald-400/40 p-8">
            <div className="relative">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Cpu className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                <h4 className="text-xl bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent">Ready to Connect Your Zoho CRM?</h4>
              </div>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">Set up your integration in minutes and start leveraging AI-powered voice assistance with full CRM synchronization.</p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 hover:from-emerald-600 hover:via-green-600 hover:to-teal-600 text-white px-8 py-3 shadow-lg hover:shadow-emerald-500/30 transition-all">
                  <LinkIcon className="w-5 h-5 mr-2" />
                  Connect Zoho CRM
                </Button>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

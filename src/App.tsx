/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  MapPin, 
  Sparkle, 
  Quote, 
  ChevronRight, 
  Star,
  ChevronLeft,
  Sparkles
} from 'lucide-react';
import { IconHilalStar, IconMosque } from './components/IslamicIcons';
import { IslamicIconsModal } from './components/IslamicIconsModal';
import { ISLAMIC_DATA } from './data';
import Header from './components/Header';
import AyahCard from './components/AyahCard';
import PrayerTimeCard from './components/PrayerTimeCard';
import TasbihCounter from './components/TasbihCounter';
import QiblaCompass from './components/QiblaCompass';
import DuasSection from './components/DuasSection';
import { getActiveAndNextPrayer } from './utils/time';
import { audio } from './utils/audio';

export default function App() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [activeWisdomIndex, setActiveWisdomIndex] = useState(0);
  const [isIconsModalOpen, setIsIconsModalOpen] = useState(false);

  // Synchronize dynamic dates
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const currentTimeStr = currentDate.toTimeString().slice(0, 5);
  const { active: activePrayer } = getActiveAndNextPrayer(
    currentTimeStr,
    ISLAMIC_DATA.prayerTimes
  );

  const prevWisdom = () => {
    audio.playBeadClick();
    setActiveWisdomIndex((prev) => 
      prev === 0 ? ISLAMIC_DATA.wisdoms.length - 1 : prev - 1
    );
  };

  const nextWisdom = () => {
    audio.playBeadClick();
    setActiveWisdomIndex((prev) => 
      (prev + 1) % ISLAMIC_DATA.wisdoms.length
    );
  };

  const currentWisdom = ISLAMIC_DATA.wisdoms[activeWisdomIndex];

  return (
    <div className="min-h-screen bg-[#021f1a] text-[#f5f5f0] bg-islamic-pattern transition-colors duration-500 pb-12" id="prayer-companion-app">
      {/* Decorative Top Accent Bar */}
      <div className="h-2 w-full bg-gradient-to-r from-[#021f1a] via-[#d97706] to-[#064e3b]"></div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Core Live Date, Countdown & Clock Header Section */}
        <Header 
          currentDate={currentDate} 
          activePrayerKey={activePrayer.key} 
          onOpenIconsModal={() => setIsIconsModalOpen(true)}
        />

        {/* Holy Verse of the Day Card */}
        <AyahCard />

        {/* Main Content Layout - Desktop 3:2 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SECTION (Col Span 7): Daily Prayer Times Grid */}
          <section className="lg:col-span-7 space-y-6 w-full flex flex-col" id="prayers-list-section">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 select-none px-1">
              <div className="flex items-center gap-2.5 text-[#f5f5f0]">
                <div className="p-2 border border-white/10 rounded-xl bg-white/5 shadow-sm text-[#d97706]">
                  <IconHilalStar size={20} strokeWidth={1.75} />
                </div>
                <div>
                  <h2 className="font-serif text-xl font-semibold tracking-tight text-[#f5f5f0]">Bugungi Namoz Vaqtlari</h2>
                  <p className="text-xs text-white/40 mt-0.5">O'zbekiston / Toshkent vaqti bo'yicha</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsIconsModalOpen(true)}
                  className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#d97706] hover:text-amber-400 bg-[#d97706]/10 hover:bg-[#d97706]/20 px-2.5 py-1 rounded-lg border border-[#d97706]/25 transition-colors cursor-pointer"
                  title="Islomiy SVG Iconlar to'plamini ko'rish"
                >
                  <IconMosque size={13} strokeWidth={2} />
                  <span>Iconlar Kutubxonasi</span>
                </button>
                <div className="flex items-center gap-1 text-[10px] uppercase font-bold text-white/40 tracking-wider">
                  <MapPin className="w-3.5 h-3.5 text-[#d97706]" />
                  <span>O'zbekiston</span>
                </div>
              </div>
            </div>

            {/* List of Prayer Times Cards */}
            <div className="space-y-4">
              {ISLAMIC_DATA.prayerTimes.map((prayer) => (
                <PrayerTimeCard 
                  key={prayer.id} 
                  prayer={prayer} 
                  currentDate={currentDate} 
                />
              ))}
            </div>
          </section>

          {/* RIGHT SECTION (Col Span 5): Interactive Worship Companion Utilities */}
          <aside className="lg:col-span-5 space-y-8 w-full" id="companions-sidebar">
            
            {/* Interactive Digital Tasbih */}
            <TasbihCounter />

            {/* Interactive Qiblah Finder Compass */}
            <QiblaCompass />

            {/* Supplications and Duas Drawer Tab List */}
            <DuasSection />

          </aside>
        </div>

        {/* FOOTER SECTION: Rotating Hadiths, Virtues sliding banner */}
        <footer className="w-full relative rounded-3xl bg-emerald-950 text-white p-6 md:p-8 overflow-hidden shadow-lg border border-emerald-800/25 mt-12 mb-4" id="wisdom-hadith-footer">
          <div className="absolute inset-0 opacity-[0.02] bg-islamic-pattern pointer-events-none"></div>
          
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 z-10">
            <div className="flex items-center gap-4 max-w-3xl flex-1">
              <div className="p-3 bg-amber-500/15 rounded-2xl border border-amber-500/20 text-amber-400 self-start hidden sm:block">
                <Quote className="w-6 h-6 transform rotate-180" />
              </div>
              
              <div className="space-y-2 text-center sm:text-left">
                <span className="text-[10px] bg-amber-400/20 text-amber-300 font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full border border-amber-400/30">
                  Kun xikmati • Hadisi sharif
                </span>
                
                {/* Wisdom Content */}
                <p className="font-serif text-base md:text-lg italic text-slate-100 leading-relaxed font-light">
                  «{currentWisdom.text}»
                </p>
                <p className="text-xs text-amber-300 font-sans font-medium tracking-wide">
                  &mdash; {currentWisdom.source}
                </p>
              </div>
            </div>

            {/* Slider back/forward handlers */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevWisdom}
                className="p-2 rounded-xl bg-emerald-900/60 hover:bg-emerald-800/80 hover:text-white transition-colors border border-emerald-800/40 text-emerald-200 cursor-pointer"
                title="Avvalgi hikmat"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextWisdom}
                className="p-2 rounded-xl bg-emerald-900/60 hover:bg-emerald-800/80 hover:text-white transition-colors border border-emerald-800/40 text-emerald-200 cursor-pointer"
                title="Keyingi hikmat"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Sincere branding credits */}
          <div className="mt-6 pt-4 border-t border-emerald-900/60 text-center select-none">
            <p className="text-[10px] text-slate-400 flex items-center justify-center gap-1">
              <span>Duolaringizda bizni ham eslang</span>
              <Heart className="w-3 h-3 text-red-500 fill-current animate-pulse" />
              <span>• Hijriy 1447 yil</span>
            </p>
          </div>
        </footer>

      </main>

      {/* Bespoke Islamic-Themed SVG Icons Showcase & Exporter Modal */}
      <IslamicIconsModal
        isOpen={isIconsModalOpen}
        onClose={() => setIsIconsModalOpen(false)}
      />
    </div>
  );
}

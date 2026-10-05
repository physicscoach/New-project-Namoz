/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Volume2, VolumeX, FlameKindling, Info, Sparkles } from 'lucide-react';
import { IconMosque, IconHilalStar } from './IslamicIcons';
import { ISLAMIC_DATA } from '../data';
import { getActiveAndNextPrayer, calculateCountdown, TimeRemaining } from '../utils/time';
import { audio } from '../utils/audio';

interface HeaderProps {
  currentDate: Date;
  activePrayerKey: string;
  onOpenIconsModal?: () => void;
}

export default function Header({ currentDate, activePrayerKey, onOpenIconsModal }: HeaderProps) {
  const [time, setTime] = useState<string>('');
  const [sec, setSec] = useState<string>('');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [countdown, setCountdown] = useState<TimeRemaining>({ hours: 0, minutes: 0, seconds: 0, totalSeconds: 0 });

  const { active, next } = getActiveAndNextPrayer(
    currentDate.toTimeString().slice(0, 5),
    ISLAMIC_DATA.prayerTimes
  );

  useEffect(() => {
    setSoundEnabled(audio.getSoundState());
    
    // Set initial clock
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('uz-UZ', { hour: '2-digit', minute: '2-digit', hour12: false }));
      setSec(now.toLocaleTimeString('uz-UZ', { second: '2-digit' }));
      
      const cd = calculateCountdown(now, next.time);
      setCountdown(cd);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [next.time]);

  const handleToggleSound = () => {
    const newState = audio.toggleSound();
    setSoundEnabled(newState);
    if (newState) {
      audio.playBeadClick();
    }
  };

  const handleTestChime = () => {
    audio.playPeacefulCall();
  };

  return (
    <div className="w-full relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#064e3b]/20 text-white p-6 md:p-8" id="namoz-header">
      {/* Decorative Golden Arch Silhouette in the Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-islamic-pattern"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#064e3b] rounded-full blur-3xl pointer-events-none opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#d97706] rounded-full blur-3xl pointer-events-none opacity-10"></div>
      
      <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6 z-10 w-full">
        {/* Date and Branding Section */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 text-xs font-semibold bg-[#d97706]/20 text-[#d97706] rounded-full border border-[#d97706]/30 tracking-wide uppercase flex items-center gap-1.5">
              <IconHilalStar size={14} strokeWidth={1.75} />
              <span>{ISLAMIC_DATA.dates.dayOfWeek} • JUMA KUNI</span>
            </span>
            <button 
              onClick={handleToggleSound}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-[#d97706] hover:text-amber-500 transition-colors border border-white/10 cursor-pointer"
              title={soundEnabled ? "Tovushlarni o'chirish" : "Tovushlarni yoqish"}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
            <button 
              onClick={handleTestChime}
              className="hidden sm:inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg bg-[#064e3b]/30 hover:bg-[#064e3b]/50 text-[#d97706] transition-colors border border-[#d97706]/20 cursor-pointer"
              title="Azon ohangini sinash"
            >
              <span className="w-1.5 h-1.5 bg-[#d97706] rounded-full animate-ping"></span>
              Sinalgan Ohang
            </button>
            {onOpenIconsModal && (
              <button
                onClick={onOpenIconsModal}
                className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-[#d97706] hover:bg-amber-500 text-[#021f1a] font-bold transition-all shadow-md active:scale-95 cursor-pointer ml-auto sm:ml-0"
                title="Islomiy SVG Iconlar To'plamini ko'rish va yuklab olish"
              >
                <IconMosque size={14} strokeWidth={2} />
                <span>Islomiy Iconlar (SVG)</span>
              </button>
            )}
          </div>
          
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-[#d97706]/15 border border-[#d97706]/30 text-[#d97706] hidden sm:flex items-center justify-center">
              <IconMosque size={28} strokeWidth={1.75} />
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-semibold text-white tracking-tight">
              Namoz Vaqtlari <span className="text-[#d97706] font-sans font-light text-2xl">| 1447</span>
            </h1>
          </div>
          
          {/* Hijri & Gregorian Calendars */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-white/75 text-sm mt-1">
            <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10">
              <Calendar className="w-4 h-4 text-[#d97706]" />
              <span>{ISLAMIC_DATA.dates.hijri}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10">
              <Clock className="w-4 h-4 text-[#d97706]" />
              <span>{ISLAMIC_DATA.dates.gregorian}</span>
            </div>
          </div>
        </div>

        {/* Live Clock Display */}
        <div className="flex items-baseline md:flex-col lg:flex-row md:items-end gap-2 bg-white/5 p-4 rounded-2xl border border-white/10 min-w-[200px] justify-center text-center">
          <div>
            <div className="text-xs text-[#d97706] font-bold tracking-widest uppercase mb-1">Hozirgi Vaqt</div>
            <div className="flex items-baseline justify-center">
              <span className="font-mono text-4xl md:text-5xl font-bold tracking-tight text-[#d97706]">
                {time}
              </span>
              <span className="font-mono text-xl md:text-2xl text-white/50 ml-1 font-semibold">
                :{sec}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Real-time Countdown Banner to Next Prayer */}
      <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-[#d97706]/10 text-[#d97706] rounded-2xl border border-[#d97706]/20">
            <FlameKindling className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="text-sm text-white/60">Keyingi ibodatga tayyorgarlik:</div>
            <div className="font-serif text-lg font-semibold text-white">
              {next.label} namozi &mdash; <span className="text-[#d97706] font-sans">{next.time}</span> da kiradi
            </div>
          </div>
        </div>

        {/* Countdown Ticker */}
        <div className="flex items-center gap-2">
          <div className="flex gap-1 font-mono">
            <div className="flex flex-col items-center bg-white/5 px-3 py-2 rounded-xl border border-white/10 min-w-[48px]">
              <span className="text-lg font-bold text-[#d97706]">
                {countdown.hours.toString().padStart(2, '0')}
              </span>
              <span className="text-[9px] text-white/40 uppercase font-sans">soat</span>
            </div>
            <div className="text-[#d97706] self-center text-xl font-bold">:</div>
            <div className="flex flex-col items-center bg-white/5 px-3 py-2 rounded-xl border border-white/10 min-w-[48px]">
              <span className="text-lg font-bold text-[#d97706]">
                {countdown.minutes.toString().padStart(2, '0')}
              </span>
              <span className="text-[9px] text-white/40 uppercase font-sans">daqiqa</span>
            </div>
            <div className="text-[#d97706] self-center text-xl font-bold">:</div>
            <div className="flex flex-col items-center bg-white/5 px-3 py-2 rounded-xl border border-white/10 min-w-[48px]">
              <span className="text-lg font-bold text-[#d97706]">
                {countdown.seconds.toString().padStart(2, '0')}
              </span>
              <span className="text-[9px] text-white/40 uppercase font-sans">soniya</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

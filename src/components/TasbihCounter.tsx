/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  RotateCcw, 
  HelpCircle, 
  Sparkle, 
  Volume2, 
  VolumeX, 
  ChevronRight, 
  Award,
  ChevronLeft
} from 'lucide-react';
import { IconTasbih } from './IslamicIcons';
import { ISLAMIC_DATA } from '../data';
import { audio } from '../utils/audio';

export default function TasbihCounter() {
  const phrases = ISLAMIC_DATA.tasbihPhrases;
  const [activePhraseIndex, setActivePhraseIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [rounds, setRounds] = useState(0);
  const [totals, setTotals] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);

  const currentPhrase = phrases[activePhraseIndex];

  // If the phrase changes, reset count
  useEffect(() => {
    setCount(0);
    setShowCelebration(false);
  }, [activePhraseIndex]);

  const handleIncrement = () => {
    audio.playBeadClick();
    
    const newCount = count + 1;
    const newTotals = totals + 1;
    setTotals(newTotals);

    if (newCount >= currentPhrase.limit) {
      // Reached the limit! Play completion chime
      audio.playCompletionChime();
      setCount(currentPhrase.limit);
      setRounds(prev => prev + 1);
      setShowCelebration(true);
    } else {
      setCount(newCount);
    }
  };

  const handleReset = () => {
    audio.playBeadClick();
    setCount(0);
    setShowCelebration(false);
  };

  const handleResetAll = () => {
    audio.playBeadClick();
    setCount(0);
    setRounds(0);
    setTotals(0);
    setShowCelebration(false);
  };

  const handleNextPhrase = () => {
    audio.playBeadClick();
    setActivePhraseIndex((prev) => (prev + 1) % phrases.length);
  };

  const handlePrevPhrase = () => {
    audio.playBeadClick();
    setActivePhraseIndex((prev) => (prev - 1 + phrases.length) % phrases.length);
  };

  // Move to next logical phrase on completed ceremony
  const handleAdvanceDhikr = () => {
    handleNextPhrase();
  };

  // Safe percentage calculation for SVG indicator
  const percentage = (count / currentPhrase.limit) * 100;
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="w-full bg-[#064e3b]/20 text-white rounded-3xl p-6 shadow-xl border border-white/10 relative overflow-hidden group" id="tasbih-calculator">
      {/* Decorative stars and lighting inside digital device */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#064e3b] rounded-full blur-2xl pointer-events-none opacity-25"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#d97706] rounded-full blur-2xl pointer-events-none opacity-10"></div>
      
      {/* Tasbih Header */}
      <div className="flex items-center justify-between mb-5 select-none pb-3 border-b border-white/[0.06]">
        <div className="flex items-center gap-2 text-[#d97706] font-serif text-sm">
          <IconTasbih size={20} strokeWidth={1.75} className="animate-spin-slow" />
          <span>Elektronik Tasbeh</span>
        </div>
        
        {/* Total counts badges */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] bg-[#064e3b]/30 text-white/80 font-mono px-2 py-1 rounded-md border border-white/10">
            Jami zikr: <strong className="text-[#d97706]">{totals}</strong>
          </span>
          <span className="text-[10px] bg-white/5 text-white/80 font-mono px-2 py-1 rounded-md border border-white/10">
            Aylanish: <strong className="text-[#d97706]">{rounds}</strong>
          </span>
        </div>
      </div>

      {/* Phrase Carousel Selector */}
      <div className="flex items-center justify-between gap-3 mb-6 bg-white/[0.02] p-3 rounded-2xl border border-white/5">
        <button 
          onClick={handlePrevPhrase}
          className="p-1.5 rounded-lg hover:bg-white/[0.08] text-white/40 hover:text-white transition-colors animate-all"
          title="Oldingi zikr"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="text-center flex-1 select-none">
          {/* Dhikr Arabic Schrift template */}
          <div className="font-arabic text-2xl font-bold text-[#d97706] tracking-wider h-10 overflow-hidden flex items-center justify-center">
            {currentPhrase.arabic}
          </div>
          <div className="text-sm font-semibold tracking-wide text-white font-serif mt-1">
            {currentPhrase.phrase}
          </div>
          <div className="text-[10px] text-white/40 mt-0.5 line-clamp-1 italic px-2">
            «{currentPhrase.translation}»
          </div>
        </div>

        <button 
          onClick={handleNextPhrase}
          className="p-1.5 rounded-lg hover:bg-white/[0.08] text-white/40 hover:text-white transition-colors animate-all"
          title="Keyingi zikr"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Big Circular clicker pad with display */}
      <div className="flex flex-col items-center justify-center mt-2 mb-4">
        <div className="relative w-44 h-44 flex items-center justify-center">
          
          {/* Circular progress bar */}
          <svg className="absolute w-full h-full transform -rotate-90">
            <circle
              cx="88"
              cy="88"
              r={radius}
              className="stroke-white/5"
              strokeWidth="6"
              fill="transparent"
            />
            <circle
              cx="88"
              cy="88"
              r={radius}
              className="stroke-[#d97706] transition-all duration-300"
              strokeWidth="6"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
          </svg>

          {/* Core Interactive Click Area */}
          <button 
            onClick={handleIncrement}
            disabled={showCelebration}
            className="w-32 h-32 rounded-full bg-gradient-to-br from-[#064e3b] to-[#021f1a] border-2 border-[#d97706]/40 shadow-inner flex flex-col items-center justify-center cursor-pointer transition-all active:scale-95 focus:outline-none hover:shadow-[#064e3b]/30 hover:shadow-2xl hover:border-[#d97706] z-10"
          >
            {/* LED Screen */}
            <span className="font-mono text-4xl font-extrabold text-[#d97706] tracking-tight select-none">
              {count}
            </span>
            <span className="text-[9px] text-[#d97706]/70 font-semibold tracking-wider uppercase mt-1 select-none">
              Chegara: {currentPhrase.limit}
            </span>
          </button>
        </div>
      </div>

      {/* Goal Reached Celebration Banner */}
      {showCelebration && (
        <div className="mb-4 p-3 bg-[#064e3b]/40 border border-[#d97706]/30 rounded-2xl flex flex-col items-center text-center animate-fade-in relative z-20">
          <p className="text-xs text-[#d97706] font-semibold flex items-center gap-1">
            <Award className="w-3.5 h-3.5" />
            Zikr yakunlandi! {currentPhrase.limit} marta zikr qilindi.
          </p>
          <button
            onClick={handleAdvanceDhikr}
            className="mt-2 text-[10px] px-3 py-1.5 bg-[#d97706] text-[#021f1a] rounded-lg font-bold hover:bg-amber-500 transition-colors uppercase tracking-wider cursor-pointer"
          >
            Navbatdagi Tasbehga o'tish
          </button>
        </div>
      )}

      {/* Tasbih control panel */}
      <div className="flex items-center justify-between gap-2 border-t border-white/[0.06] pt-4 mt-2">
        <button 
          onClick={handleReset}
          className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 transition-colors border border-white/10 cursor-pointer"
          title="Zikr hisobini nolga tushirish"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Nolga olish
        </button>

        <button 
          onClick={handleResetAll}
          className="text-[10px] text-white/40 hover:text-red-400 hover:underline transition-colors cursor-pointer"
          title="Barcha statistikani o'chirish"
        >
          Barchasini tozalash
        </button>
      </div>
    </div>
  );
}

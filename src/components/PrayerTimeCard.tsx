/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  BellRing,
  Award
} from 'lucide-react';
import { 
  IconFajr, 
  IconSunrise, 
  IconDhuhr, 
  IconAsr, 
  IconMaghrib, 
  IconIsha 
} from './IslamicIcons';
import { PrayerTime } from '../types';
import { ISLAMIC_DATA } from '../data';
import { getActiveAndNextPrayer } from '../utils/time';
import { audio } from '../utils/audio';

interface PrayerTimeCardProps {
  key?: string | number;
  prayer: PrayerTime;
  currentDate: Date;
}

export default function PrayerTimeCard({ prayer, currentDate }: PrayerTimeCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Determine current active/next status
  const currentTimeStr = currentDate.toTimeString().slice(0, 5);
  const { active, next } = getActiveAndNextPrayer(currentTimeStr, ISLAMIC_DATA.prayerTimes);

  const isActive = active.key === prayer.key;
  const isNext = next.key === prayer.key;

  // Render bespoke Islamic-themed SVG prayer icons
  const getIcon = (key: string) => {
    const iconClass = `w-7 h-7 ${
      isActive 
        ? "text-[#d97706]" 
        : isNext 
          ? "text-[#d97706]" 
          : "text-white/40 group-hover:text-[#d97706] transition-colors"
    }`;

    switch (key) {
      case 'bomdod':
        return <IconFajr className={iconClass} size={28} strokeWidth={isActive ? 2 : 1.75} />;
      case 'quyosh':
        return <IconSunrise className={iconClass} size={28} strokeWidth={isActive ? 2 : 1.75} />;
      case 'peshin':
        return <IconDhuhr className={iconClass} size={28} strokeWidth={isActive ? 2 : 1.75} />;
      case 'asr':
        return <IconAsr className={iconClass} size={28} strokeWidth={isActive ? 2 : 1.75} />;
      case 'shom':
        return <IconMaghrib className={iconClass} size={28} strokeWidth={isActive ? 2 : 1.75} />;
      case 'hufton':
        return <IconIsha className={iconClass} size={28} strokeWidth={isActive ? 2 : 1.75} />;
      default:
        return <IconDhuhr className={iconClass} size={28} strokeWidth={1.75} />;
    }
  };

  const handleToggleOpen = () => {
    audio.playBeadClick();
    setIsOpen(!isOpen);
  };

  const handlePlaySound = (e: React.MouseEvent) => {
    e.stopPropagation();
    audio.playPeacefulCall();
  };

  return (
    <div 
      onClick={handleToggleOpen}
      className={`relative w-full rounded-2xl p-5 border transition-all duration-300 cursor-pointer select-none group flex flex-col ${
        isActive 
          ? "border-[#d97706] bg-[#064e3b]/30 text-white shadow-xl scale-[1.02] transform animate-active-pulse" 
          : isNext 
            ? "border-[#d97706]/40 bg-white/5 hover:bg-[#064e3b]/10 text-white shadow-md translate-y-[-2px] border-dashed" 
            : "border-white/5 bg-white/5 hover:bg-white/10 text-white shadow-sm hover:border-white/10"
      }`}
      id={`prayer-card-${prayer.key}`}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4">
          {/* Icon Area */}
          <div className={`p-3 rounded-2xl transition-colors duration-300 ${
            isActive 
              ? "bg-[#064e3b]/80 text-[#d97706] border border-[#d97706]/30" 
              : isNext 
                ? "bg-[#d97706]/15 text-[#d97706] border border-[#d97706]/20" 
                : "bg-white/5 text-white/40 group-hover:bg-[#d97706]/10 group-hover:text-[#d97706] transition-colors"
          }`}>
            {getIcon(prayer.key)}
          </div>
          
          {/* Labels & Tags */}
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className={`font-serif text-lg font-bold tracking-tight ${
                isActive ? "text-[#d97706]" : "text-white"
              }`}>
                {prayer.label}
              </span>
              
              {/* Active Badge */}
              {isActive && (
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#d97706] text-[#021f1a] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#021f1a] animate-ping"></span>
                  Hozirgi vaqt
                </span>
              )}
              
              {/* Next Badge */}
              {isNext && (
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#d97706]/80 text-white">
                  Keyingi namoz
                </span>
              )}

              {/* Sunrise warning badge */}
              {prayer.isQuyosh && (
                <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-full ${
                  isActive ? "bg-[#d97706]/20 text-[#d97706]" : "bg-white/10 text-[#d97706]"
                }`}>
                  Taqiqlangan vaqt kirishi
                </span>
              )}
            </div>

            {/* Prayer time interval text */}
            <span className={`text-xs mt-0.5 ${isActive ? "text-[#d97706]/80" : "text-white/40 group-hover:text-white/60"}`}>
              {prayer.isQuyosh 
                ? "Namoz vaqti tugaydi" 
                : `Vaqt oralig'i: ${prayer.time} - ${prayer.endTime}`}
            </span>
          </div>
        </div>

        {/* Time Value and Chevron Column */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <span className={`font-mono text-2xl md:text-3xl font-extrabold tracking-tight ${
              isActive ? "text-[#d97706]" : "text-white/90"
            }`}>
              {prayer.time}
            </span>
          </div>
          <div className={`p-1.5 rounded-full ${
            isActive ? "bg-[#064e3b]/80 text-[#d97706]" : "bg-white/5 text-white/50"
          }`}>
            {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </div>
        </div>
      </div>

      {/* Expanded Accordion Area detailing prayer guidelines */}
      {isOpen && (
        <div className={`mt-4 pt-4 border-t border-dashed overflow-hidden text-sm relative ${
          isActive ? "border-[#d97706]/30 text-white/80" : "border-white/10 text-white/70"
        }`}
          onClick={(e) => e.stopPropagation()} // halt bubbling
        >
          <p className="leading-relaxed mb-3">
            {prayer.description}
          </p>

          <div className="flex flex-wrap gap-2 items-center justify-between">
            {/* Quick reminder check */}
            <span className="inline-flex items-center gap-1.5 text-xs text-[#d97706] font-semibold">
              <Award className="w-3.5 h-3.5" />
              Ibodatni o'z vaqtida o'qish fazilati
            </span>
            
            {/* Soft test button */}
            {!prayer.isQuyosh && (
              <button 
                onClick={handlePlaySound}
                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors border ${
                  isActive 
                    ? "bg-[#d97706] text-[#021f1a] border-[#d97706] hover:bg-amber-500"
                    : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                }`}
              >
                <BellRing className="w-3.5 h-3.5" />
                Duo ohangini yoqish
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

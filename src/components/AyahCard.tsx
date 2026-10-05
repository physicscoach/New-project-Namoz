/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BookCheck } from 'lucide-react';
import { IconQuran } from './IslamicIcons';
import { ISLAMIC_DATA } from '../data';

export default function AyahCard() {
  const arabicText = ISLAMIC_DATA.dates.verseArabic;
  const translationText = ISLAMIC_DATA.dates.verseUzbek;
  const sourceText = ISLAMIC_DATA.dates.verseSource;

  return (
    <div className="w-full relative rounded-3xl overflow-hidden shadow-2xl bg-[#064e3b]/20 border border-[#d97706]/30 p-6 md:p-8 flex flex-col items-center justify-center text-center group transition-all duration-300 hover:border-[#d97706]/50" id="ayah-card-container">
      {/* Decorative Ornate Corners */}
      <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#d97706]/30 rounded-tl-md"></div>
      <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#d97706]/30 rounded-tr-md"></div>
      <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#d97706]/30 rounded-bl-md"></div>
      <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#d97706]/30 rounded-br-md"></div>
      
      {/* Decorative center icon with bespoke Quran on Rehal */}
      <div className="w-14 h-14 bg-[#d97706]/10 text-[#d97706] rounded-2xl flex items-center justify-center mb-5 border border-[#d97706]/20 shadow-md">
        <IconQuran size={30} strokeWidth={1.75} className="animate-pulse" />
      </div>

      <div className="space-y-4 max-w-2xl">
        {/* Core Quranic Arabic Text */}
        <p className="font-arabic text-3xl md:text-4xl text-[#d97706] font-bold leading-relaxed tracking-wide text-center pt-2">
          {arabicText}
        </p>
        
        {/* Divide lines with small star ornament */}
        <div className="flex items-center justify-center gap-3 py-2">
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#d97706]"></div>
          <span className="text-[#d97706] text-sm">✦</span>
          <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#d97706]"></div>
        </div>

        {/* Translation text */}
        <p className="text-white/80 italic text-base md:text-lg leading-relaxed px-4 md:px-8 font-serif select-none">
          {translationText}
        </p>

        {/* Translation metadata source */}
        <p className="text-[#d97706] font-sans font-semibold text-xs tracking-wider uppercase inline-flex items-center gap-1.5 bg-[#d97706]/10 px-3 py-1.5 rounded-full border border-[#d97706]/20 mt-2">
          <BookCheck className="w-3.5 h-3.5" />
          {sourceText}
        </p>
      </div>
    </div>
  );
}

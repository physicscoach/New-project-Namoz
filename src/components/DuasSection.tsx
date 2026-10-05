/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Copy, Check, Quote, Volume2 } from 'lucide-react';
import { IconPrayerMat } from './IslamicIcons';
import { ISLAMIC_DATA } from '../data';
import { audio } from '../utils/audio';

export default function DuasSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const activeDua = ISLAMIC_DATA.duas[activeTab];

  const handleCopy = (dua: typeof activeDua) => {
    audio.playBeadClick();
    const textToCopy = `🤲 ${dua.title}\n\nArabcha:\n${dua.arabic}\n\nO'qilishi:\n${dua.transliteration}\n\nMa'nosi:\n${dua.translation}\n\nManba: ${dua.source || 'Islomiy kitoblar'}`;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopiedId(dua.id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  const handlePlaySound = () => {
    audio.playPeacefulCall();
  };

  const selectTab = (idx: number) => {
    audio.playBeadClick();
    setActiveTab(idx);
  };

  return (
    <div className="w-full bg-[#064e3b]/20 text-white rounded-3xl p-6 shadow-xl border border-white/10 flex flex-col" id="duas-guides-panel">
      {/* Container Header */}
      <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-4 select-none">
        <div className="p-2.5 bg-[#d97706]/10 text-[#d97706] rounded-xl border border-[#d97706]/20">
          <IconPrayerMat size={22} strokeWidth={1.75} />
        </div>
        <div>
          <h2 className="font-serif text-lg font-bold text-[#f5f5f0]">Namozdan keyingi duolar</h2>
          <p className="text-xs text-white/40">Duolarni o'qish va nusxa olib tarqatish imkoniyati</p>
        </div>
      </div>

      {/* Tabs navigation list */}
      <div className="flex overflow-x-auto gap-2 pb-2 mb-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
        {ISLAMIC_DATA.duas.map((dua, idx) => (
          <button
            key={dua.id}
            onClick={() => selectTab(idx)}
            className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
              activeTab === idx
                ? "bg-[#d97706] border-[#d97706] text-[#021f1a] shadow-sm font-bold"
                : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
            }`}
          >
            {dua.title}
          </button>
        ))}
      </div>

      {/* Selected supplication layout content */}
      <div className="bg-white/5 rounded-2xl p-5 border border-white/10 relative">
        <div className="absolute top-4 right-4 flex items-center gap-2">
          {/* Audio read button */}
          <button
            onClick={handlePlaySound}
            className="p-1.5 rounded-lg bg-white/5 text-[#d97706] hover:bg-white/10 transition-colors border border-white/10 cursor-pointer"
            title="Tasalli ohangini eshitish"
          >
            <Volume2 className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => handleCopy(activeDua)}
            className="p-1.5 rounded-lg bg-[#d97706]/10 text-[#d97706] hover:bg-[#d97706]/20 transition-colors border border-[#d97706]/20 flex items-center gap-1.5 cursor-pointer"
            title="Telegramga nusxalash"
          >
            {copiedId === activeDua.id ? (
              <>
                <Check className="w-4 h-4 text-[#d97706]" />
                <span className="text-[10px] font-bold text-[#d97706]">Nusxalandi</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span className="text-[10px] font-bold text-[#d97706]">Nusxa</span>
              </>
            )}
          </button>
        </div>

        {/* Ornate Quote decoration */}
        <Quote className="absolute -bottom-2 -right-1 w-24 h-24 text-white/[0.02] pointer-events-none transform rotate-180" />

        <div className="space-y-4 relative z-10">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#d97706] font-sans block mb-1">
              Arabcha matni
            </span>
            <p className="font-arabic text-2xl md:text-3xl text-[#d97706] leading-relaxed text-right font-bold bg-slate-950 p-4 rounded-xl border border-white/15 shadow-inner mt-1" dir="rtl">
              {activeDua.arabic}
            </p>
          </div>

          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#d97706] font-sans block mb-1">
              Transliteratsiyasi (O'qilishi)
            </span>
            <p className="text-sm font-medium text-[#f5f5f0]/95 italic bg-white/5 p-3 rounded-xl border border-white/10 mt-1">
              {activeDua.transliteration}
            </p>
          </div>

          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#d97706] font-sans block mb-1">
              O'zbekcha tarjimasi (Ma'nosi)
            </span>
            <p className="text-sm text-[#f5f5f0]/80 leading-relaxed font-serif bg-[#064e3b]/10 p-4 rounded-xl border border-[#d97706]/15 mt-1">
              {activeDua.translation}
            </p>
          </div>

          {activeDua.source && (
            <div className="text-[10px] text-white/40 font-sans flex items-center gap-1 pt-1">
              <span>📚 Manba:</span>
              <strong className="text-[#d97706]">{activeDua.source}</strong>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

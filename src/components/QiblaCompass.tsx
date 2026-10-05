/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Compass, Sparkles, Navigation, Globe } from 'lucide-react';
import { IconKaaba } from './IslamicIcons';
import { audio } from '../utils/audio';

export default function QiblaCompass() {
  const [rotation, setRotation] = useState(0); // in degrees
  const qiblaAngle = 243; // Qibla angle from Uzbekistan (South-West)

  const handleRotationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    setRotation(val);

    // If perfectly aligned with Qibla (tolerance of +-3 degrees), play a soft tic feedback
    if (Math.abs(val - qiblaAngle) <= 1) {
      audio.playBeadClick();
    }
  };

  const isAligned = Math.abs(rotation - qiblaAngle) <= 4;

  const handleSetPerfect = () => {
    setRotation(qiblaAngle);
    audio.playCompletionChime();
  };

  return (
    <div className="w-full bg-[#064e3b]/20 text-white rounded-3xl p-6 shadow-xl border border-white/10 flex flex-col items-center justify-center text-center group transition-all duration-300" id="qibla-compass-card">
      {/* Container Header */}
      <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-5 select-none w-full text-left">
        <div className="p-2.5 bg-[#d97706]/10 text-[#d97706] rounded-xl border border-[#d97706]/20">
          <Compass className="w-5 h-5 animate-spin-slow" />
        </div>
        <div className="flex-1">
          <h2 className="font-serif text-lg font-bold text-[#f5f5f0]">Qibla va Ka'ba tomir</h2>
          <p className="text-xs text-white/40">O'zbekiston bo'yicha Qibla burchagi: {qiblaAngle}° burchakda</p>
        </div>
        {isAligned && (
          <span className="text-[10px] bg-[#d97706]/20 text-[#d97706] font-bold px-2 py-1 rounded-full border border-[#d97706]/30 animate-pulse">
            To'g'ri • Aligned
          </span>
        )}
      </div>

      {/* Visual Compass Ring */}
      <div className="relative w-44 h-44 flex items-center justify-center bg-slate-950 rounded-full border-4 border-white/10 shadow-2xl overflow-hidden mt-2">
        <div className="absolute inset-0 opacity-1 pointer-events-none bg-islamic-pattern"></div>
        
        {/* Glow glow when correct */}
        <div className={`absolute inset-0 bg-[#d97706]/10 rounded-full blur-xl transition-opacity duration-300 pointer-events-none ${
          isAligned ? "opacity-100 scale-110" : "opacity-0"
        }`}></div>

        {/* Outer Direction marks rotating */}
        <div 
          className="absolute w-full h-full p-2 flex flex-col justify-between items-center transition-transform duration-100"
          style={{ transform: `rotate(${-rotation}deg)` }}
        >
          <span className="text-[#d97706] font-bold text-xs font-mono select-none">N (Sh)</span>
          <div className="w-full h-[1px] absolute top-1/2 left-0 bg-white/[0.04] pointer-events-none"></div>
          <div className="w-[1px] h-full absolute top-0 left-1/2 bg-white/[0.04] pointer-events-none"></div>
          <div className="flex justify-between w-full px-2">
            <span className="text-slate-400 font-bold text-xs font-mono select-none">W (G')</span>
            <span className="text-slate-400 font-bold text-xs font-mono select-none">E (Sh)</span>
          </div>
          <span className="text-slate-400 font-bold text-xs font-mono select-none">S (J)</span>
        </div>

        {/* Central Dial with Kaaba/Arrow */}
        <div className="relative z-10 w-28 h-28 bg-slate-900 rounded-full border border-[#d97706]/20 shadow-inner flex flex-col items-center justify-center">
          {/* Aligned Success Center */}
          {isAligned ? (
            <div className="flex flex-col items-center justify-center animate-fade-in">
              <IconKaaba size={34} strokeWidth={1.75} className="text-[#d97706] animate-pulse" />
              <span className="text-[9px] text-[#d97706] font-extrabold uppercase mt-1 tracking-widest">
                QIBLA TOPILDI
              </span>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center opacity-85">
              <Navigation 
                className="w-10 h-10 text-emerald-500 transition-transform duration-300"
                style={{ transform: `rotate(${qiblaAngle - rotation}deg)` }}
              />
              <span className="text-[9px] text-emerald-400 font-bold uppercase tracking-wider mt-1.5 font-mono">
                {Math.abs(rotation - qiblaAngle)}° og'ish
              </span>
            </div>
          )}
        </div>

        {/* Dynamic compass bezel glass effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none rounded-full"></div>
      </div>

      {/* Manual controller slider to simulate physical rotation */}
      <div className="w-full mt-6 space-y-4">
        <div>
          <label className="text-xs text-white/40 font-medium flex items-center justify-between px-1">
            <span>Kompasni siljitib Qibla darajasini toping (243°)</span>
            <strong className="text-[#d97706] font-mono text-xs">{rotation}°</strong>
          </label>
          <input 
            type="range" 
            min="0" 
            max="359" 
            value={rotation} 
            onChange={handleRotationChange}
            className="w-full h-1.5 bg-white/5 rounded-lg appearance-none cursor-pointer accent-[#d97706] mt-2 hover:accent-amber-500 transition-colors"
          />
        </div>

        {/* Fast Action Align Button */}
        <button
          onClick={handleSetPerfect}
          disabled={isAligned}
          className={`w-full py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all outline-none border cursor-pointer ${
            isAligned
              ? "bg-white/5 text-white/40 border-white/5 pointer-events-none"
              : "bg-[#d97706] text-[#021f1a] border-[#d97706] hover:bg-amber-500 active:scale-[0.98]"
          }`}
        >
          <Globe className="w-3.5 h-3.5" />
          Qiblaga avtomatik yo'naltirish
        </button>
      </div>
    </div>
  );
}

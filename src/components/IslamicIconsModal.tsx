/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  Sparkles, 
  Sliders, 
  Download, 
  Layers, 
  Info,
  ExternalLink
} from 'lucide-react';
import { 
  ISLAMIC_ICONS_CATALOG, 
  IconProps 
} from './IslamicIcons';

interface IslamicIconsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IslamicIconsModal: React.FC<IslamicIconsModalProps> = ({ isOpen, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Barchasi');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeIconId, setActiveIconId] = useState<string>('mosque');
  const [previewSize, setPreviewSize] = useState<number>(32);
  const [previewStroke, setPreviewStroke] = useState<number>(1.75);
  const [previewColor, setPreviewColor] = useState<string>('#d97706'); // Islamic amber gold

  if (!isOpen) return null;

  const categories = ['Barchasi', 'Namoz vaqtlari', 'Muqaddas Maskonlar', 'Ibodat va Ma\'rifat', 'Zikr va Tasbeh', 'Islomiy Ramzlar'];

  const filteredIcons = selectedCategory === 'Barchasi'
    ? ISLAMIC_ICONS_CATALOG
    : ISLAMIC_ICONS_CATALOG.filter(icon => icon.category === selectedCategory);

  const activeIconData = ISLAMIC_ICONS_CATALOG.find(i => i.id === activeIconId) || ISLAMIC_ICONS_CATALOG[0];
  const ActiveComponent = activeIconData.component;

  // Generate clean SVG markup for export
  const getSvgMarkup = (id: string, size = 24, stroke = 1.75): string => {
    switch (id) {
      case 'fajr':
        return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">\n  <path d="M2 19h20"/>\n  <path d="M7 19a5 5 0 0 1 10 0"/>\n  <path d="M12 4a4.5 4.5 0 0 0 4.5 4.5c.3 0 .6-.03.9-.1A4.5 4.5 0 1 1 12 4z"/>\n  <circle cx="17.5" cy="4.5" r="0.75" fill="currentColor" stroke="none"/>\n  <path d="M4 15l1.5-1"/>\n  <path d="M20 15l-1.5-1"/>\n  <path d="M12 11V8.5"/>\n</svg>`;
      case 'sunrise':
        return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">\n  <path d="M2 18h20"/>\n  <path d="M6 21h12"/>\n  <path d="M7.5 18a4.5 4.5 0 0 1 9 0"/>\n  <path d="M12 7V3"/>\n  <path d="M5.5 11.5L3 9"/>\n  <path d="M18.5 11.5L21 9"/>\n  <path d="M7.5 6L6 4.5"/>\n  <path d="M16.5 6L18 4.5"/>\n</svg>`;
      case 'dhuhr':
        return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">\n  <circle cx="12" cy="12" r="4.25"/>\n  <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/>\n  <path d="M12 2.5v2.5"/>\n  <path d="M12 19v2.5"/>\n  <path d="M2.5 12H5"/>\n  <path d="M19 12h2.5"/>\n  <path d="M5.3 5.3l1.8 1.8"/>\n  <path d="M16.9 16.9l1.8 1.8"/>\n  <path d="M18.7 5.3l-1.8 1.8"/>\n  <path d="M7.1 16.9l-1.8 1.8"/>\n</svg>`;
      case 'asr':
        return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">\n  <path d="M3 20h18"/>\n  <path d="M7 20V10"/>\n  <path d="M6 10h2"/>\n  <path d="M7 20h9" stroke-width="${stroke + 0.75}"/>\n  <circle cx="18" cy="6" r="3"/>\n  <path d="M14 9l-4 4"/>\n  <path d="M17 11l-2 3"/>\n  <path d="M13 5.5l-2.5 1"/>\n</svg>`;
      case 'maghrib':
        return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">\n  <path d="M2 17h20"/>\n  <path d="M8 17a4 4 0 0 1 8 0"/>\n  <path d="M12 11v4"/>\n  <path d="M10 13l2 2 2-2"/>\n  <path d="M19 6l.5 1.5L21 8l-1.5.5L19 10l-.5-1.5L17 8l1.5-.5z" fill="currentColor" stroke="none"/>\n  <path d="M4 20h16" opacity="0.6"/>\n  <path d="M5 10l1.5 1"/>\n  <path d="M19 12l-1.5.5"/>\n</svg>`;
      case 'isha':
        return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">\n  <path d="M18.5 13.5A7 7 0 1 1 10.5 5.5a5.5 5.5 0 0 0 8 8z"/>\n  <circle cx="16.5" cy="5.5" r="0.8" fill="currentColor" stroke="none"/>\n  <circle cx="20" cy="9.5" r="0.6" fill="currentColor" stroke="none"/>\n  <circle cx="8" cy="18.5" r="0.6" fill="currentColor" stroke="none"/>\n  <path d="M13 2l.3 1 1 .3-1 .3-.3 1-.3-1-1-.3 1-.3z" fill="currentColor" stroke="none"/>\n</svg>`;
      case 'mosque':
        return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">\n  <path d="M2 21h20"/>\n  <path d="M8 14c0-3.5 2-5 4-7 2 2 4 3.5 4 7H8z"/>\n  <path d="M12 7V4.5"/>\n  <path d="M11.5 3a1.5 1.5 0 1 0 1.5 1.5"/>\n  <path d="M10.5 21v-4c0-.8.6-1.5 1.5-1.5s1.5.7 1.5 1.5v4"/>\n  <path d="M4 21V9.5h2V21"/>\n  <path d="M3.5 9.5h3"/>\n  <path d="M5 9.5V6.5l.5-.5"/>\n  <path d="M4 6.5h2"/>\n  <path d="M18 21V9.5h2V21"/>\n  <path d="M17.5 9.5h3"/>\n  <path d="M19 9.5V6.5l.5-.5"/>\n  <path d="M18 6.5h2"/>\n</svg>`;
      case 'quran':
        return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">\n  <path d="M12 4.5c-2-1.5-5.5-1.5-8-.5v10c2.5-1 6-1 8 .5 2-1.5 5.5-1.5 8-.5v-10c-2.5-1-6-1-8 .5z"/>\n  <path d="M12 4.5V14.5"/>\n  <path d="M12 14.5v3l1.5-1 1.5 1v-3"/>\n  <path d="M5 16l-2 5"/>\n  <path d="M19 16l2 5"/>\n  <path d="M7 17.5l5 3.5 5-3.5"/>\n  <path d="M10 19.5l-4 2"/>\n  <path d="M14 19.5l4 2"/>\n</svg>`;
      case 'kaaba':
        return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">\n  <path d="M6 9l6 3v9l-6-3V9z"/>\n  <path d="M12 12l6-3v9l-6 3v-9z"/>\n  <path d="M6 9l6-4 6 4-6 3-6-3z"/>\n  <path d="M6 11.5l6 3" stroke-width="${stroke + 0.25}"/>\n  <path d="M12 14.5l6-3" stroke-width="${stroke + 0.25}"/>\n  <path d="M14 14v4.5l2-1V13l-2 1z" fill="currentColor" opacity="0.3"/>\n  <path d="M3 18a4 4 0 0 1 2-3.5" stroke-dasharray="1.5 1.5"/>\n</svg>`;
      case 'tasbih':
        return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">\n  <ellipse cx="12" cy="10.5" rx="7" ry="6"/>\n  <circle cx="12" cy="4.5" r="1.1" fill="currentColor" stroke="none"/>\n  <circle cx="16.5" cy="6.5" r="1.1" fill="currentColor" stroke="none"/>\n  <circle cx="18.8" cy="11" r="1.1" fill="currentColor" stroke="none"/>\n  <circle cx="17" cy="15" r="1.1" fill="currentColor" stroke="none"/>\n  <circle cx="7" cy="15" r="1.1" fill="currentColor" stroke="none"/>\n  <circle cx="5.2" cy="11" r="1.1" fill="currentColor" stroke="none"/>\n  <circle cx="7.5" cy="6.5" r="1.1" fill="currentColor" stroke="none"/>\n  <path d="M11 16.5h2l-.5 2.5h-1z" fill="currentColor"/>\n  <path d="M12 19v3.5"/>\n  <path d="M10.5 22.5l1.5-3.5 1.5 3.5"/>\n</svg>`;
      case 'hilal':
        return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">\n  <path d="M14.5 3.5a8.5 8.5 0 1 0 0 17 9 9 0 0 1 0-17z"/>\n  <path d="M17 9l.8 1.8 2 .3-1.4 1.4.3 2-1.7-.9-1.7.9.3-2-1.4-1.4 2-.3z" fill="currentColor" stroke-width="1"/>\n</svg>`;
      case 'fanous':
        return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">\n  <circle cx="12" cy="2.5" r="1.5"/>\n  <path d="M12 4c-1.5 0-3 1.2-3.5 2.5h7C15 5.2 13.5 4 12 4z"/>\n  <path d="M8.5 6.5L7 11l2 6h6l2-6-1.5-4.5h-7z"/>\n  <path d="M9 17l-.5 2.5h7L15 17"/>\n  <path d="M8 21.5h8"/>\n  <path d="M8.5 19.5v2"/>\n  <path d="M15.5 19.5v2"/>\n  <path d="M12 9.5v4" stroke-width="${stroke + 0.5}"/>\n  <circle cx="12" cy="9.5" r="0.75" fill="currentColor" stroke="none"/>\n  <path d="M10.5 7l-1 4 1 5.5" opacity="0.6"/>\n  <path d="M13.5 7l1 4-1 5.5" opacity="0.6"/>\n</svg>`;
      case 'prayermat':
        return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">\n  <rect x="5" y="3.5" width="14" height="17" rx="1.5"/>\n  <path d="M6 2v1.5M9 2v1.5M12 2v1.5M15 2v1.5M18 2v1.5"/>\n  <path d="M6 20.5V22M9 20.5V22M12 20.5V22M15 20.5V22M18 20.5V22"/>\n  <path d="M8 17V10c0-2 1.8-3.5 4-4.5 2.2 1 4 2.5 4 4.5v7"/>\n  <circle cx="12" cy="12.5" r="1.5"/>\n</svg>`;
      case 'minaret':
        return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">\n  <path d="M4 21h16"/>\n  <path d="M8.5 21V9.5h7V21"/>\n  <path d="M7 9.5h10v2H7z"/>\n  <path d="M8 9.5V8c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v1.5"/>\n  <path d="M9.5 7C10.5 5 12 3.5 12 3.5S13.5 5 14.5 7"/>\n  <path d="M12 3.5V1.5"/>\n  <circle cx="12" cy="1.5" r="0.75" fill="currentColor" stroke="none"/>\n  <path d="M11 14v2"/>\n  <path d="M13 14v2"/>\n  <path d="M12 17.5v2"/>\n</svg>`;
      default:
        return '';
    }
  };

  const handleCopySvg = (id: string) => {
    const markup = getSvgMarkup(id, previewSize, previewStroke);
    navigator.clipboard.writeText(markup);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleDownloadSvg = (id: string, name: string) => {
    const markup = getSvgMarkup(id, previewSize, previewStroke);
    const blob = new Blob([markup], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `islamic-icon-${id}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-5xl bg-[#021f1a] border border-[#d97706]/40 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] text-[#f5f5f0]"
        id="islamic-icons-modal"
      >
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-[#064e3b]/30">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#d97706]/20 border border-[#d97706]/40 rounded-2xl text-[#d97706]">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white">
                  Islomiy SVG Iconlar To'plami
                </h2>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#d97706] text-[#021f1a]">
                  14 ta Maxsus Icon
                </span>
              </div>
              <p className="text-xs text-white/60 mt-0.5">
                Veb-sayt va dasturlar uchun mo'ljallangan yagona uslubdagi mualliflik islomiy vektor belgilari
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-white/50 hover:text-white hover:bg-white/10 transition-colors border border-transparent hover:border-white/10 cursor-pointer"
            title="Yopish"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 overflow-y-auto flex-1 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          
          {/* Left Column: Icons Grid & Category Filter (Span 7) */}
          <div className="lg:col-span-7 p-6 space-y-6">
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs px-3 py-1.5 rounded-xl font-medium transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#d97706] text-[#021f1a] font-bold shadow-md'
                      : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Icons Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {filteredIcons.map((item) => {
                const IconComp = item.component;
                const isSelected = activeIconId === item.id;

                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveIconId(item.id)}
                    className={`relative p-4 rounded-2xl border transition-all cursor-pointer flex flex-col items-center text-center group select-none ${
                      isSelected
                        ? 'bg-[#064e3b]/50 border-[#d97706] shadow-lg scale-[1.02]'
                        : 'bg-white/5 border-white/10 hover:bg-white/[0.08] hover:border-white/20'
                    }`}
                  >
                    <div 
                      className={`p-3 rounded-xl mb-3 transition-colors ${
                        isSelected 
                          ? 'bg-[#d97706]/20 text-[#d97706]' 
                          : 'bg-white/5 text-white/80 group-hover:text-[#d97706]'
                      }`}
                    >
                      <IconComp size={28} strokeWidth={previewStroke} />
                    </div>
                    
                    <span className="text-xs font-semibold text-white tracking-tight line-clamp-1">
                      {item.name}
                    </span>
                    <span className="text-[10px] text-white/40 mt-1 line-clamp-1">
                      {item.category}
                    </span>

                    {/* Fast Copy Floating Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopySvg(item.id);
                      }}
                      className="mt-2.5 text-[10px] inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-[#d97706] hover:text-[#021f1a] text-white/70 transition-colors border border-white/10"
                      title="SVG nusxalash"
                    >
                      {copiedId === item.id ? (
                        <>
                          <Check className="w-3 h-3 text-[#d97706] group-hover:text-[#021f1a]" />
                          <span>Olindi</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>SVG</span>
                        </>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Design Spec Highlights */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs text-white/60 space-y-2">
              <div className="flex items-center gap-2 text-[#d97706] font-semibold">
                <Info className="w-4 h-4" />
                <span>Dizayn Standartlari & Xususiyatlari</span>
              </div>
              <p className="leading-relaxed">
                Barcha belgilar <strong>24x24 px</strong> standart koordinata panjarasida, mukammal <strong>1.75px</strong> chiziq qalinligida va doiralashtirilgan qirralarda ishlangan. Har bir belgi an'anaviy islomiy me'morchilik va muqaddas ramzlar (qubba, rahl, kawkab, tasbeh, qibla) nisbatlariga moslashtirilgan.
              </p>
            </div>
          </div>

          {/* Right Column: Live Inspector & SVG Code Exporter (Span 5) */}
          <div className="lg:col-span-5 p-6 space-y-6 flex flex-col justify-between bg-black/20">
            
            <div className="space-y-6">
              {/* Active Icon Title & Category */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#d97706] tracking-wider">
                    {activeIconData.category}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-white mt-0.5">
                    {activeIconData.name}
                  </h3>
                  <p className="text-xs text-white/60 mt-1">
                    {activeIconData.description}
                  </p>
                </div>
              </div>

              {/* Large Visual Preview Box */}
              <div className="p-8 rounded-3xl bg-gradient-to-br from-[#064e3b]/30 via-slate-950 to-[#021f1a] border border-white/10 flex flex-col items-center justify-center relative overflow-hidden shadow-inner min-h-[160px]">
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-islamic-pattern"></div>
                <div 
                  className="transition-transform duration-300 transform hover:scale-110"
                  style={{ color: previewColor }}
                >
                  <ActiveComponent size={previewSize * 2} strokeWidth={previewStroke} />
                </div>
                <div className="mt-3 text-[10px] font-mono text-white/40">
                  {previewSize * 2}px × {previewSize * 2}px (stroke: {previewStroke}px)
                </div>
              </div>

              {/* Interactive Controls (Size, Stroke, Palette) */}
              <div className="space-y-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                <div className="flex items-center gap-1.5 text-xs font-bold text-white/80">
                  <Sliders className="w-3.5 h-3.5 text-[#d97706]" />
                  <span>Ko'rinishni Sozlash</span>
                </div>

                {/* Stroke Slider */}
                <div>
                  <div className="flex justify-between text-xs text-white/60 mb-1">
                    <span>Chiziq qalinligi (Stroke):</span>
                    <strong className="text-[#d97706] font-mono">{previewStroke}px</strong>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="3"
                    step="0.25"
                    value={previewStroke}
                    onChange={(e) => setPreviewStroke(parseFloat(e.target.value))}
                    className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#d97706]"
                  />
                </div>

                {/* Color Palette Picker */}
                <div>
                  <div className="text-xs text-white/60 mb-2">Rang tanlash:</div>
                  <div className="flex items-center gap-2.5">
                    {[
                      { label: 'Zarhal / Oltin', color: '#d97706' },
                      { label: 'Yashil / Zumrad', color: '#10b981' },
                      { label: 'Moviy / Nilufar', color: '#38bdf8' },
                      { label: 'Oq / Pokiza', color: '#ffffff' },
                      { label: 'Kumush', color: '#94a3b8' },
                    ].map((c) => (
                      <button
                        key={c.color}
                        onClick={() => setPreviewColor(c.color)}
                        title={c.label}
                        className={`w-7 h-7 rounded-full border-2 transition-transform cursor-pointer ${
                          previewColor === c.color ? 'scale-125 border-white shadow-md' : 'border-transparent opacity-70 hover:opacity-100'
                        }`}
                        style={{ backgroundColor: c.color }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Clean SVG Code snippet block */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-white/60">
                  <span className="font-mono">Vektor SVG Kodi:</span>
                  <span className="text-[10px] text-white/40">XML Standart</span>
                </div>
                <div className="bg-slate-950 p-3.5 rounded-2xl border border-white/10 max-h-36 overflow-y-auto font-mono text-[11px] text-[#d97706] select-all scrollbar-thin">
                  <pre className="whitespace-pre-wrap break-all">
                    {getSvgMarkup(activeIconData.id, previewSize, previewStroke)}
                  </pre>
                </div>
              </div>
            </div>

            {/* Action Buttons: Copy SVG & Download File */}
            <div className="pt-4 border-t border-white/10 flex items-center gap-3">
              <button
                onClick={() => handleCopySvg(activeIconData.id)}
                className="flex-1 py-3 px-4 rounded-xl bg-[#d97706] hover:bg-amber-500 text-[#021f1a] font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg active:scale-98 cursor-pointer"
              >
                {copiedId === activeIconData.id ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>SVG Nusxalandi!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>SVG Kodini Nusxalash</span>
                  </>
                )}
              </button>

              <button
                onClick={() => handleDownloadSvg(activeIconData.id, activeIconData.name)}
                className="py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors border border-white/10 cursor-pointer"
                title=".svg fayl sifatida yuklab olish"
              >
                <Download className="w-4 h-4 text-[#d97706]" />
                <span>Yuklab olish</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

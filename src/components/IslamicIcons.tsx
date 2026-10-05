/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
  className?: string;
}

/**
 * 1. Bomdod / Fajr Icon
 * Depicts the pre-dawn horizon, subhi sodiq (true dawn) light breaking,
 * accompanied by the morning star (kawkab) and the slender crescent of early dawn.
 */
export function IconFajr({ size = 24, strokeWidth = 1.75, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Horizon line */}
      <path d="M2 19h20" />
      {/* Soft dawn glow arc */}
      <path d="M7 19a5 5 0 0 1 10 0" />
      {/* Morning crescent rising */}
      <path d="M12 4a4.5 4.5 0 0 0 4.5 4.5c.3 0 .6-.03.9-.1A4.5 4.5 0 1 1 12 4z" />
      {/* Dawn Star (Kawkab) */}
      <circle cx="17.5" cy="4.5" r="0.75" fill="currentColor" stroke="none" />
      {/* Light rays breaking upward */}
      <path d="M4 15l1.5-1" />
      <path d="M20 15l-1.5-1" />
      <path d="M12 11V8.5" />
    </svg>
  );
}

/**
 * 2. Quyosh / Sunrise (Ishraq) Icon
 * Represents the moment the solar disk rises above the horizon, with geometric morning rays.
 */
export function IconSunrise({ size = 24, strokeWidth = 1.75, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Horizon base with subtle water/earth level */}
      <path d="M2 18h20" />
      <path d="M6 21h12" />
      {/* Rising Sun Disk */}
      <path d="M7.5 18a4.5 4.5 0 0 1 9 0" />
      {/* Radiant geometric morning rays */}
      <path d="M12 7V3" />
      <path d="M5.5 11.5L3 9" />
      <path d="M18.5 11.5L21 9" />
      <path d="M7.5 6L6 4.5" />
      <path d="M16.5 6L18 4.5" />
    </svg>
  );
}

/**
 * 3. Peshin / Dhuhr Icon
 * The sun reaching its zenith (zawal) before declining.
 * Features an eight-pointed Islamic star solar disk (Rub el Hizb inspired).
 */
export function IconDhuhr({ size = 24, strokeWidth = 1.75, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Central zenith sun ring */}
      <circle cx="12" cy="12" r="4.25" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
      {/* 8-fold symmetrical rays (Islamic geometric star motif) */}
      <path d="M12 2.5v2.5" />
      <path d="M12 19v2.5" />
      <path d="M2.5 12H5" />
      <path d="M19 12h2.5" />
      <path d="M5.3 5.3l1.8 1.8" />
      <path d="M16.9 16.9l1.8 1.8" />
      <path d="M18.7 5.3l-1.8 1.8" />
      <path d="M7.1 16.9l-1.8 1.8" />
    </svg>
  );
}

/**
 * 4. Asr Icon
 * Late afternoon when shadow exceeds object length.
 * Features a gnomon shadow-marker aligned under golden afternoon sunrays.
 */
export function IconAsr({ size = 24, strokeWidth = 1.75, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Base ground plane */}
      <path d="M3 20h18" />
      {/* Gnomon (Shaxs) casting an Asr shadow */}
      <path d="M7 20V10" />
      <path d="M6 10h2" />
      {/* The elongated afternoon shadow extending eastward */}
      <path d="M7 20h9" strokeWidth={strokeWidth + 0.75} />
      {/* Angled afternoon sun rays */}
      <circle cx="18" cy="6" r="3" />
      <path d="M14 9l-4 4" />
      <path d="M17 11l-2 3" />
      <path d="M13 5.5l-2.5 1" />
    </svg>
  );
}

/**
 * 5. Shom / Maghrib Icon
 * Sunset dipping below the horizon, with evening twilight hues and the first stars appearing.
 */
export function IconMaghrib({ size = 24, strokeWidth = 1.75, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Horizon line */}
      <path d="M2 17h20" />
      {/* Sun descending below the horizon */}
      <path d="M8 17a4 4 0 0 1 8 0" />
      {/* Downward settling motion indicator */}
      <path d="M12 11v4" />
      <path d="M10 13l2 2 2-2" />
      {/* First twilight star emerging */}
      <path d="M19 6l.5 1.5L21 8l-1.5.5L19 10l-.5-1.5L17 8l1.5-.5z" fill="currentColor" stroke="none" />
      {/* Soft twilight clouds/ripples */}
      <path d="M4 20h16" opacity="0.6" />
      <path d="M5 10l1.5 1" />
      <path d="M19 12l-1.5.5" />
    </svg>
  );
}

/**
 * 6. Hufton / Isha Icon
 * Complete nightfall with starry celestial heavens, serene crescent moon, and night canopy.
 */
export function IconIsha({ size = 24, strokeWidth = 1.75, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Elegant Night Crescent Moon */}
      <path d="M18.5 13.5A7 7 0 1 1 10.5 5.5a5.5 5.5 0 0 0 8 8z" />
      {/* Night Sky Stars */}
      <circle cx="16.5" cy="5.5" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="20" cy="9.5" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="8" cy="18.5" r="0.6" fill="currentColor" stroke="none" />
      <path d="M13 2l.3 1 1 .3-1 .3-.3 1-.3-1-1-.3 1-.3z" fill="currentColor" stroke="none" />
    </svg>
  );
}

/**
 * 7. Mosque / Masjid Icon
 * Classic Islamic architectural dome (Qubba) with crescent finial,
 * slender minaret, and traditional pointed arch entryway (Mihrab/Iwan).
 */
export function IconMosque({ size = 24, strokeWidth = 1.75, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Base foundation */}
      <path d="M2 21h20" />
      {/* Central Dome (Qubba) with ogee arch peak */}
      <path d="M8 14c0-3.5 2-5 4-7 2 2 4 3.5 4 7H8z" />
      {/* Crescent finial on top of dome */}
      <path d="M12 7V4.5" />
      <path d="M11.5 3a1.5 1.5 0 1 0 1.5 1.5" />
      {/* Central Arch Entry (Pointed Mihrab Portal) */}
      <path d="M10.5 21v-4c0-.8.6-1.5 1.5-1.5s1.5.7 1.5 1.5v4" />
      {/* Left Minaret */}
      <path d="M4 21V9.5h2V21" />
      <path d="M3.5 9.5h3" />
      <path d="M5 9.5V6.5l.5-.5" />
      <path d="M4 6.5h2" />
      {/* Right Minaret */}
      <path d="M18 21V9.5h2V21" />
      <path d="M17.5 9.5h3" />
      <path d="M19 9.5V6.5l.5-.5" />
      <path d="M18 6.5h2" />
    </svg>
  );
}

/**
 * 8. Holy Quran / Mushaf on Rehal Icon
 * Sacred Quran open on a traditional wooden X-frame bookstand (Rehal/Rihal),
 * with elegant text rulings and bookmark ribbon.
 */
export function IconQuran({ size = 24, strokeWidth = 1.75, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Open Quran pages */}
      <path d="M12 4.5c-2-1.5-5.5-1.5-8-.5v10c2.5-1 6-1 8 .5 2-1.5 5.5-1.5 8-.5v-10c-2.5-1-6-1-8 .5z" />
      {/* Book spine centerline */}
      <path d="M12 4.5V14.5" />
      {/* Bookmark ribbon */}
      <path d="M12 14.5v3l1.5-1 1.5 1v-3" />
      {/* Wooden Rehal Stand crossed legs */}
      <path d="M5 16l-2 5" />
      <path d="M19 16l2 5" />
      <path d="M7 17.5l5 3.5 5-3.5" />
      <path d="M10 19.5l-4 2" />
      <path d="M14 19.5l4 2" />
    </svg>
  );
}

/**
 * 9. Holy Kaaba / Qiblah Icon
 * The cubic Baytullah in Mecca with its Kiswah golden band,
 * the golden door (Bab ar-Rahman), and base marble rim (Shadhrawan).
 */
export function IconKaaba({ size = 24, strokeWidth = 1.75, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Kaaba 3D isometric cube structure */}
      {/* Front Face */}
      <path d="M6 9l6 3v9l-6-3V9z" />
      {/* Right Face */}
      <path d="M12 12l6-3v9l-6 3v-9z" />
      {/* Top Roof Face */}
      <path d="M6 9l6-4 6 4-6 3-6-3z" />
      {/* Golden Kiswah Belt (Hizam) across front face */}
      <path d="M6 11.5l6 3" strokeWidth={strokeWidth + 0.25} />
      <path d="M12 14.5l6-3" strokeWidth={strokeWidth + 0.25} />
      {/* Kaaba Golden Door (Bab al-Kaaba) on the front-right */}
      <path d="M14 14v4.5l2-1V13l-2 1z" fill="currentColor" opacity="0.3" />
      {/* Hajr Ismail arc hint */}
      <path d="M3 18a4 4 0 0 1 2-3.5" strokeDasharray="1.5 1.5" />
    </svg>
  );
}

/**
 * 10. Tasbih / Misbaha Beads Icon
 * Circular loop of prayer beads with the Imam/separator bead and ornate tassel.
 */
export function IconTasbih({ size = 24, strokeWidth = 1.75, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Main bead ring loop */}
      <ellipse cx="12" cy="10.5" rx="7" ry="6" />
      {/* Distinct indicator beads along the path */}
      <circle cx="12" cy="4.5" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="16.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="18.8" cy="11" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="17" cy="15" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="7" cy="15" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="5.2" cy="11" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="7.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" />
      {/* Central Minaret-style Imam separator bead */}
      <path d="M11 16.5h2l-.5 2.5h-1z" fill="currentColor" />
      {/* Ornate silk tassel strands */}
      <path d="M12 19v3.5" />
      <path d="M10.5 22.5l1.5-3.5 1.5 3.5" />
    </svg>
  );
}

/**
 * 11. Hilal & Islamic Star (Crescent Emblem)
 * Traditional Islamic crest pairing the crescent moon with the balanced eight-pointed or five-pointed star.
 */
export function IconHilalStar({ size = 24, strokeWidth = 1.75, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Slender Crescent Moon */}
      <path d="M14.5 3.5a8.5 8.5 0 1 0 0 17 9 9 0 0 1 0-17z" />
      {/* Inner Star */}
      <path
        d="M17 9l.8 1.8 2 .3-1.4 1.4.3 2-1.7-.9-1.7.9.3-2-1.4-1.4 2-.3z"
        fill="currentColor"
        strokeWidth={1}
      />
    </svg>
  );
}

/**
 * 12. Islamic Lantern / Fanous Icon
 * Ramadan/Noor traditional lantern with ornate dome cap, glass lattice panels, and hanging loop.
 */
export function IconFanous({ size = 24, strokeWidth = 1.75, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Hanging ring */}
      <circle cx="12" cy="2.5" r="1.5" />
      {/* Dome roof */}
      <path d="M12 4c-1.5 0-3 1.2-3.5 2.5h7C15 5.2 13.5 4 12 4z" />
      {/* Lantern Main Body */}
      <path d="M8.5 6.5L7 11l2 6h6l2-6-1.5-4.5h-7z" />
      {/* Base stand with feet */}
      <path d="M9 17l-.5 2.5h7L15 17" />
      <path d="M8 21.5h8" />
      <path d="M8.5 19.5v2" />
      <path d="M15.5 19.5v2" />
      {/* Internal Noor/Candle glow */}
      <path d="M12 9.5v4" strokeWidth={strokeWidth + 0.5} />
      <circle cx="12" cy="9.5" r="0.75" fill="currentColor" stroke="none" />
      {/* Lattice side ribs */}
      <path d="M10.5 7l-1 4 1 5.5" opacity="0.6" />
      <path d="M13.5 7l1 4-1 5.5" opacity="0.6" />
    </svg>
  );
}

/**
 * 13. Sajdah / Prayer Mat (Joynamoz) Icon
 * Islamic prayer carpet with the pointed Mihrab arch oriented towards Makkah and fringed borders.
 */
export function IconPrayerMat({ size = 24, strokeWidth = 1.75, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Outer rug perimeter */}
      <rect x="5" y="3.5" width="14" height="17" rx="1.5" />
      {/* Top fringe */}
      <path d="M6 2v1.5M9 2v1.5M12 2v1.5M15 2v1.5M18 2v1.5" />
      {/* Bottom fringe */}
      <path d="M6 20.5V22M9 20.5V22M12 20.5V22M15 20.5V22M18 20.5V22" />
      {/* Mihrab Arch inside the carpet */}
      <path d="M8 17V10c0-2 1.8-3.5 4-4.5 2.2 1 4 2.5 4 4.5v7" />
      {/* Center rosette/geometric medallion */}
      <circle cx="12" cy="12.5" r="1.5" />
    </svg>
  );
}

/**
 * 14. Minaret (Azon minorasi) Icon
 * Lofty tower with muezzin balcony, arched windows, and crescent finial spire.
 */
export function IconMinaret({ size = 24, strokeWidth = 1.75, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Ground base */}
      <path d="M4 21h16" />
      {/* Tower trunk tapering slightly upwards */}
      <path d="M8.5 21V9.5h7V21" />
      {/* Muezzin Balcony gallery */}
      <path d="M7 9.5h10v2H7z" />
      <path d="M8 9.5V8c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v1.5" />
      {/* Spire dome with finial */}
      <path d="M9.5 7C10.5 5 12 3.5 12 3.5S13.5 5 14.5 7" />
      {/* Crescent atop spire */}
      <path d="M12 3.5V1.5" />
      <circle cx="12" cy="1.5" r="0.75" fill="currentColor" stroke="none" />
      {/* Slender arched window slots on tower */}
      <path d="M11 14v2" />
      <path d="M13 14v2" />
      <path d="M12 17.5v2" />
    </svg>
  );
}

/**
 * Complete catalog list of all bespoke Islamic Icons with metadata
 */
export const ISLAMIC_ICONS_CATALOG = [
  {
    id: 'fajr',
    name: 'Bomdod (Fajr)',
    description: 'Subhi sodiq shafaqi, tong yulduzi va tongi hilol',
    category: 'Namoz vaqtlari',
    component: IconFajr,
  },
  {
    id: 'sunrise',
    name: 'Quyosh (Ishroq)',
    description: 'Ufqdan ko\'tarilayotgan quyosh gardishi va ziyo nurlari',
    category: 'Namoz vaqtlari',
    component: IconSunrise,
  },
  {
    id: 'dhuhr',
    name: 'Peshin (Zuhr)',
    description: 'Zavoldagi quyosh va 8 burchakli islomiy naqshli nur',
    category: 'Namoz vaqtlari',
    component: IconDhuhr,
  },
  {
    id: 'asr',
    name: 'Asr (Soyalar)',
    description: 'Peshindan keyingi soya o\'lchagich va mayin qiyalik nurlari',
    category: 'Namoz vaqtlari',
    component: IconAsr,
  },
  {
    id: 'maghrib',
    name: 'Shom (Mag\'rib)',
    description: 'Quyosh botishi, shafaq yog\'dusi va ilk oqshom yulduzi',
    category: 'Namoz vaqtlari',
    component: IconMaghrib,
  },
  {
    id: 'isha',
    name: 'Hufton (Isho)',
    description: 'Yulduzli tungi osmon gumbazi va mayin osuda hilol',
    category: 'Namoz vaqtlari',
    component: IconIsha,
  },
  {
    id: 'mosque',
    name: 'Masjid (Gumbaz va Minora)',
    description: 'Qubba, muazzin minorasi va mehrob shaklidagi peshtoq',
    category: 'Muqaddas Maskonlar',
    component: IconMosque,
  },
  {
    id: 'quran',
    name: 'Qur\'oni Karim va Rahl',
    description: 'Yog\'och lavh (rahl) uzra ochiq turgan muqaddas Mushaf',
    category: 'Ibodat va Ma\'rifat',
    component: IconQuran,
  },
  {
    id: 'kaaba',
    name: 'Ka\'batulloh (Qibla)',
    description: 'Baytulloh, Kisva zarbofi tasmati va oltin eshigi',
    category: 'Muqaddas Maskonlar',
    component: IconKaaba,
  },
  {
    id: 'tasbih',
    name: 'Tasbeh (Misbaha)',
    description: 'Durlar halqasi, imoma donasi va shoyi ipakli popuk',
    category: 'Zikr va Tasbeh',
    component: IconTasbih,
  },
  {
    id: 'hilal',
    name: 'Hilol va Yulduz',
    description: 'Islom san\'atining ramziy go\'zal hiloli va nurafshon yulduzi',
    category: 'Islomiy Ramzlar',
    component: IconHilalStar,
  },
  {
    id: 'fanous',
    name: 'Fonus (Islomiy Chiroq)',
    description: 'Qadimiy shishali osma qandil va hidoyat nuri',
    category: 'Islomiy Ramzlar',
    component: IconFanous,
  },
  {
    id: 'prayermat',
    name: 'Joynamoz (Sajjada)',
    description: 'Qiblaga yuzlangan mehrobnoma naqshli ibodat gilamchasi',
    category: 'Ibodat va Ma\'rifat',
    component: IconPrayerMat,
  },
  {
    id: 'minaret',
    name: 'Minora (Azon Maskani)',
    description: 'Yuksak azon minorasi, muazzin ayvoni va hilolli cho\'qqi',
    category: 'Muqaddas Maskonlar',
    component: IconMinaret,
  },
];

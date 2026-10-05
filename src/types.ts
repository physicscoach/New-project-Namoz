/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface PrayerTime {
  id: string;
  key: 'bomdod' | 'quyosh' | 'peshin' | 'asr' | 'shom' | 'hufton';
  label: string;
  time: string; // "hh:mm" format (e.g. "04:05")
  endTime?: string; // start of the next period
  description: string;
  isQuyosh: boolean; // Quyosh is the sunrise, not a prayer itself but marks end of Bomdod
}

export interface TasbihPhrase {
  id: string;
  phrase: string;
  arabic: string;
  translation: string;
  limit: number;
}

export interface DailyWisdom {
  id: number;
  text: string;
  arabic?: string;
  source: string;
}

export interface DuaItem {
  id: string;
  title: string;
  arabic: string;
  transliteration: string;
  translation: string;
  source?: string;
}

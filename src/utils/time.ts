/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PrayerTime } from '../types';

export interface TimeRemaining {
  hours: number;
  minutes: number;
  seconds: number;
  totalSeconds: number;
}

// Convert "HH:MM" to minutes from start of day
export function parseTimeToMinutes(timeStr: string): number {
  const [hours, minutes] = timeStr.split(':').map(Number);
  return hours * 60 + minutes;
}

// Format minutes from start of day back to "HH:MM"
export function formatMinutesToTime(minutes: number): string {
  const h = Math.floor(minutes / 60) % 24;
  const m = minutes % 60;
  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
}

// Get the active prayer time and the next prayer time
export function getActiveAndNextPrayer(
  currentTimeStr: string, // "HH:MM" Format
  prayers: PrayerTime[]
): { active: PrayerTime; next: PrayerTime; isOvernight: boolean } {
  const currentMin = parseTimeToMinutes(currentTimeStr);
  
  // Sort prayers by time
  const sortedPrayers = [...prayers].sort((a, b) => parseTimeToMinutes(a.time) - parseTimeToMinutes(b.time));
  
  let activeIndex = sortedPrayers.length - 1; // Default to Hufton (last prayer)
  let isOvernight = false;

  for (let i = 0; i < sortedPrayers.length; i++) {
    const prayerMin = parseTimeToMinutes(sortedPrayers[i].time);
    const nextPrayerIndex = (i + 1) % sortedPrayers.length;
    const nextPrayerMin = parseTimeToMinutes(sortedPrayers[nextPrayerIndex].time);

    // If next prayer is earlier, it wraps around midnight (e.g. Hufton -> Bomdod)
    if (nextPrayerMin < prayerMin) {
      if (currentMin >= prayerMin || currentMin < nextPrayerMin) {
        activeIndex = i;
        isOvernight = currentMin < nextPrayerMin;
        break;
      }
    } else {
      if (currentMin >= prayerMin && currentMin < nextPrayerMin) {
        activeIndex = i;
        break;
      }
    }
  }

  const active = sortedPrayers[activeIndex];
  const next = sortedPrayers[(activeIndex + 1) % sortedPrayers.length];

  return { active, next, isOvernight };
}

// Calculate precise countdown remaining to the next prayer
export function calculateCountdown(
  now: Date,
  nextPrayerTimeStr: string
): TimeRemaining {
  const [nextH, nextM] = nextPrayerTimeStr.split(':').map(Number);
  
  const targetDate = new Date(now);
  targetDate.setHours(nextH, nextM, 0, 0);
  
  // If the target time has already passed today, it means the target is tomorrow (e.g. counting to Bomdod after Hufton)
  if (targetDate.getTime() <= now.getTime()) {
    targetDate.setDate(targetDate.getDate() + 1);
  }
  
  const diffMs = targetDate.getTime() - now.getTime();
  const totalSeconds = Math.max(0, Math.floor(diffMs / 1000));
  
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  
  return { hours, minutes, seconds, totalSeconds };
}

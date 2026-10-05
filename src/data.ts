/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PrayerTime, TasbihPhrase, DailyWisdom, DuaItem } from './types';

export const ISLAMIC_DATA = {
  dates: {
    hijri: "1447-yil 26-Zulhijja",
    gregorian: "2026-yil 12-iyun",
    dayOfWeek: "Juma",
    verseArabic: "إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَوْقُوتًا",
    verseUzbek: "«Албатта, намоз мўминларга вақти тайин этилган ва (фарз деб) битилгандир»",
    verseSource: "Niso surasi, 103-oyat"
  },
  
  prayerTimes: [
    {
      id: "p1",
      key: "bomdod",
      label: "Bomdod",
      time: "04:05",
      endTime: "04:45",
      description: "Subhi sodiqdan (tong otgandan) boshlab quyosh chiqqunigacha bo'lgan vaqt.",
      isQuyosh: false
    },
    {
      id: "p2",
      key: "quyosh",
      label: "Quyosh",
      time: "04:45",
      endTime: "12:45",
      description: "Quyoshning ufqdan chiqish vaqti. Ushbu vaqtda namoz o'qish taqiqlanadi.",
      isQuyosh: true
    },
    {
      id: "p3",
      key: "peshin",
      label: "Peshin",
      time: "12:45",
      endTime: "17:40",
      description: "Quyosh qiyomidan (tepaga kelishidan) og'gandan keyin asr vaqti kirguncha bo'lgan vaqt.",
      isQuyosh: false
    },
    {
      id: "p4",
      key: "asr",
      label: "Asr",
      time: "17:40",
      endTime: "19:51",
      description: "Har bir narsaning soyasi o'zidan ikki barobar uzun bo'lgandan boshlab shomgacha bo'lgan vaqt.",
      isQuyosh: false
    },
    {
      id: "p5",
      key: "shom",
      label: "Shom",
      time: "19:51",
      endTime: "21:45",
      description: "Quyosh botgan lahzadan boshlab ufqda qizil shafaq yo'qolgunigacha bo'lgan vaqt.",
      isQuyosh: false
    },
    {
      id: "p6",
      key: "hufton",
      label: "Hufton",
      time: "21:45",
      endTime: "04:05", // runs through to next day's Bomdod
      description: "Qizil shafaq butunlay g'oyib bo'lgandan keyin subhi sodiqqacha davom etadigan namoz vaqti.",
      isQuyosh: false
    }
  ] as PrayerTime[],

  tasbihPhrases: [
    {
      id: "t1",
      phrase: "Subhanalloh",
      arabic: "سُبْحَانَ اللهِ",
      translation: "Alloh har qanday nuqsondan pokdir",
      limit: 33
    },
    {
      id: "t2",
      phrase: "Alhamdulillah",
      arabic: "الْحَمْدُ للهِ",
      translation: "Barcha hamd va maqtovlar Alloh uchundir",
      limit: 33
    },
    {
      id: "t3",
      phrase: "Allohu Akbar",
      arabic: "اللهُ أَكْبَرُ",
      translation: "Alloh barchadan buyuk va ulug'dir",
      limit: 33
    },
    {
      id: "t4",
      phrase: "Astagfirulloh",
      arabic: "أَسْتَغْفِرُ اللهَ",
      translation: "Allohdan gunohlarimni kechirishini so'rayman",
      limit: 99
    },
    {
      id: "t5",
      phrase: "La ilaha illalloh",
      arabic: "لَا إِلٰهَ إِلَّا اللهُ",
      translation: "Allohdan o'zga haqiqiy iloh yo'qdir",
      limit: 99
    },
    {
      id: "t6",
      phrase: "Subhanallohi va bihamdihi",
      arabic: "سُبْحَانَ اللهِ وَبِحَمْدِهِ",
      translation: "Allohni ulug'lab, Unga hamd aytaman",
      limit: 99
    }
  ] as TasbihPhrase[],

  duas: [
    {
      id: "d1",
      title: "Namozdan keyingi ixcham duo",
      arabic: "اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكُ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
      transliteration: "Allohumma antas-Salamu va minkas-salam, tabarakta ya zal-Jalali val-Ikrom.",
      translation: "«Allohim, Sen Salam (barcha ayb va nuqsonlardan pok)san va tinchlik-omonlik Sendandir. Ey ulug'vorlik va hurmat-ehtirom Sohibi, Sen imtiyozlisan (barakali bo'lding)».",
      source: "Sahihi Muslim"
    },
    {
      id: "d2",
      title: "Oyatul Kursiy (Har namozdan keyin o'qiladi)",
      arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ...",
      transliteration: "Allohu laaaaa ilaaha illaa Huval-Hayyul-Qayyum; laa ta'khuzuhu sinatun' va laa nawm; lahu maa fis-samaawaati va maa fil-ard...",
      translation: "«Alloh – Undan o'zga haqiqiy iloh yo'qdir. U doimo tirik, cheksiz hayot va butun borliqni boshqarib turguvchidir. Uni na mudroq bosadi va na uyqu...»",
      source: "Baqara surasi, 255-oyat (Fazilati: Har bir farz namozidan keyin uni o'qigan kishini jannatga kirishidan faqat o'lim to'sib turadi - Nasoiy)"
    },
    {
      id: "d3",
      title: "Allohning yordamini so'rash duosi",
      arabic: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
      transliteration: "Allohumma a'inni 'ala zikrika va shukrika va husni 'ibadatik.",
      translation: "«Allohim! Seni zikr etishda, Senga shukrona aytishda va Senga chiroyli tarzda ibodat qilishda menga yordam bergin».",
      source: "Abu Dovud"
    }
  ] as DuaItem[],

  wisdoms: [
    {
      id: 1,
      text: "Namoz – jannatning kalitidir va imonning eng asosiy ustunidir.",
      source: "Imom Termiziy rivoyati"
    },
    {
      id: 2,
      text: "Farz namozlaringizni o'z vaqtida o'qish Alloh taologa eng sevimli bo'lgan amallardandir.",
      source: "Sahihi Buxoriy"
    },
    {
      id: 3,
      text: "Albatta, farz qilingan namozlar qiyomat kunida banda hisob-kitob qilinadigan eng birinchi amaldir.",
      source: "Imom Abu Dovud"
    },
    {
      id: 4,
      text: "Kim bir kunda besh vaqt namozni uydagi daryodan besh marta yuvinib chiqqanday ixlos bilan ado etsa, uning tanasida hech bir kir (gunoh) qolmaydi.",
      source: "Sahihi Muslim"
    },
    {
      id: 5,
      text: "Sajdadagi lahza banda o'z Parvardigoriga eng yaqin bo'lgan holatidir. U paytda duolarni ko'paytiring.",
      source: "Imom Nasoiy rivoyati"
    }
  ] as DailyWisdom[]
};

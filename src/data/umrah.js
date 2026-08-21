export const umrahMeta = {
  title: "Umrah Pilgrimage",
  dates: "22 – 30 August 2026",
  nights: 7,
  travelers: 5,
  agency: "Fly Hajj Aviation, Gulshan",
  route: "Dhaka → Jeddah → Makkah → Madinah → Dhaka",
};

export const umrahTravelers = [
  { name: "Rose", role: "Adult", rate: "৳2,15,000" },
  { name: "Farzana", role: "Adult", rate: "৳2,15,000" },
  { name: "Father-in-law", role: "Adult", rate: "৳2,15,000" },
  { name: "Mother-in-law", role: "Adult", rate: "৳2,15,000" },
  { name: "Affaan (son)", role: "Child", rate: "৳50,000" },
];

export const umrahFlights = [
  {
    leg: "Outbound",
    date: "Sat 22 Aug 2026",
    airline: "Qatar Airways · PNR 7FGNRA",
    flights: "QR639 → QR1190",
    route: "DAC 04:10 → DOH 06:20 · DOH 07:40 → JED 10:10",
    note: "Boeing 777-300ER both legs. Dhaka Terminal 1 · Jeddah Terminal 1. Connection in Doha 1h 20m. Economy (N) — 25 kg adult / 10 kg infant. All 5 travellers.",
  },
  {
    leg: "Return",
    date: "Sat 29 Aug 2026",
    airline: "Biman Bangladesh · Ref AS261269188",
    flights: "BG338",
    route: "MED 23:30 → DAC 09:10 (+1, Sun 30 Aug)",
    note: "Boeing 787-8 Dreamliner, nonstop 6h 40m from MADINAH (not Jeddah). Arrives Dhaka Terminal 2 at 09:10 on Sunday 30 August. Airline ref AXOKQA · CRS ref HNQWHJ. All 5 travellers. CONFIRMED.",
  },
];

// Umrah ticket references
export const umrahTickets = {
  qatar: {
    airline: "Qatar Airways", ref: "PNR 7FGNRA",
    issuedBy: "Booked via travelcraft2020@gmail.com",
    passengers: [
      { name: "Mohammad Rezwanul Haque Rose", ticket: "157-2139272172" },
      { name: "Farzana Binta Rahman", ticket: "157-2139272169" },
      { name: "Md Habibur Rahman", ticket: "157-2139272171" },
      { name: "Jakia Rahman", ticket: "157-2139272170" },
      { name: "Affaan Rehbar", ticket: "157-2139272168" },
    ],
    note: "Economy (N). Checked baggage 25 kg per adult, 10 kg infant. Manage via 'Manage Booking' on qatarairways.com.",
  },
  biman: {
    airline: "Biman Bangladesh Airlines", ref: "AS261269188 · Airline AXOKQA · CRS HNQWHJ",
    issuedBy: "Booked 6 Aug 2026 · Status CONFIRMED",
    passengers: [
      { name: "Mohammad Rezwanul Haque Rose", ticket: "9975287216466" },
      { name: "Farzana Binta Rahman", ticket: "9975287216467" },
      { name: "Jakia Rahman", ticket: "9975287216468" },
      { name: "Md Habibur Rahman", ticket: "9975287216469" },
      { name: "Affaan Rehbar", ticket: "9975287216470" },
    ],
    note: "⚠️ Refund / date-change penalties up to 100% may apply. Departs from MADINAH — plan the Madinah→airport transfer for a 23:30 departure (be at MED by ~20:30).",
  },
};

export const umrahHotels = [
  {
    city: "Makkah",
    name: "Mövenpick Hotel Hajar Tower",
    room: "1 Quad Room · Bed & Breakfast",
    nights: "4 nights (22–26 Aug)",
    ref: "Ref 6197 · via Raed Al Asfar (Director of Operations)",
    detail: "Directly at the Abraj Al Bait complex beside Masjid al-Haram — walking distance to the Haram, which matters enormously with a toddler and elders in the group. Booked 14 Jul 2026.",
  },
  {
    city: "Madinah",
    name: "Elaf Taiba Hotel",
    room: "1 Junior Suite · Bed & Breakfast",
    nights: "3 nights (26–29 Aug)",
    ref: "Voucher 2869 · Diamond Hotel Booking · CONFIRMED",
    detail: "Booked 27 Jul 2026 for 4 pax. Check-in from 16:00, checkout 12:00. Floor not confirmed — depends on availability. ⚠️ Reservations may be auto-cancelled after 18:00 if the hotel isn't told about a late arrival, so call ahead on arrival day.",
  },
];

export const umrahDays = [
  {
    day: 1, date: "Sat 22 Aug", city: "Meccah",
    title: "Arrive & First Umrah",
    items: [
      { label: "Fly Dhaka → Jeddah", detail: "Qatar Airways QR639/QR1190, via Doha. All 5 travelers." },
      { label: "Transfer to Meccah", detail: "Hotel transfer arranged by Fly Hajj Aviation." },
      { label: "Check in — Mövenpick Makkah", detail: "Superior Quad Room, Partial Haram View." },
      { label: "Perform Umrah", detail: "Begin the pilgrimage after rest and refreshment. Plan around Affaan's nap and quieter hours." },
    ],
  },
  {
    day: 2, date: "Sun 23 Aug", city: "Meccah",
    title: "Worship & Rest",
    items: [
      { label: "Prayers at Masjid al-Haram", detail: "Flexible day for worship, reflection, and rest." },
      { label: "Toddler-friendly pacing", detail: "Avoid crowded Tawaf times (after Maghrib) with Affaan in arms." },
    ],
  },
  {
    day: 3, date: "Mon 24 Aug", city: "Meccah",
    title: "Night Stay & Ziyarah",
    items: [
      { label: "Ziyarah around Meccah", detail: "Included in the package — visit historic sites with the guide." },
      { label: "Evening worship", detail: "Return for night prayers at the Haram." },
    ],
  },
  {
    day: 4, date: "Tue 25 Aug", city: "Meccah",
    title: "Worship & Preparation",
    items: [
      { label: "Final full day in Meccah", detail: "Worship, rest, and pack for the Madina transfer." },
      { label: "Confirm car pickup", detail: "Reconfirm Staria 7-seater time for tomorrow's transfer." },
    ],
  },
  {
    day: 5, date: "Wed 26 Aug", city: "Meccah → Madina",
    title: "Travel to Madina",
    transit: true,
    items: [
      { label: "Check out — Mövenpick Makkah", detail: "4 nights in Meccah complete." },
      { label: "Drive to Madina", detail: "Toyota Staria 7-seater — comfortable for 4 adults, Affaan, and luggage." },
      { label: "Check in — Elaf Taiba Hotel", detail: "Junior Suite / Standard Quadruple Room." },
    ],
  },
  {
    day: 6, date: "Thu 27 Aug", city: "Madina",
    title: "Night Stay & Ziyarah",
    items: [
      { label: "Visit Masjid an-Nabawi", detail: "Prayers at the Prophet's Mosque." },
      { label: "Ziyarah around Madina", detail: "Included — guided visits to historic sites." },
    ],
  },
  {
    day: 7, date: "Fri 28 Aug", city: "Madina",
    title: "Jummah & Reflection",
    items: [
      { label: "Jummah prayers", detail: "Friday congregational prayers at Masjid an-Nabawi." },
      { label: "Final evening", detail: "Rest and prepare for tomorrow's journey home." },
    ],
  },
  {
    day: 8, date: "Sat 29 Aug", city: "Madina → Dhaka",
    title: "Journey Home",
    transit: true,
    items: [
      { label: "Check out — Elaf Taiba", detail: "3 nights in Madina complete." },
      { label: "Fly home", detail: "Emirates EK810/EK582, departs 17:35. All 5 travelers to Dhaka." },
    ],
  },
];

export const umrahCosts = [
  { item: "Travel Package (4 adults + Affaan)", bdt: "৳9,10,000", usd: "~$7,398", note: "Flight, hotel, visa, Ziyarah — all included" },
  { item: "Food — Lunch & Dinner (mid-range, 7 days)", bdt: "৳68,900", usd: "~$560", note: "5 people, 2 meals/day, ~SAR 30/meal" },
  { item: "SIM / data (family)", bdt: "৳6,600 – ৳13,000", usd: "~$54–106", note: "STC Sawa Visitor + eSIMs — see Comms tab (1 SAR ≈ ৳32.80)" },
  { item: "Shopping (family budget)", bdt: "৳50,000", usd: "~$407", note: "Gifts, dates, prayer items, abayas" },
];

export const umrahGrandTotal = { bdt: "৳10,38,700", usd: "~$8,445" };

export const umrahLogistics = [
  { label: "Travel Agency", value: "Fly Hajj Aviation, Gulshan, Dhaka" },
  { label: "Primary Guide (Dhaka)", value: "Mr. Fahim — +880 1737-600000" },
  { label: "KSA Ground Guide", value: "To be confirmed closer to travel date" },
  { label: "Meccah → Madina Transport", value: "Toyota Staria, 7-seater" },
  { label: "Food", value: "Not in package — paid separately (mid-range est. ৳68,900)" },
  { label: "Ziyarah", value: "Included in package for all travelers" },
  { label: "Visa", value: "Included in package" },
];

export const umrahChecklist = [
  {
    section: "Documents & Essentials",
    items: [
      "Passport (valid 6+ months) — all 5 travelers",
      "Saudi visa confirmation / approval printout",
      "Flight e-tickets — Qatar Airways (22 Aug) & Emirates (29 Aug)",
      "Hotel booking confirmations — Mövenpick & Elaf Taiba",
      "Nusuk app installed + Umrah permit downloaded offline",
      "Travel insurance documents",
      "Fly Hajj Aviation contact — Mr. Fahim +880 1737-600000",
      "Cash — Saudi Riyal (SAR) for food, shopping, tips",
      "International debit/credit card",
      "Printed copies of all bookings (backup to phone)",
    ],
  },
  {
    section: "Connectivity & Phone",
    items: [
      "STC Sawa Visitor SIM planned — strongest signal inside the Haram",
      "OR eSIM (Airalo/Holafly) set up before flying to skip the airport queue",
      "Offline maps of Makkah + Madinah Haram areas downloaded on Wi-Fi",
      "WhatsApp ready for family calls (now works on Saudi networks)",
      "Power bank charged — long days between hotel and Haram",
      "All 5 travelers' phone numbers shared with Mr. Fahim + each other",
    ],
  },
  {
    section: "Ihram & Worship Items",
    items: [
      "Ihram cloth (2 sets) — for men",
      "Ihram belt / money pouch",
      "Abaya / modest prayer clothing — for women",
      "Prayer mat (compact travel size)",
      "Tasbih (prayer beads)",
      "Small Quran or offline Quran app",
      "Du'a and Ziyarah guidebook (see the Guide tab)",
      "Unscented soap and shampoo (required in Ihram)",
      "Sandals / slippers (easy on-off for Haram)",
    ],
  },
  {
    section: "Health & Comfort",
    items: [
      "Personal medications (extra supply + prescriptions)",
      "First aid — paracetamol, ORS, band-aids, antiseptic",
      "Comfortable broken-in walking shoes/sandals",
      "Sunscreen (high SPF)",
      "Refillable water bottle",
      "Hand sanitizer and face masks",
      "Lip balm and moisturizer (dry climate)",
      "Small backpack or sling bag",
    ],
  },
  {
    section: "For Affaan (Toddler)",
    items: [
      "Nappies — pack generously, extra for transit days",
      "Baby formula / familiar snacks",
      "Lightweight foldable stroller",
      "Baby carrier — essential for crowded Tawaf areas",
      "Comfort toy + small distraction toys",
      "Child Panadol/Calpol and thermometer",
      "Sun hat and light layers for AC rooms",
    ],
  },
  {
    section: "Before You Leave Dhaka",
    items: [
      "Confirm Staria 7-seater pickup time and driver contact",
      "Reconfirm flight times 48 hours before departure",
      "Notify bank of international travel",
      "Charge power banks; pack universal adapter",
      "Share itinerary and hotel contacts with family at home",
      "Confirm KSA ground guide with Fly Hajj Aviation",
    ],
  },
];

export const umrahGuide = [
  {
    step: 1,
    title: "Ihram",
    subtitle: "Before reaching Meeqat",
    icon: "ihram",
    intro: "Enter the sacred state before crossing the Meeqat boundary.",
    prep: [
      "Remove unwanted hair, trim nails",
      "Make ghusl (full bath) and wudhu — or at least wudhu",
      "Men: wear two white un-sewn cloths. Women: regular modest clothes",
      "Women must not cover the face; men must not cover the head during Ihram",
    ],
    duas: [
      {
        label: "Intention (Niyyah)",
        arabic: "لَبَّيْكَ اللّٰهُمَّ بِعُمْرَة",
        translit: "Labbayk Allahumma bi-'Umrah",
        english: "Here I am O Allah, in response to Your call, making Umrah.",
      },
      {
        label: "Talbiyah — recite often (men aloud, women quietly)",
        arabic: "لَبَّيْكَ اللّٰهُمَّ لَبَّيْك، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْك، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْك، لَا شَرِيكَ لَك",
        translit: "Labbayk Allahumma Labbayk, Labbayk laa shareeka laka Labbayk, Innal hamda wanni'mata laka wal-mulk, laa shareeka lak",
        english: "Here I am O Allah, here I am. You have no partner, here I am. Indeed all Praise, Grace and Sovereignty belong to You. You have no partner.",
      },
      {
        label: "Entering Masjid al-Haram (right foot first)",
        arabic: "اللّٰهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِك",
        translit: "Allahumma aftah lee abwaaba rahmatika",
        english: "O Allah, open the doors of Your Mercy for me.",
      },
    ],
  },
  {
    step: 2,
    title: "Tawaaf",
    subtitle: "Circling the Ka'bah 7 times",
    icon: "tawaf",
    diagram: "/diagram-tawaf.svg",
    diagramCaption: "The circuit begins and ends at the Black Stone (Hajar Aswad), passing the Yemeni Corner and Maqam Ibrahim.",
    intro: "Circle the Ka'bah seven times, starting and ending at the Black Stone (al-Hajar al-Aswad).",
    prep: [
      "Begin at the Black Stone; men uncover the right shoulder (Idhtiba)",
      "Face the Black Stone, gesture toward it with the right hand",
      "Men walk briskly (Raml) for the first 3 circuits, normal pace for the last 4",
      "No specific du'a is required — recite Qur'an or any du'a you wish",
      "After 7 circuits: cover the shoulder, pray 2 rakaats behind Maqam Ibrahim, drink Zamzam",
    ],
    duas: [
      {
        label: "At the start of each circuit",
        arabic: "اللّٰهُ أَكْبَر",
        translit: "Allahu Akbar",
        english: "Allah is the Greatest.",
      },
      {
        label: "Between the Yemeni Corner and Black Stone (Sunnah)",
        arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّار",
        translit: "Rabbanaa aatinaa fid-dunyaa hasanatan wa fil-aakhirati hasanatan wa qinaa 'adhaaban-naar",
        english: "Our Lord! Give us good in this world and good in the Hereafter, and save us from the torment of the Fire.",
      },
    ],
  },
  {
    step: 3,
    title: "Sa'ee",
    subtitle: "Between Safa & Marwah, 7 times",
    icon: "saee",
    diagram: "/diagram-saee.svg",
    diagramCaption: "Start at Mount Safa and finish at Mount Marwah. Men run between the two green lights; women walk normally.",
    intro: "Walk seven times between the hills of Safa and Marwah, beginning at Safa and finishing at Marwah.",
    prep: [
      "Start at Safa, walk to Marwah (1st circuit), Marwah to Safa (2nd), and so on",
      "Finish the 7th circuit at Marwah",
      "Men run between the green lights; women walk normally",
    ],
    duas: [
      {
        label: "At the foot of Safa (start)",
        arabic: "إِنَّ الصَّفَا وَالْمَرْوَةَ مِنْ شَعَائِرِ اللّٰهِ",
        translit: "Innas-safaa wal-marwata min sha'aa'irillaah",
        english: "Verily, Safa and Marwah are among the symbols of Allah.",
      },
      {
        label: "Upon completing each round",
        arabic: "اللّٰهُ أَكْبَر، اللّٰهُ أَكْبَر، اللّٰهُ أَكْبَر، لَا إِلٰهَ إِلَّا اللّٰهُ وَحْدَهُ لَا شَرِيكَ لَه",
        translit: "Allahu Akbar (×3), laa ilaaha illallahu wahdahu laa shareeka lah…",
        english: "Allah is the Greatest (×3). There is none worthy of worship except Allah alone, without partner…",
      },
    ],
  },
  {
    step: 4,
    title: "Halq / Taqseer",
    subtitle: "Shaving or trimming the hair",
    icon: "hair",
    intro: "Complete the Umrah by cutting the hair — after this, all Ihram restrictions are lifted.",
    prep: [
      "Men: shave the entire head (preferable) or trim evenly all over",
      "Women: trim one fingertip-length of hair",
      "Leave the mosque with the left foot",
      "Remove Ihram — Umrah is now complete",
    ],
    duas: [
      {
        label: "Leaving the mosque (left foot first)",
        arabic: "اللّٰهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِك",
        translit: "Allahumma innee as'aluka min fadhlika",
        english: "O Allah, verily I ask You from Your Favour.",
      },
    ],
  },
];

export const madinaNote = {
  title: "Visiting Madina",
  body: "Visiting Madina is not obligatory for Umrah, but there is great reward in visiting Masjid an-Nabawi (the Prophet's Mosque). The Prophet ﷺ said one prayer there is better than 1,000 prayers elsewhere, except Masjid al-Haram. Whoever makes wudhu at home and prays at Masjid Quba earns a reward like that of an Umrah.",
};

// ─── COMMUNICATION — SIM & DATA IN SAUDI ARABIA ──────────────────────────────
// Rates: SAR pegged 3.75/USD; ~1 USD = ৳123 (Jul 2026) → 1 SAR ≈ ৳32.80
export const umrahSimOperators = [
  {
    name: "STC (Sawa Visitor)",
    star: true,
    coverage: "Strongest network inside Masjid al-Haram and Masjid an-Nabawi during peak crowding — the safest pick for staying connected during Tawaaf and busy prayer times.",
    plans: [
      { label: "Sawa Visitor 35", data: "6 GB", validity: "7 days", price: "SAR 40.25 (+VAT)", bdt: "≈ ৳1,485" },
      { label: "Sawa Visitor 104", data: "20 GB", validity: "30 days", price: "SAR ~104", bdt: "≈ ৳3,840" },
    ],
    note: "STC counters sit immediately past customs at Jeddah arrivals. During peak Umrah season expect longer queues — an eSIM bought in advance skips this entirely.",
  },
  {
    name: "Mobily (Visitors)",
    star: false,
    coverage: "Excellent value and strong in cities; slightly behind STC specifically inside the Haram during the busiest hours.",
    plans: [
      { label: "Visitors 90", data: "55 GB", validity: "30 days", price: "SAR 103.50", bdt: "≈ ৳3,845" },
      { label: "Visitors 150", data: "40 GB", validity: "90 days", price: "SAR 150", bdt: "≈ ৳5,570" },
    ],
    note: "Best data-per-riyal of the three if you're mostly in Makkah/Madinah city areas rather than deep inside crowd surges.",
  },
  {
    name: "Zain (Visitor)",
    star: false,
    coverage: "Good all-round; unique Call User Group (CUG) lets your whole family call each other free on matching Zain visitor plans — handy for staying in touch inside the Haram crowds.",
    plans: [
      { label: "Visitor 40", data: "7 GB", validity: "14 days", price: "SAR 40", bdt: "≈ ৳1,475" },
      { label: "Visitor 85", data: "28 GB", validity: "21 days", price: "SAR 85", bdt: "≈ ৳3,130" },
    ],
    note: "Cheapest entry price of the three. The free family-to-family calling is genuinely useful if all 5 travellers get matching Zain SIMs.",
  },
];

export const umrahSimRecommendation = "Get STC Sawa Visitor for the strongest signal inside the Haram itself — this matters most during Tawaaf and peak prayer crowding when towers are saturated. If the whole family wants free calls to each other, Zain's Visitor plans with Call User Group is worth considering instead. Buy at Jeddah or Madinah airport arrivals (passport + border number, ~10–15 min activation, no Iqama needed) or set up an eSIM (Airalo/Holafly) before flying to skip the queue entirely.";

export const umrahSimTips = [
  "Bring your passport — needed for SIM registration; a fingerprint scan is standard at the counter.",
  "No Iqama required — tourists and Umrah visitors register with passport + border number only.",
  "eSIM alternative: Airalo or Holafly activate before you fly — no airport queue, no physical SIM swap.",
  "WhatsApp voice/video calls are now generally working on local Saudi networks and eSIMs, after years of restriction — but keep messaging as a fallback if calls drop.",
  "Download your Nusuk permit and offline maps of the Haram area on good Wi-Fi before entering high-congestion zones — data loads slowly when towers are saturated.",
  "Airport Wi-Fi is free in arrivals/departures at Jeddah and Madinah — enough to activate an eSIM or check messages while queuing for a physical SIM.",
];

// ─── ARABIC PHRASES — pronunciation in English ───────────────────────────────
export const arabicPhraseNote = "In Makkah and Madinah many shopkeepers and drivers speak Urdu, Hindi, or Bangla — you'll manage. But even a few words of Arabic changes how you're received, especially with hotel staff and taxi drivers. Say them simply; nobody expects perfect pronunciation.";

export const arabicPhrases = [
  {
    group: "Greetings & courtesy", icon: "🤲",
    items: [
      { ar: "السَّلامُ عَلَيْكُم", say: "as-salaamu ʿalaykum", mean: "Peace be upon you (the universal greeting)" },
      { ar: "وَعَلَيْكُمُ السَّلام", say: "wa ʿalaykumu s-salaam", mean: "And peace be upon you (the reply)" },
      { ar: "شُكْرًا", say: "shukran", mean: "Thank you" },
      { ar: "عَفْوًا", say: "ʿafwan", mean: "You're welcome / Excuse me" },
      { ar: "مِن فَضْلِك", say: "min faḍlik", mean: "Please" },
      { ar: "إِن شاءَ الله", say: "in shaa Allah", mean: "God willing (used constantly)" },
      { ar: "جَزاكَ اللهُ خَيْرًا", say: "jazaak Allahu khayran", mean: "May Allah reward you with good (warmest thanks)" },
      { ar: "نَعَم / لا", say: "naʿam / laa", mean: "Yes / No" },
    ],
  },
  {
    group: "At the Haram", icon: "🕋",
    items: [
      { ar: "أَيْنَ الحَجَرُ الأَسْوَد؟", say: "ayna al-ḥajar al-aswad?", mean: "Where is the Black Stone?" },
      { ar: "أَيْنَ المَسْعى؟", say: "ayna al-masʿaa?", mean: "Where is the Sa'ee area?" },
      { ar: "أَيْنَ بابُ...؟", say: "ayna baab...?", mean: "Where is Gate...? (then the number)" },
      { ar: "أَيْنَ مَقامُ إِبْراهيم؟", say: "ayna maqaam Ibraheem?", mean: "Where is Maqam Ibrahim?" },
      { ar: "أَيْنَ ماءُ زَمْزَم؟", say: "ayna maa' Zamzam?", mean: "Where is the Zamzam water?" },
      { ar: "مَتى الصَّلاة؟", say: "mataa aṣ-ṣalaah?", mean: "When is the prayer?" },
      { ar: "أَيْنَ مُصَلّى النِّساء؟", say: "ayna muṣallaa an-nisaa'?", mean: "Where is the women's prayer area?" },
      { ar: "أَيْنَ المِصْعَد؟", say: "ayna al-miṣʿad?", mean: "Where is the lift/elevator?" },
    ],
  },
  {
    group: "Food & halal", icon: "🍽️",
    items: [
      { ar: "طَعامٌ حَلال", say: "ṭaʿaam ḥalaal", mean: "Halal food (everything in KSA is halal, but useful phrasing)" },
      { ar: "ماء", say: "maa'", mean: "Water" },
      { ar: "بِدونِ سُكَّر", say: "bidoon sukkar", mean: "Without sugar" },
      { ar: "غَيْرُ حارّ", say: "ghayr ḥaarr", mean: "Not spicy (for Affaan's food)" },
      { ar: "لَذيذ", say: "ladheedh", mean: "Delicious" },
      { ar: "الحِساب مِن فَضْلِك", say: "al-ḥisaab min faḍlik", mean: "The bill, please" },
      { ar: "طَعامٌ لِلأَطْفال", say: "ṭaʿaam lil-aṭfaal", mean: "Food for children" },
    ],
  },
  {
    group: "Shopping & money", icon: "💰",
    items: [
      { ar: "بِكَم هٰذا؟", say: "bikam haadhaa?", mean: "How much is this?" },
      { ar: "غالي جِدًّا", say: "ghaali jiddan", mean: "Very expensive (polite bargaining)" },
      { ar: "آخِرُ سِعْر؟", say: "aakhir siʿr?", mean: "Last/best price?" },
      { ar: "واحِد / اثْنان / ثَلاثة", say: "waaḥid / ithnaan / thalaatha", mean: "1 / 2 / 3" },
      { ar: "أَرْبَعة / خَمْسة / عَشَرة", say: "arbaʿa / khamsa / ʿashara", mean: "4 / 5 / 10" },
      { ar: "مِئة / أَلْف", say: "mi'a / alf", mean: "Hundred / Thousand" },
      { ar: "هَل تَقْبَلُ البِطاقة؟", say: "hal taqbal al-biṭaaqa?", mean: "Do you accept cards?" },
    ],
  },
  {
    group: "Getting around", icon: "🚕",
    items: [
      { ar: "إِلى الحَرَم مِن فَضْلِك", say: "ilaa al-ḥaram min faḍlik", mean: "To the Haram, please" },
      { ar: "إِلى الفُنْدُق", say: "ilaa al-funduq", mean: "To the hotel" },
      { ar: "كَم الأُجْرة؟", say: "kam al-ujra?", mean: "How much is the fare? (agree BEFORE riding)" },
      { ar: "قِف هُنا", say: "qif hunaa", mean: "Stop here" },
      { ar: "أَيْنَ الحَمّام؟", say: "ayna al-ḥammaam?", mean: "Where is the toilet?" },
      { ar: "يَمين / يَسار", say: "yameen / yasaar", mean: "Right / Left" },
      { ar: "المَطار", say: "al-maṭaar", mean: "The airport" },
    ],
  },
  {
    group: "Help & emergencies", icon: "🆘",
    items: [
      { ar: "ساعِدْني", say: "saaʿidnee", mean: "Help me" },
      { ar: "أَنا تائِه", say: "anaa taa'ih", mean: "I am lost" },
      { ar: "ضاعَ ابْني", say: "ḍaaʿa ibnee", mean: "My son is lost (know this one)" },
      { ar: "طَبيب / مُسْتَشْفى", say: "ṭabeeb / mustashfaa", mean: "Doctor / Hospital" },
      { ar: "صَيْدَلِيَّة", say: "ṣaydaliyya", mean: "Pharmacy" },
      { ar: "لا أَفْهَم", say: "laa afham", mean: "I don't understand" },
      { ar: "هَل تَتَكَلَّمُ الإِنْجِليزِيَّة؟", say: "hal tatakallam al-ingleeziyya?", mean: "Do you speak English?" },
      { ar: "أَنا مِن بَنْغلاديش", say: "anaa min Bangladesh", mean: "I am from Bangladesh" },
    ],
  },
];

// ─── PILGRIMAGE PROGRESS ─────────────────────────────────────────────────────
export const umrahRiteSteps = [
  { key: "ihram", label: "Ihram", icon: "👕", note: "Enter the sacred state before Meeqat" },
  { key: "tawaf", label: "Tawaaf", icon: "🕋", note: "Seven circuits around the Ka'bah" },
  { key: "saee", label: "Sa'ee", icon: "🏃", note: "Seven walks between Safa & Marwah" },
  { key: "halq", label: "Halq / Taqseer", icon: "✂️", note: "Cutting the hair — Umrah complete" },
];

export const umrahJourneyStats = [
  { k: "5", l: "travellers" },
  { k: "8", l: "days" },
  { k: "2", l: "holy cities" },
  { k: "4", l: "rites" },
];

// ─── SAUDI VISAS (KSA eVisa, issued 03/08/2026) ──────────────────────────────
export const umrahVisaMeta = {
  type: "Umrah – عمرة",
  issued: "03 August 2026",
  validUntil: "02 August 2027",
  stay: "90 days",
  place: "Saudi Digital Embassy – السفارة السعودية الرقمية",
  operator: "شركة رياض الحرمين لخدمات المعتمرين (Riyadh Al-Haramain Umrah Services)",
  agent: "الناصر افياشن سرفيسيس (Al Nasser Aviation Services)",
  note: "All five visas issued together on 3 Aug 2026, valid a full year with a 90-day permitted stay.",
  restrictions: [
    "Not permitted for Hajj, nor to enter or stay in the Kingdom from 01 Dhu al-Qi'dah to 14 Dhu al-Hijjah.",
    "After first entry, a prior Umrah permit and a confirmed Umrah package from the Ministry of Hajj and Umrah are required — get the permit through the Nusuk app.",
  ],
};

export const umrahVisas = [
  { name: "Mohammad Rezwanul Haque Rose", visa: "6170898062", passport: "E00179207", dob: "18/12/1992", app: "E822398652" },
  { name: "Farzana Binta Rahman", visa: "6170898077", passport: "A13706191", dob: "09/09/1994", app: "E822398667" },
  { name: "Md Habibur Rahman", visa: "6170898058", passport: "A04175631", dob: "15/01/1957", app: "E822398650" },
  { name: "Jakia Rahman", visa: "6170898076", passport: "A08954940", dob: "09/03/1971", app: "E822398666" },
  { name: "Affaan Rehbar", visa: "6170898061", passport: "A09045472", dob: "30/09/2024", app: "E822398649" },
];

// ─── PICK & DROP / MEET & GREET ──────────────────────────────────────────────
export const umrahTransfers = [
  {
    leg: "Dhaka → Airport (departure)",
    date: "Fri 21 Aug 2026 · report 23:45",
    provider: "Trivia Aviation Ltd — MTB Cardholder Program",
    vehicle: "Dh-Mt-Cha-52-0323",
    driver: "Md. Maksud Alam Sumon",
    driverPhone: "01721882860",
    from: "Dhaka North Cantonment (1216), Bihongo, Moinul Road Area, Dhaka Cantonment",
    to: "Hazrat Shahjalal Intl — QR639 Qatar Airways",
    office: "Trivia Aviation · Md. Mahabub Hossain (Manager) · +88 02 883 7694-6 · +88 0192 991 8222",
    note: "Report 23:45 on 21 Aug for the 04:10 QR639 on 22 Aug.",
  },
  {
    leg: "Dhaka → Airport (backup / alternate confirmation)",
    date: "Fri 21 Aug 2026 · report 23:45",
    provider: "Convoy Service, Airport Booth — MTB Cardholder Program",
    vehicle: "28-1655 (Toyota Premio)",
    driver: "Mohiuddin / Zillur",
    driverPhone: "01404472119",
    from: "Dhaka North Cantonment (1216), Bihongo, Moinul Road Area, Dhaka Cantonment",
    to: "Hazrat Shahjalal Intl — QR639 Qatar Airways",
    office: "Convoy Airport Booth · 01312331376",
    note: "⚠️ TWO providers have confirmed the same 21 Aug 23:45 pickup (Trivia and Convoy). Confirm with MTB which one is actually coming so you don't have two cars — or one none.",
  },
];

export const umrahTransferNote = "Both services come free under your MTB Mutual Trust Bank cardholder Meet & Greet / Pick & Drop program. If the chauffeur changes, they SMS the new details. Separate MTB Meet & Greet requests were also placed for arrival — check the MTB Neo app for those order IDs.";

// ─── GROUND CONTACTS IN SAUDI ────────────────────────────────────────────────
export const umrahGroundContacts = [
  { city: "Makkah", name: "Ismail", phone: "+966 56 872 5752", note: "Local ground contact in Makkah — Saudi number, reachable on WhatsApp." },
  { city: "Madinah", name: "Basir", phone: "+880 1643-350167", note: "Ground contact for Madinah — Bangladeshi number, so use WhatsApp once you have data in KSA." },
  { city: "Dhaka (agency)", name: "Mr. Fahim — Fly Hajj Aviation", phone: "+880 1737-600000", note: "Your booking agency in Gulshan; first call for any package or hotel issue." },
];

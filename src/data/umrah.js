export const umrahMeta = {
  title: "Umrah Pilgrimage",
  dates: "22 – 29 August 2026",
  nights: 7,
  travelers: 5,
  agency: "Fly Hajj Aviation, Gulshan",
  route: "Dhaka → Meccah → Madina → Dhaka",
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
    date: "22 Aug 2026",
    airline: "Qatar Airways",
    flights: "QR639 / QR1190",
    route: "Dhaka (DAC) → Jeddah (JED)",
    note: "One stop via Doha. All 5 travelers.",
  },
  {
    leg: "Return",
    date: "29 Aug 2026",
    airline: "Emirates",
    flights: "EK810 / EK582",
    route: "Jeddah/Madina → Dhaka (DAC)",
    note: "Departs 17:35. All 5 travelers return together.",
  },
];

export const umrahHotels = [
  {
    city: "Meccah",
    name: "Mövenpick Makkah",
    room: "Superior Quad Room · Partial Haram View",
    nights: "4 nights (22–26 Aug)",
  },
  {
    city: "Madina",
    name: "Elaf Taiba Hotel",
    room: "Junior Suite · Standard Quadruple Room",
    nights: "3 nights (26–29 Aug)",
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
  { item: "Shopping (family budget)", bdt: "৳50,000", usd: "~$407", note: "Gifts, dates, prayer items, abayas" },
];

export const umrahGrandTotal = { bdt: "৳10,28,900", usd: "~$8,365" };

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
      "Travel insurance documents",
      "Fly Hajj Aviation contact — Mr. Fahim +880 1737-600000",
      "Cash — Saudi Riyal (SAR) for food, shopping, tips",
      "International debit/credit card",
      "Printed copies of all bookings (backup to phone)",
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
      "Du'a and Ziyarah guidebook",
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

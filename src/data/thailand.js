export const thailandMeta = {
  title: "Thailand Family Holiday",
  dates: "31 Aug – 8 Sep 2026",
  nights: "8 nights (5 Koh Samui + 3 Bangkok)",
  travelers: "Rose, Farzana & Affaan (21 months)",
  route: "Dhaka → Bangkok → Koh Samui → Bangkok → Dhaka",
};

export const thailandFlights = [
  { leg: "Dhaka → Bangkok", op: "Thai Airways TG340 · Economy (S)", route: "DAC 02:30 → BKK 06:00 (Suvarnabhumi)", time: "Mon 31 Aug · 2h30m nonstop", note: "Ticketed & confirmed · Ref F4XLVE · Terminal 2 · Seats 39A (Farzana) / 39B (Rose + Affaan infant) · 1 piece 23 kg each. Red-eye landing 06:00 with ~4 hrs to the Samui connection." },
  { leg: "Bangkok → Koh Samui", op: "Bangkok Airways PG129 · Economy (K)", route: "BKK 09:55 → USM 11:05", time: "Mon 31 Aug · 1h10m nonstop", note: "Ticketed & confirmed · Ref FPSCKQ · Seats 09A (Farzana + infant) / 09B (Rose) · 20 kg checked each, 10 kg infant. Bangkok Airways lounges are free to all passengers during the layover." },
  { leg: "Koh Samui → Bangkok", op: "Bangkok Airways PG136 · Economy (Y)", route: "USM 14:35 → BKK 15:50", time: "Sat 5 Sep · 1h15m nonstop", note: "Ticketed & confirmed · Ref FPSCKQ · Seats 15A (Farzana + infant) / 15B (Rose). Timed nicely after a late checkout and lunch at Tolani." },
  { leg: "Bangkok → Dhaka", op: "Thai Airways TG339 · Economy (W)", route: "BKK 23:50 → DAC 01:25 (+1)", time: "Tue 8 Sep · 2h35m nonstop", note: "Ticketed & confirmed · Ref F4XLVE · Terminal 2 · Seats 45A (Farzana) / 45B (Rose + Affaan infant). Lands Dhaka 01:25 on 9 Sep — a genuinely late finish, so keep Day 9 restful." },
];

// Ticket references — issued 3 Aug 2026
export const flightTickets = {
  thai: {
    airline: "Thai Airways International", ref: "F4XLVE",
    issuedBy: "E C Aviation Ltd, East Coast Centre, Gulshan-1, Dhaka · 09613555888",
    passengers: [
      { name: "Rose Mohammad Rezwanul Haque (ADT)", ticket: "217 9412579660", fare: "USD 317.00", total: "৳54,815" },
      { name: "Rahman Farzana Binta (ADT)", ticket: "217 9412579661", fare: "USD 317.00", total: "৳54,815" },
      { name: "Rehbar Affaan (INF)", ticket: "217 9412579662", fare: "USD 63.00", total: "৳12,287" },
    ],
    grand: "৳1,21,917",
    note: "Non-endorsable; flight/date change, reroute and cancellation restricted — check the fare rule before any change. Economy baggage 23 kg per piece.",
  },
  bangkokAir: {
    airline: "Bangkok Airways", ref: "FPSCKQ",
    issuedBy: "PG Website Thailand, Chatuchak, Bangkok · +66 2 270 6699",
    passengers: [
      { name: "Rose Mohammad Rezwanul Haque (ADT)", ticket: "829 4853490826", fare: "THB 10,740", total: "THB 11,170" },
      { name: "Rahman Farzana Binta (ADT)", ticket: "829 4853490825", fare: "THB 10,740", total: "THB 11,170" },
      { name: "Rehbar Affaan (INF)", ticket: "829 4853490827", fare: "THB 2,940", total: "THB 2,940" },
    ],
    grand: "THB 25,280 ≈ ৳92,778",
    note: "Non-endorsable, refund and change restricted. Domestic check-in desk closes 40 min before departure. Paid in cash.",
  },
};

export const thailandDays = [
  {
    day: 1, date: "Mon 31 Aug", dest: "samui", title: "Dhaka → Bangkok → Koh Samui",
    tagline: "A red-eye, two flights, then toes in the sand at Maenam",
    hotel: "Mimosa Resort & Spa · Maenam (north coast)",
    activities: [
      { time: "02:30", rating: "prep", title: "TG340 Dhaka → Bangkok", desc: "Thai Airways red-eye into Suvarnabhumi, lands 06:00. Airside transfer to the Bangkok Airways domestic gates.", tip: "Board last as a family; keep Affaan's passport + Thai e-visa printouts handy. A night feed on descent helps his ears." },
      { time: "09:55", rating: "ok", title: "Bangkok Airways BKK → USM", desc: "Nonstop, lands Samui 11:05. Samui's open-air airport is tiny and beautiful — bags in minutes.", tip: "Bangkok Airways lounges are open to ALL passengers — free snacks and a calm corner during the BKK layover." },
      { time: "11:45 AM", rating: "ok", title: "Check In — Mimosa Resort, Maenam", desc: "Only ~10 min from the airport. Request early check-in, ground-floor room near the pool, baby cot.", tip: "Maenam is a calm, sleepy north-coast beach — gentle for a first paddle, and you're near the airport so the travel day ends fast." },
      { time: "💤 1:00 PM", rating: "nap", title: "Lunch + NAP", desc: "Long travel morning done. Resort lunch, then the full nap.", tip: "" },
      { time: "3:30 PM", rating: "ok", title: "First Swim — Pool + Maenam Beach", desc: "Ease in gently: the pool, then Maenam's quiet shallow sand. Let Affaan paddle and dig.", tip: "SPF 50 reef-safe, rash vest, hat — non-negotiable. Maenam water is calm but check the tide." },
      { time: "6:30 PM", rating: "ok", title: "Dinner at the Resort", desc: "Stay on-site tonight after the early start. Pre-arranged halal meal (coordinate with the kitchen before arrival).", tip: "Samui resorts handle halal well IF told in advance — confirm with Mimosa before you fly." },
    ],
  },
  {
    day: 2, date: "Tue 1 Sep", dest: "samui", title: "Big Buddha & Wat Plai Laem — the North",
    tagline: "The north-coast sights, all a short hop from Mimosa",
    hotel: "Mimosa Resort & Spa · Maenam (north coast)",
    activities: [
      { time: "8:30 AM", rating: "ok", title: "Big Buddha (Wat Phra Yai)", desc: "The 12m golden Buddha on its island causeway — Samui's landmark, ~15 min east of Mimosa. Go early for cool air and no crowds.", tip: "Stairs to the platform — carrier, not stroller. 30–40 minutes is plenty." },
      { time: "9:45 AM", rating: "ok", title: "Wat Plai Laem", desc: "5 minutes from Big Buddha — the striking 18-arm Guanyin statue over a lake full of fish Affaan can feed.", tip: "Fish food from the little stall — toddler joy guaranteed." },
      { time: "💤 12:00 PM", rating: "nap", title: "Lunch + NAP at the resort", desc: "Back to Mimosa before the heat peaks.", tip: "" },
      { time: "3:30 PM", rating: "ok", title: "Maenam Beach + Kayak", desc: "Rent a kayak or paddleboard on the calm north-shore water; Affaan rides up front in a toddler life vest.", tip: "Stay close in. Late afternoon light on the north coast is gorgeous." },
      { time: "6:00 PM", rating: "ok", title: "Fisherman's Village, Bophut", desc: "Just 6 km east of Mimosa: wander the old wooden shophouse street; beachfront dinner watching the sunset.", tip: "Tuesday isn't market night (that's Friday) — quieter, easier with the stroller." },
    ],
  },
  {
    day: 3, date: "Wed 2 Sep", dest: "samui", title: "Move South to Tolani · Lamai & Hin Ta Hin Yai",
    tagline: "Switch hotels to Laem Set, then explore the south-east coast",
    hotel: "🔄 Move: Mimosa (Maenam) → Tolani Resort · Laem Set (south-east)",
    activities: [
      { time: "8:30 AM", rating: "ok", title: "Slow Morning + Checkout at Mimosa", desc: "Final north-coast swim, breakfast, and pack. Checkout by 12.", tip: "Keep a day bag with swim kit and Affaan's essentials handy for the transfer." },
      { time: "11:00 AM", rating: "prep", title: "Transfer Maenam → Laem Set (Tolani)", desc: "~45–60 min drive down the east coast to Tolani on Laem Set Beach. Pre-book a car with a seat, or a driver.", tip: "Time it into the late-morning window so Affaan can nap in the car, then wake at the new hotel." },
      { time: "💤 12:30 PM", rating: "nap", title: "Arrive Tolani + Lunch + NAP", desc: "Check in, lunch, and the nap in the new room. Let him wake somewhere new and gentle.", tip: "Tolani is quiet and close to Lamai — a totally different, lusher side of the island." },
      { time: "3:30 PM", rating: "ok", title: "Hin Ta & Hin Yai Rocks + Lamai Beach", desc: "Now just ~10 min away: the famous grandfather/grandmother rock formations, then an hour on Lamai's broad sand.", tip: "Quick photo stop — 20 minutes. Lamai has more wave than the north; keep Affaan at the shallows." },
      { time: "6:30 PM", rating: "ok", title: "Settle-In Dinner at Tolani", desc: "First evening at the new base — on-site halal dinner by arrangement.", tip: "Confirm Tolani's halal kitchen arrangement in advance, same as Mimosa." },
    ],
  },
  {
    day: 4, date: "Thu 3 Sep", dest: "samui", title: "Ethical Elephant Sanctuary & Spa",
    tagline: "The trip's heart — rescued elephants, then a couples' unwind",
    hotel: "Tolani Resort · Laem Set (south-east)",
    activities: [
      { time: "8:00 AM", rating: "ok", title: "Samui Elephant Sanctuary", desc: "Observation-only ethical sanctuary — watch rescued elephants bathe, feed them from platforms. No riding, ever. The inland sanctuaries are a manageable drive from Tolani.", tip: "Morning session books out — reserve weeks ahead (book DIRECT — see the Activities tab). Affaan can hand bananas over the rail with you." },
      { time: "💤 12:30 PM", rating: "nap", title: "Lunch + NAP", desc: "Big morning; full recharge back at Tolani.", tip: "" },
      { time: "3:00 PM", rating: "ok", title: "Pool Afternoon at Tolani", desc: "Slow afternoon — this is what the pool is for.", tip: "" },
      { time: "4:30 PM", rating: "prep", title: "Couples Spa — Tolani Spa or In-Room", desc: "90-minute traditional Thai or oil massage for you two while Affaan naps or with resort babysitting.", tip: "Book babysitting 24h ahead; in-room treatments keep you close." },
      { time: "6:30 PM", rating: "ok", title: "Beachfront BBQ Dinner", desc: "Grilled seafood on Laem Set's quiet sand (halal-prepped by arrangement).", tip: "" },
    ],
  },
  {
    day: 5, date: "Fri 4 Sep", dest: "samui", title: "Private Island Charter",
    tagline: "Your own boat to three little islands off the south coast",
    hotel: "Tolani Resort · Laem Set (south-east)",
    activities: [
      { time: "8:30 AM", rating: "ok", title: "Private Charter — Koh Tan, Koh Madsum, Koh Matlang", desc: "Half-day private longtail/speedboat from the south coast (near Tolani): shallow snorkel lagoons, a sandbar picnic, pigs on Koh Madsum's beach.", tip: "Koh Tan & Koh Madsum launch from the south (Thong Krut / Bang Kao) — close to Tolani. Private beats the group Ang Thong trip with a toddler." },
      { time: "💤 1:00 PM", rating: "nap", title: "Lunch + NAP", desc: "Salt, sun, and sleep back at Tolani.", tip: "" },
      { time: "4:00 PM", rating: "ok", title: "Pool + Laem Set Sunset", desc: "An easy final Samui afternoon — pool, then the quiet beach as the light goes gold.", tip: "Last calm evening before the city; keep it slow." },
      { time: "6:30 PM", rating: "ok", title: "Farewell Samui Dinner", desc: "A relaxed last island dinner at or near Tolani.", tip: "Pack tonight so the morning transfer is unhurried." },
    ],
  },
  {
    day: 6, date: "Sat 5 Sep", dest: "transit", title: "Koh Samui → Bangkok",
    tagline: "One last swim, then the river city",
    hotel: "🔄 Fly to Bangkok · lebua at State Tower (Silom, riverside)",
    activities: [
      { time: "9:00 AM", rating: "ok", title: "Final Morning — Pool & Pack at Tolani", desc: "Last unhurried swim; checkout and transfer to Samui airport (~40 min from Laem Set).", tip: "Allow buffer — Tolani is on the far south-east, so the airport run is longer than from the north." },
      { time: "14:35", rating: "ok", title: "Bangkok Airways USM → BKK", desc: "Lands 15:50. Private transfer to lebua at State Tower (~45–60 min).", tip: "Nap window shifts to the flight + car — bring the comfort toy and a milk feed for descent." },
      { time: "5:30 PM", rating: "ok", title: "Check In — lebua at State Tower", desc: "Tower Club Suite, river view, baby cot confirmed. Club lounge access for easy snacks.", tip: "The Tower Club lounge means effortless breakfasts and evening bites without leaving the floor — a real win with Affaan." },
      { time: "6:30 PM", rating: "ok", title: "Riverside Evening — Asiatique", desc: "lebua is near Saphan Taksin pier: hop the river boat to Asiatique for an easy open-air first-night dinner and the ferris wheel.", tip: "Free/cheap river shuttle from Sathorn (Saphan Taksin) pier, right by the hotel." },
    ],
  },
  {
    day: 7, date: "Sun 6 Sep", dest: "bangkok", title: "Grand Palace, Wat Arun & Dinner Cruise",
    tagline: "The riverside crown jewels — all a short boat from lebua",
    hotel: "lebua at State Tower · Silom (riverside)",
    activities: [
      { time: "8:00 AM", rating: "prep", title: "Grand Palace & Wat Phra Kaew", desc: "Thailand's most dazzling site — Emerald Buddha, golden chedis, mirrored halls. A short river-boat ride upstream from lebua's pier. Go at opening (8:30).", tip: "Hot, crowded, strict dress code (shoulders/knees covered). Carrier + water; 90 minutes max with Affaan." },
      { time: "10:30 AM", rating: "ok", title: "Wat Pho — Reclining Buddha", desc: "10-min walk from the Palace: the 46m gold reclining Buddha. Calmer and shadier.", tip: "" },
      { time: "11:30 AM", rating: "ok", title: "Wat Arun — Temple of Dawn", desc: "Cross-river ferry from Wat Pho: the porcelain spire is best in late-morning light. Both temples sit right on the river near lebua.", tip: "The steep upper steps aren't for toddlers — the lower terraces give the full effect." },
      { time: "💤 12:45 PM", rating: "nap", title: "Lunch + NAP at hotel", desc: "River boat back to lebua — the breeze knocks him out.", tip: "" },
      { time: "3:30 PM", rating: "ok", title: "SEA LIFE Bangkok Ocean World", desc: "A short ride to Siam Paragon: the ocean tunnel, penguins, and touch pools — THE toddler hit of Bangkok.", tip: "Fully air-conditioned, stroller-friendly. Buy tickets online (Klook) — cheaper than the gate." },
      { time: "7:00 PM", rating: "ok", title: "Chao Phraya Dinner Cruise", desc: "Board near lebua's pier: glide past the lit-up Wat Arun and Grand Palace with dinner on deck.", tip: "Halal meal MUST be pre-requested at booking — confirmed available on the major cruises." },
    ],
  },
  {
    day: 8, date: "Mon 7 Sep", dest: "bangkok", title: "Canals, Malls & Farewell Night",
    tagline: "A longtail ride, last shopping, and one final river sunset",
    hotel: "lebua at State Tower · Silom (riverside)",
    activities: [
      { time: "8:30 AM", rating: "prep", title: "Longtail Boat — Thonburi Khlongs", desc: "1-hour private canal tour from a pier near lebua: stilt houses, temples, giant water monitors.", tip: "Toddler life jacket — ask at the pier; hold him the whole ride." },
      { time: "10:30 AM", rating: "ok", title: "Lumpini Park or River Walk", desc: "A gentle green morning — playgrounds and paddle boats — before the heat, close to the Silom side.", tip: "Shady mornings only; watch the resident monitor lizards from a distance." },
      { time: "💤 12:30 PM", rating: "nap", title: "Lunch + NAP", desc: "Back to lebua for the nap.", tip: "" },
      { time: "3:30 PM", rating: "ok", title: "Siam Paragon / CentralWorld", desc: "Air-conditioned mall afternoon: toy floors, kids' zones, and your shopping list.", tip: "Chatuchak Market is weekends-only — a Monday means malls (easier with a stroller anyway)." },
      { time: "6:30 PM", rating: "ok", title: "Farewell Riverside Dinner", desc: "Last evening back by the river near lebua — a calm send-off with the skyline and boats.", tip: "Pack tonight; save boarding passes offline for the late flight tomorrow." },
    ],
  },
  {
    day: 9, date: "Tue 8 Sep", dest: "transit", title: "Departure — Home to Dhaka",
    tagline: "A slow river day, then the late TG339 home",
    hotel: "Depart · TG339 23:50 → Dhaka 01:25 (+1)",
    activities: [
      { time: "Morning", rating: "ok", title: "Late Checkout / River Breakfast", desc: "A slow final morning — request late checkout; a farewell swim and a long riverside breakfast.", tip: "TG339 is a late-night flight (23:50), so there's no rush — store bags after checkout and enjoy the day." },
      { time: "Afternoon", rating: "ok", title: "Easy Last Hours + Early Dinner", desc: "Keep it gentle: a mall for air-con, a final riverside wander, an early dinner before the airport.", tip: "A late nap or quiet-time in the afternoon helps Affaan cope with the near-midnight flight." },
      { time: "20:30", rating: "prep", title: "Transfer to Suvarnabhumi", desc: "45–60 min by car; allow arrival ~2.5 hrs before TG339's 23:50 departure.", tip: "Online check-in earlier in the day; save boarding passes to your phone." },
      { time: "23:50", rating: "ok", title: "TG339 Bangkok → Dhaka", desc: "Thai Airways home, landing Dhaka 01:25. Affaan has done islands, elephants, temples, and a river city — he'll sleep the whole way.", tip: "" },
    ],
  },
];

// ─── FULL ACTIVITY LISTS (nothing deleted — each flagged) ─────────────────────
export const samuiActivities = [
  { name: "Big Buddha (Wat Phra Yai)", cf: true, note: "Golden landmark; stairs — use carrier. 30–40 min." },
  { name: "Wat Plai Laem", cf: true, note: "18-arm Guanyin, fish feeding — toddler favourite." },
  { name: "Samui Elephant Sanctuary (ethical)", cf: true, note: "Observation + feeding only. Book weeks ahead." },
  { name: "Private island charter — Koh Tan / Koh Madsum / Koh Matlang", cf: true, note: "Half-day, your pace. The toddler-right way to island hop." },
  { name: "Ang Thong Marine Park day trip", cf: false, note: "Stunning 42-island park but 8–9 hrs, rough boat legs, kayak/hike focus. Better without a toddler." },
  { name: "Fisherman's Village, Bophut (+ Friday Walking Street)", cf: true, note: "Best at 5–6 PM opening; carrier in the crowd." },
  { name: "Choeng Mon Beach kayak / paddleboard", cf: true, note: "Calm bay; toddler life vest, parent aboard." },
  { name: "Na Muang Waterfalls 1 & 2", cf: false, note: "Slippery rocks and a steep track to Falls 2. Skip with a 21-month-old; Falls 1 viewpoint only if keen." },
  { name: "Hin Ta & Hin Yai Rocks", cf: true, note: "Quick, famous photo stop near Lamai." },
  { name: "Secret Buddha Garden (Tarnim Magic Garden)", cf: false, note: "Beautiful but reached by steep 4x4 mountain road — car-seat-free trucks. Not with Affaan." },
  { name: "Lamai Sunday Night Market", cf: true, note: "Smaller than Bophut's Friday market; early evening fine." },
  { name: "Central Samui mall (Chaweng)", cf: true, note: "Air-con escape; kids' play zone, supermarket for supplies." },
  { name: "Thai cooking class", cf: true, note: "Several schools welcome families for morning classes; halal-adaptable menus on request." },
  { name: "Snorkeling day trip to Koh Tao / Koh Nang Yuan", cf: false, note: "Superb reefs but 1.5–2 hr speedboat each way, often choppy. Not this trip." },
  { name: "Muay Thai stadium night (Chaweng)", cf: false, note: "Loud, late, smoky. Adults only." },
  { name: "Chaweng nightlife & beach clubs", cf: false, note: "Not with a toddler; Choeng Mon stays blissfully quiet." },
  { name: "Ladyboy cabaret show", cf: false, note: "Adult entertainment." },
  { name: "Jungle 4x4 safari tour", cf: false, note: "Rough tracks, no car seats." },
  { name: "Zipline canopy tours (Sky Hawk / Tree Bridge)", cf: false, note: "Min-age restrictions; one parent could go while the other pools with Affaan." },
  { name: "Beach fire shows (Chaweng/Lamai evenings)", cf: true, note: "Free with dinner on the sand; keep a safe distance — Affaan will be mesmerised." },
  { name: "Samui Aquarium & Tiger Show", cf: false, note: "Listed for completeness — animal-welfare concerns; the family's ethical-wildlife rule says skip." },
];

export const bangkokActivities = [
  { name: "Grand Palace & Wat Phra Kaew", cf: true, note: "Doable with prep: opening time, carrier, dress code, 90 min cap." },
  { name: "Wat Pho (Reclining Buddha)", cf: true, note: "Shadier, calmer; stroller partly usable." },
  { name: "Wat Arun (Temple of Dawn)", cf: true, note: "Lower terraces only — upper steps are ladder-steep." },
  { name: "Chao Phraya dinner cruise", cf: true, note: "Pre-request halal at booking. Early boarding = bedtime-safe." },
  { name: "SEA LIFE Bangkok Ocean World", cf: true, note: "THE toddler pick — tunnel, penguins, touch pool, full A/C." },
  { name: "ICONSIAM (Sook Siam indoor floating market)", cf: true, note: "Air-conditioned, stroller heaven, 7 PM fountain show." },
  { name: "Longtail boat khlong (canal) tour", cf: true, note: "1 hr private, toddler life jacket, firm grip." },
  { name: "Asiatique The Riverfront + ferris wheel", cf: true, note: "Enclosed cabins; evening breeze off the river." },
  { name: "Lumpini Park morning", cf: true, note: "Playgrounds, paddle boats, resident monitor lizards (look, don't chase)." },
  { name: "Chatuchak Weekend Market", cf: false, note: "Iconic but 35°C alleys + 200,000 people — brutal with a stroller. Weekend-only; your Sat/Sun slots are better spent elsewhere." },
  { name: "Safari World & Marine Park", cf: true, note: "Full-day drive-through zoo + shows; long but genuinely toddler-oriented if you want a Day-7 alternative." },
  { name: "Siam Paragon / CentralWorld / EmQuartier malls", cf: true, note: "Toy floors, kids' zones, cool air." },
  { name: "Jim Thompson House", cf: true, note: "Short guided tour, gardens; fine at nap-adjacent times." },
  { name: "Floating markets (Damnoen Saduak / Amphawa)", cf: false, note: "1.5–2 hr drive each way destroys the nap window. Sook Siam at ICONSIAM covers the experience." },
  { name: "Maeklong Railway Market", cf: false, note: "Same distance problem; crowded platform edges + toddler = no." },
  { name: "Chinatown (Yaowarat) street food night", cf: false, note: "Electric but packed, hot, and mostly non-halal woks. Adults-only if at all." },
  { name: "Khao San Road", cf: false, note: "Backpacker nightlife. No." },
  { name: "Rooftop bars (Vertigo, Sky Bar…)", cf: false, note: "Most enforce no-children policies after dark anyway." },
  { name: "Muay Thai at Rajadamnern Stadium", cf: false, note: "Adults only." },
  { name: "Mahanakhon SkyWalk glass floor", cf: true, note: "Stroller-accessible lift + enclosed deck; glass tray needs shoe covers — quick fun photo." },
  { name: "Calypso Cabaret / theatre shows", cf: false, note: "Late showtimes clash with bedtime." },
  { name: "Erawan Shrine", cf: true, note: "5-minute cultural stop beside CentralWorld." },
  { name: "Dream World / Siam Amusement City", cf: false, note: "Rides skew 4+; save for a future trip." },
];

// ─── KOH PHANGAN VERDICT ──────────────────────────────────────────────────────
export const phanganVerdict = {
  title: "Koh Phangan — worth it this trip?",
  verdict: "Skip it",
  body: "Honest answer: no, not this time. The ferry from Bangrak is only ~30 min, but with pier transfers both ends it consumes the entire nap window, and Phangan's draws — the Full Moon Party (dates fall outside your 1–5 Sep window anyway), jungle hikes, and remote coves — aren't toddler experiences. Your Day-4 private charter to Koh Tan and Koh Madsum delivers the same island-hopping magic in half a day, on your own schedule, with shallow lagoons Affaan can actually paddle in. Save Phangan for a couples' trip.",
};

// ─── KOH SAMUI BEACH COMPARISON ───────────────────────────────────────────────
export const samuiBeaches = [
  { name: "Choeng Mon", area: "North-east", water: "Calm, shallow, glassy bay", vibe: "Quiet, upscale resorts", toddler: "★★★★★ — the safest paddling on the island", verdict: "THE pick for this family", star: true },
  { name: "Bophut", area: "North", water: "Calm; coarser, darker sand", vibe: "Fisherman's Village charm, dining", toddler: "★★★★ — better for evenings than swimming", verdict: "Best sunset + dinner beach" },
  { name: "Maenam", area: "North", water: "Gentle, gets deep gradually", vibe: "Sleepy, budget, Phangan views", toddler: "★★★★ — quiet and safe", verdict: "Great value alternative" },
  { name: "Chaweng", area: "East", water: "Some September swell", vibe: "The big lively strip — shops, clubs", toddler: "★★★ — busy; watch the surf", verdict: "Visit, don't stay" },
  { name: "Chaweng Noi", area: "East (south end)", water: "Slightly calmer than main Chaweng", vibe: "Quieter hillside resorts", toddler: "★★★½", verdict: "Nicer end of Chaweng" },
  { name: "Lamai", area: "South-east", water: "Medium waves, some rocks", vibe: "Second town; more local", toddler: "★★★ — shallows only", verdict: "Afternoon visit with Hin Ta Hin Yai" },
  { name: "Silver Beach (Thong Ta Khian)", area: "Between Chaweng & Lamai", water: "Clear cove, boulders, snorkel", vibe: "Small, photogenic", toddler: "★★★ — pretty but rocky entries", verdict: "One-hour photo stop" },
  { name: "Bang Por", area: "North-west", water: "Very shallow reef flats", vibe: "Local, almost empty", toddler: "★★★★ — shallow but watch coral bits", verdict: "Escape-the-world morning" },
  { name: "Lipa Noi", area: "West", water: "Bath-warm sandbars, no rocks", vibe: "Sunset side, no nightlife", toddler: "★★★★★ — sandbar wading heaven", verdict: "Best sunset picnic" },
  { name: "Taling Ngam", area: "South-west", water: "Shallow, tidal", vibe: "Remote, dramatic Five-Islands views", toddler: "★★★½ — far from everything", verdict: "Scenic drive stop" },
];

export const beachRecommendation = "Stay at Choeng Mon — calm shallow water, the island's best cluster of pool-villa resorts, 10 minutes from the airport, Big Buddha, and Fisherman's Village. Use Lipa Noi for one golden sunset picnic, Bophut for dinners, and treat Chaweng/Lamai as visits, not bases.";

// ─── 10 SAMUI RESORTS — UNDER $200/NIGHT WITH PRIVATE POOLS ──────────────────
export const samuiResorts = [
  { name: "Deva Beach Resort & Spa", area: "Choeng Mon side", price: "$130–180", pool: "Private pool villas", note: "Closest match to the brief: pool villas near the calm bay, kids stay free", star: true },
  { name: "Samui Boat Lagoon Pool Villas", area: "Plai Laem / Choeng Mon", price: "$90–140", pool: "Every villa has a private pool", note: "Exceptional value; 5 min to Wat Plai Laem" },
  { name: "Baan Talay Pool Villa", area: "Chaweng Noi", price: "$110–160", pool: "Private pool villas", note: "Quiet hillside, short hop to Chaweng amenities" },
  { name: "Baan Haad Ngam Boutique Resort & Villas", area: "Chaweng Noi", price: "$130–190", pool: "Pool villas + beachfront", note: "Small, calm cove of its own" },
  { name: "The Privilege Hotel Ezra Beach Club", area: "Maenam", price: "$120–180", pool: "Pool-access & pool villas", note: "Beach club vibe, kids' facilities, Phangan views" },
  { name: "Muang Samui Spa Resort", area: "Chaweng (north, calmer end)", price: "$140–190", pool: "Pool-access suites", note: "Huge suites, direct beach; more hotel than villa" },
  { name: "Nora Buri Resort & Spa", area: "Chaweng Noi hillside", price: "$160–200", pool: "Hillside private pool villas", note: "Sea-view pools; buggy rides Affaan will love" },
  { name: "The Lamai Samui", area: "Lamai", price: "$100–150", pool: "Pool-access rooms", note: "Stylish adults-lean design but families welcome; great rates" },
  { name: "Rocky's Boutique Resort", area: "Lamai (south)", price: "$170–200", pool: "Plunge-pool villas (entry categories)", note: "Two beaches, superb kitchen (halal-cooperative with notice)" },
  { name: "Punnpreeda Beach Resort", area: "Bangrak", price: "$90–130", pool: "Pool-access ground rooms", note: "Budget hero 5 min from the pier and Big Buddha" },
];

// ─── 10 BANGKOK HOTELS — 7 RIVERSIDE + 3 SHOPPING ────────────────────────────
export const bangkokHotels = [
  { name: "Chatrium Hotel Riverside", type: "Riverside", price: "$120–180", note: "Huge suites with kitchenettes — the practical family pick; free shuttle boat", star: true },
  { name: "Anantara Riverside Bangkok", type: "Riverside", price: "$180–240", note: "Resort-in-the-city: gardens, lagoon pool, kids' club" },
  { name: "Royal Orchid Sheraton", type: "Riverside", price: "$150–200", note: "Every room river-facing; two pools, next to River City pier" },
  { name: "Millennium Hilton Bangkok", type: "Riverside", price: "$140–190", note: "Infinity pool with river panoramas; directly opposite ICONSIAM" },
  { name: "Shangri-La Bangkok", type: "Riverside", price: "$200–260", note: "Riverside lawns and legendary breakfast; beside Saphan Taksin BTS" },
  { name: "Ramada Plaza by Wyndham Menam Riverside", type: "Riverside", price: "$80–120", note: "The value riverside play — big rooms, shuttle boat" },
  { name: "Capella Bangkok", type: "Riverside · splurge", price: "$450+", note: "Your original shortlist pick — river-villa perfection if the budget stretches for a night or two" },
  { name: "Centara Grand at CentralWorld", type: "Shopping", price: "$160–220", note: "Sits on top of CentralWorld; Siam Paragon 5 min away" },
  { name: "Pathumwan Princess", type: "Shopping", price: "$110–160", note: "Attached to MBK, opposite Siam Discovery; big family rooms" },
  { name: "Novotel Bangkok Platinum Pratunam", type: "Shopping", price: "$90–130", note: "Next to Platinum Fashion Mall — the wholesale-shopping base" },
];

export const hotelRecommendation = "Riverside wins for this trip: the river breeze, boat shuttles, and the ICONSIAM/Wat Arun evenings all radiate from it. Chatrium Riverside is the sweet spot of space + price; Capella if you want one unforgettable splurge night. If shopping is the priority instead, Centara Grand puts the malls at your lift door.";

// ─── YOUR TOP-PICK SAMUI RESORTS ─────────────────────────────────────────────
export const samuiTopPicks = [
  {
    name: "TUI BLUE The Passage Samui Pool Villas with Private Beach",
    area: "Hanuman Bay (near Big Buddha / Bangrak)",
    price: "$150–200",
    pool: "Private pool villas",
    beachfront: true, spa: true,
    swim: "Own semi-private beach cove — calm, shallow entry, quiet",
    note: "The strongest all-rounder of your five: genuine private-beach villas, full spa, hillside-to-sea layout. Book a lower pool villa category to stay near the sand. Adults-lean design but families are welcome.",
    star: true,
  },
  {
    name: "Nora Beach Resort & Spa",
    area: "Chaweng Noi headland (private bay)",
    price: "$150–200",
    pool: "Pool-access & private-pool villa categories",
    beachfront: true, spa: true,
    swim: "Own secluded Chaweng-Noi cove — calmer than main Chaweng, but a stepped hillside down to the beach",
    note: "Lush terraced resort with an award-winning spa and a private beach. The catch for a toddler: lots of steps between villa, pools and sand — buggy service helps, but factor the climb.",
  },
  {
    name: "Saree Samui — Nature's Finest Resort",
    area: "Bophut / Big Buddha beach stretch",
    price: "$120–170",
    pool: "Private plunge-pool villas",
    beachfront: true, spa: true,
    swim: "Direct flat beach access on the north shore — gentle, shallow, Phangan views; water can be shallow-silty at low tide",
    note: "Intimate, design-led, natural-materials villas literally on the sand. Small spa. North-shore beach is flat and calm — check tide times, as low tide pulls the water out.",
  },
  {
    name: "Tolani Resort Koh Samui",
    area: "Choeng Mon",
    price: "$110–160",
    pool: "Pool-access rooms & pool suites",
    beachfront: true, spa: true,
    swim: "On Choeng Mon bay — the island's calmest, shallowest, clearest water for a toddler",
    note: "Modern, bright, excellent value right on the best toddler bay. More pool-access hotel than standalone villa at entry price, but the location on Choeng Mon is exactly what you want.",
  },
  {
    name: "Sea Valley Resort",
    area: "Bophut / Big Buddha beachfront",
    price: "$100–150",
    pool: "Private pool villas & pool-access",
    beachfront: true, spa: true,
    swim: "North-shore Bophut sand — calm bay, gentle entry, sunset side",
    note: "Great-value pool villas a short stroll to Fisherman's Village. Spa on site. North-shore tide is the only watch-point; mornings and high tide are best for swimming.",
  },
];

export const samuiTopPickNote = "You named these five, and the good news is all five are beachfront with spa facilities. Ranked here by how well the beach suits Affaan: TUI BLUE and Tolani give the calmest, most swim-ready water (Tolani sits on Choeng Mon, the island's best toddler bay); Saree and Sea Valley are lovely north-shore sand but tide-dependent; Nora Beach is beautiful with a private cove but has a stepped hillside down to it.";

// ─── 5 CHOENG MON BEACHFRONT POOL VILLAS WITH SPA, UNDER $200 ─────────────────
export const choengMonVillas = [
  { name: "Tolani Resort Koh Samui", price: "$110–160", spa: "On-site spa", note: "Directly on Choeng Mon bay; bright modern pool suites, superb value on the best toddler beach", star: true },
  { name: "Deva Beach Resort & Spa", price: "$130–180", spa: "Deva Spa", note: "Private pool villas steps from the calm bay; kids stay free" },
  { name: "The Tongsai Bay", price: "$180–200+", spa: "Prana Spa (award-winning)", note: "Legendary Choeng Mon cove resort; cottage-suites with outdoor baths, huge private beach, some entry categories dip under $200 off-peak" },
  { name: "Sala Samui Choengmon Beach Resort", price: "$170–200", spa: "Sala Spa", note: "Chic white-on-blue pool villas right on Choeng Mon sand; the pool-villa entry tier can land under $200 in low season" },
  { name: "Melia Koh Samui", price: "$150–195", spa: "YHI Spa", note: "Newer beachfront resort on Choeng Mon; swim-up and private-pool rooms, strong family facilities" },
];

export const choengMonVillaNote = "All five sit on Choeng Mon beach — the calmest, shallowest, clearest water on Samui — and all have spa facilities and pool villas or pool-access rooms. Tolani is the value star; Tongsai Bay and Sala are the affordable-luxury picks if a category dips under $200 in your early-September low-season window. Always confirm the specific villa tier and live rate, as top categories exceed $200.";

// ─── CAR RENTAL — KOH SAMUI ──────────────────────────────────────────────────
export const carRentalIntro = "Koh Samui is a single ring road (Route 4169, ~51 km around) — easy, but with a toddler a private car + driver is far less stress than self-driving. Here's everything you need for a sedan on the island.";

export const carRentalOptions = [
  {
    mode: "Private car + driver (recommended)",
    best: true,
    price: "৳3,500–6,000 / day (~$28–48)",
    detail: "A sedan (Toyota Camry/Altis class) with an English-speaking driver for a half or full day. Zero parking/insurance worry, driver waits at each stop, and you can fit the travel car-seat. Book through your resort concierge or a Samui operator; hourly (min 3–4 hrs) also available for temple mornings.",
  },
  {
    mode: "Airport / point transfers",
    best: false,
    price: "৳900–1,800 / trip (~$7–14)",
    detail: "Fixed-price sedan transfers (USM airport ↔ Choeng Mon is ~10–15 min). Pre-book so a car with space for luggage + stroller is waiting; ask explicitly for a child seat.",
  },
  {
    mode: "Self-drive sedan rental",
    best: false,
    price: "৳1,300–2,200 / day (~$11–18)",
    detail: "Toyota Yaris/Vios-class from Avis, Budget, or reputable local desks at USM airport. Requires an International Driving Permit (carry it + your Bangladeshi licence). Cheaper, but you handle Samui's fast ring-road traffic, monsoon showers, and parking — more load with Affaan.",
  },
  {
    mode: "Grab (ride-hailing)",
    best: false,
    price: "Metered, ~৳250–700 / ride",
    detail: "Works on Samui but cars are fewer than Bangkok and waits can be long in quieter areas like Choeng Mon. Fine for the odd hop; not reliable as your only plan for timed activities.",
  },
];

export const carRentalTips = [
  "Bring your travel car-seat harness — Thai rentals and taxis rarely provide one, and it's not enforced locally.",
  "For self-drive you must carry an International Driving Permit (IDP) plus your home licence — police checkpoints do ask.",
  "Choose a driver-for-the-day on the three touring days (temples, elephant sanctuary, island-charter pier) and skip a car entirely on pure pool/beach days.",
  "Samui drives on the LEFT. The ring road is fast and rain-slick in September showers — another reason a local driver earns his fee.",
  "Confirm the fare is all-in (fuel + driver waiting time) before you set off; agree pickup points for each stop.",
  "A sedan seats your family of three plus luggage comfortably; you don't need an SUV unless you add the in-laws.",
];

// ─── BANGKOK RIVERSIDE — DEEP COMPARISON ─────────────────────────────────────
export const bangkokRiverside = [
  {
    name: "Shangri-La Bangkok",
    tier: "Luxury",
    price: "$200–270",
    location: "Beside Saphan Taksin BTS + Sathorn (Central) Pier — the single best-connected riverside spot",
    rooms: "Large; ask for the Shangri-La Wing river-balcony rooms",
    pool: "Two riverside pools + garden lawns",
    family: "Cots, babysitting, kids' pool; genuine resort feel in the city",
    dining: "Legendary breakfast; several restaurants incl. halal-aware kitchens on request",
    boat: "Own shuttle + steps from the central pier for every river route",
    forAffaan: "Top pick for you — flat riverside gardens to roam, its own pier for the ICONSIAM/Wat Arun boats, and the easiest BTS link if you skip the river.",
    verdict: "Best overall for a toddler: space, gardens, unbeatable transport",
    star: true,
  },
  {
    name: "Millennium Hilton Bangkok",
    tier: "Luxury",
    price: "$140–190",
    location: "Thonburi (west) bank, directly at ICONSIAM — free hotel boat crosses in minutes",
    rooms: "Every room faces the river (the hotel's signature)",
    pool: "Beach-style sand-edge pool + the city's best river-panorama rooftop",
    family: "Cots, connecting rooms; the pool is a genuine toddler highlight",
    dining: "Good breakfast; ICONSIAM's Sook Siam halal food hall is a 5-min boat ride",
    boat: "Frequent free shuttle to ICONSIAM + Sathorn pier",
    forAffaan: "That sandy-edged pool plus ICONSIAM on tap makes evenings effortless. West-bank location is a touch further from the Palace, but the free boat solves it.",
    verdict: "Best pool + best value in the luxury tier",
  },
  {
    name: "lebua at State Tower",
    tier: "Luxury (all-suite)",
    price: "$180–240",
    location: "Silom end, ~600m uphill from the river/Sathorn pier",
    rooms: "All suites — big, with kitchenettes and wrap-around balconies (great for a family)",
    pool: "Small outdoor pool (the tower is famous for rooftop bars, not a resort pool)",
    family: "Suite space is excellent for a cot + gear; but the Sky Bar/'Hangover film' vibe is adult",
    dining: "World-famous rooftop restaurants (Sirocco/Sky Bar) — reservation-only, not toddler venues; breakfast is fine",
    boat: "Nearest pier ~8–10 min walk (not right on the water)",
    forAffaan: "The suites are family-sized, but you're not on the riverbank and the pool is small — you'd walk to the pier each time. Better for couples than toddlers.",
    verdict: "Amazing suites & views, but not truly waterfront or pool-led",
  },
  {
    name: "Montien Riverside Hotel",
    tier: "Upper-midscale",
    price: "$95–140",
    location: "Rama III, south riverside — quieter, a bit further downriver from the old town",
    rooms: "Large, recently renovated river-view rooms — strong space-for-money",
    pool: "Big riverside pool, one of the better-value pools on the river",
    family: "Spacious rooms + good pool make it quietly family-friendly; cots on request",
    dining: "Well-reviewed buffet; halal-aware on request",
    boat: "Hotel shuttle boat to the central piers (further downriver, so a longer ride)",
    forAffaan: "A lot of room and pool for the money. Trade-off: it's further south, so every sightseeing boat/car trip is a bit longer.",
    verdict: "Best big-room value if you don't mind being downriver",
  },
  {
    name: "Ibis Bangkok Riverside",
    tier: "Midscale (value)",
    price: "$55–85",
    location: "Thonburi (west) bank, near ICONSIAM; own shuttle boat",
    rooms: "Compact, clean, reliable Ibis standard — river-view rooms available",
    pool: "Riverside pool (bigger than you'd expect at this price)",
    family: "Family rooms + pool; unbeatable price for a riverside base",
    dining: "Simple breakfast; ICONSIAM halal hall a short boat away",
    boat: "Free shuttle to ICONSIAM & Sathorn pier",
    forAffaan: "The smart-budget play: riverside pool, river views, free ICONSIAM boat, for roughly a third of the luxury rate. Rooms are small — fine for three if you pack light.",
    verdict: "Best budget riverside — great pool-and-boat value, small rooms",
  },
  {
    name: "Centre Point Plus Hotel Silom",
    tier: "Upper-midscale (aparthotel)",
    price: "$90–130",
    location: "Silom/Charoenkrung, a few blocks inland from the river (near Robinson/Charoen Krung)",
    rooms: "Big apartment-style rooms with kitchenettes — excellent for families & long stays",
    pool: "Rooftop pool",
    family: "Genuinely family-focused brand: kids' facilities, huge rooms, laundry — very toddler-practical",
    dining: "Good breakfast; loads of halal options in the surrounding Charoenkrung/Bang Rak area",
    boat: "~8–12 min to the nearest pier (not directly on the water)",
    forAffaan: "Family-sized apartments and a kitchenette are a real toddler advantage (warm milk, own snacks). The catch: it's near the river, not on it — you lose the balcony river view and step-to-pier convenience.",
    verdict: "Most family-practical rooms, but inland — river is a short hop, not the doorstep",
  },
  {
    name: "Salil Hotel Riverside (Bangkok - Charoenkrung Soi 1)",
    tier: "Boutique midscale",
    price: "$70–100",
    location: "Charoenkrung Soi 1, near River City & Si Phraya pier — walkable old-town riverside",
    rooms: "Stylish boutique rooms; charming design, on the compact side",
    pool: "Small boutique pool (not a big swim pool)",
    family: "Cosy and characterful; fine for a small family but not a facilities-led family hotel",
    dining: "Cute café/breakfast; excellent halal eateries nearby in Bang Rak",
    boat: "Short walk to Si Phraya/River City pier (ICONSIAM shuttle from there)",
    forAffaan: "Lovely design and a walkable pier, but the small pool and compact rooms make it better for a couple than for pool-loving toddler days.",
    verdict: "Most characterful & walkable, but light on pool/space for a toddler",
  },
];

export const bangkokRiversideVerdict = "For your trip — riverside evenings, a toddler who loves the pool, and Palace/Wat Arun/ICONSIAM sightseeing by boat — the ranking is clear. Shangri-La is the best overall (gardens, its own pier, BTS link, resort feel). Millennium Hilton is the value-luxury pick and has the best pool plus ICONSIAM on the doorstep. Ibis Riverside is the budget hero if you just want a riverside pool and boat for a third of the price. lebua and Salil are the most striking but least toddler-suited (small pools, not truly on the water); Centre Point Plus gives the most family-practical apartment rooms but sits a few blocks inland; Montien is the big-room value play if being further downriver is fine.";

// ─── AFFAAN ───────────────────────────────────────────────────────────────────
export const toddlerSchedule = [
  { time: "6:30–7:30 AM", activity: "Wake, milk, nappy change, quiet play" },
  { time: "8:00 AM", activity: "Breakfast — toddlers eat early, never skip" },
  { time: "9:00 AM", activity: "Activity Block 1 — outdoor, active, stimulating" },
  { time: "11:00 AM", activity: "Snack + wind-down, head back to the villa/hotel" },
  { time: "12:30 PM", activity: "NAP — 1.5 to 2 hours — the most important part of the day", nap: true },
  { time: "3:00 PM", activity: "Activity Block 2 — shorter, lower energy" },
  { time: "5:30 PM", activity: "Return, bath, calm play" },
  { time: "6:30 PM", activity: "Dinner — toddlers are done by 7 PM" },
  { time: "7:30 PM", activity: "Bedtime — same routine every night, island or city" },
];

export const affaanNotes = [
  { icon: "🏊", title: "Private pool = nap-window gold", text: "The whole reason for a pool villa: morning and late-afternoon swims without leaving home, and zero pressure when plans wobble." },
  { icon: "🌊", title: "Sea rules", text: "Choeng Mon and Lipa Noi only for open-water paddling. Chaweng and Lamai have September swell — shallows with a hand held, nothing more." },
  { icon: "🕌", title: "Halal, the Thailand way", text: "Samui: coordinate with the resort kitchen BEFORE arrival — they're used to it. Bangkok is easy: Sook Siam stalls, dedicated halal restaurants, and pre-requested cruise meals." },
  { icon: "🌡️", title: "Heat rule", text: "Outdoors before 12 or after 3:30. September is hot and can shower briefly most afternoons — the nap conveniently sits right in the rain slot." },
  { icon: "🚗", title: "Transport", text: "Book hotel cars or Grab; always ask for a child seat (not guaranteed — bring the travel harness). Songthaews (open trucks) are fun for adults, not for Affaan." },
  { icon: "🦟", title: "Mosquitoes", text: "Dusk at the island villa = toddler-safe repellent + long light sleeves. The pool villa's netting/screens matter — check at booking." },
];

// ─── FOOD ─────────────────────────────────────────────────────────────────────
export const thailandRestaurants = [
  { dest: "Koh Samui", name: "Resort kitchen (pre-arranged halal)", note: "The reliable core — confirm at booking; most Choeng Mon resorts cook halal with notice" },
  { dest: "Koh Samui", name: "Muslim-owned stalls near Chaweng mosque (Masjid Nurul Islam area)", note: "Simple, authentic Thai-Muslim rice & curry lunches" },
  { dest: "Koh Samui", name: "Beachfront BBQ (halal-prepped by arrangement)", note: "Fresh seafood is naturally easy — confirm no pork oils/sauces" },
  { dest: "Bangkok", name: "Sook Siam @ ICONSIAM", note: "Indoor floating market with clearly marked halal stalls — the easiest family dinner in Bangkok" },
  { dest: "Bangkok", name: "Yana Restaurant (MBK Center)", note: "Long-running halal Thai institution — perfect after SEA LIFE/Siam" },
  { dest: "Bangkok", name: "Home Cuisine Islamic Restaurant (Charoen Krung)", note: "Beloved halal Thai near the riverside hotels, by Haroon Mosque" },
  { dest: "Bangkok", name: "Al Saray (Sukhumvit)", note: "Lebanese-Indian halal when everyone needs a rice-and-grill night" },
  { dest: "Bangkok", name: "Dinner cruise halal meal (pre-request)", note: "Major Chao Phraya cruises provide halal with 24–48h notice" },
];

// ─── COSTS ────────────────────────────────────────────────────────────────────
// Based on your CONFIRMED choices: Mimosa (31 Aug–2 Sep) + Tolani (2–5 Sep) on Samui,
// lebua Tower Club in Bangkok, and the uploaded flight fares. FX ~1 USD = ৳123.30, 1 CNY = ৳18.22.
export const thailandCosts = [
  { item: "Thai Airways DAC⇄BKK (TG340/TG339)", low: "৳1,21,917", high: "৳1,21,917", note: "ACTUAL ticketed fare — 2 adults @ ৳54,815 + Affaan (infant) ৳12,287. Ref F4XLVE, issued 3 Aug." },
  { item: "Bangkok Airways BKK⇄USM (both legs)", low: "৳92,778", high: "৳92,778", note: "ACTUAL ticketed fare — THB 25,280 total (2 adults @ THB 11,170 + infant THB 2,940). Ref FPSCKQ." },
  { item: "Koh Samui — Mimosa (2nt) + Tolani (3nt)", low: "৳97,900", high: "৳97,900", note: "Your chosen combo: Mimosa 31 Aug–2 Sep (৳31,365) + Tolani 2–5 Sep (৳66,533)" },
  { item: "Bangkok — lebua Tower Club (3nt)", low: "৳69,713", high: "৳69,713", note: "Tower Club Suite w/ lounge, minibar, afternoon tea — from your booking" },
  { item: "Thai e-visas (Bangladeshi passports)", low: "৳13,000", high: "৳13,000", note: "Confirmed — required, for all three" },
  { item: "Samui car rental + transfers", low: "৳20,000", high: "৳20,000", note: "Toyota Yaris / driver-for-day — see Cars tab" },
  { item: "Food — 9 days, 3 travelers", low: "৳50,000", high: "৳50,000", note: "Resort halal + Bangkok halal restaurants" },
  { item: "Activities & tours", low: "৳75,000", high: "৳75,000", note: "Elephant sanctuary, private charter, SEA LIFE, cruise, spa" },
  { item: "Shopping", low: "৳50,000", high: "৳50,000", note: "Siam malls, Asiatique, souvenirs" },
  { item: "Miscellaneous / contingency", low: "৳10,000", high: "৳10,000", note: "SIM, tips, ride-hailing, buffer" },
];

export const thailandCostRange = { low: "৳6,00,310", high: "৳6,00,310", lowUsd: "~$4,869", highUsd: "~$4,869", single: true };

// ─── CHECKLIST ────────────────────────────────────────────────────────────────
export const thailandChecklist = [
  {
    section: "Before You Fly — Decisions & Bookings",
    items: [
      "Resolve overlapping Samui bookings — keep one, cancel the rest before 17 Aug (Sea Valley / Mimosa deadline)",
      "Resolve overlapping Bangkok bookings — cancel unwanted ones before their deadlines (Chatrium ~18 Aug is earliest)",
      "Suggested keep: Tolani (Samui) + Chatrium (Bangkok) — best value + beach for Affaan",
      "Confirm the kept resort cooks halal — coordinate with the kitchen in writing before arrival",
      "Pre-request halal meal on the Chao Phraya dinner cruise (24–48h notice)",
      "Book the AIS eSIM via Klook before departure (skips the airport queue)",
      "Pre-book Samui car: WhatsApp a local operator or reserve SIXT — ask for a child seat for Affaan",
    ],
  },
  {
    section: "Documents & Money",
    items: [
      "Thai e-visa for all 3 — REQUIRED for Bangladeshi passports, apply early",
      "Passports valid 6+ months — including Affaan's",
      "TG340 / TG339 + Bangkok Airways (BKK⇄USM) tickets saved offline",
      "Kept hotel confirmations saved offline — Samui + Bangkok",
      "Travel insurance covering Affaan",
      "Driving licence + International Driving Permit (IDP) — required to rent/drive on Samui",
      "A card that works abroad + some THB cash for car deposit and markets",
    ],
  },
  {
    section: "Connectivity & Transport",
    items: [
      "AIS SIM/eSIM active — best coverage for Google Maps on Samui's ring road",
      "Grab app installed (primary ride-hailing) + Bolt as a price-check backup",
      "Google Maps offline area downloaded for Koh Samui + Bangkok",
      "Travel car-seat harness packed — Thai rentals/taxis rarely provide one",
      "Screenshot the car operator's WhatsApp booking confirmation + pickup point",
      "Note Bangkok hotel's free shuttle-boat pier + times",
    ],
  },
  {
    section: "Toddler Essentials — Pack From Home",
    items: [
      "Nappies — 4–5 days extra beyond planned use",
      "Wipes — generous supply",
      "Formula / preferred milk powder",
      "Familiar snacks for flight + travel days",
      "Sippy cup / favourite bottle",
      "2–3 comfort toys including THE one",
      "Light muslin wraps for boat + sea-breeze evenings",
      "More spare outfits than feels sane (two swims a day)",
    ],
  },
  {
    section: "Health & Medicine Bag",
    items: [
      "Children's Panadol / Calpol + thermometer",
      "ORS sachets",
      "Toddler-safe mosquito repellent (dusk on Samui!)",
      "Reef-safe SPF 50 + rash vest + wide hat",
      "Teething gel, antiseptic cream, plasters",
      "Motion-sickness plan for the island charter (ginger snacks, timing feeds)",
    ],
  },
  {
    section: "Gear",
    items: [
      "Lightweight stroller — Bangkok malls, ICONSIAM, Asiatique",
      "Soft carrier — Big Buddha stairs, Grand Palace crowds, markets",
      "Swim nappies (3–4) + toddler life vest for kayak/charter",
      "Beach bucket & spade",
      "Pool-villa safety check on arrival: gates, depth, door locks",
    ],
  },
  {
    section: "Daily Routine Reminders",
    items: [
      "Protect the 12:30–2:30 PM nap — it also dodges the rain slot",
      "Outdoors before 12 or after 3:30 only",
      "Photograph the rental car with staff present before driving off",
      "Confirm charter boat has shade + calm-bay route",
      "Pre-boarding request on every flight",
      "Baby cot + high chair confirmed at both hotels",
      "Carrier (not stroller) for temples and Friday market",
    ],
  },
];

// ─── YOUR ACTUAL BOOKINGS (from Gmail + Booking.com / Agoda) ──────────────────
// Free-cancellation deadlines drive the in-app alert. Dates are ISO in property local time.
// Prices converted at planning rate ~1 THB = 3.35 BDT, 1 USD = 121 BDT — confirm live.
export const bookingsMeta = {
  note: "Live from your Agoda, Booking.com, Klook and Ticket2Attraction mail as of 21 Aug. Seven bookings were cancelled 16–19 Aug (listed at the bottom). Avani+ Samui is now CONFIRMED DIRECT with the resort. Bangkok still has duplicates: THREE lebua and TWO Centre Point bookings — all free to cancel until 2 Sep.",
  fxNote: "BDT shown at mid-market rates as of 21 Aug 2026 (1 USD = ৳123.50, 1 THB = ৳3.70, 1 CNY = ৳17.15). These are mid-market reference rates from Xe/exchange-rates.org — I can't access a Bloomberg terminal, and Agoda charges in the booking currency at their own rate on the payment date (already including a 5% adjustment), so your actual card debit will run slightly higher."
};

export const thailandBookings = [
  // ═══ KOH SAMUI ═══
  {
    id: "2523920499", manageUrl: "https://www.avanihotels.com/en/samui", source: "Direct · Avani+", leg: "samui", currency: "—",
    property: "Avani+ Samui Resort", area: "Phang Ka, Koh Samui (south-west)",
    status: "confirmed", checkIn: "2026-09-01", checkOut: "2026-09-05", nights: 4,
    room: "Pool Villa", occupancy: "2 adults", board: "Per resort confirmation",
    guest: "Mohammad Rezwanul Haque Rose",
    priceLabel: "Rate via agent", priceBdt: "See agent",
    breakdown: [["Pool Villa, 4 nights", "Confirmed direct with resort"]],
    freeCancelUntil: "2026-08-25T23:59:00",
    cancelTiers: [["Until 7 days before arrival (25 Aug)", "Free modify / cancel"], ["Within 7 days", "Charges apply"]],
    payment: "✅ CONFIRMED DIRECT by the resort (Kittima Munee, Reservations) on 18 Aug. Hotel confirmation 100851622811 (2523920499). The Agoda booking 2036252454 for this resort was cancelled 19 Aug. Resort advises date changes must go through the booking agent. ☎ +66 77 485 299",
    phone: "+66 77 485 299",
  },
  {
    id: "1755039056", manageUrl: "https://www.agoda.com/account/bookings.html", source: "Agoda", leg: "samui", currency: "USD",
    property: "Mimosa Resort & Spa (early nights)", area: "Maenam, Koh Samui (north)",
    status: "overlap", checkIn: "2026-08-31", checkOut: "2026-09-02", nights: 2,
    room: "Jacuzzi Lover Deluxe", occupancy: "2 adults", board: "Breakfast · WiFi · parking · gym",
    guest: "Mohammad Rezwanul Haque Rose",
    priceLabel: "USD 254.38", priceBdt: "৳31,416",
    breakdown: [["Rooms (2 nights)", "USD 214.12"], ["Taxes & fees", "USD 40.26"]],
    freeCancelUntil: "2026-08-27T23:59:00",
    cancelTiers: [["Until 27 Aug 11:59 PM", "Free"], ["From 28 Aug", "Non-refundable"]],
    payment: "Pay later — auto-charged 26 Aug 2026 to Visa ••1980. Covers your arrival nights (31 Aug–2 Sep) before the Samui main stay.",
    phone: "",
  },
  {
    id: "2033970977", manageUrl: "https://www.agoda.com/account/bookings.html", source: "Agoda", leg: "samui", currency: "CNY",
    property: "Tolani Resort Koh Samui", area: "Choeng Mon / Laem Set, Koh Samui",
    status: "overlap", checkIn: "2026-09-02", checkOut: "2026-09-05", nights: 3,
    room: "Tropical Pool Villa", occupancy: "2 adults", board: "Breakfast, WiFi, parking, gym",
    guest: "Mohammad Rezwanul Haque Rose",
    priceLabel: "RMB 3,651.66", priceBdt: "৳62,636",
    breakdown: [["Tropical Pool Villa (3 nights)", "RMB 3,073.80"], ["Taxes & fees", "RMB 577.86"]],
    freeCancelUntil: "2026-08-30T23:59:00",
    cancelTiers: [["Until 30 Aug 11:59 PM", "Free"], ["From 31 Aug", "Non-refundable"]],
    payment: "Pay later — auto-charged 29 Aug 2026 to Visa ••1980. Priced in CNY. The other two Tolani bookings (USD & CNY, 1–5 Sep) were cancelled 16 Aug.",
    phone: "",
  },
  // ═══ BANGKOK ═══
  {
    id: "2042886132", manageUrl: "https://www.agoda.com/account/bookings.html", source: "Agoda", leg: "bangkok", currency: "THB",
    property: "Tower Club at Lebua — NEWEST", area: "Silom, Bangkok (riverside)",
    status: "overlap", checkIn: "2026-09-05", checkOut: "2026-09-08", nights: 3,
    room: "Tower Club Suite River View with Lounge", occupancy: "2 adults",
    board: "Complimentary minibar · Lounge · Parking · Gym · Free WiFi · Coffee & tea",
    guest: "Mohammad Rezwanul Haque Rose",
    priceLabel: "THB 17,973.02", priceBdt: "৳66,500",
    breakdown: [["Rooms (3 nights)", "THB 17,869.83"], ["Taxes & fees", "THB 3,163.32"], ["Agoda Deals Discount 17.12%", "− THB 3,060.13"]],
    freeCancelUntil: "2026-09-02T23:59:00",
    cancelTiers: [["Until 2 Sep 11:59 PM", "Free"], ["From 3 Sep", "Non-refundable"]],
    payment: "Booked 20 Aug — auto-charged 1 Sep 2026 to Visa ••1980. Cheaper than the earlier Tower Club booking (2035049726) for the same suite. lebua confirmed by email they'll hold your luggage after checkout on 8 Sep for the late flight.",
    phone: "+66 2 624 9999",
  },
  {
    id: "2035049726", manageUrl: "https://www.agoda.com/account/bookings.html", source: "Agoda", leg: "bangkok", currency: "THB",
    property: "lebua at State Tower — Tower Club (earlier)", area: "Silom, Bangkok",
    status: "overlap", checkIn: "2026-09-05", checkOut: "2026-09-08", nights: 3,
    room: "Tower Club Suite River View with Lounge", occupancy: "2 adults, 1 child (aged 1)",
    board: "Breakfast · Club lounge · Complimentary minibar · Afternoon tea",
    guest: "Mohammad Rezwanul Haque Rose",
    priceLabel: "THB 18,995.47", priceBdt: "৳70,283",
    breakdown: [["Rooms (3 nights)", "THB 17,287.71"], ["Taxes & fees", "THB 3,059.59"], ["Early Booking Saver 7.82%", "− THB 1,351.83"]],
    freeCancelUntil: "2026-09-02T23:59:00",
    cancelTiers: [["Until 2 Sep 11:59 PM", "Free"], ["From 3 Sep", "Non-refundable"]],
    payment: "⚠️ DUPLICATE of 2042886132 — same suite, ৳3,783 more. lebua confirmed TWO reservations exist under your name for 5–8 Sep. Cancel one before 2 Sep.",
    phone: "+66 2 624 9999",
  },
  {
    id: "2042308164", manageUrl: "https://www.agoda.com/account/bookings.html", source: "Agoda", leg: "bangkok", currency: "THB",
    property: "Centre Point Plus Silom — NEWEST", area: "Silom / Charoenkrung, Bangkok",
    status: "overlap", checkIn: "2026-09-05", checkOut: "2026-09-08", nights: 3,
    room: "Grand Suite Room", occupancy: "2 adults", board: "Breakfast · Parking · Free WiFi",
    guest: "Mohammad Rezwanul Haque Rose",
    priceLabel: "THB 12,954.53", priceBdt: "৳47,932",
    breakdown: [["Rooms (3 nights)", "THB 11,006.04"], ["Taxes & fees", "THB 1,948.49"]],
    freeCancelUntil: "2026-09-02T23:59:00",
    cancelTiers: [["Until 2 Sep 11:59 PM", "Free"], ["From 3 Sep", "Non-refundable"]],
    payment: "Booked 18 Aug · Pay at hotel. Special request logged: non-smoking room. The hotel replied 20 Aug: this room type comes with ONE DOUBLE BED — confirm that suits all three of you.",
    phone: "+66 2 266 0521",
  },
  {
    id: "2034358886", manageUrl: "https://www.agoda.com/account/bookings.html", source: "Agoda", leg: "bangkok", currency: "THB",
    property: "Centre Point Plus Silom (earlier)", area: "Silom / Charoenkrung, Bangkok",
    status: "overlap", checkIn: "2026-09-05", checkOut: "2026-09-08", nights: 3,
    room: "Deluxe Plus (apartment-style)", occupancy: "2 adults", board: "Breakfast included",
    guest: "Mohammad Rezwanul Haque Rose",
    priceLabel: "THB 11,647.20", priceBdt: "৳43,095",
    breakdown: [["Rooms (3 nights)", "THB 9,895.59"], ["Taxes & fees", "THB 1,751.61"]],
    freeCancelUntil: "2026-09-02T23:59:00",
    cancelTiers: [["Until 2 Sep 11:59 PM", "Free"], ["From 3 Sep", "Non-refundable"]],
    payment: "⚠️ DUPLICATE property with 2042308164 (different room type). Cashback ~THB 845. Decide which room you want and cancel the other.",
    phone: "+66 2 266 0521",
  },
  {
    id: "2034349422", manageUrl: "https://www.agoda.com/account/bookings.html", source: "Agoda", leg: "bangkok", currency: "THB",
    property: "lebua at State Tower — Premium Suite", area: "Silom, Bangkok",
    status: "overlap", checkIn: "2026-09-05", checkOut: "2026-09-08", nights: 3,
    room: "lebua Premium Suite River View", occupancy: "2 adults, 1 child",
    board: "Breakfast · 47% early-booking discount",
    guest: "Mohammad Rezwanul Haque Rose",
    priceLabel: "THB 15,846.02", priceBdt: "৳58,630",
    breakdown: [["Rooms (3 nights)", "THB 14,593.41"], ["Taxes & fees", "THB 2,582.56"], ["App coupon 9.11%", "− THB 1,329.95"]],
    freeCancelUntil: "2026-09-02T23:59:00",
    cancelTiers: [["Until 2 Sep 11:59 PM", "Free"], ["From 3 Sep", "Non-refundable (100%)"]],
    payment: "⚠️ THIRD lebua booking. Premium Suite (no Tower Club lounge). Free BTS Saphan Taksin shuttle 07:00–17:00.",
    phone: "+66 2 624 9999",
  },
];

// ─── CANCELLED (kept for reference — do not count in costs) ──────────────────
export const cancelledBookings = [
  { id: "6896299202", property: "Sea Valley Resort", source: "Booking.com", when: "19 Aug", note: "Cancelled FREE of charge." },
  { id: "2036252454", property: "Avani+ Vacation Club Samui", source: "Agoda", when: "19 Aug", note: "Replaced by the direct Avani+ Samui booking 2523920499." },
  { id: "2034352678", property: "Chatrium Hotel Riverside Bangkok", source: "Agoda", when: "18 Aug", note: "" },
  { id: "2034357546", property: "Avani+ Riverside Bangkok", source: "Agoda", when: "18 Aug", note: "" },
  { id: "2033972495", property: "Tolani Resort Koh Samui (CNY, 1–5 Sep)", source: "Agoda", when: "16 Aug", note: "" },
  { id: "2032908571", property: "Tolani Resort Koh Samui (USD, 1–5 Sep)", source: "Agoda", when: "16 Aug", note: "" },
  { id: "2033975213", property: "Mimosa Resort & Spa (1–5 Sep)", source: "Agoda", when: "16 Aug", note: "Card payment declined, then cancelled." },
];

// ─── ACTIVITY BOOKINGS (confirmed & paid) ────────────────────────────────────
export const activityBookings = [
  {
    name: "Chao Phraya Dinner Cruise — Super Galaxy Cruise",
    provider: "Ticket2Attraction", ref: "TK353247",
    date: "Sun 6 Sep 2026", time: "20:00 – 22:30",
    detail: "Dinner cruise, Outdoor zone (A) Rooftop – edge zone, 3rd floor. 2 adults + 1 toddler. Complimentary birthday-month cake included.",
    meeting: "Check-in 18:30 – 19:50 at ICONSIAM, Pier 4",
    tips: [
      "The cruise departs on time — allow extra time for Bangkok traffic.",
      "If it rains, rooftop guests move to the air-conditioned lower deck.",
      "Bring a light jacket for the outdoor deck; free parking for 4 hrs (stamp your ticket at the info counter).",
      "Show the e-ticket on your phone on arrival.",
    ],
    contact: "cs@ticket2attraction.com · Tel +66 2 079 5445 · WhatsApp +66 95 504 8282 · Line @ticket2attraction",
    icon: "🚢",
  },
  {
    name: "SEA LIFE Bangkok Ocean World",
    provider: "Klook", ref: "NEN882838 · QYH443209 (order 5578608618)",
    date: "Mon 7 Sep 2026", time: "Any time during opening hours",
    detail: "SEA LIFE Bangkok Ocean World tickets + Free SIAM Gift Card (THB 200) + Buy-1-Get-1 Premium Tea voucher. Booked 19 Aug, payment complete.",
    meeting: "SEA LIFE Bangkok Ocean World, Siam Paragon Building, B1–B2 Floor, 991 Rama I Rd, Pathum Wan, Bangkok 10330",
    tips: [
      "Enter the venue directly with your voucher — no exchange needed.",
      "Present the mobile voucher AND your passport.",
      "Redeem the THB 200 gift card at Siam Paragon (Tourist Service Center, G floor near SCB), Siam Center (Info Counter, G) or Siam Discovery (Info Counter, G).",
      "Voucher valid 1 Jul – 30 Sep 2026.",
    ],
    contact: "www.klook.com — manage in the Klook app",
    icon: "🐠",
  },
];

// ─── THAILAND AIRPORT TRANSFER ───────────────────────────────────────────────
export const thailandTransfers = [
  {
    leg: "Dhaka → Airport, departure day",
    date: "Mon 31 Aug 2026 — for TG340 at 02:30",
    provider: "MTB Meet & Greet / Pick & Drop (Mutual Trust Bank cardholder program)",
    note: "Requests were placed through MTB Neo — check the app for the confirmed order ID, vehicle and chauffeur details, which usually arrive by email 1–2 days before. Because TG340 departs 02:30, the pickup falls late on 30 Aug. Book it the same way you did for the Umrah leg (Trivia Aviation / Convoy Service).",
    icon: "🚘",
  },
];


// ─── COMMUNICATION — SIM, eSIM & RIDE-HAILING IN THAILAND ────────────────────
// Rates: ~1 USD = ৳123, ~1 THB = ৳3.66 (Jul 2026, mid-market)
export const thailandSimOperators = [
  {
    name: "AIS (Tourist SIM / 5G eSIM)",
    star: true,
    coverage: "Strongest, most consistent 4G/5G on Koh Samui — the ring road, interior roads, and even ferry crossings to Koh Phangan/Koh Tao. This is the network that matters for Google Maps while driving your rental car.",
    plans: [
      { label: "AIS Tourist SIM", data: "30 GB", validity: "30 days", price: "≈ THB 599", bdt: "≈ ৳2,192" },
      { label: "AIS 5G eSIM (via Klook)", data: "Unlimited (fair-use)", validity: "8 days", price: "≈ $12–15", bdt: "≈ ৳1,475–1,845" },
    ],
    note: "Available at every major airport (Suvarnabhumi, Don Mueang, Koh Samui USM) and thousands of 7-Eleven stores. This is the pick specifically because you'll be navigating by Google Maps around the island.",
  },
  {
    name: "True / DTAC (merged network)",
    star: false,
    coverage: "Very good in Bangkok and the main tourist strips (Chaweng, Bophut, Lamai) on Samui, but shows more weak spots than AIS once you're on interior or south-coast roads.",
    plans: [
      { label: "DTAC Happy Tourist eSIM", data: "Unlimited", validity: "10 days", price: "≈ $9.90", bdt: "≈ ৳1,218" },
      { label: "True 5G eSIM (via Klook)", data: "Unlimited (fair-use)", validity: "8 days", price: "≈ $12–15", bdt: "≈ ৳1,475–1,845" },
    ],
    note: "Cheapest unlimited-data option and includes a Thai number + local calls/SMS. Fine for Bangkok; a reasonable second SIM if you want a backup on Samui.",
  },
];

export const thailandSimRecommendation = "Get an AIS Tourist SIM or AIS-routed 5G eSIM before or on arrival — it's the clear winner for Koh Samui's ring road and interior, which is exactly where you'll be relying on Google Maps while driving. True/DTAC is perfectly fine for Bangkok if you want a cheaper unlimited option there instead, or as a second line. Buy at the airport (Suvarnabhumi, Don Mueang, or Koh Samui USM arrivals kiosks — passport needed, 5–15 min) or activate an eSIM via Klook before you fly to skip the queue entirely.";

export const thailandSimTips = [
  "AIS wins specifically for Koh Samui's ring road, interior mountain roads, and ferry crossings — DTAC/True are noticeably weaker outside the main tourist strips.",
  "eSIM via Klook activates before you land and lets you keep your home SIM active for calls/OTPs simultaneously — no airport queue.",
  "Physical SIM kiosks are in the arrivals hall at Koh Samui Airport (USM), right after customs — bring your passport.",
  "Top up any Thai SIM cheaply through the operator's app (AIS app / My AIS) — cheaper than buying a new package at a 7-Eleven.",
  "Hotel and resort Wi-Fi across Thailand is generally strong — lets you stretch mobile data further when you're poolside rather than driving.",
];

export const thailandRideApps = [
  {
    name: "Grab",
    star: true,
    note: "The most reliable app in Thailand — widest driver coverage, best availability late at night and at airports, and the safest single choice if you only install one. Slightly pricier than Bolt on average.",
  },
  {
    name: "Bolt",
    star: false,
    note: "Often 15–35% cheaper than Grab on the same route — worth checking every time. ⚠️ Caveat: Bolt's Thailand operating licence lapsed in May 2026 and the company has been running on a temporary regulatory extension since, while working through a backlog of violation cases. The app still functions, but don't rely on it as your only option — always have Grab installed as the dependable fallback.",
  },
  {
    name: "InDrive",
    star: false,
    note: "You propose a fare and drivers accept or counter-offer — genuinely cheaper if you know roughly what a ride should cost and have a minute to negotiate. Good backup when Grab/Bolt are surging.",
  },
];

export const thailandRideRecommendation = "Install Grab as your primary app — it's the most dependable for airport pickups, late-night rides, and Bangkok traffic. Check Bolt for the same route before booking since it's often cheaper, but keep Grab as the fallback given Bolt's unresolved licensing situation this year. InDrive is a good third option if you're comfortable negotiating a price. On Koh Samui itself, ride-hailing driver density is much lower than Bangkok — this is exactly why your own rental car matters more there than the apps.";

// ─── EXPANDED CAR RENTAL — KOH SAMUI, WITH REAL OPERATORS ────────────────────
export const carRentalOperatorsCompared = [
  {
    name: "SIXT (airport counter)",
    type: "International brand",
    price: "$21–38/day (≈ ৳2,585–4,674)",
    booking: "Book online at sixt.com or via app; pickup directly in the arrivals hall at Samui Airport (USM).",
    deposit: "Card hold, typically THB 5,000–10,000 depending on category — refunded after return inspection.",
    requirements: "Passport, valid driving licence (IDP recommended for non-English licences), minimum age 18 (under-25 surcharge may apply).",
    note: "Reviewers consistently report brand-new Toyota Yaris units and quick, well-organised pickup/drop-off directly in arrivals. Best if you want a known international brand and don't mind paying a bit more for it.",
    star: true,
  },
  {
    name: "Samui Cars (local independents)",
    type: "Local · WhatsApp booking",
    price: "≈ THB 1,000/day (≈ ৳3,660) — often the cheapest all-in rate on the island",
    booking: "Book directly via WhatsApp or the operator's website booking form; no passport deposit at some operators.",
    deposit: "Cash deposit typical, THB 6,000–10,000, refunded on the spot after inspection at drop-off.",
    requirements: "Passport, driving licence; free delivery to your hotel and free pickup from the airport (or hotel) reported by multiple reviewers — including baby seats provided free on request.",
    note: "Consistently the cheapest option in independent reviews, with hotel delivery and airport drop-off included. WhatsApp-based booking is genuinely easy — good English communication reported.",
  },
  {
    name: "Budget chains (Thrifty, Dollar, ASAP)",
    type: "Budget airport counters",
    price: "$13–20/day (≈ ৳1,600–2,460)",
    booking: "Book via aggregator sites (Kayak, Trip.com, momondo) or directly at the airport counter.",
    deposit: "Card hold, THB 5,000–15,000 depending on operator and vehicle.",
    requirements: "Passport, driving licence, minimum age typically 21–25.",
    note: "Cheapest headline rates, especially in the September low season (~20–35% below peak). Fleet condition varies more than SIXT or the top local operators — check reviews for the specific counter.",
  },
];

export const yarisPriceBreakdown = {
  vehicle: "Toyota Yaris / Yaris Ativ (2023–2025), automatic, 4-door",
  rows: [
    ["Daily rate (low season, Sep)", "THB 700–1,100 / day", "≈ ৳2,562–4,026"],
    ["4-night total (your Samui stay)", "THB 2,800–4,400", "≈ ৳10,250–16,100"],
    ["Security deposit (refundable)", "THB 5,000–10,000 (cash or card hold)", "≈ ৳18,300–36,600"],
    ["Insurance excess / CDW", "Often included; deductible THB 5,000–30,000 if not upgraded", "≈ ৳18,300–109,800"],
    ["Full-to-full fuel policy", "Pay only for fuel used — no refuel penalty if returned full", "—"],
    ["Airport delivery/pickup", "Usually free with local operators; SIXT includes arrivals-hall pickup", "—"],
    ["Child/baby seat", "Free on request at most local operators; confirm at booking for Affaan", "—"],
  ],
  note: "September (low season) typically runs 20–35% below peak rates island-wide. Always photograph the car with the rental staff present before driving off, and confirm the insurance excess amount in writing — this is the single most common dispute point in Samui rental reviews.",
};

export const carRentalWhatsapp = {
  booked: true,
  operator: "Samui Cars",
  phone: "+66 63 973 0070",
  website: "https://samuicars.rent",
  whatsapp: "https://wa.me/66639730070",
  intro: "✅ BOOKED — your Samui car is hired through Samui Cars. Save the number in your phone before you fly; they take WhatsApp messages and deliver to the airport or your hotel.",
  note: "Confirm before pickup: the exact delivery point (Samui Airport arrivals vs Mimosa at Maenam), the deposit amount and whether it's cash or card hold, the insurance excess in writing, the fuel policy, and that a child seat for Affaan is fitted.",
  whatToSend: [
    "Pickup: Mon 31 Aug, ~11:30 AM at Samui Airport (USM) — flight PG129, lands 11:05",
    "Return: Sat 5 Sep, before the 14:35 PG136 departure",
    "Vehicle: Toyota Yaris / Yaris Ativ, automatic",
    "Child seat needed for Affaan (21 months) — please confirm it's fitted",
    "Note the hotel change: Mimosa (Maenam) 31 Aug–2 Sep, then Tolani (Laem Set) 2–5 Sep",
  ],
};

// ─── ACTIVITY BOOKING GUIDE (where + when to book) ──────────────────────────
export const activityBookingGuide = [
  { name: "Samui Elephant Sanctuary (ethical)", cf: true, site: "Book DIRECT on the sanctuary's own website", when: "2–4 weeks ahead — morning sessions sell out", why: "Ethical sanctuaries cap daily numbers; direct booking guarantees the observation-only ethical one (avoid resellers listing riding camps).", price: "≈ THB 2,500–3,000 pp" },
  { name: "Private island charter (Koh Tan / Madsum / Matlang)", cf: true, site: "Klook or a local Choeng Mon operator via WhatsApp", when: "1–2 weeks ahead; confirm calm-bay route", why: "Klook shows verified reviews + instant confirmation; a local operator is cheaper if you can message them. Private beats the group Ang Thong tour with a toddler.", price: "≈ THB 6,000–9,000 / half-day boat" },
  { name: "Big Buddha & Wat Plai Laem", cf: true, site: "No booking needed — free entry", when: "Just go early (8–9 AM)", why: "Both are free temples; a car/driver half-day covers them plus Fisherman's Village.", price: "Free (donations welcome)" },
  { name: "Couples spa / in-villa massage", cf: false, site: "Book through your resort spa OR Fah Lanna / Tamarind (Samui)", when: "24–48h ahead", why: "Resort spas book out on arrival evenings; pre-booking secures your nap-window slot and babysitting overlap.", price: "≈ THB 1,500–3,500 / 90 min pp" },
  { name: "Chao Phraya dinner cruise (Bangkok)", cf: true, site: "Klook or GetYourGuide (Saffron / Wonderful Pearl / Meridian)", when: "3–5 days ahead + request halal at booking", why: "Aggregators bundle hotel-pier pickup and let you pre-note the halal meal (needs 24–48h). Early-boarding cruises suit a toddler's bedtime.", price: "≈ THB 1,200–2,500 pp" },
  { name: "Grand Palace & Wat Phra Kaew", cf: true, site: "Buy at the gate OR skip-the-line via Klook", when: "Same-day fine; go at 8:30 AM opening", why: "The physical ticket is easy, but a Klook skip-line + guide saves queueing in the heat with Affaan.", price: "THB 500 pp (kids often free)" },
  { name: "SEA LIFE Bangkok Ocean World", cf: true, site: "Klook / Kkday — 20–40% cheaper than the gate", when: "1–2 days ahead", why: "Online combo tickets are consistently cheaper than the Siam Paragon counter and let you walk straight in.", price: "≈ THB 800–1,000 (online)" },
  { name: "Longtail canal (khlong) tour", cf: true, site: "Arrange at the pier OR pre-book via GetYourGuide", when: "1–3 days ahead, or on the spot", why: "Pier boats are negotiable but pre-booked private tours fix the price and guarantee a life jacket for Affaan.", price: "≈ THB 1,500–2,500 / private hour" },
];

export const activityBookingSitesNote = "General rule: use Klook or GetYourGuide for Bangkok attractions and cruises (cheaper than the gate, instant e-tickets, easy cancellation) — but book the elephant sanctuary DIRECT on its own site to be sure it's the ethical observation-only one. Always screenshot your e-ticket offline.";

// ─── ROMANTIC ESCAPES (for Rose & Farzana) ───────────────────────────────────
export const romanticEscapes = [
  { where: "Koh Samui", title: "Private beach dinner on Choeng Mon sand", desc: "Many Choeng Mon resorts set a candlelit table on the beach at sunset — feet in the sand, lanterns, a private waiter. Arrange while Affaan sleeps with resort babysitting.", tip: "Book 24h ahead through the resort; ask for a halal set menu." },
  { where: "Koh Samui", title: "Couples' oil massage, side by side", desc: "A 90-minute traditional Thai or aroma-oil massage for two in a beach-view sala — the classic Samui unwind.", tip: "Fah Lanna and resort spas both do couples' rooms; pre-book the nap slot." },
  { where: "Koh Samui", title: "Sunset at Lipa Noi with a picnic", desc: "The west-coast sandbar is the island's best sunset — bath-warm shallow water, no rocks, almost empty. Bring a picnic or a takeaway from Fisherman's Village.", tip: "Golden hour ~6:15 PM in September; a driver can wait." },
  { where: "Bangkok", title: "Sunset drinks then dinner cruise", desc: "Watch the lit-up Wat Arun glide past on the Chao Phraya with dinner on deck — genuinely romantic even with a toddler dozing beside you.", tip: "Choose an early cruise; pre-request halal." },
  { where: "Bangkok", title: "High-tea or river-view breakfast", desc: "A slow riverside breakfast or afternoon tea at the Shangri-La / Mandarin Oriental — a quiet grown-up moment with skyline and river.", tip: "Weekday mornings are calmest; strollers welcome." },
];

// ─── DOS & DON'TS — THAILAND ─────────────────────────────────────────────────
export const thailandDos = [
  { icon: "🙏", text: "Return a 'wai' (palms together) with a smile — it's the warm Thai greeting, especially from elders and hosts." },
  { icon: "👕", text: "Dress modestly at temples — shoulders and knees covered for everyone; carry a light scarf for Farzana and a shirt for yourself." },
  { icon: "👟", text: "Remove shoes before entering temples, homes, and some shops — look for the pile of shoes at the door." },
  { icon: "💵", text: "Carry small cash — markets, songthaews, and many local halal stalls are cash-only; break big notes at 7-Eleven." },
  { icon: "🧊", text: "Drink bottled/filtered water only, and it's fine to ask for no ice made from tap — most tourist spots use clean ice, but ask." },
  { icon: "🛵", text: "Agree the fare BEFORE getting in a taxi or tuk-tuk, or insist on the meter ('meter, please'). Use Grab to avoid haggling entirely." },
  { icon: "📸", text: "Ask before photographing monks or locals; step aside for monks, and women should avoid direct physical contact with a monk." },
  { icon: "🍽️", text: "Confirm 'halal' explicitly and watch for fish sauce, pork, and pork-fat cooking oil — use the Food tab's vetted halal list." },
];

export const thailandDonts = [
  { icon: "👑", text: "NEVER insult or joke about the Thai King or royal family — lèse-majesté is a serious criminal offence. Don't step on or damage money/stamps (they bear the King's image).", severe: true },
  { icon: "🧠", text: "Don't touch anyone's head (including children) — it's considered the most sacred part of the body." },
  { icon: "🦶", text: "Don't point your feet at people, Buddha images, or photos, and don't point at things with your foot — feet are the 'lowest', least respectful part." },
  { icon: "💎", text: "Ignore any 'the Grand Palace is closed today' tout who offers a cheap tuk-tuk to a gem shop or tailor — it's the classic Bangkok scam. The Palace is open; walk to the real entrance.", severe: true },
  { icon: "🛥️", text: "Photograph any rented jet-ski or motorbike thoroughly BEFORE use — the 'you scratched it' damage-deposit scam is common on Samui and Bangkok beaches." },
  { icon: "😠", text: "Don't lose your temper or raise your voice in public — 'losing face' escalates situations fast; stay calm and smile, and you'll get further." },
  { icon: "🚕", text: "Don't accept a tuk-tuk driver's 'special shopping tour' — they earn commission dragging you to overpriced shops. Politely decline." },
  { icon: "💊", text: "Don't carry or touch any drugs — penalties in Thailand are extremely severe, including for small amounts." },
  { icon: "🏛️", text: "Don't climb on or pose disrespectfully with Buddha statues — it's deeply offensive and can be illegal; taking Buddha images out of the country is technically restricted." },
];

export const thailandDosNote = "Thais are famously warm and forgiving with respectful visitors — none of this needs to make you anxious. A smile, modest dress at temples, agreeing fares up front, and steering clear of the gem-shop tout covers 95% of it.";

// ─── THAI PHRASES — pronunciation in English ─────────────────────────────────
export const thaiPhraseNote = "Thai is tonal, so pronunciation won't be perfect — and that's completely fine. Thais respond warmly to any attempt. The single most important habit: end sentences with 'khráp' if you're male (Rose) and 'khâ' if female (Farzana). It's the politeness particle, and leaving it out sounds blunt.";

export const thaiPhrases = [
  {
    group: "Greetings & courtesy", icon: "🙏",
    items: [
      { thai: "สวัสดีครับ / ค่ะ", say: "sa-wat-DEE khráp / khâ", mean: "Hello / Goodbye (all-purpose)" },
      { thai: "ขอบคุณครับ / ค่ะ", say: "khòp-khun khráp / khâ", mean: "Thank you" },
      { thai: "ไม่เป็นไร", say: "mâi pen rai", mean: "No problem / You're welcome / It's fine" },
      { thai: "ขอโทษครับ / ค่ะ", say: "khǒr-tôht khráp / khâ", mean: "Sorry / Excuse me" },
      { thai: "สบายดีไหม", say: "sa-baai-dee mǎi?", mean: "How are you?" },
      { thai: "ครับ / ค่ะ", say: "khráp / khâ", mean: "Yes / polite particle (men / women)" },
      { thai: "ไม่", say: "mâi", mean: "No / not" },
    ],
  },
  {
    group: "Food — including halal", icon: "🍽️",
    items: [
      { thai: "อาหารฮาลาล", say: "aa-hǎan haa-laan", mean: "Halal food" },
      { thai: "ไม่ใส่หมู", say: "mâi sài mǔu", mean: "No pork (very important — say this clearly)" },
      { thai: "ผมเป็นมุสลิม", say: "phǒm pen mút-sà-lim", mean: "I am Muslim (male speaker)" },
      { thai: "ไม่เผ็ด", say: "mâi phèt", mean: "Not spicy (essential for Affaan's food)" },
      { thai: "เผ็ดน้อย", say: "phèt nói", mean: "A little spicy" },
      { thai: "อร่อย", say: "a-ròi", mean: "Delicious (say it — cooks love it)" },
      { thai: "น้ำเปล่า", say: "náam plào", mean: "Plain water" },
      { thai: "ไม่ใส่น้ำแข็ง", say: "mâi sài nám-khǎeng", mean: "No ice" },
      { thai: "เช็คบิล", say: "chék bin", mean: "The bill, please" },
    ],
  },
  {
    group: "Money & shopping", icon: "💰",
    items: [
      { thai: "เท่าไหร่", say: "thâo-rài?", mean: "How much?" },
      { thai: "แพงไป", say: "phaeng pai", mean: "Too expensive (polite bargaining opener)" },
      { thai: "ลดได้ไหม", say: "lót dâi mǎi?", mean: "Can you reduce the price?" },
      { thai: "หนึ่ง / สอง / สาม", say: "nèung / sǒng / sǎam", mean: "1 / 2 / 3" },
      { thai: "สี่ / ห้า / สิบ", say: "sìi / hâa / sìp", mean: "4 / 5 / 10" },
      { thai: "ร้อย / พัน", say: "rói / phan", mean: "Hundred / Thousand" },
      { thai: "รับบัตรไหม", say: "ráp bàt mǎi?", mean: "Do you take cards?" },
    ],
  },
  {
    group: "Getting around", icon: "🚕",
    items: [
      { thai: "ไปที่...", say: "pai thîi...", mean: "Go to... (then name the place)" },
      { thai: "เปิดมิเตอร์ครับ", say: "pèrt mí-dtêr khráp", mean: "Turn on the meter, please (key taxi phrase)" },
      { thai: "หยุดที่นี่", say: "yùt thîi-nîi", mean: "Stop here" },
      { thai: "ห้องน้ำอยู่ไหน", say: "hông-náam yùu nǎi?", mean: "Where is the toilet?" },
      { thai: "ตรงไป", say: "trong pai", mean: "Straight ahead" },
      { thai: "ซ้าย / ขวา", say: "sáai / khwǎa", mean: "Left / Right" },
      { thai: "สนามบิน", say: "sà-nǎam-bin", mean: "Airport" },
      { thai: "โรงแรม", say: "rohng-raem", mean: "Hotel" },
    ],
  },
  {
    group: "With a toddler & emergencies", icon: "👶",
    items: [
      { thai: "ลูกชายผม", say: "lûuk-chaai phǒm", mean: "My son" },
      { thai: "มีเก้าอี้เด็กไหม", say: "mii kâo-îi dèk mǎi?", mean: "Do you have a high chair?" },
      { thai: "ช่วยด้วย", say: "chûay dûay!", mean: "Help!" },
      { thai: "หมอ / โรงพยาบาล", say: "mǒr / rohng-phá-yaa-baan", mean: "Doctor / Hospital" },
      { thai: "ร้านขายยา", say: "ráan khǎai yaa", mean: "Pharmacy" },
      { thai: "ผมไม่เข้าใจ", say: "phǒm mâi khâo-jai", mean: "I don't understand" },
      { thai: "พูดภาษาอังกฤษได้ไหม", say: "phûut phaa-sǎa ang-grìt dâi mǎi?", mean: "Do you speak English?" },
    ],
  },
];

// ─── OFFLINE-FIRST FLAG ──────────────────────────────────────────────────────
export const offlineEssentials = "Screenshot these three before you fly: your Bookings, the Thai Phrases, and the Dos & Don'ts. They're the sections you'll want when data is patchy — on the Samui ring road, at a pier, or in a taxi.";

export const thailandMeta = {
  title: "Thailand Family Holiday",
  dates: "1 – 8 Sep 2026",
  nights: "7 nights (4 Koh Samui + 3 Bangkok)",
  travelers: "Rose, Farzana & Affaan (21 months)",
  route: "Dhaka → Bangkok → Koh Samui → Bangkok → Dhaka",
};

export const thailandFlights = [
  { leg: "Dhaka → Bangkok", op: "Thai Airways TG340 · Airbus A320", route: "DAC → BKK (Suvarnabhumi)", time: "1 Sep, early arrival", note: "Arrive BKK in time for the 09:15 domestic connection. Airside transfer to Bangkok Airways." },
  { leg: "Bangkok → Koh Samui", op: "Bangkok Airways · nonstop", route: "BKK 09:15 → USM 10:45", time: "~1.5 hrs", note: "1 Sep, same day. Bangkok Airways holds a near-monopoly on Samui — book early, fares don't drop." },
  { leg: "Koh Samui → Bangkok", op: "Bangkok Airways · nonstop", route: "USM 14:00 → BKK 15:15", time: "~1.25 hrs", note: "5 Sep. Perfectly timed after a late checkout and lunch." },
  { leg: "Bangkok → Dhaka", op: "Thai Airways TG339 · Airbus A320", route: "BKK → DAC", time: "8 Sep", note: "Departure day. KKIA/Suvarnabhumi is stroller-friendly; allow 2.5 hrs." },
];

export const thailandDays = [
  {
    day: 1, date: "Tue 1 Sep", dest: "samui", title: "Dhaka → Bangkok → Koh Samui",
    tagline: "Two flights, then toes in the sand by lunchtime",
    activities: [
      { time: "Early AM", rating: "prep", title: "TG340 Dhaka → Bangkok", desc: "Thai Airways A320 into Suvarnabhumi. Airside transfer to the Bangkok Airways domestic gates.", tip: "Board last as a family; keep Affaan's passport + Thai e-visa printouts handy at transfer." },
      { time: "09:15", rating: "ok", title: "Bangkok Airways BKK → USM", desc: "Nonstop, lands Samui 10:45. Samui's open-air airport is tiny and beautiful — bags in minutes.", tip: "Bangkok Airways lounges are open to ALL passengers — free snacks and a calm corner before boarding." },
      { time: "11:30 AM", rating: "ok", title: "Check In — Choeng Mon area resort", desc: "15–20 min transfer. Request early check-in, ground-floor pool villa, baby cot.", tip: "Choeng Mon's bay is the calmest, shallowest water on the island — ideal first swim." },
      { time: "💤 12:30 PM", rating: "nap", title: "Lunch + NAP", desc: "Travel morning done. Villa lunch then the full nap.", tip: "" },
      { time: "3:30 PM", rating: "ok", title: "First Swim — Private Pool + Choeng Mon Beach", desc: "Gentle shallow bay, warm water, soft sand. Let Affaan paddle and dig.", tip: "SPF 50 reef-safe, rash vest, hat — non-negotiable." },
      { time: "6:30 PM", rating: "ok", title: "Dinner at the Resort", desc: "Stay on-site tonight. Pre-arranged halal meal (coordinate with the kitchen at booking).", tip: "Samui resorts handle halal well IF told in advance — confirm before arrival." },
    ],
  },
  {
    day: 2, date: "Wed 2 Sep", dest: "samui", title: "Big Buddha, Wat Plai Laem & Beach",
    tagline: "Temples in the morning, calm bay all afternoon",
    activities: [
      { time: "8:30 AM", rating: "ok", title: "Big Buddha (Wat Phra Yai)", desc: "The 12m golden Buddha on its island causeway — Samui's landmark. Go early for cool air and no crowds.", tip: "Stairs to the platform — carrier, not stroller. 30–40 minutes is plenty." },
      { time: "9:45 AM", rating: "ok", title: "Wat Plai Laem", desc: "5 minutes away — the striking 18-arm Guanyin statue over a lake filled with fish Affaan can feed.", tip: "Fish food from the little stall — toddler joy guaranteed." },
      { time: "💤 12:00 PM", rating: "nap", title: "Lunch + NAP at the villa", desc: "Back before the heat peaks.", tip: "" },
      { time: "3:30 PM", rating: "ok", title: "Choeng Mon Beach + Kayak", desc: "Rent a kayak or paddleboard on the calm bay; Affaan rides up front in a toddler life vest.", tip: "Stay inside the bay. Late afternoon light here is gorgeous." },
      { time: "6:00 PM", rating: "ok", title: "Fisherman's Village, Bophut", desc: "Wander the old wooden shophouse street; beachfront dinner watching the sunset.", tip: "Wednesday isn't market night (that's Friday) — quieter, easier with the stroller." },
    ],
  },
  {
    day: 3, date: "Thu 3 Sep", dest: "samui", title: "Elephant Sanctuary & Spa",
    tagline: "The ethical elephant morning — the trip's heart",
    activities: [
      { time: "8:00 AM", rating: "ok", title: "Samui Elephant Sanctuary", desc: "Observation-only ethical sanctuary — watch rescued elephants bathe, feed them from platforms. No riding, ever.", tip: "Morning session books out — reserve weeks ahead. Affaan can hand bananas over the rail with you." },
      { time: "💤 12:30 PM", rating: "nap", title: "Lunch + NAP", desc: "Big morning; full recharge.", tip: "" },
      { time: "3:00 PM", rating: "ok", title: "Pool Afternoon at the Villa", desc: "Slow afternoon — this is what the private pool is for.", tip: "" },
      { time: "4:30 PM", rating: "prep", title: "Couples Spa — In-Villa or Resort Spa", desc: "90-minute traditional Thai or oil massage for you two while Affaan naps or with the resort's babysitting service.", tip: "Book resort babysitting 24h ahead; in-villa treatments mean you're never far away." },
      { time: "6:30 PM", rating: "ok", title: "Beachfront BBQ Dinner", desc: "Grilled seafood on the sand (halal-prepped by arrangement).", tip: "" },
    ],
  },
  {
    day: 4, date: "Fri 4 Sep", dest: "samui", title: "Private Island Hopping & Lamai",
    tagline: "Your own boat, three little islands, one big sunset",
    activities: [
      { time: "8:30 AM", rating: "ok", title: "Private Charter — Koh Tan, Koh Madsum, Koh Matlang", desc: "Half-day private longtail/speedboat: shallow snorkel lagoons, a sandbar picnic, pigs on Koh Madsum's beach.", tip: "Private charter beats the group Ang Thong trip with a toddler — you set the pace and turn back anytime." },
      { time: "💤 1:00 PM", rating: "nap", title: "Lunch + NAP", desc: "Salt, sun, and sleep.", tip: "" },
      { time: "3:30 PM", rating: "ok", title: "Hin Ta & Hin Yai Rocks + Lamai Beach", desc: "The famous grandfather/grandmother rock formations, then an hour on Lamai's broad sand.", tip: "Quick photo stop — 20 minutes. Lamai has more wave than Choeng Mon; keep Affaan at the shallows." },
      { time: "6:00 PM", rating: "ok", title: "Friday Night — Fisherman's Village Walking Street", desc: "Bophut's famous Friday market: lanterns, crafts, street food, live music.", tip: "Go at opening (5–6 PM) before the crush; carrier beats stroller in the crowd." },
    ],
  },
  {
    day: 5, date: "Sat 5 Sep", dest: "transit", title: "Samui → Bangkok",
    tagline: "One last swim, then the city lights",
    activities: [
      { time: "8:00 AM", rating: "ok", title: "Final Villa Morning — Pool & Pack", desc: "Last unhurried swim. Late checkout if available.", tip: "" },
      { time: "14:00", rating: "ok", title: "Bangkok Airways USM → BKK", desc: "Lands 15:15. Private transfer to the riverside hotel (~45–60 min).", tip: "Nap window shifts to the flight + car — bring the comfort toy and a milk feed for descent." },
      { time: "5:30 PM", rating: "ok", title: "Check In — Riverside Hotel", desc: "River-view room, baby cot confirmed.", tip: "" },
      { time: "6:30 PM", rating: "ok", title: "ICONSIAM Evening", desc: "Free shuttle boat across the river — the indoor 'floating market' food hall (Sook Siam) is air-conditioned, stroller-easy, and full of halal-friendly stalls.", tip: "The river fountain show at 7 PM is a perfect toddler finale." },
    ],
  },
  {
    day: 6, date: "Sun 6 Sep", dest: "bangkok", title: "Grand Palace, SEA LIFE & Dinner Cruise",
    tagline: "Bangkok's crown jewels in one careful day",
    activities: [
      { time: "8:00 AM", rating: "prep", title: "Grand Palace & Wat Phra Kaew", desc: "Thailand's most dazzling site — the Emerald Buddha, golden chedis, mirrored halls. Go at opening (8:30).", tip: "Hot, crowded, strict dress code (shoulders/knees covered). Carrier + water; 90 minutes max with Affaan." },
      { time: "10:30 AM", rating: "ok", title: "Wat Pho — Reclining Buddha", desc: "10-min walk: the 46m gold reclining Buddha. Calmer and shadier than the Palace.", tip: "" },
      { time: "💤 12:30 PM", rating: "nap", title: "Lunch + NAP at hotel", desc: "River boat back — the breeze knocks him out.", tip: "" },
      { time: "3:30 PM", rating: "ok", title: "SEA LIFE Bangkok Ocean World", desc: "Under Siam Paragon: the ocean tunnel, penguins, and touch pools — THE toddler hit of Bangkok.", tip: "Fully air-conditioned, stroller-friendly; combo ticket with the 4D show is skippable with a toddler." },
      { time: "7:00 PM", rating: "ok", title: "Chao Phraya Dinner Cruise", desc: "Glide past the lit-up Wat Arun and Grand Palace with dinner on deck.", tip: "Halal meal MUST be pre-requested at booking — confirmed available on the major cruises." },
    ],
  },
  {
    day: 7, date: "Mon 7 Sep", dest: "bangkok", title: "Wat Arun, Canals & Shopping",
    tagline: "The Temple of Dawn, a longtail ride, and last souvenirs",
    activities: [
      { time: "8:30 AM", rating: "ok", title: "Wat Arun — Temple of Dawn", desc: "Cross by ferry; the porcelain-encrusted spire is Bangkok's most beautiful riverside sight, best in morning light.", tip: "The steep upper steps are not for toddlers — the lower terraces give the full effect." },
      { time: "10:00 AM", rating: "prep", title: "Longtail Boat — Thonburi Khlongs", desc: "1-hour private canal tour: stilt houses, temples, giant water monitors.", tip: "Toddler life jacket — ask the pier; hold him the whole ride." },
      { time: "💤 12:30 PM", rating: "nap", title: "Lunch + NAP", desc: "", tip: "" },
      { time: "3:30 PM", rating: "ok", title: "Siam Paragon / CentralWorld", desc: "Air-conditioned mall afternoon: toy floors, kids' zones, and your shopping list.", tip: "Chatuchak Market is weekends-only — Monday means malls (honestly easier with a stroller anyway)." },
      { time: "6:30 PM", rating: "ok", title: "Asiatique The Riverfront", desc: "Farewell evening: riverside night bazaar, the 60m ferris wheel, easy open-air dinner.", tip: "Free shuttle boat from Sathorn Pier. The ferris wheel cabins are enclosed — fine with a toddler on your lap." },
    ],
  },
  {
    day: 8, date: "Tue 8 Sep", dest: "transit", title: "Departure — Home to Dhaka",
    tagline: "One last river breakfast, then TG339 home",
    activities: [
      { time: "7:30 AM", rating: "ok", title: "Riverside Breakfast + Pool", desc: "Slow morning; a farewell swim if the flight time allows.", tip: "" },
      { time: "Late AM", rating: "ok", title: "Transfer to Suvarnabhumi", desc: "45–60 min by car. Allow 2.5 hrs before TG339.", tip: "Online check-in the night before; save boarding passes to your phone." },
      { time: "Departure", rating: "ok", title: "TG339 Bangkok → Dhaka", desc: "Thai Airways A320 home. Affaan has done islands, elephants, temples, and a river city — he will sleep the whole way.", tip: "" },
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
export const thailandCosts = [
  { item: "Flights — Thai Airways DAC⇄BKK (TG340/TG339)", low: "৳95,000", high: "৳1,25,000", note: "2 adults + infant fare" },
  { item: "Bangkok Airways BKK⇄USM (both legs)", low: "৳42,000", high: "৳58,000", note: "Samui monopoly route — book early" },
  { item: "Koh Samui pool villa — 4 nights", low: "৳49,000", high: "৳98,000", note: "$100–200/night from the resort list" },
  { item: "Bangkok riverside hotel — 3 nights", low: "৳40,000", high: "৳88,000", note: "$110–240/night from the hotel list" },
  { item: "Thai e-visas (Bangladeshi passports)", low: "৳12,000", high: "৳18,000", note: "Apply well ahead — required, unlike Malaysia" },
  { item: "Food — 8 days, 3 travelers", low: "৳45,000", high: "৳70,000", note: "Resort halal + Bangkok halal restaurants" },
  { item: "Activities & tours", low: "৳45,000", high: "৳70,000", note: "Elephant sanctuary, private charter, SEA LIFE, cruise, spa" },
  { item: "Transfers & local transport", low: "৳15,000", high: "৳25,000", note: "Airport cars, Grab, shuttle boats" },
  { item: "Shopping", low: "৳25,000", high: "৳40,000", note: "Siam malls, Asiatique, souvenirs" },
];

export const thailandCostRange = { low: "৳3,68,000", high: "৳5,92,000", lowUsd: "~$2,990", highUsd: "~$4,810" };

// ─── CHECKLIST ────────────────────────────────────────────────────────────────
export const thailandChecklist = [
  {
    section: "Documents & Logistics",
    items: [
      "Thai e-visa for all 3 — REQUIRED for Bangladeshi passports, apply early",
      "Passports valid 6+ months — including Affaan's",
      "TG340/TG339 + Bangkok Airways tickets saved offline",
      "Hotel confirmations — Samui villa + Bangkok riverside",
      "Travel insurance covering Affaan",
      "Halal meal requests confirmed: resort kitchen + dinner cruise",
    ],
  },
  {
    section: "Toddler Essentials — Pack From Home",
    items: [
      "Nappies — 4–5 days extra beyond planned use",
      "Wipes — generous supply",
      "Formula / preferred milk powder",
      "Familiar snacks for flight days",
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
      "Travel car-seat harness (Thai taxis rarely have seats)",
      "Beach bucket & spade",
      "Pool-villa safety check on arrival: gates, depth, door locks",
    ],
  },
  {
    section: "Daily Routine Reminders",
    items: [
      "Protect the 12:30–2:30 PM nap — it also dodges the rain slot",
      "Outdoors before 12 or after 3:30 only",
      "Confirm charter boat has shade + calm-bay route",
      "Pre-boarding request on every flight",
      "Baby cot + high chair confirmed at both hotels",
      "Carrier (not stroller) for temples and Friday market",
    ],
  },
];

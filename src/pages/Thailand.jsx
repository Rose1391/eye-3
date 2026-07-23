import { useState } from "react";
import { Link } from "react-router-dom";
import {
  thailandMeta, thailandDays, thailandFlights, samuiActivities, bangkokActivities,
  phanganVerdict, samuiBeaches, beachRecommendation, samuiResorts, bangkokHotels,
  hotelRecommendation, toddlerSchedule, affaanNotes, thailandRestaurants,
  thailandCosts, thailandCostRange, thailandChecklist,
  samuiTopPicks, samuiTopPickNote, choengMonVillas, choengMonVillaNote,
  carRentalIntro, carRentalOptions, carRentalTips,
  bangkokRiverside, bangkokRiversideVerdict,
  thailandBookings, bookingsMeta,
  thailandSimOperators, thailandSimRecommendation, thailandSimTips,
  thailandRideApps, thailandRideRecommendation,
  carRentalOperatorsCompared, yarisPriceBreakdown, carRentalWhatsapp,
  activityBookingGuide, activityBookingSitesNote, romanticEscapes,
  thailandDos, thailandDonts, thailandDosNote,
  thaiPhrases, thaiPhraseNote, offlineEssentials,
} from "../data/thailand";
import Accordion from "../components/Accordion";
import Checklist from "../components/Checklist";
import TileGrid from "../components/TileGrid";

const TABS = ["Days", "Bookings", "Activities", "Beaches", "Hotels", "Cars", "Comms", "Phrases", "Etiquette", "Affaan", "Travelers", "Food", "Flights", "Costs", "Packing"];
const BLUE = "var(--m-blue)";
const GOLD = "var(--u-gold)";
const TEAL = "#0E8C8C";

const DEST_COLOR = { transit: "#8C857F", samui: TEAL, bangkok: "var(--m-blue)" };
const DEST_LABEL = { transit: "In transit", samui: "Koh Samui", bangkok: "Bangkok" };

export default function Thailand() {
  const [tab, setTab] = useState("Days");
  return (
    <div className="page">
      <div style={{ position: "relative", height: 150, overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(/hero-thailand.jpg)", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, rgba(18,42,107,0.85), rgba(14,140,140,0.72))" }} />
        <div style={{ position: "relative", padding: "18px 20px", color: "#fff" }}>
          <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 12.5, color: "rgba(255,255,255,0.9)", marginBottom: 12 }}>
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            All journeys
          </Link>
          <div className="eyebrow" style={{ color: "#EBD98C", marginBottom: 5 }}>JOURNEY TWO · {thailandMeta.dates}</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: 27, fontWeight: 500, lineHeight: 1.02 }}>{thailandMeta.title}</h1>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.85)", marginTop: 4 }}>{thailandMeta.route}</div>
        </div>
      </div>

      <div style={{ position: "sticky", top: 0, zIndex: 50, background: "var(--m-sand)", borderBottom: "1px solid var(--line)" }}>
        <div className="scroll-x">
          {TABS.map((t) => (
            <button key={t} onClick={() => setTab(t)} style={{
              fontSize: 13, fontWeight: tab === t ? 700 : 500, whiteSpace: "nowrap",
              padding: "7px 15px", borderRadius: 99,
              background: tab === t ? "var(--m-blue-deep)" : "var(--cloud)",
              color: tab === t ? "#fff" : "var(--slate)",
            }}>{t}</button>
          ))}
        </div>
      </div>

      {tab === "Days" && <DaysTab />}
      {tab === "Bookings" && <BookingsTab />}
      {tab === "Activities" && <ActivitiesTab />}
      {tab === "Beaches" && <BeachesTab />}
      {tab === "Hotels" && <HotelsTab />}
      {tab === "Cars" && <CarsTab />}
      {tab === "Comms" && <CommsTab />}
      {tab === "Phrases" && <PhrasesTab />}
      {tab === "Etiquette" && <EtiquetteTab />}
      {tab === "Affaan" && <AffaanTab />}
      {tab === "Travelers" && <TravelersTab />}
      {tab === "Food" && <FoodTab />}
      {tab === "Flights" && <FlightsTab />}
      {tab === "Costs" && <CostsTab />}
      {tab === "Packing" && (
        <div style={{ paddingTop: 16 }}>
          <Checklist data={thailandChecklist} storageKey="tie3-thailand-checklist" accent={BLUE} />
        </div>
      )}
    </div>
  );
}

function daysUntil(iso) {
  const now = new Date();
  const deadline = new Date(iso);
  return Math.ceil((deadline - now) / (1000 * 60 * 60 * 24));
}

function cancelStatus(iso) {
  const d = daysUntil(iso);
  if (d < 0) return { d, tone: "gone", label: "Free-cancellation window passed" };
  if (d === 0) return { d, tone: "urgent", label: "Free cancellation ends TODAY" };
  if (d <= 2) return { d, tone: "urgent", label: `Free cancellation ends in ${d} day${d === 1 ? "" : "s"}` };
  if (d <= 5) return { d, tone: "soon", label: `${d} days of free cancellation left` };
  return { d, tone: "ok", label: `Free until ${new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}` };
}

const TONE = {
  urgent: { bg: "#FBEBEB", bd: "rgba(168,40,56,0.4)", fg: "#8B1E2D", dot: "#A82838" },
  soon: { bg: "#FDF3DD", bd: "rgba(200,150,40,0.45)", fg: "#7A5510", dot: "#D8A838" },
  ok: { bg: "#E3F3EA", bd: "rgba(20,102,63,0.3)", fg: "#14663F", dot: "#1B8A5A" },
  gone: { bg: "#F2EEE8", bd: "var(--line)", fg: "var(--mist)", dot: "#8C857F" },
};

function BookingDetail({ b }) {
  const st = cancelStatus(b.freeCancelUntil);
  const tone = TONE[st.tone];
  return (
    <div style={{ padding: "0 14px" }}>
      {/* status bar */}
      <div style={{ background: tone.bg, border: `1px solid ${tone.bd}`, borderRadius: "var(--r-sm)", padding: "7px 11px", display: "flex", alignItems: "center", gap: 7, marginBottom: 10 }}>
        <span style={{ width: 7, height: 7, borderRadius: 99, background: tone.dot, flexShrink: 0 }} />
        <span style={{ fontSize: 11.5, fontWeight: 700, color: tone.fg }}>{st.label}</span>
        {st.tone === "urgent" && <span style={{ marginLeft: "auto", fontSize: 14 }}>🔔</span>}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10, marginBottom: 8 }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 700, fontSize: 14, lineHeight: 1.25 }}>{b.property}</div>
          <div style={{ fontSize: 11, color: "var(--mist)", marginTop: 1 }}>{b.area}</div>
        </div>
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 13.5, fontWeight: 600, color: "#0E6B6B" }}>{b.priceBdt}</div>
          <div style={{ fontSize: 10, color: "var(--mist)" }}>{b.priceLabel}</div>
          {b.currency && <span style={{ fontSize: 8.5, fontWeight: 700, color: "#7A5510", background: "#FDF3DD", padding: "1px 6px", borderRadius: 99, marginTop: 3, display: "inline-block" }}>{b.currency}</span>}
        </div>
      </div>

      {b.status === "overlap" && (
        <div style={{ fontSize: 10, fontWeight: 700, color: "#8B1E2D", background: "#FBEBEB", display: "inline-block", padding: "3px 9px", borderRadius: 99, marginBottom: 9 }}>
          ⚠️ OVERLAPPING — keep one, cancel the rest
        </div>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "4px 9px", fontSize: 11.5, marginBottom: 10 }}>
        <span style={{ color: "var(--mist)", fontWeight: 700 }}>Dates</span>
        <span style={{ color: "var(--slate)" }}>{new Date(b.checkIn).toLocaleDateString("en-GB", { day: "numeric", month: "short" })} → {new Date(b.checkOut).toLocaleDateString("en-GB", { day: "numeric", month: "short" })} · {b.nights} nights</span>
        <span style={{ color: "var(--mist)", fontWeight: 700 }}>Room</span><span style={{ color: "var(--slate)" }}>{b.room}</span>
        <span style={{ color: "var(--mist)", fontWeight: 700 }}>Guests</span><span style={{ color: "var(--slate)" }}>{b.occupancy}</span>
        <span style={{ color: "var(--mist)", fontWeight: 700 }}>Board</span><span style={{ color: "var(--slate)" }}>{b.board}</span>
        <span style={{ color: "var(--mist)", fontWeight: 700 }}>Ref</span><span style={{ color: "var(--slate)", fontFamily: "var(--font-mono)", fontSize: 11 }}>{b.source} · {b.id}</span>
      </div>

      <div style={{ fontSize: 10, fontWeight: 700, color: "var(--m-blue)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4 }}>Price breakdown</div>
      {b.breakdown.map((r, i) => (
        <div key={i} style={{ display: "flex", justifyContent: "space-between", fontSize: 11.5, padding: "2px 0", color: "var(--slate)" }}>
          <span>{r[0]}</span><span style={{ fontFamily: "var(--font-mono)" }}>{r[1]}</span>
        </div>
      ))}
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, padding: "5px 0 2px", marginTop: 3, borderTop: "1px solid var(--line)", fontWeight: 700 }}>
        <span>Total</span><span style={{ fontFamily: "var(--font-mono)" }}>{b.priceLabel} · {b.priceBdt}</span>
      </div>

      <div style={{ fontSize: 10, fontWeight: 700, color: "var(--m-blue)", textTransform: "uppercase", letterSpacing: "0.05em", margin: "11px 0 4px" }}>Cancellation</div>
      {b.cancelTiers.map((r, i) => (
        <div key={i} style={{ display: "flex", justifyContent: "space-between", fontSize: 11.5, padding: "2px 0", color: "var(--slate)" }}>
          <span>{r[0]}</span><span style={{ fontWeight: 600 }}>{r[1]}</span>
        </div>
      ))}

      <div style={{ fontSize: 11, color: "var(--slate)", lineHeight: 1.5, marginTop: 10, paddingTop: 8, borderTop: "1px solid var(--line)" }}>
        {b.payment}{b.phone ? ` · ☎ ${b.phone}` : ""}
      </div>

      {b.manageUrl && (
        <a href={b.manageUrl} target="_blank" rel="noopener noreferrer"
          style={{ display: "inline-flex", alignItems: "center", gap: 5, marginTop: 10, fontSize: 11.5, fontWeight: 700, color: "#fff", background: "var(--m-blue)", padding: "7px 13px", borderRadius: 99 }}>
          Manage / cancel on {b.source}
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </a>
      )}
    </div>
  );
}

function BookingsTab() {
  const byLeg = (leg) => thailandBookings.filter(b => b.leg === leg).sort((a, b) => new Date(a.freeCancelUntil) - new Date(b.freeCancelUntil));
  const samui = byLeg("samui");
  const bangkok = byLeg("bangkok");

  const upcoming = [...thailandBookings]
    .map(b => ({ b, d: daysUntil(b.freeCancelUntil) }))
    .filter(x => x.d >= 0)
    .sort((a, b) => a.d - b.d);
  const next = upcoming[0];

  const mkTile = (b) => {
    const st = cancelStatus(b.freeCancelUntil);
    const dotColor = TONE[st.tone].dot;
    return {
      key: b.id,
      icon: b.leg === "samui" ? "🏝️" : "🏙️",
      label: b.property.replace(/ — .*/, ""),
      sub: `${b.priceBdt} · ${st.d >= 0 ? `${st.d}d left` : "expired"}`,
      accent: dotColor,
      render: () => <BookingDetail b={b} />,
    };
  };

  return (
    <div style={{ paddingTop: 14 }}>
      {next && (
        <div style={{ margin: "0 20px 12px", borderRadius: "var(--r-md)", overflow: "hidden", background: next.d <= 2 ? "linear-gradient(135deg, #8B1E2D, #A82838)" : "linear-gradient(135deg, var(--m-blue), #0E8C8C)", color: "#fff", padding: "14px 16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 3 }}>
            <span style={{ fontSize: 16 }}>🔔</span>
            <span className="eyebrow" style={{ color: "rgba(255,255,255,0.85)", fontSize: 9.5 }}>FREE-CANCELLATION ALERT</span>
          </div>
          <div style={{ fontSize: 13.5, fontWeight: 600, lineHeight: 1.4 }}>
            {next.d === 0
              ? `“${next.b.property}” — free cancellation ends TODAY.`
              : `${next.d} day${next.d === 1 ? "" : "s"} left to cancel “${next.b.property}” free (until ${new Date(next.b.freeCancelUntil).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}).`}
          </div>
        </div>
      )}

      <div style={{ margin: "0 20px 12px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 9 }}>
        {[
          { n: samui.length, l: "Samui held", c: "#0E8C8C" },
          { n: bangkok.length, l: "Bangkok held", c: "var(--m-blue)" },
        ].map((s, i) => (
          <div key={i} className="card" style={{ padding: "10px 12px", borderLeft: `3px solid ${s.c}` }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 600, color: s.c, lineHeight: 1 }}>{s.n}</div>
            <div style={{ fontSize: 10, color: "var(--mist)", marginTop: 3 }}>{s.l} · keep 1</div>
          </div>
        ))}
      </div>

      <div style={{ padding: "0 20px 10px" }}>
        <p style={{ fontSize: 12, color: "var(--slate)", lineHeight: 1.6 }}>{bookingsMeta.note}</p>
      </div>

      <div style={{ padding: "0 20px 8px" }}>
        <div style={{ fontSize: 10.5, fontWeight: 700, color: "#0E8C8C", textTransform: "uppercase", letterSpacing: "0.07em" }}>Koh Samui · 1–5 Sep</div>
      </div>
      <TileGrid tiles={samui.map(mkTile)} />

      <div style={{ padding: "18px 20px 8px" }}>
        <div style={{ fontSize: 10.5, fontWeight: 700, color: "var(--m-blue)", textTransform: "uppercase", letterSpacing: "0.07em" }}>Bangkok · 5–8 Sep</div>
      </div>
      <TileGrid tiles={bangkok.map(mkTile)} accent="var(--m-blue)" />

      <div style={{ padding: "14px 20px 16px" }}>
        <div className="tip" style={{ background: "var(--amber-bg)", border: "1px solid var(--amber-line)", color: "var(--amber-text)", marginTop: 0 }}>
          <strong>Heads-up:</strong> {bookingsMeta.fxNote}
        </div>
      </div>
    </div>
  );
}

function DayDetail({ d }) {
  return (
    <div style={{ padding: "0 14px" }}>
      <div style={{ fontSize: 12, color: "var(--mist)", fontStyle: "italic", marginBottom: 8 }}>{d.tagline}</div>
      {d.activities.map((a, j) => (
        <div key={j} style={{ padding: "10px 0", borderTop: "1px solid var(--line)", display: "flex", gap: 10 }}>
          <div style={{ minWidth: 58, flexShrink: 0 }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: a.rating === "nap" ? "#A0519E" : "var(--slate)" }}>{a.time}</div>
            <span className={`dot ${a.rating}`} style={{ marginTop: 4 }} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 2 }}>{a.title}</div>
            <div style={{ fontSize: 12, color: "var(--slate)", lineHeight: 1.5 }}>{a.desc}</div>
            {a.tip && (
              <div className={`tip ${a.rating === "prep" ? "warn" : "malaysia"}`} style={{ fontSize: 11.5 }}>
                <strong>{a.rating === "prep" ? "Note" : "Toddler tip"}:</strong> {a.tip}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function DaysTab() {
  const icon = (d) => d.dest === "transit" ? "✈️" : d.dest === "samui" ? "🏝️" : "🏙️";
  const tiles = thailandDays.map((d) => ({
    key: `d${d.day}`,
    icon: icon(d),
    label: `Day ${d.day} · ${DEST_LABEL[d.dest]}`,
    sub: d.date,
    accent: DEST_COLOR[d.dest],
    render: () => <DayDetail d={d} />,
  }));
  return (
    <div style={{ paddingTop: 14 }}>
      <div style={{ padding: "0 20px 10px" }}>
        <div className="tip warn" style={{ marginTop: 0, marginBottom: 10 }}>
          <strong>Visa first:</strong> Thailand requires an e-visa for Bangladeshi passports. Apply for all three well before 1 September.
        </div>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 10.5, color: "var(--mist)", fontWeight: 500 }}><span className="dot ok" /> Toddler ready</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 10.5, color: "var(--mist)", fontWeight: 500 }}><span className="dot prep" /> Needs prep</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 10.5, color: "var(--mist)", fontWeight: 500 }}><span className="dot nap" /> Nap / rest</span>
        </div>
      </div>
      <TileGrid tiles={tiles} />
      <div style={{ height: 16 }} />
    </div>
  );
}

function CFBadge({ cf }) {
  return (
    <span style={{
      fontSize: 10, fontWeight: 700, padding: "3px 9px", borderRadius: 99, flexShrink: 0,
      background: cf ? "#E3F3EA" : "#FBEBEB",
      color: cf ? "#14663F" : "#8B1E2D",
    }}>{cf ? "Child-friendly" : "Not for toddlers"}</span>
  );
}

function ActRows({ list }) {
  return (
    <div style={{ padding: "0 14px" }}>
      {list.map((a, i) => (
        <div key={i} style={{ padding: "9px 0", borderBottom: i < list.length - 1 ? "1px solid var(--line)" : "none" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8, marginBottom: 2 }}>
            <span style={{ fontWeight: 600, fontSize: 13, lineHeight: 1.3 }}>{a.name}</span>
            <CFBadge cf={a.cf} />
          </div>
          <div style={{ fontSize: 11.5, color: "var(--slate)", lineHeight: 1.5 }}>{a.note}</div>
        </div>
      ))}
    </div>
  );
}

function ActivitiesTab() {
  const tiles = [
    { key: "samui", icon: "🏝️", label: "Koh Samui", sub: `${samuiActivities.length} things to do`, render: () => <ActRows list={samuiActivities} /> },
    { key: "bkk", icon: "🏙️", label: "Bangkok", sub: `${bangkokActivities.length} things to do`, accent: "var(--m-blue)", render: () => <ActRows list={bangkokActivities} /> },
    { key: "phangan", icon: "⛴️", label: "Koh Phangan?", sub: "Our verdict", accent: "var(--u-gold)", render: () => (
      <div style={{ padding: "0 14px" }}>
        <div style={{ display: "inline-block", fontSize: 10.5, fontWeight: 700, background: "#FDF3DD", color: "#7A5510", padding: "3px 10px", borderRadius: 99, marginBottom: 8 }}>{phanganVerdict.verdict}</div>
        <div style={{ fontSize: 12.5, color: "var(--slate)", lineHeight: 1.65 }}>{phanganVerdict.body}</div>
      </div>
    )},
    { key: "book", icon: "🎫", label: "Where to book", sub: "Sites + lead times", accent: "var(--m-blue)", render: () => (
      <div style={{ padding: "0 14px" }}>
        <p style={{ fontSize: 12, color: "var(--slate)", lineHeight: 1.6, marginBottom: 10 }}>{activityBookingSitesNote}</p>
        {activityBookingGuide.map((a, i) => (
          <div key={i} style={{ padding: "10px 0", borderTop: "1px solid var(--line)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 8, marginBottom: 4 }}>
              <span style={{ fontWeight: 700, fontSize: 12.5, lineHeight: 1.3 }}>{a.name}</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#0E6B6B", flexShrink: 0, textAlign: "right" }}>{a.price}</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "3px 7px", fontSize: 11.5 }}>
              <span style={{ fontWeight: 700, color: "var(--m-blue)" }}>🎫</span><span style={{ color: "var(--ink)" }}>{a.site}</span>
              <span style={{ fontWeight: 700, color: "var(--m-blue)" }}>⏰</span><span style={{ color: "var(--ink)" }}>{a.when}</span>
              <span style={{ fontWeight: 700, color: "var(--m-blue)" }}>💡</span><span style={{ color: "var(--slate)", lineHeight: 1.5 }}>{a.why}</span>
            </div>
          </div>
        ))}
      </div>
    )},
    { key: "romance", icon: "💞", label: "Romantic escapes", sub: "For you two", accent: "#C0507A", render: () => (
      <div style={{ padding: "0 14px" }}>
        <p style={{ fontSize: 12, color: "var(--slate)", lineHeight: 1.6, marginBottom: 10 }}>
          Grown-up moments around Affaan's nap or with resort babysitting.
        </p>
        {romanticEscapes.map((r, i) => (
          <div key={i} style={{ padding: "10px 0", borderTop: "1px solid var(--line)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 3, flexWrap: "wrap" }}>
              <span style={{ fontSize: 9.5, fontWeight: 700, color: "#9A3D5F", background: "#FBEAF1", padding: "2px 7px", borderRadius: 99 }}>{r.where}</span>
              <span style={{ fontWeight: 700, fontSize: 12.5 }}>{r.title}</span>
            </div>
            <div style={{ fontSize: 12, color: "var(--slate)", lineHeight: 1.55, marginBottom: 4 }}>{r.desc}</div>
            <div style={{ fontSize: 11, color: "#9A3D5F", fontStyle: "italic" }}>💞 {r.tip}</div>
          </div>
        ))}
      </div>
    )},
  ];
  return (
    <div style={{ paddingTop: 16 }}>
      <p style={{ fontSize: 12.5, color: "var(--slate)", lineHeight: 1.6, padding: "0 20px 12px" }}>
        Everything worth doing in both places — nothing left out, each flagged for Affaan. Tap a tile.
      </p>
      <TileGrid tiles={tiles} />
    </div>
  );
}

function PhrasesTab() {
  const tiles = thaiPhrases.map((g, i) => ({
    key: `g${i}`, icon: g.icon, label: g.group, sub: `${g.items.length} phrases`,
    render: () => (
      <div style={{ padding: "0 14px" }}>
        {g.items.map((p, j) => (
          <div key={j} style={{ padding: "9px 0", borderBottom: j < g.items.length - 1 ? "1px solid var(--line)" : "none" }}>
            <div style={{ fontSize: 15, fontWeight: 500, color: "var(--ink)", lineHeight: 1.3 }}>{p.thai}</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, color: "#0E6B6B", fontWeight: 600, marginTop: 2 }}>{p.say}</div>
            <div style={{ fontSize: 12, color: "var(--slate)", marginTop: 2, lineHeight: 1.45 }}>{p.mean}</div>
          </div>
        ))}
      </div>
    ),
  }));
  return (
    <div style={{ paddingTop: 16 }}>
      <div style={{ padding: "0 20px 12px" }}>
        <div className="tip malaysia" style={{ marginTop: 0 }}>{thaiPhraseNote}</div>
      </div>
      <TileGrid tiles={tiles} />
      <div style={{ padding: "14px 20px 16px" }}>
        <div className="tip warn"><strong>Offline tip:</strong> {offlineEssentials}</div>
      </div>
    </div>
  );
}

function EtiquetteTab() {
  const tiles = [
    { key: "do", icon: "✅", label: "Do", sub: `${thailandDos.length} habits`, accent: "#1B8A5A", render: () => (
      <div style={{ padding: "0 14px" }}>
        {thailandDos.map((d, i) => (
          <div key={i} style={{ display: "flex", gap: 10, padding: "9px 0", borderBottom: i < thailandDos.length - 1 ? "1px solid var(--line)" : "none", alignItems: "flex-start" }}>
            <span style={{ fontSize: 17, flexShrink: 0, lineHeight: 1.2 }}>{d.icon}</span>
            <span style={{ fontSize: 12.5, color: "var(--ink)", lineHeight: 1.55 }}>{d.text}</span>
          </div>
        ))}
      </div>
    )},
    { key: "dont", icon: "⚠️", label: "Don't", sub: `${thailandDonts.length} to avoid`, accent: "#A82838", render: () => (
      <div style={{ padding: "0 14px" }}>
        {thailandDonts.map((d, i) => (
          <div key={i} style={{ display: "flex", gap: 10, padding: "9px 8px", margin: "0 -8px", borderBottom: i < thailandDonts.length - 1 ? "1px solid var(--line)" : "none", alignItems: "flex-start", background: d.severe ? "#FBEBEB" : "transparent", borderRadius: d.severe ? 6 : 0 }}>
            <span style={{ fontSize: 17, flexShrink: 0, lineHeight: 1.2 }}>{d.icon}</span>
            <span style={{ fontSize: 12.5, color: d.severe ? "#8B1E2D" : "var(--ink)", lineHeight: 1.55, fontWeight: d.severe ? 600 : 400 }}>{d.text}</span>
          </div>
        ))}
      </div>
    )},
  ];
  return (
    <div style={{ paddingTop: 16 }}>
      <TileGrid tiles={tiles} />
      <div style={{ padding: "14px 20px 16px" }}>
        <div className="tip malaysia" style={{ marginTop: 0 }}>{thailandDosNote}</div>
      </div>
    </div>
  );
}

function BeachesTab() {
  const tiles = samuiBeaches.map((b, i) => ({
    key: `b${i}`,
    icon: b.star ? "⭐" : "🏖️",
    label: b.name,
    sub: b.area,
    render: () => (
      <div style={{ padding: "0 14px" }}>
        <div style={{ display: "inline-block", fontSize: 10.5, fontWeight: 700, color: "#0E6B6B", background: "#E5F3F3", padding: "3px 10px", borderRadius: 99, marginBottom: 9 }}>{b.verdict}</div>
        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "5px 9px", fontSize: 12.5 }}>
          <span style={{ color: "var(--mist)", fontWeight: 700 }}>🌊 Water</span><span style={{ color: "var(--slate)", lineHeight: 1.5 }}>{b.water}</span>
          <span style={{ color: "var(--mist)", fontWeight: 700 }}>✨ Vibe</span><span style={{ color: "var(--slate)", lineHeight: 1.5 }}>{b.vibe}</span>
          <span style={{ color: "var(--mist)", fontWeight: 700 }}>👶 Affaan</span><span style={{ color: "var(--slate)", lineHeight: 1.5 }}>{b.toddler}</span>
        </div>
      </div>
    ),
  }));
  return (
    <div style={{ paddingTop: 16 }}>
      <div style={{ padding: "0 20px 10px" }}>
        <p style={{ fontSize: 12.5, color: "var(--slate)", lineHeight: 1.6 }}>All ten Samui beaches compared. Tap for water, vibe, and how each suits Affaan.</p>
      </div>
      <TileGrid tiles={tiles} />
      <div style={{ padding: "14px 20px 16px" }}>
        <div className="card pad" style={{ background: "#E5F3F3", border: "1px solid rgba(14,140,140,0.3)" }}>
          <div style={{ fontSize: 10.5, fontWeight: 700, color: "#0E8C8C", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 5 }}>Recommendation</div>
          <div style={{ fontSize: 12.5, color: "var(--ink)", lineHeight: 1.6 }}>{beachRecommendation}</div>
        </div>
      </div>
    </div>
  );
}

function BeachSpaBadges({ beachfront, spa }) {
  return (
    <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 6 }}>
      {beachfront && <span style={{ fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 99, background: "#E5F3F3", color: "#0E6B6B" }}>🏖️ Beachfront</span>}
      {spa && <span style={{ fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 99, background: "#F3E9F5", color: "#7A3B78" }}>💆 Spa</span>}
    </div>
  );
}

function HotelsTab() {
  const shopping = bangkokHotels.filter(h => h.type === "Shopping");
  const tiles = [
    { key: "picks", icon: "⭐", label: "Your top picks", sub: `${samuiTopPicks.length} named resorts`, render: () => (
      <div style={{ padding: "0 14px" }}>
        <p style={{ fontSize: 12, color: "var(--slate)", lineHeight: 1.6, marginBottom: 10 }}>{samuiTopPickNote}</p>
        {samuiTopPicks.map((h, i) => (
          <div key={i} style={{ padding: "10px 0", borderTop: "1px solid var(--line)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 8, marginBottom: 3 }}>
              <span style={{ fontWeight: 700, fontSize: 12.5, lineHeight: 1.3 }}>{h.star ? "★ " : ""}{h.name}</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#0E6B6B", flexShrink: 0 }}>{h.price}</span>
            </div>
            <div style={{ fontSize: 11, color: "var(--mist)", marginBottom: 4 }}>{h.area} · {h.pool}</div>
            <div style={{ fontSize: 11.5, color: "var(--slate)", lineHeight: 1.5 }}><strong>Swim:</strong> {h.swim}</div>
            <div style={{ fontSize: 11.5, color: "var(--slate)", fontStyle: "italic", marginTop: 4 }}>{h.note}</div>
            <BeachSpaBadges beachfront={h.beachfront} spa={h.spa} />
          </div>
        ))}
      </div>
    )},
    { key: "cm", icon: "🏝️", label: "Choeng Mon villas", sub: "Beachfront + spa < $200", render: () => (
      <div style={{ padding: "0 14px" }}>
        {choengMonVillas.map((h, i) => (
          <div key={i} style={{ padding: "9px 0", borderBottom: i < choengMonVillas.length - 1 ? "1px solid var(--line)" : "none" }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
              <span style={{ fontWeight: 700, fontSize: 12.5 }}>{h.star ? "★ " : ""}{h.name}</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#0E6B6B", flexShrink: 0 }}>{h.price}</span>
            </div>
            <div style={{ fontSize: 11, color: "#7A3B78", fontWeight: 600, margin: "2px 0 3px" }}>💆 {h.spa}</div>
            <div style={{ fontSize: 11.5, color: "var(--slate)", fontStyle: "italic", lineHeight: 1.5 }}>{h.note}</div>
          </div>
        ))}
        <div className="tip malaysia" style={{ marginTop: 10 }}>{choengMonVillaNote}</div>
      </div>
    )},
    { key: "more", icon: "🏊", label: "10 more resorts", sub: "Pool villas < $200", render: () => (
      <div style={{ padding: "0 14px" }}>
        {samuiResorts.map((h, i) => (
          <div key={i} style={{ padding: "9px 0", borderBottom: i < samuiResorts.length - 1 ? "1px solid var(--line)" : "none" }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
              <span style={{ fontWeight: 600, fontSize: 12.5 }}>{h.star ? "★ " : ""}{h.name}</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#0E6B6B", flexShrink: 0 }}>{h.price}</span>
            </div>
            <div style={{ fontSize: 11, color: "var(--mist)" }}>{h.area} · {h.pool}</div>
            <div style={{ fontSize: 11.5, color: "var(--slate)", fontStyle: "italic", marginTop: 2 }}>{h.note}</div>
          </div>
        ))}
      </div>
    )},
    { key: "river", icon: "🏙️", label: "Bangkok riverside", sub: "7 compared in depth", accent: "var(--m-blue)", render: () => (
      <div style={{ padding: "0 6px" }}>
        {bangkokRiverside.map((h, i) => (
          <Accordion key={i} accent="var(--m-blue)" badge={h.price} defaultOpen={false}
            leftNode={<div style={{ width: 34, height: 34, borderRadius: 9, flexShrink: 0, background: h.star ? "linear-gradient(135deg, var(--m-blue), #0E8C8C)" : "var(--cloud)", color: h.star ? "#fff" : "var(--slate)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 13 }}>{h.star ? "★" : (i + 1)}</div>}
            title={h.name} subtitle={h.verdict}>
            <div style={{ padding: "8px 14px 12px" }}>
              {[["Location", h.location],["Rooms", h.rooms],["Pool", h.pool],["Family", h.family],["Dining", h.dining],["River boat", h.boat]].map(([k, v], j) => (
                <div key={j} style={{ display: "grid", gridTemplateColumns: "70px 1fr", gap: 8, padding: "5px 0", borderBottom: "1px solid var(--line)" }}>
                  <span style={{ fontSize: 10, fontWeight: 700, color: "var(--m-blue)", textTransform: "uppercase" }}>{k}</span>
                  <span style={{ fontSize: 12, color: "var(--slate)", lineHeight: 1.5 }}>{v}</span>
                </div>
              ))}
              <div style={{ marginTop: 8, background: "#E5F3F3", borderRadius: 6, padding: "8px 10px" }}>
                <span style={{ fontSize: 10.5, fontWeight: 700, color: "#0E6B6B" }}>For Affaan — </span>
                <span style={{ fontSize: 12, color: "var(--ink)", lineHeight: 1.55 }}>{h.forAffaan}</span>
              </div>
            </div>
          </Accordion>
        ))}
        <div className="tip malaysia" style={{ margin: "10px 8px 0" }}>{bangkokRiversideVerdict}</div>
      </div>
    )},
    { key: "shop", icon: "🛍️", label: "Bangkok shopping", sub: "3 mall-side hotels", accent: "var(--m-red)", render: () => (
      <div style={{ padding: "0 14px" }}>
        {shopping.map((h, i) => (
          <div key={i} style={{ padding: "9px 0", borderBottom: i < shopping.length - 1 ? "1px solid var(--line)" : "none" }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
              <span style={{ fontWeight: 600, fontSize: 12.5 }}>{h.name}</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--m-red)", flexShrink: 0 }}>{h.price}</span>
            </div>
            <div style={{ fontSize: 11.5, color: "var(--slate)", marginTop: 2 }}>{h.note}</div>
          </div>
        ))}
        <div className="tip malaysia" style={{ marginTop: 10 }}>{hotelRecommendation}</div>
      </div>
    )},
  ];
  return (
    <div style={{ paddingTop: 16 }}>
      <TileGrid tiles={tiles} />
      <div style={{ height: 16 }} />
    </div>
  );
}

function CarsTab() {
  const tiles = [
    { key: "how", icon: "🚗", label: "How to get around", sub: "4 options compared", render: () => (
      <div style={{ padding: "0 14px" }}>
        <p style={{ fontSize: 12, color: "var(--slate)", lineHeight: 1.6, marginBottom: 10 }}>{carRentalIntro}</p>
        {carRentalOptions.map((c2, i) => (
          <div key={i} style={{ padding: "10px 0", borderTop: "1px solid var(--line)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 8, marginBottom: 3 }}>
              <span style={{ fontWeight: 700, fontSize: 12.5 }}>{c2.best ? "★ " : ""}{c2.mode}</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "#0E6B6B", flexShrink: 0, textAlign: "right" }}>{c2.price}</span>
            </div>
            <div style={{ fontSize: 12, color: "var(--slate)", lineHeight: 1.55 }}>{c2.detail}</div>
          </div>
        ))}
      </div>
    )},
    { key: "ops", icon: "🏢", label: "Real operators", sub: "SIXT · local · budget", render: () => (
      <div style={{ padding: "0 6px" }}>
        {carRentalOperatorsCompared.map((op, i) => (
          <Accordion key={i} accent="#0E8C8C" defaultOpen={op.star}
            leftNode={<div style={{ width: 34, height: 34, borderRadius: 9, flexShrink: 0, background: op.star ? "linear-gradient(135deg, #0E8C8C, #0B6B6B)" : "var(--cloud)", color: op.star ? "#fff" : "var(--slate)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 17h14M5 17a2 2 0 1 1-4 0M5 17a2 2 0 1 0 4 0m10 0a2 2 0 1 1-4 0m4 0a2 2 0 1 0 4 0M3 17V11l2-5h14l2 5v6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>}
            title={op.name} subtitle={op.type}>
            <div style={{ padding: "6px 14px 12px" }}>
              <div style={{ display: "inline-block", fontFamily: "var(--font-mono)", fontSize: 11.5, fontWeight: 600, color: "#0E6B6B", background: "#E5F3F3", padding: "4px 10px", borderRadius: 7, marginBottom: 9 }}>{op.price}</div>
              <div style={{ display: "grid", gridTemplateColumns: "68px 1fr", gap: "6px 8px", fontSize: 12 }}>
                <span style={{ fontWeight: 700, color: "#0E6B6B" }}>🔗 Book</span><span style={{ color: "var(--slate)", lineHeight: 1.5 }}>{op.booking}</span>
                <span style={{ fontWeight: 700, color: "#0E6B6B" }}>💳 Deposit</span><span style={{ color: "var(--slate)", lineHeight: 1.5 }}>{op.deposit}</span>
                <span style={{ fontWeight: 700, color: "#0E6B6B" }}>📋 Needs</span><span style={{ color: "var(--slate)", lineHeight: 1.5 }}>{op.requirements}</span>
              </div>
              <div style={{ fontSize: 11.5, color: "var(--slate)", fontStyle: "italic", marginTop: 9, paddingTop: 8, borderTop: "1px solid var(--line)" }}>{op.note}</div>
            </div>
          </Accordion>
        ))}
      </div>
    )},
    { key: "yaris", icon: "💰", label: "Yaris price", sub: "Full breakdown", render: () => (
      <div style={{ padding: "0 14px" }}>
        <div style={{ fontWeight: 700, fontSize: 12.5, marginBottom: 8, color: "#0E6B6B" }}>{yarisPriceBreakdown.vehicle}</div>
        {yarisPriceBreakdown.rows.map((r, i) => (
          <div key={i} style={{ padding: "8px 0", borderTop: "1px solid var(--line)" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--slate)", marginBottom: 2 }}>{r[0]}</div>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
              <span style={{ fontSize: 12, color: "var(--ink)" }}>{r[1]}</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#0E6B6B", flexShrink: 0 }}>{r[2]}</span>
            </div>
          </div>
        ))}
        <div className="tip warn" style={{ marginTop: 10 }}>{yarisPriceBreakdown.note}</div>
      </div>
    )},
    { key: "wa", icon: "💬", label: "WhatsApp booking", sub: "Fastest local route", accent: "#25A366", render: () => (
      <div style={{ padding: "0 14px" }}>
        <p style={{ fontSize: 12, color: "var(--slate)", lineHeight: 1.6, marginBottom: 8 }}>{carRentalWhatsapp.intro}</p>
        <div className="tip warn" style={{ marginBottom: 10 }}>{carRentalWhatsapp.note}</div>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#0E6B6B", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6 }}>What to send</div>
        {carRentalWhatsapp.whatToSend.map((w, i) => (
          <div key={i} style={{ display: "flex", gap: 8, marginBottom: 5, alignItems: "flex-start" }}>
            <span style={{ width: 5, height: 5, borderRadius: 99, background: "#0E8C8C", flexShrink: 0, marginTop: 6 }} />
            <span style={{ fontSize: 12, color: "var(--ink)", lineHeight: 1.5 }}>{w}</span>
          </div>
        ))}
      </div>
    )},
    { key: "tips", icon: "💡", label: "Driver tips", sub: `${carRentalTips.length} essentials`, render: () => (
      <div style={{ padding: "0 14px" }}>
        {carRentalTips.map((t, i) => (
          <div key={i} style={{ display: "flex", gap: 9, padding: "8px 0", borderBottom: i < carRentalTips.length - 1 ? "1px solid var(--line)" : "none", alignItems: "flex-start" }}>
            <span style={{ width: 5, height: 5, borderRadius: 99, background: "#0E8C8C", flexShrink: 0, marginTop: 6 }} />
            <span style={{ fontSize: 12, color: "var(--ink)", lineHeight: 1.55 }}>{t}</span>
          </div>
        ))}
      </div>
    )},
  ];
  return (
    <div style={{ paddingTop: 16 }}>
      <TileGrid tiles={tiles} />
      <div style={{ padding: "14px 20px 16px" }}>
        <div className="tip warn" style={{ marginTop: 0 }}>
          <strong>Bottom line:</strong> a private sedan + driver for your three touring days, and no car on pure pool days.
        </div>
      </div>
    </div>
  );
}

function SimCard({ op, accent }) {
  return (
    <div className="card" style={{ marginBottom: 12, overflow: "hidden", border: op.star ? `1.5px solid ${accent}` : "1px solid var(--line)" }}>
      <div className="pad">
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
          {op.star && <svg viewBox="0 0 24 24" width="13" height="13" fill={accent}><path d="m12 3 2.6 5.6 6 .7-4.4 4.1 1.2 6L12 16.8 6.6 19.4l1.2-6L3.4 9.3l6-.7L12 3Z" /></svg>}
          <span style={{ fontWeight: 700, fontSize: 15 }}>{op.name}</span>
        </div>
        <div style={{ fontSize: 12, color: "var(--slate)", lineHeight: 1.55, marginBottom: 10 }}>{op.coverage}</div>
        {op.plans.map((p, j) => (
          <div key={j} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "7px 0", borderTop: j === 0 ? "1px solid var(--line)" : "none" }}>
            <div>
              <div style={{ fontWeight: 600, fontSize: 12.5 }}>{p.label}</div>
              <div style={{ fontSize: 11, color: "var(--mist)" }}>{p.data} · {p.validity}</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 600, color: accent }}>{p.price}</div>
              <div style={{ fontSize: 10.5, color: "var(--mist)" }}>{p.bdt}</div>
            </div>
          </div>
        ))}
        <div style={{ fontSize: 11.5, color: "var(--slate)", fontStyle: "italic", marginTop: 8, paddingTop: 8, borderTop: "1px solid var(--line)" }}>{op.note}</div>
      </div>
    </div>
  );
}

function CommsTab() {
  const tiles = [
    { key: "sim", icon: "📶", label: "SIM & eSIM", sub: "AIS vs True/DTAC", render: () => (
      <div style={{ padding: "0 14px" }}>
        <div className="tip warn" style={{ marginTop: 0, marginBottom: 10 }}>
          <strong>Why it matters:</strong> you'll navigate Samui's ring road by Google Maps — network choice decides whether directions load on the move.
        </div>
        {thailandSimOperators.map((op, i) => <SimCard key={i} op={op} accent="#0E8C8C" />)}
        <div className="tip malaysia">{thailandSimRecommendation}</div>
      </div>
    )},
    { key: "ride", icon: "🚕", label: "Ride-hailing", sub: "Grab · Bolt · InDrive", accent: "var(--m-blue)", render: () => (
      <div style={{ padding: "0 14px" }}>
        <p style={{ fontSize: 12, color: "var(--slate)", lineHeight: 1.6, marginBottom: 10 }}>
          Mainly for Bangkok — Samui leans on your rental car.
        </p>
        {thailandRideApps.map((a, i) => (
          <div key={i} style={{ padding: "10px 0", borderTop: "1px solid var(--line)" }}>
            <div style={{ fontWeight: 700, fontSize: 12.5, marginBottom: 3 }}>{a.star ? "★ " : ""}{a.name}</div>
            <div style={{ fontSize: 12, color: "var(--slate)", lineHeight: 1.6 }}>{a.note}</div>
          </div>
        ))}
        <div className="tip malaysia" style={{ marginTop: 10 }}>{thailandRideRecommendation}</div>
      </div>
    )},
    { key: "tips", icon: "💡", label: "Data tips", sub: `${thailandSimTips.length} pointers`, render: () => (
      <div style={{ padding: "0 14px" }}>
        {thailandSimTips.map((t, i) => (
          <div key={i} style={{ display: "flex", gap: 9, padding: "8px 0", borderBottom: i < thailandSimTips.length - 1 ? "1px solid var(--line)" : "none", alignItems: "flex-start" }}>
            <span style={{ width: 5, height: 5, borderRadius: 99, background: "#0E8C8C", flexShrink: 0, marginTop: 6 }} />
            <span style={{ fontSize: 12, color: "var(--ink)", lineHeight: 1.55 }}>{t}</span>
          </div>
        ))}
      </div>
    )},
  ];
  return (
    <div style={{ paddingTop: 16 }}>
      <TileGrid tiles={tiles} />
      <div style={{ height: 16 }} />
    </div>
  );
}

function AffaanTab() {
  const tiles = [
    { key: "rhythm", icon: "🕐", label: "Daily rhythm", sub: "Nap-anchored", accent: "#A0519E", render: () => (
      <div style={{ padding: "0 14px" }}>
        {toddlerSchedule.map((s, i) => (
          <div key={i} style={{ padding: "8px 10px", margin: "0 -10px", borderBottom: i < toddlerSchedule.length - 1 ? "1px solid var(--line)" : "none", background: s.nap ? "#F3E9F5" : "transparent", borderRadius: s.nap ? 6 : 0 }}>
            <div style={{ fontSize: 10.5, fontWeight: 700, color: s.nap ? "#A0519E" : "var(--m-blue)", letterSpacing: "0.03em", marginBottom: 1 }}>{s.time}</div>
            <div style={{ fontSize: 12.5, fontWeight: s.nap ? 600 : 500, color: s.nap ? "#A0519E" : "var(--ink)", lineHeight: 1.4 }}>{s.activity}</div>
          </div>
        ))}
      </div>
    )},
    ...affaanNotes.map((n, i) => ({
      key: `n${i}`, icon: n.icon, label: n.title, sub: "Tap to read",
      render: () => (
        <div style={{ padding: "0 14px" }}>
          <div style={{ fontSize: 12.5, color: "var(--slate)", lineHeight: 1.65 }}>{n.text}</div>
        </div>
      ),
    })),
  ];
  return (
    <div style={{ paddingTop: 16 }}>
      <div style={{ padding: "0 20px 10px" }}>
        <p style={{ fontSize: 12.5, color: "var(--slate)", lineHeight: 1.6 }}>
          Island or city, every day runs on Affaan's clock. Guard the 12:30–2:30 nap and the whole holiday works.
        </p>
      </div>
      <TileGrid tiles={tiles} />
      <div style={{ height: 16 }} />
    </div>
  );
}

function TravelersTab() {
  const people = [
    { name: "Rose", role: "Dad", initial: "R", icon: "👨" },
    { name: "Farzana", role: "Mum", initial: "F", icon: "👩" },
    { name: "Affaan", role: "Son · 21 months", initial: "A", icon: "👶" },
  ];
  const tiles = [
    { key: "who", icon: "👨‍👩‍👦", label: "Who's travelling", sub: "3 of us", render: () => (
      <div style={{ padding: "0 14px" }}>
        {people.map((p, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 11, padding: "10px 0", borderBottom: i < people.length - 1 ? "1px solid var(--line)" : "none" }}>
            <div style={{ width: 32, height: 32, borderRadius: 99, background: "#E5F3F3", color: "#0E6B6B", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14, flexShrink: 0 }}>{p.initial}</div>
            <div>
              <div style={{ fontWeight: 600, fontSize: 13.5 }}>{p.name}</div>
              <div style={{ fontSize: 11, color: "var(--mist)" }}>{p.role}</div>
            </div>
          </div>
        ))}
      </div>
    )},
    { key: "visa", icon: "📄", label: "Visa & documents", sub: "e-visa required", accent: "#A82838", render: () => (
      <div style={{ padding: "0 14px" }}>
        <div className="tip warn" style={{ marginTop: 0, marginBottom: 10 }}>
          <strong>Thai e-visa required</strong> for Bangladeshi passports — for all three travellers, including Affaan. Apply well before departure.
        </div>
        <div style={{ fontSize: 12.5, color: "var(--slate)", lineHeight: 1.65 }}>
          Passports must be valid 6+ months beyond travel. Keep the e-visa approval, flight tickets, and hotel confirmations saved offline — see the Packing tab's document checklist.
        </div>
      </div>
    )},
  ];
  return (
    <div style={{ paddingTop: 16 }}>
      <div style={{ padding: "0 20px 10px" }}>
        <p style={{ fontSize: 12.5, color: "var(--slate)", lineHeight: 1.6 }}>
          Islands, elephants, and temples built entirely around a 21-month-old's rhythm.
        </p>
      </div>
      <TileGrid tiles={tiles} />
      <div style={{ height: 16 }} />
    </div>
  );
}

function FoodTab() {
  const grouped = thailandRestaurants.reduce((acc, r) => { (acc[r.dest] = acc[r.dest] || []).push(r); return acc; }, {});
  const tiles = Object.entries(grouped).map(([dest, items], i) => ({
    key: `f${i}`,
    icon: /samui/i.test(dest) ? "🏝️" : "🏙️",
    label: dest,
    sub: `${items.length} halal spots`,
    accent: /samui/i.test(dest) ? "#0E8C8C" : "var(--m-blue)",
    render: () => (
      <div style={{ padding: "0 14px" }}>
        {items.map((r, j) => (
          <div key={j} style={{ padding: "9px 0", borderBottom: j < items.length - 1 ? "1px solid var(--line)" : "none" }}>
            <div style={{ fontWeight: 600, fontSize: 13 }}>{r.name}</div>
            <div style={{ fontSize: 12, color: "var(--slate)", marginTop: 2, lineHeight: 1.5 }}>{r.note}</div>
          </div>
        ))}
      </div>
    ),
  }));
  return (
    <div style={{ paddingTop: 16 }}>
      <div style={{ padding: "0 20px 10px" }}>
        <p style={{ fontSize: 12.5, color: "var(--slate)", lineHeight: 1.6 }}>
          Halal needs planning in Samui (coordinate with the resort kitchen before arrival) but is easy in Bangkok.
        </p>
      </div>
      <TileGrid tiles={tiles} />
      <div style={{ padding: "14px 20px 16px" }}>
        <div className="tip malaysia" style={{ marginTop: 0 }}>
          <strong>Key phrase:</strong> "mâi sài mǔu" (no pork) — see the Phrases tab for more.
        </div>
      </div>
    </div>
  );
}

function FlightsTab() {
  const tiles = thailandFlights.map((fl, i) => ({
    key: `fl${i}`,
    icon: i === 0 ? "🛫" : i === 3 ? "🛬" : "✈️",
    label: fl.leg,
    sub: fl.time,
    accent: "var(--m-blue)",
    render: () => (
      <div style={{ padding: "0 14px" }}>
        <div style={{ fontSize: 12.5, color: "#0E6B6B", fontWeight: 700, marginBottom: 4 }}>{fl.op}</div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, color: "var(--ink)", marginBottom: 6 }}>{fl.route}</div>
        <div style={{ fontSize: 12, color: "var(--slate)", fontStyle: "italic", lineHeight: 1.55 }}>{fl.note}</div>
      </div>
    ),
  }));
  return (
    <div style={{ paddingTop: 16 }}>
      <div style={{ padding: "0 20px 10px" }}>
        <p style={{ fontSize: 12.5, color: "var(--slate)", lineHeight: 1.6 }}>Four legs: Dhaka → Bangkok → Samui, and back.</p>
      </div>
      <TileGrid tiles={tiles} accent="var(--m-blue)" />
      <div style={{ padding: "14px 20px 16px" }}>
        <div className="tip malaysia" style={{ marginTop: 0 }}>
          <strong>Bangkok Airways monopoly:</strong> USM fares only rise as September approaches — lock both legs as soon as the plan is confirmed.
        </div>
      </div>
    </div>
  );
}

function CostsTab() {
  const iconFor = (s) => /flight|airways/i.test(s) ? "✈️" : /villa|hotel/i.test(s) ? "🛏️" : /visa/i.test(s) ? "📄" : /sim/i.test(s) ? "📶" : /car/i.test(s) ? "🚗" : /food/i.test(s) ? "🍽️" : /activit/i.test(s) ? "🎫" : /ride/i.test(s) ? "🚕" : "🛍️";
  const tiles = thailandCosts.map((c2, i) => ({
    key: `tc${i}`,
    icon: iconFor(c2.item),
    label: c2.item.replace(/\s*—.*/, "").replace(/\s*\(.*\)/, ""),
    sub: c2.low,
    render: () => (
      <div style={{ padding: "0 14px" }}>
        <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 6 }}>{c2.item}</div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 6 }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 16, fontWeight: 600, color: "#0E6B6B" }}>{c2.low}</span>
          <span style={{ fontSize: 12, color: "var(--mist)" }}>– {c2.high}</span>
        </div>
        <div style={{ fontSize: 12, color: "var(--slate)", lineHeight: 1.55 }}>{c2.note}</div>
      </div>
    ),
  }));
  return (
    <div style={{ paddingTop: 16 }}>
      <div style={{ padding: "0 20px 12px" }}>
        <div style={{ borderRadius: "var(--r-md)", padding: "15px 17px", background: "linear-gradient(135deg, var(--m-blue), #0E8C8C)", color: "#fff", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div className="eyebrow" style={{ color: "#EBD98C", fontSize: 9.5 }}>ESTIMATED TOTAL</div>
            <div style={{ fontSize: 10.5, color: "rgba(255,255,255,0.68)", marginTop: 2 }}>3 travellers · 8 days</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 500, color: "#EBD98C", lineHeight: 1.15 }}>{thailandCostRange.low}</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 500, color: "#EBD98C", lineHeight: 1.15 }}>– {thailandCostRange.high}</div>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.72)", marginTop: 2 }}>{thailandCostRange.lowUsd} – {thailandCostRange.highUsd}</div>
          </div>
        </div>
      </div>
      <TileGrid tiles={tiles} />
      <div style={{ padding: "14px 20px 16px" }}>
        <div className="tip" style={{ background: "var(--amber-bg)", border: "1px solid var(--amber-line)", color: "var(--amber-text)", marginTop: 0 }}>
          <strong>Planning estimate, not a quote.</strong> Hotel lines are anchored to your real bookings; confirm live rates with your agent.
        </div>
      </div>
    </div>
  );
}


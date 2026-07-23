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
import { SectionHead } from "../components/ui";
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

function BookingCard({ b }) {
  const st = cancelStatus(b.freeCancelUntil);
  const tone = TONE[st.tone];
  const isOverlap = b.status === "overlap";
  return (
    <div className="card" style={{ marginBottom: 12, overflow: "hidden", border: b.status === "confirmed" ? "1.5px solid #0E8C8C" : "1px solid var(--line)" }}>
      {/* Free-cancellation alert bar */}
      <div style={{ background: tone.bg, borderBottom: `1px solid ${tone.bd}`, padding: "8px 14px", display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ width: 8, height: 8, borderRadius: 99, background: tone.dot, flexShrink: 0 }} />
        <span style={{ fontSize: 12, fontWeight: 700, color: tone.fg }}>{st.label}</span>
        {st.tone === "urgent" && <span style={{ marginLeft: "auto", fontSize: 16 }}>🔔</span>}
      </div>

      <div className="pad">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10, marginBottom: 6 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: 15, lineHeight: 1.25 }}>{b.property}</div>
            <div style={{ fontSize: 11.5, color: "var(--mist)", marginTop: 1 }}>{b.area}</div>
          </div>
          <div style={{ textAlign: "right", flexShrink: 0 }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 14, fontWeight: 600, color: "#0E6B6B" }}>{b.priceBdt}</div>
            <div style={{ fontSize: 10.5, color: "var(--mist)" }}>{b.priceLabel}</div>
            {b.currency && <span style={{ fontSize: 9, fontWeight: 700, color: "#7A5510", background: "#FDF3DD", padding: "1px 6px", borderRadius: 99, marginTop: 3, display: "inline-block" }}>{b.currency}</span>}
          </div>
        </div>

        {isOverlap && (
          <div style={{ fontSize: 10.5, fontWeight: 700, color: "#8B1E2D", background: "#FBEBEB", display: "inline-block", padding: "3px 9px", borderRadius: 99, marginBottom: 8 }}>
            ⚠️ OVERLAPPING — keep one, cancel the rest before the deadline
          </div>
        )}

        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "3px 10px", fontSize: 12, marginBottom: 8 }}>
          <span style={{ color: "var(--mist)", fontWeight: 600 }}>Dates</span>
          <span style={{ color: "var(--slate)" }}>{new Date(b.checkIn).toLocaleDateString("en-GB", { day: "numeric", month: "short" })} → {new Date(b.checkOut).toLocaleDateString("en-GB", { day: "numeric", month: "short" })} · {b.nights} nights</span>
          <span style={{ color: "var(--mist)", fontWeight: 600 }}>Room</span><span style={{ color: "var(--slate)" }}>{b.room}</span>
          <span style={{ color: "var(--mist)", fontWeight: 600 }}>Guests</span><span style={{ color: "var(--slate)" }}>{b.occupancy}</span>
          <span style={{ color: "var(--mist)", fontWeight: 600 }}>Board</span><span style={{ color: "var(--slate)" }}>{b.board}</span>
          <span style={{ color: "var(--mist)", fontWeight: 600 }}>Ref</span><span style={{ color: "var(--slate)", fontFamily: "var(--font-mono)", fontSize: 11.5 }}>{b.source} · {b.id}</span>
        </div>

        <Accordion accent="var(--m-blue)" title="Price & cancellation detail" defaultOpen={false}>
          <div style={{ padding: "10px 14px" }}>
            <div style={{ fontSize: 10.5, fontWeight: 700, color: "var(--m-blue)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 5 }}>Price breakdown</div>
            {b.breakdown.map((r, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", fontSize: 12, padding: "3px 0", color: "var(--slate)" }}>
                <span>{r[0]}</span><span style={{ fontFamily: "var(--font-mono)" }}>{r[1]}</span>
              </div>
            ))}
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12.5, padding: "6px 0 2px", marginTop: 4, borderTop: "1px solid var(--line)", fontWeight: 700 }}>
              <span>Total</span><span style={{ fontFamily: "var(--font-mono)" }}>{b.priceLabel} · {b.priceBdt}</span>
            </div>

            <div style={{ fontSize: 10.5, fontWeight: 700, color: "var(--m-blue)", textTransform: "uppercase", letterSpacing: "0.05em", margin: "12px 0 5px" }}>Cancellation tiers</div>
            {b.cancelTiers.map((r, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", fontSize: 12, padding: "3px 0", color: "var(--slate)" }}>
                <span>{r[0]}</span><span style={{ fontWeight: 600 }}>{r[1]}</span>
              </div>
            ))}
            <div style={{ fontSize: 11.5, color: "var(--slate)", lineHeight: 1.5, marginTop: 10, paddingTop: 8, borderTop: "1px solid var(--line)" }}>
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
        </Accordion>
      </div>
    </div>
  );
}

function BookingsTab() {
  // Sort each leg so nearest free-cancellation deadline surfaces first
  const byLeg = (leg) => thailandBookings.filter(b => b.leg === leg).sort((a, b) => new Date(a.freeCancelUntil) - new Date(b.freeCancelUntil));
  const samui = byLeg("samui");
  const bangkok = byLeg("bangkok");

  // Soonest upcoming free-cancellation deadline across all bookings
  const upcoming = [...thailandBookings]
    .map(b => ({ b, d: daysUntil(b.freeCancelUntil) }))
    .filter(x => x.d >= 0)
    .sort((a, b) => a.d - b.d);
  const next = upcoming[0];

  return (
    <div>
      {/* Top alert banner — nearest deadline */}
      {next && (
        <div style={{ margin: "16px 20px 0", borderRadius: "var(--r-md)", overflow: "hidden", background: next.d <= 2 ? "linear-gradient(135deg, #8B1E2D, #A82838)" : "linear-gradient(135deg, var(--m-blue), #0E8C8C)", color: "#fff", padding: "16px 18px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
            <span style={{ fontSize: 18 }}>🔔</span>
            <span className="eyebrow" style={{ color: "rgba(255,255,255,0.85)" }}>FREE-CANCELLATION ALERT</span>
          </div>
          <div style={{ fontSize: 14.5, fontWeight: 600, lineHeight: 1.4 }}>
            {next.d === 0
              ? `“${next.b.property}” — free cancellation ends TODAY.`
              : `${next.d} day${next.d === 1 ? "" : "s"} left to cancel “${next.b.property}” for free (until ${new Date(next.b.freeCancelUntil).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}).`}
          </div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.8)", marginTop: 4 }}>
            Decide before the deadline to avoid charges. Deadlines are in the property's local time.
          </div>
        </div>
      )}

      {/* Decision summary strip */}
      <div style={{ margin: "14px 20px 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 9 }}>
        {[
          { n: samui.length, l: "Samui held", c: "#0E8C8C" },
          { n: bangkok.length, l: "Bangkok held", c: "var(--m-blue)" },
        ].map((s, i) => (
          <div key={i} className="card" style={{ padding: "11px 12px", borderLeft: `3px solid ${s.c}` }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 21, fontWeight: 600, color: s.c, lineHeight: 1 }}>{s.n}</div>
            <div style={{ fontSize: 10.5, color: "var(--mist)", marginTop: 3 }}>{s.l} · keep 1</div>
          </div>
        ))}
      </div>

      <div style={{ padding: "12px 20px 0" }}>
        <p style={{ fontSize: 12.5, color: "var(--slate)", lineHeight: 1.6 }}>{bookingsMeta.note}</p>
      </div>

      <SectionHead num="1" title="Koh Samui · 1–5 Sep" icon="bell" />
      <div style={{ padding: "0 20px" }}>
        {samui.map((b, i) => <BookingCard key={i} b={b} />)}
      </div>

      <SectionHead num="2" title="Bangkok · 5–8 Sep" icon="bell" />
      <div style={{ padding: "0 20px 8px" }}>
        {bangkok.map((b, i) => <BookingCard key={i} b={b} />)}
        <div className="tip" style={{ background: "var(--amber-bg)", border: "1px solid var(--amber-line)", color: "var(--amber-text)", marginBottom: 16 }}>
          <strong>Heads-up:</strong> {bookingsMeta.fxNote}
        </div>
      </div>
    </div>
  );
}

function DaysTab() {
  return (
    <div style={{ padding: "14px 20px 12px", background: "var(--m-sand)" }}>
      <div className="tip warn" style={{ marginBottom: 14, marginTop: 0 }}>
        <strong>Visa first:</strong> Thailand requires an e-visa for Bangladeshi passports (Malaysia didn't). Apply for all three well before 1 September.
      </div>
      {thailandDays.map((d, i) => {
        const color = DEST_COLOR[d.dest];
        return (
          <Accordion key={i} accent={color} badge={DEST_LABEL[d.dest]}
            leftNode={
              <div style={{ width: 42, height: 42, borderRadius: 10, flexShrink: 0, background: color, color: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", lineHeight: 1 }}>
                <span style={{ fontSize: 9, opacity: 0.85, fontWeight: 600 }}>DAY</span>
                <span style={{ fontSize: 17, fontWeight: 700 }}>{d.day}</span>
              </div>
            }
            title={d.title} subtitle={d.date}>
            <div style={{ padding: "10px 16px 2px", fontSize: 12.5, color: "var(--mist)", fontStyle: "italic" }}>{d.tagline}</div>
            {d.activities.map((a, j) => (
              <div key={j} style={{ padding: "11px 16px", borderTop: "1px solid var(--line)", display: "flex", gap: 12 }}>
                <div style={{ minWidth: 62, flexShrink: 0 }}>
                  <div style={{ fontSize: 11.5, fontWeight: 600, color: a.rating === "nap" ? "#A0519E" : "var(--slate)" }}>{a.time}</div>
                  <span className={`dot ${a.rating}`} style={{ marginTop: 5 }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 13.5, marginBottom: 2 }}>{a.title}</div>
                  <div style={{ fontSize: 12.5, color: "var(--slate)", lineHeight: 1.5 }}>{a.desc}</div>
                  {a.tip && (
                    <div className={`tip ${a.rating === "prep" ? "warn" : "malaysia"}`}>
                      <strong>{a.rating === "prep" ? "Note" : "Toddler tip"}:</strong> {a.tip}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </Accordion>
        );
      })}
      <div className="card pad" style={{ marginTop: 6, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11, color: "var(--mist)", fontWeight: 500 }}><span className="dot ok" /> Toddler ready</span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11, color: "var(--mist)", fontWeight: 500 }}><span className="dot prep" /> Needs prep</span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11, color: "var(--mist)", fontWeight: 500 }}><span className="dot nap" /> Nap / rest</span>
      </div>
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
  return (
    <div>
      <SectionHead num="01" title="Koh Samui — every beach compared" icon="beach" />
      <div style={{ padding: "0 20px" }}>
        {samuiBeaches.map((b, i) => (
          <div key={i} className="card" style={{ marginBottom: 10, overflow: "hidden", border: b.star ? "1.5px solid #0E8C8C" : "1px solid var(--line)" }}>
            <div className="pad">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10, marginBottom: 8 }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    {b.star && <svg viewBox="0 0 24 24" width="13" height="13" fill="#0E8C8C"><path d="m12 3 2.6 5.6 6 .7-4.4 4.1 1.2 6L12 16.8 6.6 19.4l1.2-6L3.4 9.3l6-.7L12 3Z" /></svg>}
                    <span style={{ fontWeight: 700, fontSize: 15 }}>{b.name}</span>
                  </div>
                  <div style={{ fontSize: 11.5, color: "var(--mist)", marginTop: 1 }}>{b.area}</div>
                </div>
                <span style={{ fontSize: 11, fontWeight: 600, color: "#0E8C8C", background: "#E5F3F3", padding: "4px 10px", borderRadius: 99, flexShrink: 0 }}>{b.verdict}</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "3px 8px", fontSize: 12 }}>
                <span style={{ color: "var(--mist)", fontWeight: 600 }}>Water</span><span style={{ color: "var(--slate)" }}>{b.water}</span>
                <span style={{ color: "var(--mist)", fontWeight: 600 }}>Vibe</span><span style={{ color: "var(--slate)" }}>{b.vibe}</span>
                <span style={{ color: "var(--mist)", fontWeight: 600 }}>Affaan</span><span style={{ color: "var(--slate)" }}>{b.toddler}</span>
              </div>
            </div>
          </div>
        ))}
        <div className="card pad" style={{ background: "#E5F3F3", border: "1px solid rgba(14,140,140,0.3)", marginBottom: 16 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#0E8C8C", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 5 }}>Recommendation</div>
          <div style={{ fontSize: 13, color: "var(--ink)", lineHeight: 1.6 }}>{beachRecommendation}</div>
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
  return (
    <div>
      <div style={{ padding: "20px 20px 4px" }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 500, marginBottom: 4 }}>Affaan's daily rhythm</div>
        <p style={{ fontSize: 13, color: "var(--slate)", lineHeight: 1.6 }}>
          Island or city, every day runs on this clock. Guard the nap and the whole holiday works.
        </p>
      </div>
      <div style={{ padding: "12px 20px" }}>
        <div className="card" style={{ overflow: "hidden" }}>
          {toddlerSchedule.map((s, i) => (
            <div key={i} style={{ padding: "12px 16px", borderBottom: i < toddlerSchedule.length - 1 ? "1px solid var(--line)" : "none", background: s.nap ? "#F3E9F5" : (i % 2 === 0 ? "#fff" : "#FAFAF8") }}>
              <div style={{ fontSize: 11.5, fontWeight: 700, color: s.nap ? "#A0519E" : "var(--m-blue)", letterSpacing: "0.03em", marginBottom: 2 }}>{s.time}</div>
              <div style={{ fontSize: 13.5, fontWeight: s.nap ? 600 : 500, color: s.nap ? "#A0519E" : "var(--ink)", lineHeight: 1.4 }}>{s.activity}</div>
            </div>
          ))}
        </div>
      </div>
      <SectionHead num="02" title="Thailand-specific notes for Affaan" icon="baby" />
      <div style={{ padding: "0 20px 16px" }}>
        {affaanNotes.map((n, i) => (
          <div key={i} className="card pad" style={{ marginBottom: 10, borderTop: "3px solid #0E8C8C" }}>
            <div style={{ fontWeight: 700, fontSize: 13.5, marginBottom: 4 }}>{n.icon} {n.title}</div>
            <div style={{ fontSize: 12.5, color: "var(--slate)", lineHeight: 1.6 }}>{n.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TravelersTab() {
  const people = [
    { name: "Rose", role: "Dad", initial: "R" },
    { name: "Farzana", role: "Mum", initial: "F" },
    { name: "Affaan", role: "Son · 21 months", initial: "A" },
  ];
  return (
    <div>
      <SectionHead num="01" title="Who's travelling" icon="people" />
      <div style={{ padding: "0 20px 8px" }}>
        <p style={{ fontSize: 13, color: "var(--slate)", lineHeight: 1.6, marginBottom: 14 }}>
          The three of you — islands, elephants, and temples built entirely around a 21-month-old's rhythm.
        </p>
        <div className="card" style={{ overflow: "hidden" }}>
          {people.map((p, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "13px 16px", borderBottom: i < people.length - 1 ? "1px solid var(--line)" : "none" }}>
              <div style={{ width: 36, height: 36, borderRadius: 99, background: "#E5F3F3", color: "#0E6B6B", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 15, flexShrink: 0 }}>{p.initial}</div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 14.5 }}>{p.name}</div>
                <div style={{ fontSize: 11.5, color: "var(--mist)" }}>{p.role}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="tip warn" style={{ marginTop: 14 }}>
          <strong>Visa required:</strong> Unlike Malaysia, Thailand needs an e-visa for Bangladeshi passports — for all three travellers, including Affaan. Apply well before departure.
        </div>
      </div>
    </div>
  );
}

function FoodTab() {
  const grouped = thailandRestaurants.reduce((acc, r) => { (acc[r.dest] = acc[r.dest] || []).push(r); return acc; }, {});
  return (
    <div>
      <SectionHead num="01" title="Halal eating, both places" icon="food" />
      <div style={{ padding: "0 20px 8px" }}>
        <p style={{ fontSize: 13, color: "var(--slate)", marginBottom: 14, lineHeight: 1.6 }}>
          The one real difference from Malaysia: halal needs planning in Samui (coordinate with the resort kitchen before arrival) but is easy in Bangkok.
        </p>
        {Object.entries(grouped).map(([dest, items]) => (
          <div key={dest} style={{ marginBottom: 18 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--m-blue)", marginBottom: 8 }}>{dest}</div>
            <div className="card" style={{ overflow: "hidden" }}>
              {items.map((r, i) => (
                <div key={i} style={{ padding: "11px 14px", borderBottom: i < items.length - 1 ? "1px solid var(--line)" : "none" }}>
                  <div style={{ fontWeight: 600, fontSize: 13.5 }}>{r.name}</div>
                  <div style={{ fontSize: 12, color: "var(--slate)", marginTop: 1 }}>{r.note}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FlightsTab() {
  return (
    <div>
      <SectionHead num="01" title="Full route" icon="plane" />
      <div style={{ padding: "0 20px 8px" }}>
        {thailandFlights.map((f, i) => (
          <div key={i} className="card pad" style={{ marginBottom: 10, borderLeft: "3px solid var(--m-blue)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4 }}>
              <span style={{ fontWeight: 700, fontSize: 14 }}>{f.leg}</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, color: "var(--m-blue)", fontWeight: 500, textAlign: "right" }}>{f.time}</span>
            </div>
            <div style={{ fontSize: 12.5, color: "#0E6B6B", fontWeight: 600, marginBottom: 2 }}>{f.op}</div>
            <div style={{ fontSize: 12.5, color: "var(--slate)" }}>{f.route}</div>
            <div style={{ fontSize: 12, color: "var(--mist)", marginTop: 4, fontStyle: "italic" }}>{f.note}</div>
          </div>
        ))}
        <div className="tip malaysia" style={{ marginBottom: 16 }}>
          <strong>Bangkok Airways monopoly:</strong> USM fares only rise as September approaches — lock both legs the moment the plan is confirmed.
        </div>
      </div>
    </div>
  );
}

function CostsTab() {
  return (
    <div>
      <SectionHead num="01" title="Estimated cost — 3 travelers" icon="money" />
      <div style={{ padding: "0 20px" }}>
        <p style={{ fontSize: 12.5, color: "var(--slate)", lineHeight: 1.6, marginBottom: 14 }}>
          Full 8-day estimate. Hotel lines use the recommendation lists — the final total depends on which villa and riverside hotel you lock in.
        </p>
        {thailandCosts.map((c, i) => (
          <div key={i} className="card pad" style={{ marginBottom: 10 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 13.5, marginBottom: 2 }}>{c.item}</div>
                <div style={{ fontSize: 11.5, color: "var(--mist)" }}>{c.note}</div>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 500, color: "#0E6B6B" }}>{c.low}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--mist)" }}>– {c.high}</div>
              </div>
            </div>
          </div>
        ))}
        <div style={{ borderRadius: "var(--r-md)", padding: "18px 20px", marginTop: 6, background: "linear-gradient(135deg, var(--m-blue), #0E8C8C)", color: "#fff", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div className="eyebrow" style={{ color: "#EBD98C" }}>ESTIMATED TOTAL RANGE</div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", marginTop: 2 }}>Flights + visas + hotels + food + activities</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 19, fontWeight: 500, color: "#EBD98C" }}>{thailandCostRange.low}</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 19, fontWeight: 500, color: "#EBD98C" }}>– {thailandCostRange.high}</div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.75)", marginTop: 2 }}>{thailandCostRange.lowUsd} – {thailandCostRange.highUsd}</div>
          </div>
        </div>
        <div className="tip" style={{ background: "var(--amber-bg)", border: "1px solid var(--amber-line)", color: "var(--amber-text)", marginTop: 16, marginBottom: 8 }}>
          <strong>Planning estimate, not a quote.</strong> Hotel prices are typical published ranges — have your agent confirm live rates, and remember Bangkok Airways fares climb fast.
        </div>
      </div>
    </div>
  );
}

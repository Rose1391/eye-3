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
} from "../data/thailand";
import { SectionHead } from "../components/ui";
import Accordion from "../components/Accordion";
import Checklist from "../components/Checklist";

const TABS = ["Days", "Activities", "Beaches", "Hotels", "Cars", "Affaan", "Travelers", "Food", "Flights", "Costs", "Packing"];
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
      {tab === "Activities" && <ActivitiesTab />}
      {tab === "Beaches" && <BeachesTab />}
      {tab === "Hotels" && <HotelsTab />}
      {tab === "Cars" && <CarsTab />}
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

function ActivitiesTab() {
  return (
    <div>
      <div style={{ padding: "18px 20px 0" }}>
        <p style={{ fontSize: 13, color: "var(--slate)", lineHeight: 1.6 }}>
          The complete list of everything worth doing in both places — nothing left out. Each item is flagged so you can plan around Affaan or take turns.
        </p>
      </div>

      <SectionHead num="A" title="Koh Samui — everything" />
      <div style={{ padding: "0 20px" }}>
        <div className="card" style={{ overflow: "hidden" }}>
          {samuiActivities.map((a, i) => (
            <div key={i} style={{ padding: "11px 14px", borderBottom: i < samuiActivities.length - 1 ? "1px solid var(--line)" : "none" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10, marginBottom: 3 }}>
                <span style={{ fontWeight: 600, fontSize: 13.5, lineHeight: 1.35 }}>{a.name}</span>
                <CFBadge cf={a.cf} />
              </div>
              <div style={{ fontSize: 12, color: "var(--slate)", lineHeight: 1.5 }}>{a.note}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Koh Phangan verdict */}
      <div style={{ padding: "18px 20px 0" }}>
        <div className="card" style={{ overflow: "hidden", border: "1.5px solid var(--u-gold)" }}>
          <div style={{ background: "linear-gradient(135deg, #B8912F, var(--u-gold))", color: "#fff", padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 500 }}>{phanganVerdict.title}</div>
            <span style={{ fontSize: 11, fontWeight: 700, background: "rgba(255,255,255,0.22)", padding: "4px 11px", borderRadius: 99 }}>{phanganVerdict.verdict}</span>
          </div>
          <div className="pad" style={{ fontSize: 12.5, color: "var(--slate)", lineHeight: 1.65 }}>{phanganVerdict.body}</div>
        </div>
      </div>

      <SectionHead num="B" title="Bangkok — everything" />
      <div style={{ padding: "0 20px 16px" }}>
        <div className="card" style={{ overflow: "hidden" }}>
          {bangkokActivities.map((a, i) => (
            <div key={i} style={{ padding: "11px 14px", borderBottom: i < bangkokActivities.length - 1 ? "1px solid var(--line)" : "none" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10, marginBottom: 3 }}>
                <span style={{ fontWeight: 600, fontSize: 13.5, lineHeight: 1.35 }}>{a.name}</span>
                <CFBadge cf={a.cf} />
              </div>
              <div style={{ fontSize: 12, color: "var(--slate)", lineHeight: 1.5 }}>{a.note}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BeachesTab() {
  return (
    <div>
      <SectionHead num="01" title="Koh Samui — every beach compared" />
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
  const riverside = bangkokHotels.filter(h => h.type.startsWith("Riverside"));
  const shopping = bangkokHotels.filter(h => h.type === "Shopping");
  return (
    <div>
      {/* YOUR TOP PICKS */}
      <SectionHead num="★" title="Your top-pick resorts" />
      <div style={{ padding: "0 20px" }}>
        <p style={{ fontSize: 12.5, color: "var(--slate)", lineHeight: 1.6, marginBottom: 12 }}>{samuiTopPickNote}</p>
        {samuiTopPicks.map((h, i) => (
          <div key={i} className="card" style={{ marginBottom: 10, overflow: "hidden", border: h.star ? "1.5px solid #0E8C8C" : "1px solid var(--line)" }}>
            <div className="pad">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10, marginBottom: 4 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    {h.star && <svg viewBox="0 0 24 24" width="13" height="13" fill="#0E8C8C" style={{ flexShrink: 0 }}><path d="m12 3 2.6 5.6 6 .7-4.4 4.1 1.2 6L12 16.8 6.6 19.4l1.2-6L3.4 9.3l6-.7L12 3Z" /></svg>}
                    <span style={{ fontWeight: 600, fontSize: 14, lineHeight: 1.25 }}>{h.name}</span>
                  </div>
                  <div style={{ fontSize: 11.5, color: "var(--mist)", marginTop: 2 }}>{h.area} · {h.pool}</div>
                </div>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, fontWeight: 500, color: "#0E8C8C", flexShrink: 0 }}>{h.price}</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "2px 8px", fontSize: 12, marginTop: 6 }}>
                <span style={{ color: "var(--mist)", fontWeight: 600 }}>Swim</span><span style={{ color: "var(--slate)" }}>{h.swim}</span>
              </div>
              <div style={{ fontSize: 12, color: "var(--slate)", fontStyle: "italic", marginTop: 6, borderTop: "1px solid var(--line)", paddingTop: 7 }}>{h.note}</div>
              <BeachSpaBadges beachfront={h.beachfront} spa={h.spa} />
            </div>
          </div>
        ))}
      </div>

      {/* CHOENG MON BEACHFRONT SPA VILLAS */}
      <SectionHead num="1B" title="5 Choeng Mon beachfront pool villas · spa · under $200" />
      <div style={{ padding: "0 20px" }}>
        {choengMonVillas.map((h, i) => (
          <div key={i} className="card pad" style={{ marginBottom: 10, border: h.star ? "1.5px solid #0E8C8C" : "1px solid var(--line)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10, marginBottom: 4 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                {h.star && <svg viewBox="0 0 24 24" width="13" height="13" fill="#0E8C8C" style={{ flexShrink: 0 }}><path d="m12 3 2.6 5.6 6 .7-4.4 4.1 1.2 6L12 16.8 6.6 19.4l1.2-6L3.4 9.3l6-.7L12 3Z" /></svg>}
                <span style={{ fontWeight: 600, fontSize: 14 }}>{h.name}</span>
              </div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 500, color: "#0E8C8C", flexShrink: 0 }}>{h.price}</span>
            </div>
            <div style={{ fontSize: 11.5, color: "#7A3B78", fontWeight: 600, marginBottom: 4 }}>💆 {h.spa}</div>
            <div style={{ fontSize: 12, color: "var(--slate)", fontStyle: "italic" }}>{h.note}</div>
          </div>
        ))}
        <div className="card pad" style={{ background: "#E5F3F3", border: "1px solid rgba(14,140,140,0.3)", marginBottom: 8 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#0E8C8C", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 5 }}>Note</div>
          <div style={{ fontSize: 12.5, color: "var(--ink)", lineHeight: 1.6 }}>{choengMonVillaNote}</div>
        </div>
      </div>

      {/* 10 RESORTS UNDER 200 */}
      <SectionHead num="1C" title="10 more pool-villa resorts under $200" />
      <div style={{ padding: "0 20px" }}>
        {samuiResorts.map((h, i) => (
          <div key={i} className="card" style={{ marginBottom: 10, overflow: "hidden", border: h.star ? "1.5px solid #0E8C8C" : "1px solid var(--line)" }}>
            <div className="pad">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10, marginBottom: 6 }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    {h.star && <svg viewBox="0 0 24 24" width="13" height="13" fill="#0E8C8C"><path d="m12 3 2.6 5.6 6 .7-4.4 4.1 1.2 6L12 16.8 6.6 19.4l1.2-6L3.4 9.3l6-.7L12 3Z" /></svg>}
                    <span style={{ fontWeight: 600, fontSize: 14.5 }}>{h.name}</span>
                  </div>
                  <div style={{ fontSize: 11.5, color: "var(--mist)", marginTop: 1 }}>{h.area} · {h.pool}</div>
                </div>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, fontWeight: 500, color: "#0E8C8C", flexShrink: 0 }}>{h.price}</span>
              </div>
              <div style={{ fontSize: 12, color: "var(--slate)", fontStyle: "italic" }}>{h.note}</div>
            </div>
          </div>
        ))}
      </div>

      {/* BANGKOK RIVERSIDE — DEEP COMPARISON */}
      <SectionHead num="2A" title="Bangkok riverside — deep comparison" />
      <div style={{ padding: "0 20px" }}>
        <p style={{ fontSize: 12.5, color: "var(--slate)", lineHeight: 1.6, marginBottom: 12 }}>
          Your seven riverside hotels, compared across every dimension that matters for Bangkok sightseeing with a toddler. Tap each to expand.
        </p>
        {bangkokRiverside.map((h, i) => (
          <Accordion key={i} accent="var(--m-blue)"
            badge={h.price}
            defaultOpen={h.star}
            leftNode={
              <div style={{ width: 40, height: 40, borderRadius: 10, flexShrink: 0, background: h.star ? "linear-gradient(135deg, var(--m-blue), #0E8C8C)" : "var(--cloud)", color: h.star ? "#fff" : "var(--slate)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 15 }}>
                {h.star ? "★" : (i + 1)}
              </div>
            }
            title={h.name}
            subtitle={`${h.tier} · ${h.verdict}`}
          >
            <div style={{ padding: "10px 16px 14px" }}>
              {[
                ["Location", h.location],
                ["Rooms", h.rooms],
                ["Pool", h.pool],
                ["Family", h.family],
                ["Dining", h.dining],
                ["River boat", h.boat],
              ].map(([k, v], j) => (
                <div key={j} style={{ display: "grid", gridTemplateColumns: "76px 1fr", gap: 8, padding: "6px 0", borderBottom: "1px solid var(--line)" }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: "var(--m-blue)", textTransform: "uppercase", letterSpacing: "0.03em" }}>{k}</span>
                  <span style={{ fontSize: 12.5, color: "var(--slate)", lineHeight: 1.5 }}>{v}</span>
                </div>
              ))}
              <div style={{ marginTop: 10, background: "#E5F3F3", border: "1px solid rgba(14,140,140,0.25)", borderRadius: "var(--r-sm)", padding: "9px 11px" }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: "#0E6B6B" }}>For Affaan — </span>
                <span style={{ fontSize: 12.5, color: "var(--ink)", lineHeight: 1.55 }}>{h.forAffaan}</span>
              </div>
            </div>
          </Accordion>
        ))}
        <div className="card pad" style={{ background: "var(--m-sand)", border: "1px solid rgba(27,58,143,0.2)", marginTop: 4, marginBottom: 8 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "var(--m-blue)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 5 }}>The verdict</div>
          <div style={{ fontSize: 12.5, color: "var(--ink)", lineHeight: 1.65 }}>{bangkokRiversideVerdict}</div>
        </div>
      </div>

      {/* SHOPPING HOTELS */}
      <SectionHead num="2B" title="Bangkok — 3 for shopping" />
      <div style={{ padding: "0 20px 8px" }}>
        {shopping.map((h, i) => (
          <div key={i} className="card pad" style={{ marginBottom: 10, borderLeft: "4px solid var(--m-red)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 10, marginBottom: 4 }}>
              <span style={{ fontWeight: 600, fontSize: 14.5 }}>{h.name}</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, color: "var(--m-red)", flexShrink: 0 }}>{h.price}</span>
            </div>
            <div style={{ fontSize: 12, color: "var(--slate)" }}>{h.note}</div>
          </div>
        ))}
        <div className="tip malaysia" style={{ marginBottom: 16 }}>
          <strong>Recommendation:</strong> {hotelRecommendation}
        </div>
      </div>
    </div>
  );
}

function CarsTab() {
  return (
    <div>
      <SectionHead num="01" title="Renting a car in Koh Samui" />
      <div style={{ padding: "0 20px" }}>
        <p style={{ fontSize: 13, color: "var(--slate)", lineHeight: 1.65, marginBottom: 14 }}>{carRentalIntro}</p>
        {carRentalOptions.map((c, i) => (
          <div key={i} className="card pad" style={{ marginBottom: 10, border: c.best ? "1.5px solid #0E8C8C" : "1px solid var(--line)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10, marginBottom: 5 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                {c.best && <span style={{ fontSize: 10, fontWeight: 700, background: "#E5F3F3", color: "#0E6B6B", padding: "2px 8px", borderRadius: 99 }}>BEST WITH A TODDLER</span>}
              </div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, fontWeight: 500, color: "#0E8C8C", flexShrink: 0, textAlign: "right" }}>{c.price}</span>
            </div>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{c.mode}</div>
            <div style={{ fontSize: 12.5, color: "var(--slate)", lineHeight: 1.6 }}>{c.detail}</div>
          </div>
        ))}
      </div>

      <SectionHead num="02" title="Driver & rental tips" />
      <div style={{ padding: "0 20px 16px" }}>
        <div className="card" style={{ overflow: "hidden" }}>
          {carRentalTips.map((t, i) => (
            <div key={i} style={{ display: "flex", gap: 10, padding: "11px 14px", borderBottom: i < carRentalTips.length - 1 ? "1px solid var(--line)" : "none", alignItems: "flex-start" }}>
              <span style={{ width: 6, height: 6, borderRadius: 99, background: "#0E8C8C", flexShrink: 0, marginTop: 7 }} />
              <span style={{ fontSize: 12.5, color: "var(--ink)", lineHeight: 1.55 }}>{t}</span>
            </div>
          ))}
        </div>
        <div className="tip warn" style={{ marginTop: 14 }}>
          <strong>Bottom line:</strong> Book a private sedan + driver for your three touring days (temples, elephant sanctuary, island-charter pier) and skip a car on pure pool days. It's the least stressful, best-value way to move a toddler around Samui.
        </div>
      </div>
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
      <SectionHead num="02" title="Thailand-specific notes for Affaan" />
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
      <SectionHead num="01" title="Who's travelling" />
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
      <SectionHead num="01" title="Halal eating, both places" />
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
      <SectionHead num="01" title="Full route" />
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
      <SectionHead num="01" title="Estimated cost — 3 travelers" />
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

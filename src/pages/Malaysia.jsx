import { useState } from "react";
import { Link } from "react-router-dom";
import {
  malaysiaMeta, malaysiaDays, langkawiHotels, penangHotels, klHotel,
  malaysiaFlights, malaysiaRestaurants, toddlerSchedule, malaysiaChecklist,
  malaysiaCosts, malaysiaCostRange,
} from "../data/malaysia";
import { SectionHead, RatingDot } from "../components/ui";
import Checklist from "../components/Checklist";

const TABS = ["Days", "Affaan", "Hotels", "Food", "Flights", "Costs", "Packing"];

const DEST_COLOR = {
  travel: "#4B5563", langkawi: "#0E7C9B", penang: "#C0392B", kl: "#1A8055",
};
const DEST_LABEL = {
  travel: "In transit", langkawi: "Langkawi", penang: "Penang", kl: "Kuala Lumpur",
};

export default function Malaysia() {
  const [tab, setTab] = useState("Days");

  return (
    <div className="page">
      <div style={{ background: "linear-gradient(165deg, #0E7C9B, #1A8055 95%)", color: "#fff", padding: "20px 20px 18px" }}>
        <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 12.5, color: "rgba(255,255,255,0.78)", marginBottom: 14 }}>
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          All journeys
        </Link>
        <div className="eyebrow" style={{ color: "#FCE9C8", marginBottom: 6 }}>JOURNEY TWO · {malaysiaMeta.dates}</div>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: 30, fontWeight: 500, lineHeight: 1.05 }}>
          {malaysiaMeta.title}
        </h1>
        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.82)", marginTop: 6 }}>
          {malaysiaMeta.route}
        </div>
        <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.7)", marginTop: 3 }}>
          {malaysiaMeta.travelers}
        </div>
      </div>

      <div style={{ position: "sticky", top: 0, zIndex: 50, background: "var(--m-sand)", borderBottom: "1px solid var(--line)" }}>
        <div className="scroll-x" style={{ padding: "10px 20px" }}>
          {TABS.map((t) => (
            <button key={t} onClick={() => setTab(t)} style={{
              fontSize: 13, fontWeight: tab === t ? 700 : 500, whiteSpace: "nowrap",
              padding: "7px 16px", borderRadius: 99,
              background: tab === t ? "var(--m-sea-deep)" : "var(--cloud)",
              color: tab === t ? "#fff" : "var(--slate)",
            }}>{t}</button>
          ))}
        </div>
      </div>

      {tab === "Days" && <DaysTab />}
      {tab === "Affaan" && <ScheduleTab />}
      {tab === "Hotels" && <HotelsTab />}
      {tab === "Food" && <FoodTab />}
      {tab === "Flights" && <FlightsTab />}
      {tab === "Costs" && <CostsTab />}
      {tab === "Packing" && (
        <div style={{ paddingTop: 16 }}>
          <Checklist data={malaysiaChecklist} storageKey="tie3-malaysia-checklist" accent="var(--m-sea)" />
        </div>
      )}
    </div>
  );
}

function DaysTab() {
  const [open, setOpen] = useState(0);
  return (
    <div style={{ padding: "12px 20px 12px", background: "var(--m-sand)" }}>
      {/* Carrier warning */}
      <div className="tip warn" style={{ marginBottom: 14, marginTop: 4 }}>
        <strong>Carrier, not stroller:</strong> Batu Caves (Day 8) and the Sky Bridge (Day 4) need a soft front/back carrier. Stroller is fine everywhere else.
      </div>

      {malaysiaDays.map((d, i) => {
        const color = DEST_COLOR[d.dest];
        const isOpen = open === i;
        return (
          <div key={i} className="card" style={{ marginBottom: 10, overflow: "hidden" }}>
            <button onClick={() => setOpen(isOpen ? -1 : i)} style={{
              display: "flex", alignItems: "center", gap: 12, width: "100%", textAlign: "left",
              padding: "13px 16px", background: isOpen ? "rgba(0,0,0,0.015)" : "#fff",
            }}>
              <div style={{
                width: 42, height: 42, borderRadius: 10, flexShrink: 0,
                background: color, color: "#fff", display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center", lineHeight: 1,
              }}>
                <span style={{ fontSize: 9, opacity: 0.8, fontWeight: 600 }}>DAY</span>
                <span style={{ fontSize: 17, fontWeight: 700 }}>{d.day}</span>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 1 }}>
                  <span style={{ fontSize: 10.5, fontWeight: 700, color, letterSpacing: "0.03em" }}>{d.date}</span>
                  <span style={{ fontSize: 10, color: "var(--mist)" }}>· {DEST_LABEL[d.dest]}</span>
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 500, lineHeight: 1.15 }}>{d.title}</div>
              </div>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--mist)" strokeWidth="2"
                style={{ flexShrink: 0, transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 0.25s" }}>
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {isOpen && (
              <div style={{ borderTop: "1px solid var(--line)" }}>
                <div style={{ padding: "10px 16px 4px", fontSize: 12.5, color: "var(--mist)", fontStyle: "italic" }}>
                  {d.tagline}
                </div>
                {d.activities.map((a, j) => (
                  <div key={j} style={{ padding: "11px 16px", borderTop: j === 0 ? "none" : "1px solid var(--line)", display: "flex", gap: 12 }}>
                    <div style={{ minWidth: 62, flexShrink: 0 }}>
                      <div style={{ fontSize: 11.5, fontWeight: 600, color: a.rating === "nap" ? "#A05BB8" : "var(--slate)" }}>{a.time}</div>
                      <span className={`dot ${a.rating}`} style={{ marginTop: 5 }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, fontSize: 13.5, marginBottom: 2 }}>{a.title}</div>
                      <div style={{ fontSize: 12.5, color: "var(--slate)", lineHeight: 1.5 }}>{a.desc}</div>
                      {a.tip && (
                        <div className={`tip malaysia ${a.rating === "prep" ? "warn" : ""}`}>
                          <strong>{a.rating === "prep" ? "Safety note" : "Toddler tip"}:</strong> {a.tip}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}

      {/* Legend */}
      <div className="card pad" style={{ marginTop: 6, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
        <RatingDot rating="ok" />
        <RatingDot rating="prep" />
        <RatingDot rating="nap" />
      </div>
    </div>
  );
}

function ScheduleTab() {
  return (
    <div>
      <div style={{ padding: "20px 20px 4px" }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 500, marginBottom: 4 }}>
          Affaan's daily rhythm
        </div>
        <p style={{ fontSize: 13, color: "var(--slate)", lineHeight: 1.6 }}>
          Every day on this trip is built around this routine. Guard the nap, time activities around it, and the whole holiday runs smoothly.
        </p>
      </div>

      <div style={{ padding: "12px 20px" }}>
        <div className="spine malaysia" style={{ paddingTop: 6 }}>
          {toddlerSchedule.map((s, i) => (
            <div key={i} style={{ position: "relative", paddingBottom: i < toddlerSchedule.length - 1 ? 16 : 0 }}>
              <span className={`spine-node ${s.nap ? "transit" : ""}`}
                style={{ top: 2, borderColor: s.nap ? "#B06AC9" : "var(--m-sea)", background: s.nap ? "#B06AC9" : "#fff" }} />
              <div style={{ fontSize: 11, fontWeight: 700, color: s.nap ? "#A05BB8" : "var(--m-sea)", letterSpacing: "0.03em" }}>{s.time}</div>
              <div style={{ fontSize: 13.5, fontWeight: s.nap ? 600 : 500, color: s.nap ? "#A05BB8" : "var(--ink)", lineHeight: 1.4, marginTop: 1 }}>
                {s.activity}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "8px 20px 16px" }}>
        <div className="tip malaysia">
          <strong>Heat rule:</strong> All outdoor activities before 12 noon or after 4 PM. Midday (32–35°C) is too hot for a toddler — that's pool or air-conditioned time.
        </div>
      </div>
    </div>
  );
}

function HotelCard({ h, accent }) {
  return (
    <div className="card" style={{ marginBottom: 10, overflow: "hidden", border: h.star ? `1.5px solid ${accent}` : "1px solid var(--line)" }}>
      <div className="pad">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10, marginBottom: 8 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              {h.star && (
                <svg viewBox="0 0 24 24" width="13" height="13" fill={accent}>
                  <path d="m12 3 2.6 5.6 6 .7-4.4 4.1 1.2 6L12 16.8 6.6 19.4l1.2-6L3.4 9.3l6-.7L12 3Z" />
                </svg>
              )}
              <span style={{ fontWeight: 600, fontSize: 14.5 }}>{h.name}</span>
            </div>
            <div style={{ fontSize: 11.5, color: "var(--mist)", marginTop: 1 }}>{h.area}</div>
          </div>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, fontWeight: 500, color: accent, flexShrink: 0 }}>{h.price}</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "3px 8px", fontSize: 12, marginBottom: 8 }}>
          <span style={{ color: "var(--mist)", fontWeight: 600 }}>Beach</span>
          <span style={{ color: "var(--slate)" }}>{h.beach}</span>
          <span style={{ color: "var(--mist)", fontWeight: 600 }}>Pool</span>
          <span style={{ color: "var(--slate)" }}>{h.pool}</span>
        </div>
        <div style={{ fontSize: 12, color: "var(--slate)", fontStyle: "italic", borderTop: "1px solid var(--line)", paddingTop: 8 }}>{h.note}</div>
      </div>
    </div>
  );
}

function HotelsTab() {
  return (
    <div>
      <SectionHead num="2A" title="Langkawi — 5 options" />
      <div style={{ padding: "0 20px" }}>
        {langkawiHotels.map((h, i) => <HotelCard key={i} h={h} accent="#0E7C9B" />)}
      </div>

      <SectionHead num="2B" title="Penang — 4 options" />
      <div style={{ padding: "0 20px" }}>
        {penangHotels.map((h, i) => <HotelCard key={i} h={h} accent="#C0392B" />)}
      </div>

      <SectionHead num="2C" title="Kuala Lumpur — confirmed" />
      <div style={{ padding: "0 20px 16px" }}>
        <div className="card" style={{ overflow: "hidden", border: "1.5px solid var(--m-leaf)" }}>
          <div style={{ background: "linear-gradient(135deg, #0E7C9B, #1A8055)", color: "#fff", padding: "13px 18px" }}>
            <div className="eyebrow" style={{ color: "#FCE9C8", marginBottom: 3 }}>✓ CONFIRMED · {klHotel.nights}</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 19, fontWeight: 500 }}>{klHotel.name}</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.8)", marginTop: 1 }}>{klHotel.area} · {klHotel.price}/night</div>
          </div>
          <div className="pad" style={{ fontSize: 12.5, color: "var(--slate)", lineHeight: 1.6 }}>{klHotel.note}</div>
        </div>

        <div className="tip malaysia" style={{ marginTop: 12 }}>
          <strong>Star marks the toddler pick.</strong> Langkawi and Penang are kept open — choose from these or let your agent confirm best availability for your dates.
        </div>
      </div>
    </div>
  );
}

function FoodTab() {
  const grouped = malaysiaRestaurants.reduce((acc, r) => {
    (acc[r.dest] = acc[r.dest] || []).push(r);
    return acc;
  }, {});
  return (
    <div>
      <SectionHead num="01" title="Named halal restaurants" />
      <div style={{ padding: "0 20px 8px" }}>
        <p style={{ fontSize: 13, color: "var(--slate)", marginBottom: 14, lineHeight: 1.6 }}>
          Every spot here is halal and toddler-tested. All Malaysian restaurants will warm a bottle, provide a high chair, and cook plain rice with egg on request.
        </p>
        {Object.entries(grouped).map(([dest, items]) => (
          <div key={dest} style={{ marginBottom: 18 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--m-sea)", marginBottom: 8 }}>{dest}</div>
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

function CostsTab() {
  return (
    <div>
      <SectionHead num="01" title="Estimated cost — 3 travelers" />
      <div style={{ padding: "0 20px" }}>
        <p style={{ fontSize: 12.5, color: "var(--slate)", lineHeight: 1.6, marginBottom: 14 }}>
          Estimates for Rose, Farzana & Affaan across the full 9-day trip. Hotel costs use the comparison ranges — actual total depends on which Langkawi and Penang hotel you confirm.
        </p>
        {malaysiaCosts.map((c, i) => (
          <div key={i} className="card pad" style={{ marginBottom: 10 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 13.5, marginBottom: 2 }}>{c.item}</div>
                <div style={{ fontSize: 11.5, color: "var(--mist)" }}>{c.note}</div>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 500, color: "var(--m-sea-deep)" }}>{c.low}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--mist)" }}>– {c.high}</div>
              </div>
            </div>
          </div>
        ))}

        <div style={{
          borderRadius: "var(--r-md)", padding: "18px 20px", marginTop: 6,
          background: "linear-gradient(135deg, #0E7C9B, #1A8055 95%)", color: "#fff",
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <div>
            <div className="eyebrow" style={{ color: "#FCE9C8" }}>ESTIMATED TOTAL RANGE</div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.65)", marginTop: 2 }}>Flights + hotels + food + activities</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 19, fontWeight: 500, color: "#FCE9C8" }}>{malaysiaCostRange.low}</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 19, fontWeight: 500, color: "#FCE9C8" }}>– {malaysiaCostRange.high}</div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", marginTop: 2 }}>{malaysiaCostRange.lowUsd} – {malaysiaCostRange.highUsd}</div>
          </div>
        </div>
      </div>

      <div style={{ padding: "16px 20px 8px" }}>
        <div className="tip" style={{ background: "var(--amber-bg)", borderColor: "var(--amber-line)", color: "var(--amber-text)" }}>
          <strong>This is a planning estimate, not a quote.</strong> Confirm exact flight fares and your chosen hotel rate before booking — prices shift closer to September.
        </div>
      </div>
    </div>
  );
}

function FlightsTab() {
  return (
    <div>
      <SectionHead num="01" title="Full route" />
      <div style={{ padding: "0 20px 8px" }}>
        <div className="spine malaysia" style={{ paddingTop: 6 }}>
          {malaysiaFlights.map((f, i) => (
            <div key={i} style={{ position: "relative", paddingBottom: i < malaysiaFlights.length - 1 ? 18 : 4 }}>
              <span className="spine-node" style={{ top: 4 }} />
              <div className="card pad">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4 }}>
                  <span style={{ fontWeight: 700, fontSize: 14 }}>{f.leg}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--m-sea)", fontWeight: 500 }}>{f.time}</span>
                </div>
                <div style={{ fontSize: 12.5, color: "var(--m-sea-deep)", fontWeight: 600, marginBottom: 2 }}>{f.op}</div>
                <div style={{ fontSize: 12.5, color: "var(--slate)" }}>{f.route}</div>
                <div style={{ fontSize: 12, color: "var(--mist)", marginTop: 4, fontStyle: "italic" }}>{f.note}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

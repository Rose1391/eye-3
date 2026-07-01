import { useState } from "react";
import { Link } from "react-router-dom";
import {
  umrahMeta, umrahTravelers, umrahFlights, umrahHotels, umrahDays,
  umrahCosts, umrahGrandTotal, umrahLogistics, umrahChecklist,
  umrahGuide, madinaNote,
} from "../data/umrah";
import { SectionHead, RiteArt } from "../components/ui";
import Accordion from "../components/Accordion";
import Checklist from "../components/Checklist";

const TABS = ["Days", "Guide", "Travelers", "Flights", "Hotels", "Costs", "Logistics", "Packing"];
const RED = "var(--u-mid)";
const GOLD = "var(--u-gold)";

export default function Umrah() {
  const [tab, setTab] = useState("Days");

  return (
    <div className="page">
      <div style={{ position: "relative", height: 150, overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(/hero-umrah.jpg)", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, rgba(90,20,32,0.82), rgba(139,30,45,0.9))" }} />
        <div style={{ position: "relative", padding: "18px 20px", color: "#fff" }}>
          <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 12.5, color: "rgba(255,255,255,0.85)", marginBottom: 12 }}>
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            All journeys
          </Link>
          <div className="eyebrow" style={{ color: "var(--u-gold-lt)", marginBottom: 5 }}>JOURNEY ONE · {umrahMeta.dates}</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: 27, fontWeight: 500, lineHeight: 1.02 }}>{umrahMeta.title}</h1>
          <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.82)", marginTop: 4 }}>{umrahMeta.route} · {umrahMeta.nights} nights · {umrahMeta.travelers} travelers</div>
        </div>
      </div>

      <div style={{ position: "sticky", top: 0, zIndex: 50, background: "var(--u-paper)", borderBottom: "1px solid var(--line)" }}>
        <div className="scroll-x">
          {TABS.map((t) => (
            <button key={t} onClick={() => setTab(t)} style={{
              fontSize: 13, fontWeight: tab === t ? 700 : 500, whiteSpace: "nowrap",
              padding: "7px 16px", borderRadius: 99,
              background: tab === t ? "var(--u-deep)" : "var(--cloud)",
              color: tab === t ? "#fff" : "var(--slate)",
            }}>{t}</button>
          ))}
        </div>
      </div>

      {tab === "Days" && <DaysTab />}
      {tab === "Guide" && <GuideTab />}
      {tab === "Travelers" && <TravelersTab />}
      {tab === "Flights" && <FlightsTab />}
      {tab === "Hotels" && <HotelsTab />}
      {tab === "Costs" && <CostsTab />}
      {tab === "Logistics" && <LogisticsTab />}
      {tab === "Packing" && (
        <div style={{ paddingTop: 16 }}>
          <Checklist data={umrahChecklist} storageKey="tie3-umrah-checklist" accent={RED} />
        </div>
      )}
    </div>
  );
}

function DaysTab() {
  return (
    <div style={{ padding: "14px 20px 12px" }}>
      {umrahDays.map((d, i) => (
        <Accordion
          key={i}
          defaultOpen={i === 0}
          accent={RED}
          badge={d.city}
          leftNode={
            <div style={{ width: 42, height: 42, borderRadius: 10, flexShrink: 0, background: d.transit ? GOLD : "linear-gradient(135deg, var(--u-deep), var(--u-mid))", color: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", lineHeight: 1 }}>
              <span style={{ fontSize: 9, opacity: 0.85, fontWeight: 600 }}>DAY</span>
              <span style={{ fontSize: 17, fontWeight: 700 }}>{d.day}</span>
            </div>
          }
          title={d.title}
          subtitle={d.date}
        >
          {d.items.map((it, j) => (
            <div key={j} style={{ padding: "10px 16px", borderBottom: j < d.items.length - 1 ? "1px solid var(--line)" : "none" }}>
              <div style={{ fontWeight: 600, fontSize: 13.5, marginBottom: 1 }}>{it.label}</div>
              <div style={{ fontSize: 12.5, color: "var(--slate)", lineHeight: 1.5 }}>{it.detail}</div>
            </div>
          ))}
        </Accordion>
      ))}
    </div>
  );
}

function DuaCard({ dua }) {
  return (
    <div style={{ background: "var(--u-light)", border: "1px solid rgba(139,30,45,0.14)", borderRadius: "var(--r-sm)", padding: "12px 14px", marginBottom: 8 }}>
      <div style={{ fontSize: 10.5, fontWeight: 700, color: "var(--u-mid)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>{dua.label}</div>
      <div dir="rtl" style={{ fontFamily: "'Amiri', 'Traditional Arabic', serif", fontSize: 21, lineHeight: 1.9, color: "var(--u-deep)", marginBottom: 8, textAlign: "right" }}>{dua.arabic}</div>
      <div style={{ fontSize: 12.5, fontStyle: "italic", color: "var(--u-mid)", marginBottom: 5, lineHeight: 1.5 }}>{dua.translit}</div>
      <div style={{ fontSize: 12.5, color: "var(--slate)", lineHeight: 1.55 }}>{dua.english}</div>
    </div>
  );
}

function GuideTab() {
  return (
    <div style={{ padding: "16px 20px 12px" }}>
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 500, marginBottom: 4 }}>Umrah, step by step</div>
        <p style={{ fontSize: 13, color: "var(--slate)", lineHeight: 1.6 }}>
          The four rites of Umrah with their du'as in Arabic, transliteration, and English. Tap any step to open it.
        </p>
      </div>

      {umrahGuide.map((g, i) => {
        const Art = RiteArt[g.icon];
        return (
          <Accordion
            key={i}
            defaultOpen={i === 0}
            accent="var(--u-mid)"
            badge={`Step ${g.step}`}
            leftNode={
              <div style={{ width: 44, height: 44, borderRadius: 11, flexShrink: 0, background: "linear-gradient(135deg, var(--u-deep), var(--u-mid))", color: "var(--u-gold-lt)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {Art ? <Art width="26" height="26" /> : <span style={{ fontWeight: 700 }}>{g.step}</span>}
              </div>
            }
            title={g.title}
            subtitle={g.subtitle}
          >
            <div style={{ padding: "12px 16px" }}>
              <p style={{ fontSize: 12.5, color: "var(--slate)", lineHeight: 1.6, marginBottom: 12 }}>{g.intro}</p>

              {g.diagram && (
                <div style={{ marginBottom: 14 }}>
                  <div style={{ background: "#fff", border: "1px solid var(--line)", borderRadius: "var(--r-sm)", padding: "14px 12px", textAlign: "center" }}>
                    <img src={g.diagram} alt={`${g.title} diagram`} style={{ width: "100%", maxWidth: 340, height: "auto", display: "inline-block" }} />
                  </div>
                  {g.diagramCaption && (
                    <div style={{ fontSize: 11.5, color: "var(--mist)", fontStyle: "italic", marginTop: 6, lineHeight: 1.5, textAlign: "center", padding: "0 8px" }}>{g.diagramCaption}</div>
                  )}
                </div>
              )}

              <div style={{ fontSize: 10.5, fontWeight: 700, color: "var(--u-gold)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>What to do</div>
              <div style={{ marginBottom: 16 }}>
                {g.prep.map((p, j) => (
                  <div key={j} style={{ display: "flex", gap: 10, marginBottom: 7, alignItems: "flex-start" }}>
                    <span style={{ width: 6, height: 6, borderRadius: 99, background: "var(--u-gold)", flexShrink: 0, marginTop: 6 }} />
                    <span style={{ fontSize: 12.5, color: "var(--ink)", lineHeight: 1.5 }}>{p}</span>
                  </div>
                ))}
              </div>

              <div style={{ fontSize: 10.5, fontWeight: 700, color: "var(--u-gold)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>Du'as</div>
              {g.duas.map((d, k) => <DuaCard key={k} dua={d} />)}
            </div>
          </Accordion>
        );
      })}

      {/* Madina note */}
      <div className="card" style={{ overflow: "hidden", marginTop: 6, border: "1px solid rgba(201,161,74,0.4)" }}>
        <div style={{ background: "linear-gradient(135deg, var(--u-gold), #B8912F)", color: "#fff", padding: "12px 16px" }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 500 }}>{madinaNote.title}</div>
        </div>
        <div className="pad" style={{ fontSize: 12.5, color: "var(--slate)", lineHeight: 1.65 }}>{madinaNote.body}</div>
      </div>

      <div className="tip umrah" style={{ marginTop: 14 }}>
        <strong>Note:</strong> This guide is a concise reference. Follow your group's scholar or guide (Mr. Fahim) for the authoritative sequence and any questions during the rites.
      </div>
    </div>
  );
}

function TravelersTab() {
  return (
    <div>
      <SectionHead num="01" title="Who's travelling" />
      <div style={{ padding: "0 20px 8px" }}>
        <p style={{ fontSize: 13, color: "var(--slate)", lineHeight: 1.6, marginBottom: 14 }}>
          Five travellers for the pilgrimage — four adults and little Affaan, all journeying to the holy cities together.
        </p>
        <div className="card" style={{ overflow: "hidden" }}>
          {umrahTravelers.map((t, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "13px 16px", borderBottom: i < umrahTravelers.length - 1 ? "1px solid var(--line)" : "none" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 34, height: 34, borderRadius: 99, background: "var(--u-light)", color: "var(--u-mid)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14, flexShrink: 0 }}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14.5 }}>{t.name}</div>
                  <div style={{ fontSize: 11.5, color: "var(--mist)" }}>{t.role}</div>
                </div>
              </div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, color: "var(--u-mid)", fontWeight: 500 }}>{t.rate}</span>
            </div>
          ))}
        </div>
        <div className="card pad" style={{ marginTop: 12, background: "var(--u-light)", border: "1px solid rgba(139,30,45,0.15)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontWeight: 600, fontSize: 13.5, color: "var(--u-deep)" }}>Package total (all 5)</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 15, fontWeight: 600, color: "var(--u-mid)" }}>৳9,10,000</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function FlightsTab() {
  return (
    <div>
      <SectionHead num="01" title="Flights" />
      <div style={{ padding: "0 20px" }}>
        {umrahFlights.map((f, i) => (
          <div key={i} className="card pad" style={{ marginBottom: 12, borderLeft: "4px solid var(--u-mid)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <span className="pill" style={{ background: "var(--u-light)", color: "var(--u-mid)" }}>{f.leg}</span>
              <span style={{ fontSize: 12, color: "var(--mist)", fontWeight: 600 }}>{f.date}</span>
            </div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 500 }}>{f.airline}</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--u-gold)", margin: "2px 0 8px" }}>{f.flights}</div>
            <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 4 }}>{f.route}</div>
            <div style={{ fontSize: 12.5, color: "var(--slate)" }}>{f.note}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HotelsTab() {
  return (
    <div>
      <SectionHead num="01" title="Where you'll stay" />
      <div style={{ padding: "0 20px 16px" }}>
        {umrahHotels.map((h, i) => (
          <div key={i} className="card" style={{ marginBottom: 14, overflow: "hidden" }}>
            <div style={{ background: "linear-gradient(135deg, var(--u-deep), var(--u-mid))", color: "#fff", padding: "14px 18px" }}>
              <div className="eyebrow" style={{ color: "var(--u-gold-lt)", marginBottom: 4 }}>{h.city}</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 500 }}>{h.name}</div>
            </div>
            <div className="pad">
              <div style={{ fontSize: 13.5, color: "var(--ink)", marginBottom: 6 }}>{h.room}</div>
              <span className="pill" style={{ background: "var(--u-light)", color: "var(--u-mid)" }}>{h.nights}</span>
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
      <SectionHead num="01" title="Cost summary" />
      <div style={{ padding: "0 20px" }}>
        {umrahCosts.map((c, i) => (
          <div key={i} className="card pad" style={{ marginBottom: 10 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 2 }}>{c.item}</div>
                <div style={{ fontSize: 12, color: "var(--mist)" }}>{c.note}</div>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 14, fontWeight: 500, color: "var(--u-deep)" }}>{c.bdt}</div>
                <div style={{ fontSize: 11, color: "var(--mist)" }}>{c.usd}</div>
              </div>
            </div>
          </div>
        ))}
        <div style={{ borderRadius: "var(--r-md)", padding: "18px 20px", marginTop: 6, background: "linear-gradient(135deg, var(--u-deep), var(--u-mid))", color: "#fff", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div className="eyebrow" style={{ color: "var(--u-gold-lt)" }}>GRAND TOTAL</div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.65)", marginTop: 2 }}>Package + food + shopping</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 500, color: "var(--u-gold-lt)" }}>{umrahGrandTotal.bdt}</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)" }}>{umrahGrandTotal.usd}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LogisticsTab() {
  return (
    <div>
      <SectionHead num="01" title="Logistics & agency" />
      <div style={{ padding: "0 20px 16px" }}>
        <div className="card" style={{ overflow: "hidden" }}>
          {umrahLogistics.map((l, i) => (
            <div key={i} style={{ padding: "12px 16px", borderBottom: i < umrahLogistics.length - 1 ? "1px solid var(--line)" : "none" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "var(--u-gold)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 2 }}>{l.label}</div>
              <div style={{ fontSize: 13, color: "var(--ink)" }}>{l.value}</div>
            </div>
          ))}
        </div>
        <div className="tip warn" style={{ marginTop: 14 }}>
          <strong>Pending:</strong> The KSA ground guide will be confirmed by Fly Hajj Aviation closer to travel. Food cost is a mid-range estimate — confirm on the ground.
        </div>
      </div>
    </div>
  );
}

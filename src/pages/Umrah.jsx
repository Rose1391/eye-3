import { useState } from "react";
import { Link } from "react-router-dom";
import {
  umrahMeta, umrahTravelers, umrahFlights, umrahHotels, umrahDays,
  umrahCosts, umrahGrandTotal, umrahLogistics, umrahChecklist,
} from "../data/umrah";
import { SectionHead } from "../components/ui";
import Checklist from "../components/Checklist";

const TABS = ["Days", "Flights", "Hotels", "Costs", "Packing"];

export default function Umrah() {
  const [tab, setTab] = useState("Days");

  return (
    <div className="page">
      {/* Header */}
      <div style={{ background: "linear-gradient(165deg, #0F2A1F, #1A6B45)", color: "#fff", padding: "20px 20px 18px" }}>
        <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 12.5, color: "rgba(255,255,255,0.7)", marginBottom: 14 }}>
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          All journeys
        </Link>
        <div className="eyebrow" style={{ color: "var(--u-gold-soft)", marginBottom: 6 }}>JOURNEY ONE · {umrahMeta.dates}</div>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: 30, fontWeight: 500, lineHeight: 1.05 }}>
          {umrahMeta.title}
        </h1>
        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.72)", marginTop: 6 }}>
          {umrahMeta.route} · {umrahMeta.nights} nights · {umrahMeta.travelers} travelers
        </div>
      </div>

      {/* Tabs */}
      <div style={{ position: "sticky", top: 0, zIndex: 50, background: "var(--u-paper)", borderBottom: "1px solid var(--line)" }}>
        <div className="scroll-x" style={{ padding: "10px 20px" }}>
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
      {tab === "Flights" && <FlightsTab />}
      {tab === "Hotels" && <HotelsTab />}
      {tab === "Costs" && <CostsTab />}
      {tab === "Packing" && (
        <div style={{ paddingTop: 16 }}>
          <Checklist data={umrahChecklist} storageKey="tie3-umrah-checklist" accent="var(--u-mid)" />
        </div>
      )}
    </div>
  );
}

function DaysTab() {
  return (
    <div style={{ padding: "8px 20px 12px" }}>
      <div style={{ paddingTop: 8 }}>
        {umrahDays.map((d, i) => (
          <div key={i} style={{ marginBottom: i < umrahDays.length - 1 ? 22 : 4 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 2 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: "var(--u-gold)", letterSpacing: "0.04em" }}>
                DAY {d.day} · {d.date}
              </span>
            </div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 500, color: "var(--u-deep)", marginBottom: 2 }}>
              {d.title}
            </div>
            <div style={{ fontSize: 11.5, color: "var(--mist)", marginBottom: 10, fontWeight: 500 }}>{d.city}</div>
            <div className="card" style={{ overflow: "hidden" }}>
              {d.items.map((it, j) => (
                <div key={j} style={{ padding: "10px 14px", borderBottom: j < d.items.length - 1 ? "1px solid var(--line)" : "none" }}>
                  <div style={{ fontWeight: 600, fontSize: 13.5, marginBottom: 1 }}>{it.label}</div>
                  <div style={{ fontSize: 12.5, color: "var(--slate)", lineHeight: 1.5 }}>{it.detail}</div>
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

      <SectionHead num="02" title="Travelers" />
      <div style={{ padding: "0 20px" }}>
        <div className="card" style={{ overflow: "hidden" }}>
          {umrahTravelers.map((t, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "11px 16px", borderBottom: i < umrahTravelers.length - 1 ? "1px solid var(--line)" : "none" }}>
              <div>
                <span style={{ fontWeight: 600, fontSize: 14 }}>{t.name}</span>
                <span style={{ fontSize: 11, color: "var(--mist)", marginLeft: 8 }}>{t.role}</span>
              </div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, color: "var(--u-mid)", fontWeight: 500 }}>{t.rate}</span>
            </div>
          ))}
        </div>
      </div>

      <SectionHead num="03" title="Logistics" />
      <div style={{ padding: "0 20px 16px" }}>
        <div className="card" style={{ overflow: "hidden" }}>
          {umrahLogistics.map((l, i) => (
            <div key={i} style={{ padding: "11px 16px", borderBottom: i < umrahLogistics.length - 1 ? "1px solid var(--line)" : "none" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "var(--u-gold)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 2 }}>{l.label}</div>
              <div style={{ fontSize: 13, color: "var(--ink)" }}>{l.value}</div>
            </div>
          ))}
        </div>
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
            <div style={{ background: "linear-gradient(135deg, #0F2A1F, #1A6B45)", color: "#fff", padding: "14px 18px" }}>
              <div className="eyebrow" style={{ color: "var(--u-gold-soft)", marginBottom: 4 }}>{h.city}</div>
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

        <div style={{
          borderRadius: "var(--r-md)", padding: "18px 20px", marginTop: 6,
          background: "linear-gradient(135deg, #0F2A1F, #1A6B45)", color: "#fff",
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <div>
            <div className="eyebrow" style={{ color: "var(--u-gold-soft)" }}>GRAND TOTAL</div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", marginTop: 2 }}>Package + food + shopping</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 500, color: "var(--u-gold-soft)" }}>{umrahGrandTotal.bdt}</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)" }}>{umrahGrandTotal.usd}</div>
          </div>
        </div>
      </div>

      <div style={{ padding: "16px 20px 8px" }}>
        <div className="tip" style={{ background: "var(--amber-bg)", borderColor: "var(--amber-line)", color: "var(--amber-text)" }}>
          <strong>Pending:</strong> The KSA ground guide will be confirmed by Fly Hajj Aviation closer to travel. Food cost is a mid-range estimate — confirm on the ground.
        </div>
      </div>
    </div>
  );
}

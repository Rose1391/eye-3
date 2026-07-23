import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  umrahMeta, umrahTravelers, umrahFlights, umrahHotels, umrahDays,
  umrahCosts, umrahGrandTotal, umrahLogistics, umrahChecklist,
  umrahGuide, madinaNote,
  umrahSimOperators, umrahSimRecommendation, umrahSimTips,
  arabicPhrases, arabicPhraseNote, umrahRiteSteps, umrahJourneyStats,
} from "../data/umrah";
import { SectionHead, RiteArt } from "../components/ui";
import Accordion from "../components/Accordion";
import Checklist from "../components/Checklist";
import TileGrid from "../components/TileGrid";

const TABS = ["Days", "Guide", "Trip", "Comms", "Phrases", "Costs", "Packing"];
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
      {tab === "Trip" && <TravelersTab />}
      {tab === "Comms" && <CommsTab />}
      {tab === "Phrases" && <PhrasesTab />}
      {tab === "Costs" && <CostsTab />}
      {tab === "Packing" && (
        <div style={{ paddingTop: 16 }}>
          <Checklist data={umrahChecklist} storageKey="tie3-umrah-checklist" accent={RED} />
        </div>
      )}
    </div>
  );
}

function DayDetail({ d }) {
  return (
    <div style={{ padding: "0 14px" }}>
      {d.items.map((it, j) => (
        <div key={j} style={{ padding: "9px 0", borderBottom: j < d.items.length - 1 ? "1px solid var(--line)" : "none" }}>
          <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 1 }}>{it.label}</div>
          <div style={{ fontSize: 12, color: "var(--slate)", lineHeight: 1.5 }}>{it.detail}</div>
        </div>
      ))}
    </div>
  );
}

function DaysTab() {
  const cityIcon = (d) => d.transit ? "✈️" : /madina/i.test(d.city) ? "🕌" : "🕋";
  const tiles = umrahDays.map((d) => ({
    key: `d${d.day}`,
    icon: cityIcon(d),
    label: `Day ${d.day} · ${d.city}`,
    sub: d.date,
    accent: d.transit ? "var(--u-gold)" : "var(--u-mid)",
    render: () => <DayDetail d={d} />,
  }));
  return (
    <div style={{ paddingTop: 16 }}>
      <div style={{ padding: "0 20px 10px" }}>
        <p style={{ fontSize: 12.5, color: "var(--slate)", lineHeight: 1.6 }}>
          Eight days across Makkah and Madinah. Tap any day to open it.
        </p>
      </div>
      <TileGrid tiles={tiles} accent="var(--u-mid)" />
      <div style={{ height: 16 }} />
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

function RiteProgress() {
  const [done, setDone] = useState({});
  useEffect(() => {
    try { const s = localStorage.getItem("tie3-umrah-rites"); if (s) setDone(JSON.parse(s)); } catch (e) {}
  }, []);
  function toggle(k) {
    setDone(prev => {
      const next = { ...prev, [k]: !prev[k] };
      try { localStorage.setItem("tie3-umrah-rites", JSON.stringify(next)); } catch (e) {}
      return next;
    });
  }
  const count = umrahRiteSteps.filter(r => done[r.key]).length;
  const pct = Math.round((count / umrahRiteSteps.length) * 100);
  return (
    <div style={{ padding: "0 20px 4px" }}>
      <div className="card" style={{ overflow: "hidden", border: "1px solid rgba(201,161,74,0.4)" }}>
        <div style={{ background: "linear-gradient(135deg, var(--u-deep), var(--u-mid))", color: "#fff", padding: "12px 15px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div className="eyebrow" style={{ color: "var(--u-gold-lt)", fontSize: 9.5 }}>PILGRIMAGE PROGRESS</div>
            <div style={{ fontSize: 14, fontWeight: 600, marginTop: 2 }}>
              {count === 0 ? "Rites not started" : count === umrahRiteSteps.length ? "Umrah complete — Alhamdulillah" : `${count} of ${umrahRiteSteps.length} rites done`}
            </div>
          </div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 600, color: "var(--u-gold-lt)" }}>{pct}%</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
          {umrahRiteSteps.map((r, i) => {
            const on = !!done[r.key];
            return (
              <button key={r.key} onClick={() => toggle(r.key)}
                style={{ padding: "11px 4px", borderRight: i < 3 ? "1px solid var(--line)" : "none", background: on ? "rgba(201,161,74,0.14)" : "var(--white)", display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
                <span style={{ fontSize: 17, opacity: on ? 1 : 0.4 }}>{r.icon}</span>
                <span style={{ fontSize: 9.5, fontWeight: 700, color: on ? "var(--u-mid)" : "var(--mist)", textAlign: "center", lineHeight: 1.2 }}>{r.label}</span>
                {on && <span style={{ fontSize: 9, color: "var(--u-gold)" }}>✓</span>}
              </button>
            );
          })}
        </div>
      </div>
      <div style={{ fontSize: 10.5, color: "var(--mist)", textAlign: "center", marginTop: 6 }}>Tap a rite to mark it done — saved on this device</div>
    </div>
  );
}

function GuideTab() {
  const tiles = umrahGuide.map((g) => {
    const Art = RiteArt[g.icon];
    return {
      key: `r${g.step}`,
      icon: g.icon === "ihram" ? "👕" : g.icon === "tawaf" ? "🕋" : g.icon === "saee" ? "🏃" : "✂️",
      label: g.title,
      sub: g.subtitle,
      accent: "var(--u-mid)",
      render: () => (
        <div style={{ padding: "0 14px" }}>
          <p style={{ fontSize: 12.5, color: "var(--slate)", lineHeight: 1.6, marginBottom: 12 }}>{g.intro}</p>
          {g.diagram && (
            <div style={{ marginBottom: 14 }}>
              <div style={{ background: "#fff", border: "1px solid var(--line)", borderRadius: "var(--r-sm)", padding: "12px 10px", textAlign: "center" }}>
                <img src={g.diagram} alt={`${g.title} diagram`} style={{ width: "100%", maxWidth: 320, height: "auto", display: "inline-block" }} />
              </div>
              {g.diagramCaption && <div style={{ fontSize: 11, color: "var(--mist)", fontStyle: "italic", marginTop: 6, lineHeight: 1.5, textAlign: "center" }}>{g.diagramCaption}</div>}
            </div>
          )}
          <div style={{ fontSize: 10.5, fontWeight: 700, color: "var(--u-gold)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>What to do</div>
          <div style={{ marginBottom: 14 }}>
            {g.prep.map((p, j) => (
              <div key={j} style={{ display: "flex", gap: 9, marginBottom: 6, alignItems: "flex-start" }}>
                <span style={{ width: 6, height: 6, borderRadius: 99, background: "var(--u-gold)", flexShrink: 0, marginTop: 6 }} />
                <span style={{ fontSize: 12.5, color: "var(--ink)", lineHeight: 1.5 }}>{p}</span>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 10.5, fontWeight: 700, color: "var(--u-gold)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>Du'as</div>
          {g.duas.map((d, k) => <DuaCard key={k} dua={d} />)}
        </div>
      ),
    };
  });

  return (
    <div style={{ paddingTop: 16 }}>
      <RiteProgress />
      <div style={{ padding: "12px 20px 12px" }}>
        <p style={{ fontSize: 12.5, color: "var(--slate)", lineHeight: 1.6 }}>
          The four rites with du'as in Arabic, transliteration, and English. Tap a tile to open it.
        </p>
      </div>
      <TileGrid tiles={tiles} accent="var(--u-mid)" />
      <div style={{ padding: "14px 20px 16px" }}>
        <div className="card" style={{ overflow: "hidden", border: "1px solid rgba(201,161,74,0.4)" }}>
          <div style={{ background: "linear-gradient(135deg, var(--u-gold), #B8912F)", color: "#fff", padding: "11px 15px" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 500 }}>{madinaNote.title}</div>
          </div>
          <div className="pad" style={{ fontSize: 12.5, color: "var(--slate)", lineHeight: 1.65 }}>{madinaNote.body}</div>
        </div>
        <div className="tip umrah" style={{ marginTop: 12 }}>
          <strong>Note:</strong> A concise reference — follow your group's scholar or Mr. Fahim for the authoritative sequence.
        </div>
      </div>
    </div>
  );
}

function PhrasesTab() {
  const tiles = arabicPhrases.map((g, i) => ({
    key: `a${i}`, icon: g.icon, label: g.group, sub: `${g.items.length} phrases`, accent: "var(--u-mid)",
    render: () => (
      <div style={{ padding: "0 14px" }}>
        {g.items.map((p, j) => (
          <div key={j} style={{ padding: "9px 0", borderBottom: j < g.items.length - 1 ? "1px solid var(--line)" : "none" }}>
            <div dir="rtl" style={{ fontFamily: "'Amiri', serif", fontSize: 19, color: "var(--u-deep)", lineHeight: 1.6, textAlign: "right" }}>{p.ar}</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, color: "var(--u-mid)", fontWeight: 600, marginTop: 3 }}>{p.say}</div>
            <div style={{ fontSize: 12, color: "var(--slate)", marginTop: 2, lineHeight: 1.45 }}>{p.mean}</div>
          </div>
        ))}
      </div>
    ),
  }));
  return (
    <div style={{ paddingTop: 16 }}>
      <div style={{ padding: "0 20px 12px" }}>
        <div className="tip umrah" style={{ marginTop: 0 }}>{arabicPhraseNote}</div>
      </div>
      <TileGrid tiles={tiles} accent="var(--u-mid)" />
      <div style={{ padding: "14px 20px 16px" }}>
        <div className="tip warn"><strong>Offline tip:</strong> Screenshot these before you fly — mobile data inside the Haram is often saturated at peak prayer times.</div>
      </div>
    </div>
  );
}

function TravelersTab() {
  const tiles = [
    { key: "who", icon: "👨‍👩‍👦", label: "Travellers", sub: "5 pilgrims", accent: "var(--u-mid)", render: () => (
      <div style={{ padding: "0 14px" }}>
        {umrahTravelers.map((t, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: i < umrahTravelers.length - 1 ? "1px solid var(--line)" : "none" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 30, height: 30, borderRadius: 99, background: "var(--u-light)", color: "var(--u-mid)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 13, flexShrink: 0 }}>{t.name.charAt(0)}</div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 13.5 }}>{t.name}</div>
                <div style={{ fontSize: 11, color: "var(--mist)" }}>{t.role}</div>
              </div>
            </div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--u-mid)", fontWeight: 500 }}>{t.rate}</span>
          </div>
        ))}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 10, padding: "9px 11px", background: "var(--u-light)", borderRadius: "var(--r-sm)" }}>
          <span style={{ fontWeight: 600, fontSize: 12.5, color: "var(--u-deep)" }}>Package total (all 5)</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 14, fontWeight: 600, color: "var(--u-mid)" }}>৳9,10,000</span>
        </div>
      </div>
    )},
    { key: "fly", icon: "✈️", label: "Flights", sub: `${umrahFlights.length} legs`, accent: "var(--u-mid)", render: () => (
      <div style={{ padding: "0 14px" }}>
        {umrahFlights.map((fl, i) => (
          <div key={i} style={{ padding: "10px 0", borderBottom: i < umrahFlights.length - 1 ? "1px solid var(--line)" : "none" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
              <span className="pill" style={{ background: "var(--u-light)", color: "var(--u-mid)", fontSize: 10 }}>{fl.leg}</span>
              <span style={{ fontSize: 11, color: "var(--mist)", fontWeight: 600 }}>{fl.date}</span>
            </div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 500 }}>{fl.airline}</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--u-gold)", margin: "2px 0 5px" }}>{fl.flights}</div>
            <div style={{ fontSize: 12.5, fontWeight: 500, marginBottom: 3 }}>{fl.route}</div>
            <div style={{ fontSize: 12, color: "var(--slate)", lineHeight: 1.5 }}>{fl.note}</div>
          </div>
        ))}
      </div>
    )},
    { key: "stay", icon: "🛏️", label: "Hotels", sub: "Makkah & Madinah", accent: "var(--u-mid)", render: () => (
      <div style={{ padding: "0 14px" }}>
        {umrahHotels.map((h, i) => (
          <div key={i} style={{ padding: "10px 0", borderBottom: i < umrahHotels.length - 1 ? "1px solid var(--line)" : "none" }}>
            <div className="eyebrow" style={{ color: "var(--u-gold)", fontSize: 9.5, marginBottom: 3 }}>{h.city}</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 500, marginBottom: 4 }}>{h.name}</div>
            <div style={{ fontSize: 12.5, color: "var(--slate)", marginBottom: 5 }}>{h.room}</div>
            <span className="pill" style={{ background: "var(--u-light)", color: "var(--u-mid)", fontSize: 10 }}>{h.nights}</span>
          </div>
        ))}
      </div>
    )},
    { key: "log", icon: "🗺️", label: "Logistics", sub: "Agency & ground", accent: "var(--u-mid)", render: () => (
      <div style={{ padding: "0 14px" }}>
        {umrahLogistics.map((l, i) => (
          <div key={i} style={{ padding: "9px 0", borderBottom: i < umrahLogistics.length - 1 ? "1px solid var(--line)" : "none" }}>
            <div style={{ fontSize: 10.5, fontWeight: 700, color: "var(--u-gold)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 2 }}>{l.label}</div>
            <div style={{ fontSize: 12.5, color: "var(--ink)", lineHeight: 1.5 }}>{l.value}</div>
          </div>
        ))}
      </div>
    )},
  ];
  return (
    <div style={{ paddingTop: 16 }}>
      <div style={{ padding: "0 20px 10px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 7 }}>
        {umrahJourneyStats.map((s, i) => (
          <div key={i} className="card" style={{ padding: "8px 4px", textAlign: "center" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 600, color: "var(--u-gold)", lineHeight: 1 }}>{s.k}</div>
            <div style={{ fontSize: 9, color: "var(--mist)", marginTop: 2 }}>{s.l}</div>
          </div>
        ))}
      </div>
      <TileGrid tiles={tiles} accent="var(--u-mid)" />
      <div style={{ height: 16 }} />
    </div>
  );
}

function CostsTab() {
  const tiles = umrahCosts.map((c2, i) => ({
    key: `c${i}`,
    icon: /package/i.test(c2.item) ? "📦" : /food/i.test(c2.item) ? "🍽️" : /sim|data/i.test(c2.item) ? "📶" : "🛍️",
    label: c2.item.replace(/\s*\(.*\)/, ""),
    sub: c2.bdt,
    accent: "var(--u-mid)",
    render: () => (
      <div style={{ padding: "0 14px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 17, fontWeight: 600, color: "var(--u-deep)" }}>{c2.bdt}</span>
          <span style={{ fontSize: 12, color: "var(--mist)" }}>{c2.usd}</span>
        </div>
        <div style={{ fontSize: 12.5, color: "var(--slate)", lineHeight: 1.6 }}>{c2.note}</div>
      </div>
    ),
  }));
  return (
    <div style={{ paddingTop: 16 }}>
      {/* Grand total header */}
      <div style={{ padding: "0 20px 12px" }}>
        <div style={{ borderRadius: "var(--r-md)", padding: "15px 17px", background: "linear-gradient(135deg, var(--u-deep), var(--u-mid))", color: "#fff", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div className="eyebrow" style={{ color: "var(--u-gold-lt)", fontSize: 9.5 }}>GRAND TOTAL</div>
            <div style={{ fontSize: 10.5, color: "rgba(255,255,255,0.65)", marginTop: 2 }}>Package + food + SIM + shopping</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 500, color: "var(--u-gold-lt)", lineHeight: 1.1 }}>{umrahGrandTotal.bdt}</div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.7)" }}>{umrahGrandTotal.usd}</div>
          </div>
        </div>
      </div>
      <TileGrid tiles={tiles} accent="var(--u-mid)" />
      <div style={{ padding: "14px 20px 16px" }}>
        <div className="tip umrah" style={{ marginTop: 0 }}>
          <strong>Note:</strong> Package price is confirmed with Fly Hajj Aviation. Food, SIM, and shopping are estimates — carry a buffer.
        </div>
      </div>
    </div>
  );
}

function CommsTab() {
  const tiles = [
    { key: "sim", icon: "📶", label: "SIM & data", sub: "STC · Mobily · Zain", accent: "var(--u-mid)", render: () => (
      <div style={{ padding: "0 14px" }}>
        <p style={{ fontSize: 12, color: "var(--slate)", lineHeight: 1.6, marginBottom: 10 }}>
          All three offer passport-only visitor SIMs — no Iqama needed.
        </p>
        {umrahSimOperators.map((op, i) => (
          <div key={i} style={{ padding: "11px 0", borderTop: "1px solid var(--line)" }}>
            <div style={{ fontWeight: 700, fontSize: 13.5, marginBottom: 4 }}>{op.star ? "★ " : ""}{op.name}</div>
            <div style={{ fontSize: 12, color: "var(--slate)", lineHeight: 1.55, marginBottom: 8 }}>{op.coverage}</div>
            {op.plans.map((p, j) => (
              <div key={j} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 0" }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 12 }}>{p.label}</div>
                  <div style={{ fontSize: 10.5, color: "var(--mist)" }}>{p.data} · {p.validity}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, fontWeight: 600, color: "var(--u-mid)" }}>{p.price}</div>
                  <div style={{ fontSize: 10, color: "var(--mist)" }}>{p.bdt}</div>
                </div>
              </div>
            ))}
            <div style={{ fontSize: 11.5, color: "var(--slate)", fontStyle: "italic", marginTop: 6 }}>{op.note}</div>
          </div>
        ))}
        <div className="tip umrah" style={{ marginTop: 10 }}>{umrahSimRecommendation}</div>
      </div>
    )},
    { key: "tips", icon: "💡", label: "Practical tips", sub: `${umrahSimTips.length} pointers`, accent: "var(--u-mid)", render: () => (
      <div style={{ padding: "0 14px" }}>
        {umrahSimTips.map((t, i) => (
          <div key={i} style={{ display: "flex", gap: 9, padding: "8px 0", borderBottom: i < umrahSimTips.length - 1 ? "1px solid var(--line)" : "none", alignItems: "flex-start" }}>
            <span style={{ width: 5, height: 5, borderRadius: 99, background: "var(--u-gold)", flexShrink: 0, marginTop: 6 }} />
            <span style={{ fontSize: 12, color: "var(--ink)", lineHeight: 1.55 }}>{t}</span>
          </div>
        ))}
      </div>
    )},
  ];
  return (
    <div style={{ paddingTop: 16 }}>
      <TileGrid tiles={tiles} accent="var(--u-mid)" />
      <div style={{ height: 16 }} />
    </div>
  );
}


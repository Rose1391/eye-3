import { Link } from "react-router-dom";
import { umrahMeta } from "../data/umrah";
import { thailandMeta } from "../data/thailand";

export default function Home() {
  return (
    <div className="page home-fit">
      {/* Slim hero */}
      <div style={{ position: "relative", height: 104, overflow: "hidden", flexShrink: 0 }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(/hero-full.jpg)", backgroundSize: "cover", backgroundPosition: "center 38%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(165deg, rgba(20,12,10,0.62), rgba(0,20,50,0.78))" }} />
        <div style={{ position: "relative", padding: "13px 20px", color: "#fff" }}>
          <div className="eyebrow" style={{ color: "#EBD98C", fontSize: 9.5, marginBottom: 3 }}>A FAMILY JOURNEY · 2026</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: 25, fontWeight: 500, lineHeight: 1.0 }}>
            Tour in <em style={{ color: "#EBD98C", fontStyle: "italic" }}>Eye 3</em>
          </h1>
          <div style={{ fontSize: 10.5, color: "rgba(255,255,255,0.8)", marginTop: 4, lineHeight: 1.35 }}>
            Two journeys, one family story — Umrah, then Thailand.
          </div>
        </div>
      </div>

      {/* Journey tiles */}
      <div style={{ padding: "10px 16px 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, flexShrink: 0 }}>
        <JourneyTile
          to="/umrah" tone="umrah" num="ONE" title="Umrah" sub={umrahMeta.dates}
          meta="5 travellers · Makkah & Madinah" bg="/hero-umrah.jpg"
        />
        <JourneyTile
          to="/thailand" tone="thai" num="TWO" title="Thailand" sub={thailandMeta.dates}
          meta="3 travellers · Samui & Bangkok" bg="/hero-thailand.jpg"
        />
      </div>

      {/* Timeline strip */}
      <div style={{ padding: "10px 16px 0", flexShrink: 0 }}>
        <div className="card" style={{ overflow: "hidden" }}>
          {[
            { d: "22–29 Aug", t: "Umrah pilgrimage", s: "Family of five", c: "var(--u-mid)" },
            { d: "29 Aug – 1 Sep", t: "Break in Dhaka", s: "Rest, repack, e-visas", c: "var(--u-gold)" },
            { d: "1 – 8 Sep", t: "Thailand holiday", s: "Rose, Farzana & Affaan", c: "var(--m-blue)" },
          ].map((r, i, arr) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "7px 13px", borderBottom: i < arr.length - 1 ? "1px solid var(--line)" : "none" }}>
              <span style={{ width: 7, height: 7, borderRadius: 99, background: r.c, flexShrink: 0 }} />
              <div style={{ minWidth: 92, fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--mist)", fontWeight: 500 }}>{r.d}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 12.5, fontWeight: 600, lineHeight: 1.2 }}>{r.t}</div>
                <div style={{ fontSize: 10, color: "var(--mist)", lineHeight: 1.25 }}>{r.s}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick stats */}
      <div style={{ padding: "9px 16px 10px", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8, flexShrink: 0 }}>
        {[
          { k: "15", l: "days away" },
          { k: "2", l: "countries" },
          { k: "5", l: "cities" },
        ].map((s, i) => (
          <div key={i} className="card" style={{ padding: "7px 6px", textAlign: "center" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 19, fontWeight: 600, color: "var(--u-gold)", lineHeight: 1 }}>{s.k}</div>
            <div style={{ fontSize: 9.5, color: "var(--mist)", marginTop: 2, letterSpacing: "0.03em" }}>{s.l}</div>
          </div>
        ))}
      </div>

      <div className="home-spacer" />
      <div className="home-navpad" />
    </div>
  );
}

function JourneyTile({ to, tone, num, title, sub, meta, bg }) {
  const grad = tone === "umrah"
    ? "linear-gradient(165deg, rgba(90,20,32,0.80), rgba(139,30,45,0.90))"
    : "linear-gradient(165deg, rgba(18,42,107,0.80), rgba(14,140,140,0.88))";
  return (
    <Link to={to} style={{ display: "block", borderRadius: "var(--r-md)", overflow: "hidden", position: "relative", minHeight: 132 }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center" }} />
      <div style={{ position: "absolute", inset: 0, background: grad }} />
      <div style={{ position: "relative", padding: "11px 11px", color: "#fff", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 132 }}>
        <div>
          <div className="eyebrow" style={{ color: "#EBD98C", fontSize: 8.5, marginBottom: 4 }}>JOURNEY {num}</div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 500, lineHeight: 1.05 }}>{title}</div>
          <div style={{ fontSize: 10.5, color: "rgba(255,255,255,0.88)", marginTop: 3 }}>{sub}</div>
        </div>
        <div>
          <div style={{ fontSize: 9.5, color: "rgba(255,255,255,0.7)", lineHeight: 1.3, marginBottom: 6 }}>{meta}</div>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 10.5, fontWeight: 700, color: "#EBD98C" }}>
            Open
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

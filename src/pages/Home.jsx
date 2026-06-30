import { Link } from "react-router-dom";
import { umrahMeta } from "../data/umrah";
import { malaysiaMeta } from "../data/malaysia";

export default function Home() {
  return (
    <div className="page">
      {/* Hero */}
      <div style={{
        background: "linear-gradient(165deg, #0F2A1F 0%, #15402C 55%, #0A5870 130%)",
        padding: "56px 24px 40px", color: "#fff", position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: -40, right: -40, width: 200, height: 200,
          borderRadius: "50%", background: "radial-gradient(circle, rgba(201,161,74,0.25), transparent 70%)",
        }} />
        <div className="eyebrow" style={{ color: "rgba(255,255,255,0.55)", marginBottom: 16 }}>
          A FAMILY JOURNEY · 2026
        </div>
        <h1 style={{
          fontFamily: "var(--font-display)", fontSize: 46, fontWeight: 400,
          lineHeight: 1.0, letterSpacing: "-0.02em", marginBottom: 6,
        }}>
          Tour in<br />
          <span style={{ fontStyle: "italic", color: "var(--u-gold-soft)" }}>Eye 3</span>
        </h1>
        <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", maxWidth: 300, marginTop: 14 }}>
          Two journeys, one family. A pilgrimage to the holy cities, then a tropical holiday with Affaan.
        </p>
        <div style={{ display: "flex", gap: 8, marginTop: 22, flexWrap: "wrap" }}>
          {["August – September 2026", "5 travelers", "1 unforgettable trip"].map((t) => (
            <span key={t} style={{
              fontSize: 11, fontWeight: 500, padding: "5px 12px", borderRadius: 99,
              background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.18)",
            }}>{t}</span>
          ))}
        </div>
      </div>

      {/* Two journey gateways */}
      <div style={{ padding: "24px 20px 8px" }}>
        <div className="eyebrow" style={{ marginBottom: 14 }}>CHOOSE YOUR JOURNEY</div>

        <Link to="/umrah" style={{ display: "block", marginBottom: 14 }}>
          <div style={{
            borderRadius: "var(--r-lg)", overflow: "hidden", position: "relative",
            background: "linear-gradient(135deg, #0F2A1F, #1A6B45)", color: "#fff",
            padding: "22px 22px", boxShadow: "var(--shadow-md)",
          }}>
            <div style={{
              position: "absolute", right: -10, top: -10, fontSize: 92, opacity: 0.1,
              fontFamily: "var(--font-display)",
            }}>۱</div>
            <div className="eyebrow" style={{ color: "var(--u-gold-soft)", marginBottom: 8 }}>JOURNEY ONE</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 500, marginBottom: 4 }}>
              {umrahMeta.title}
            </div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", marginBottom: 14 }}>
              {umrahMeta.dates} · {umrahMeta.route}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: "var(--u-gold-soft)" }}>
              Open journey
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </Link>

        <Link to="/malaysia" style={{ display: "block" }}>
          <div style={{
            borderRadius: "var(--r-lg)", overflow: "hidden", position: "relative",
            background: "linear-gradient(135deg, #0E7C9B, #1A8055 90%)", color: "#fff",
            padding: "22px 22px", boxShadow: "var(--shadow-md)",
          }}>
            <div style={{
              position: "absolute", right: 4, top: -14, fontSize: 92, opacity: 0.12,
              fontFamily: "var(--font-display)",
            }}>2</div>
            <div className="eyebrow" style={{ color: "#FCE9C8", marginBottom: 8 }}>JOURNEY TWO</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 500, marginBottom: 4 }}>
              {malaysiaMeta.title}
            </div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", marginBottom: 14 }}>
              {malaysiaMeta.dates} · {malaysiaMeta.route}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: "#FCE9C8" }}>
              Open journey
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </Link>
      </div>

      {/* The full timeline */}
      <div className="section-head">
        <span className="num">↓</span>
        <h2>The full journey</h2>
        <span className="line" />
      </div>
      <div style={{ padding: "0 20px 12px" }}>
        {[
          { d: "22–29 Aug", t: "Umrah pilgrimage", s: "Meccah & Madina · all 5 travelers" },
          { d: "29–31 Aug", t: "Short break in Dhaka", s: "Rest and repack between journeys" },
          { d: "31 Aug – 8 Sep", t: "Malaysia holiday", s: "Rose, Farzana & Affaan" },
        ].map((e, i) => (
          <div key={i} className="card pad" style={{ marginBottom: 8, borderLeft: "3px solid var(--u-gold)" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--u-gold)", letterSpacing: "0.04em" }}>{e.d}</div>
            <div style={{ fontWeight: 600, fontSize: 15, marginTop: 2 }}>{e.t}</div>
            <div style={{ fontSize: 12.5, color: "var(--mist)", marginTop: 1 }}>{e.s}</div>
          </div>
        ))}
      </div>

      <p className="center muted" style={{ fontSize: 11, padding: "16px 30px 24px", lineHeight: 1.6 }}>
        Everything here is finalized except a few items awaiting your travel agent. Add to your home screen for offline access during the trip.
      </p>
    </div>
  );
}

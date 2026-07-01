import { Link } from "react-router-dom";
import { umrahMeta } from "../data/umrah";
import { malaysiaMeta } from "../data/malaysia";

export default function Home() {
  return (
    <div className="page">
      {/* Photo hero */}
      <div style={{ position: "relative", height: 260, overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url(/hero-full.jpg)",
          backgroundSize: "cover", backgroundPosition: "center",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(180deg, rgba(90,20,32,0.15) 0%, rgba(90,20,32,0.35) 45%, rgba(28,20,18,0.92) 100%)",
        }} />
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "0 24px 22px", color: "#fff" }}>
          <div className="eyebrow" style={{ color: "rgba(255,255,255,0.75)", marginBottom: 8 }}>A FAMILY JOURNEY · 2026</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: 40, fontWeight: 400, lineHeight: 0.98, letterSpacing: "-0.02em" }}>
            Tour in <span style={{ fontStyle: "italic", color: "var(--u-gold-lt)" }}>Eye 3</span>
          </h1>
        </div>
      </div>

      {/* Story */}
      <div style={{ padding: "20px 22px 8px" }}>
        <p style={{ fontSize: 14.5, color: "var(--slate)", lineHeight: 1.7 }}>
          Two journeys woven into one family story. First, five of us travel to the holy cities for <strong style={{ color: "var(--u-mid)" }}>Umrah</strong> — a pilgrimage of devotion and togetherness. Then, after a short breath in Dhaka, three of us fly on to <strong style={{ color: "var(--m-blue)" }}>Malaysia</strong> — islands, city lights, and little Affaan's first great adventure.
        </p>
      </div>

      {/* Two journey gateways */}
      <div style={{ padding: "14px 20px 8px" }}>
        <div className="eyebrow" style={{ marginBottom: 12 }}>CHOOSE YOUR JOURNEY</div>

        <Link to="/umrah" style={{ display: "block", marginBottom: 14 }}>
          <div style={{ borderRadius: "var(--r-lg)", overflow: "hidden", boxShadow: "var(--shadow-md)", position: "relative", height: 148 }}>
            <div style={{ position: "absolute", inset: 0, backgroundImage: "url(/hero-umrah.jpg)", backgroundSize: "cover", backgroundPosition: "center" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(110deg, rgba(90,20,32,0.92) 0%, rgba(139,30,45,0.78) 45%, rgba(139,30,45,0.25) 100%)" }} />
            <div style={{ position: "relative", padding: "18px 20px", color: "#fff", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div className="eyebrow" style={{ color: "var(--u-gold-lt)", marginBottom: 6 }}>JOURNEY ONE</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 25, fontWeight: 500, lineHeight: 1 }}>{umrahMeta.title}</div>
                <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.82)", marginTop: 5 }}>{umrahMeta.dates}</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: "var(--u-gold-lt)" }}>
                Open journey
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/malaysia" style={{ display: "block" }}>
          <div style={{ borderRadius: "var(--r-lg)", overflow: "hidden", boxShadow: "var(--shadow-md)", position: "relative", height: 148 }}>
            <div style={{ position: "absolute", inset: 0, backgroundImage: "url(/hero-malaysia.jpg)", backgroundSize: "cover", backgroundPosition: "center" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(110deg, rgba(18,42,107,0.92) 0%, rgba(27,58,143,0.72) 45%, rgba(27,138,90,0.35) 100%)" }} />
            <div style={{ position: "relative", padding: "18px 20px", color: "#fff", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div className="eyebrow" style={{ color: "#EBD98C", marginBottom: 6 }}>JOURNEY TWO</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 25, fontWeight: 500, lineHeight: 1 }}>{malaysiaMeta.title}</div>
                <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.85)", marginTop: 5 }}>{malaysiaMeta.dates}</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: "#EBD98C" }}>
                Open journey
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Full timeline */}
      <div className="section-head">
        <span className="num">◆</span>
        <h2>The full journey</h2>
        <span className="line" />
      </div>
      <div style={{ padding: "0 20px 12px" }}>
        {[
          { d: "22–29 Aug", t: "Umrah pilgrimage", s: "Meccah & Madina · all 5 travelers", c: "var(--u-mid)" },
          { d: "29–31 Aug", t: "Short break in Dhaka", s: "Rest and repack between journeys", c: "var(--u-gold)" },
          { d: "31 Aug – 8 Sep", t: "Malaysia holiday", s: "Rose, Farzana & Affaan", c: "var(--m-blue)" },
        ].map((e, i) => (
          <div key={i} className="card pad" style={{ marginBottom: 8, borderLeft: `4px solid ${e.c}` }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: e.c, letterSpacing: "0.04em" }}>{e.d}</div>
            <div style={{ fontWeight: 600, fontSize: 15, marginTop: 2 }}>{e.t}</div>
            <div style={{ fontSize: 12.5, color: "var(--mist)", marginTop: 1 }}>{e.s}</div>
          </div>
        ))}
      </div>

      <p className="center muted" style={{ fontSize: 11, padding: "14px 30px 24px", lineHeight: 1.6 }}>
        Everything here is finalized except a few items awaiting your travel agent. Add to your home screen for offline access during the trip.
      </p>
    </div>
  );
}

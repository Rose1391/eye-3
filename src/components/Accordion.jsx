import { useState } from "react";

export default function Accordion({ title, subtitle, badge, accent = "var(--u-mid)", defaultOpen = false, leftNode, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="acc">
      <button className="acc-head" onClick={() => setOpen(!open)}
        style={{ background: open ? "rgba(0,0,0,0.015)" : "var(--white)" }}>
        {leftNode}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontWeight: 600, fontSize: 14.5, color: "var(--ink)", lineHeight: 1.25 }}>{title}</div>
          {subtitle && <div style={{ fontSize: 12, color: "var(--mist)", marginTop: 1 }}>{subtitle}</div>}
        </div>
        {badge && (
          <span style={{ fontSize: 10.5, fontWeight: 600, color: accent, background: "rgba(0,0,0,0.03)", padding: "3px 9px", borderRadius: 99, flexShrink: 0 }}>{badge}</span>
        )}
        <svg className={`acc-chevron ${open ? "open" : ""}`} viewBox="0 0 24 24" width="18" height="18"
          fill="none" stroke="var(--mist)" strokeWidth="2">
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && <div className="acc-body">{children}</div>}
    </div>
  );
}

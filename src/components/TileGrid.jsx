import { useState } from "react";

/**
 * TileGrid — compact tappable tiles; tapping one expands its detail inline
 * below the grid row. Keeps long pages short.
 *
 * tiles: [{ key, icon, label, sub, accent?, render: () => JSX }]
 */
export default function TileGrid({ tiles, accent = "#0E8C8C", cols = 2 }) {
  const [open, setOpen] = useState(null);
  const active = tiles.find((t) => t.key === open);

  return (
    <div style={{ padding: "0 20px" }}>
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 10 }}>
        {tiles.map((t) => {
          const isOn = open === t.key;
          const c = t.accent || accent;
          return (
            <button
              key={t.key}
              onClick={() => setOpen(isOn ? null : t.key)}
              style={{
                textAlign: "left",
                padding: "13px 12px",
                borderRadius: "var(--r-md)",
                border: isOn ? `1.5px solid ${c}` : "1px solid var(--line)",
                background: isOn ? `${c}12` : "var(--white)",
                boxShadow: isOn ? "none" : "0 1px 2px rgba(0,0,0,0.04)",
                display: "flex",
                flexDirection: "column",
                gap: 5,
                minHeight: 78,
                transition: "background 0.15s, border-color 0.15s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 6 }}>
                <span style={{ fontSize: 19, lineHeight: 1 }}>{t.icon}</span>
                <svg
                  viewBox="0 0 24 24"
                  width="15"
                  height="15"
                  fill="none"
                  stroke={isOn ? c : "var(--mist)"}
                  strokeWidth="2.2"
                  style={{ transform: isOn ? "rotate(180deg)" : "none", transition: "transform 0.2s", flexShrink: 0 }}
                >
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 12.5, lineHeight: 1.25, color: isOn ? c : "var(--ink)" }}>{t.label}</div>
                {t.sub && <div style={{ fontSize: 10.5, color: "var(--mist)", marginTop: 2, lineHeight: 1.3 }}>{t.sub}</div>}
              </div>
            </button>
          );
        })}
      </div>

      {active && (
        <div
          style={{
            marginTop: 12,
            borderRadius: "var(--r-md)",
            border: `1px solid ${(active.accent || accent)}44`,
            background: "var(--white)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              padding: "10px 14px",
              background: `${active.accent || accent}12`,
              borderBottom: `1px solid ${(active.accent || accent)}33`,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 8,
            }}
          >
            <span style={{ fontWeight: 700, fontSize: 13.5, color: active.accent || accent }}>
              {active.icon} {active.label}
            </span>
            <button onClick={() => setOpen(null)} style={{ fontSize: 11, color: "var(--mist)", fontWeight: 600 }}>
              Close ✕
            </button>
          </div>
          <div style={{ padding: "12px 0" }}>{active.render()}</div>
        </div>
      )}
    </div>
  );
}

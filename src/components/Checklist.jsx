import { useState, useEffect } from "react";

export default function Checklist({ data, storageKey, accent }) {
  const [checked, setChecked] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) setChecked(JSON.parse(saved));
    } catch (e) { /* ignore */ }
    setLoaded(true);
  }, [storageKey]);

  useEffect(() => {
    if (loaded) {
      try { localStorage.setItem(storageKey, JSON.stringify(checked)); } catch (e) { /* ignore */ }
    }
  }, [checked, loaded, storageKey]);

  function toggle(key) {
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  const allItems = data.flatMap((s, si) => s.items.map((_, ii) => `${si}-${ii}`));
  const doneCount = allItems.filter((k) => checked[k]).length;
  const pct = allItems.length ? Math.round((doneCount / allItems.length) * 100) : 0;

  return (
    <div style={{ padding: "0 20px" }}>
      {/* Progress */}
      <div className="card pad" style={{ marginBottom: 16, display: "flex", alignItems: "center", gap: 14 }}>
        <div style={{ position: "relative", width: 52, height: 52, flexShrink: 0 }}>
          <svg viewBox="0 0 52 52" style={{ transform: "rotate(-90deg)" }}>
            <circle cx="26" cy="26" r="22" fill="none" stroke="var(--line)" strokeWidth="5" />
            <circle cx="26" cy="26" r="22" fill="none" stroke={accent} strokeWidth="5"
              strokeLinecap="round" strokeDasharray={2 * Math.PI * 22}
              strokeDashoffset={2 * Math.PI * 22 * (1 - pct / 100)}
              style={{ transition: "stroke-dashoffset 0.5s ease" }} />
          </svg>
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: accent }}>
            {pct}%
          </div>
        </div>
        <div>
          <div style={{ fontWeight: 600, fontSize: 15 }}>{doneCount} of {allItems.length} packed</div>
          <div style={{ fontSize: 12, color: "var(--mist)" }}>Tap items to check them off — saved on this device</div>
        </div>
      </div>

      {data.map((sec, si) => (
        <div key={si} style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: accent, marginBottom: 8, paddingLeft: 2 }}>
            {sec.section}
          </div>
          <div className="card" style={{ overflow: "hidden" }}>
            {sec.items.map((item, ii) => {
              const key = `${si}-${ii}`;
              const isOn = !!checked[key];
              return (
                <button key={ii} onClick={() => toggle(key)}
                  style={{
                    display: "flex", alignItems: "flex-start", gap: 12, width: "100%",
                    textAlign: "left", padding: "11px 14px",
                    borderBottom: ii < sec.items.length - 1 ? "1px solid var(--line)" : "none",
                    background: isOn ? "rgba(0,0,0,0.015)" : "transparent",
                  }}>
                  <span style={{
                    width: 20, height: 20, borderRadius: 6, flexShrink: 0, marginTop: 1,
                    border: `2px solid ${isOn ? accent : "var(--line)"}`,
                    background: isOn ? accent : "transparent",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "all 0.15s",
                  }}>
                    {isOn && (
                      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#fff" strokeWidth="3">
                        <path d="M5 12.5 10 17 19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </span>
                  <span style={{
                    fontSize: 13.5, lineHeight: 1.45,
                    color: isOn ? "var(--mist)" : "var(--ink)",
                    textDecoration: isOn ? "line-through" : "none",
                  }}>{item}</span>
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

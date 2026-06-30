// Lightweight inline SVG icons (no dependency)
export const Icon = {
  Home: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="nav-icon" {...p}>
      <path d="M3 10.5 12 3l9 7.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 9.5V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Mosque: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="nav-icon" {...p}>
      <path d="M12 2c2 2.2 3 3.6 3 5.2 0 1.6-1.3 2.8-3 2.8s-3-1.2-3-2.8C9 5.6 10 4.2 12 2Z" strokeLinejoin="round" />
      <path d="M4 21v-7a3 3 0 0 1 3-3M20 21v-7a3 3 0 0 0-3-3" strokeLinecap="round" />
      <path d="M7 21v-5a5 5 0 0 1 10 0v5M3 21h18" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Palm: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="nav-icon" {...p}>
      <path d="M12 22V11" strokeLinecap="round" />
      <path d="M12 11c-1-3-4-5-8-4 3-2 6-1.5 8 1 0-3 2-6 6-6-3 1-4 3.5-4 5 2.5-1.5 5-1 7 1-3-1-6 0-9 3Z" strokeLinejoin="round" />
    </svg>
  ),
  Check: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="nav-icon" {...p}>
      <path d="M4 12.5 9 17.5 20 6.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Bag: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="nav-icon" {...p}>
      <path d="M6 8h12l-1 12a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1L6 8Z" strokeLinejoin="round" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" strokeLinecap="round" />
    </svg>
  ),
  Plane: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
      <path d="M21 15.5 13.5 13V6.5a1.5 1.5 0 0 0-3 0V13L3 15.5V17l7.5-1.5V19L8 20.5V22l4-1 4 1v-1.5L13.5 19v-3.5L21 17v-1.5Z" strokeLinejoin="round" />
    </svg>
  ),
  Bed: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
      <path d="M3 18V7M3 12h18a0 0 0 0 1 0 0v6M21 18v-4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 12V9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Clock: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Star: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="m12 3 2.6 5.6 6 .7-4.4 4.1 1.2 6L12 16.8 6.6 19.4l1.2-6L3.4 9.3l6-.7L12 3Z" />
    </svg>
  ),
};

export function SectionHead({ num, title }) {
  return (
    <div className="section-head">
      {num && <span className="num">{num}</span>}
      <h2>{title}</h2>
      <span className="line" />
    </div>
  );
}

export function RatingDot({ rating }) {
  const map = { ok: "Toddler ready", prep: "Needs prep", nap: "Nap / rest" };
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
      <span className={`dot ${rating}`} />
      <span style={{ fontSize: 11, color: "var(--mist)", fontWeight: 500 }}>{map[rating]}</span>
    </span>
  );
}

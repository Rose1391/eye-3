import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Umrah from "./pages/Umrah";
import Malaysia from "./pages/Malaysia";
import { Icon } from "./components/ui";

export default function App() {
  const loc = useLocation();
  const nav = useNavigate();
  const path = loc.pathname;

  const navItems = [
    { to: "/", label: "Home", icon: Icon.Home, match: path === "/", cls: "home" },
    { to: "/umrah", label: "Umrah", icon: Icon.Mosque, match: path === "/umrah", cls: "umrah" },
    { to: "/malaysia", label: "Malaysia", icon: Icon.Palm, match: path === "/malaysia", cls: "malaysia" },
  ];

  return (
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/umrah" element={<Umrah />} />
        <Route path="/malaysia" element={<Malaysia />} />
        <Route path="*" element={<Home />} />
      </Routes>

      <nav className="nav">
        {navItems.map((n) => {
          const I = n.icon;
          return (
            <button key={n.to} onClick={() => nav(n.to)}
              className={`nav-item ${n.match ? "active" : ""} ${n.cls}`}>
              <I />
              <span>{n.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}

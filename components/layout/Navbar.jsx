"use client";

import { useTheme } from "@/hooks/useTheme";
import { useActiveNav } from "@/hooks/useActiveNav";
import { useEffect, useRef } from "react";

const NAV_ITEMS = [
  { href: "#hero", label: "Ana Sayfa", id: "hero" },
  { href: "#about", label: "Hakkımda", id: "about" },
  { href: "#experience", label: "Deneyim", id: "experience" },
  { href: "#projects", label: "Projeler", id: "projects" },
  { href: "#skills", label: "Yetenekler", id: "skills" },
  { href: "#learning", label: "Eğitimler", id: "learning" },
  { href: "#contact", label: "İletişim", id: "contact" },
];

export default function Navbar() {
  const { isDark, toggle } = useTheme();
  const activeId = useActiveNav();
  const navRef = useRef(null);

  useEffect(() => {
    function updateNavHeight() {
      if (navRef.current) {
        const h = navRef.current.offsetHeight;
        document.documentElement.style.setProperty("--nav-height", `${h}px`);
      }
    }
    updateNavHeight();
    window.addEventListener("resize", updateNavHeight);
    return () => window.removeEventListener("resize", updateNavHeight);
  }, []);

  return (
    <nav
      ref={navRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: ".85rem 2.5rem",
        background: isDark ? "rgba(13,12,24,0.78)" : "rgba(247,245,255,0.82)",
        backdropFilter: "blur(22px) saturate(1.2)",
        borderBottom: "1px solid var(--border)",
        transition: "background var(--T), border-color var(--T)",
      }}
    >
      {/* Logo */}
      <a
        href="#hero"
        style={{
          fontFamily: "var(--font-fraunces), serif",
          fontWeight: 700,
          fontSize: "0.95rem",
          color: "var(--text)",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: 9,
          letterSpacing: "-0.02em",
          transition: "color var(--T)",
        }}
      >
        <span style={{ color: "var(--accent)", fontWeight: 800 }}>
          &lt;/&gt;
        </span>
        Yüsra Yalavuz
      </a>

      {/* Nav links */}
      <ul
        style={{
          display: "flex",
          gap: "1.8rem",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        {NAV_ITEMS.map(({ href, label, id }) => (
          <li key={id}>
            <a
              href={href}
              className={`nav-link${activeId === id ? " active" : ""}`}
              style={{
                fontSize: "0.79rem",
                color: activeId === id ? "var(--accent)" : "var(--text2)",
                textDecoration: "none",
                letterSpacing: "0.02em",
                transition: "color 0.22s",
                position: "relative",
                paddingBottom: 3,
                fontFamily: "var(--font-instrument), sans-serif",
              }}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Theme toggle */}
      <button
        onClick={toggle}
        aria-label={isDark ? "Açık moda geç" : "Koyu moda geç"}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 7,
          background: "var(--card)",
          border: "1px solid var(--border)",
          borderRadius: 22,
          padding: "5px 14px",
          cursor: "pointer",
          color: "var(--text2)",
          fontSize: "0.75rem",
          fontFamily: "var(--font-instrument), sans-serif",
          transition: "all 0.25s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "var(--accent)";
          e.currentTarget.style.color = "var(--accent)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "var(--border)";
          e.currentTarget.style.color = "var(--text2)";
        }}
      >
        <span>{isDark ? "☀️" : "🌙"}</span>
        <span>{isDark ? "Açık Mod" : "Koyu Mod"}</span>
      </button>
    </nav>
  );
}

"use client";

import { useTheme } from "@/hooks/useTheme";
import { useActiveNav } from "@/hooks/useActiveNav";
import { useEffect, useRef, useState } from "react";

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
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className="nav-wrap"
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
            flexShrink: 0,
          }}
        >
          <span style={{ color: "var(--accent)", fontWeight: 800 }}>
            &lt;/&gt;
          </span>
          Yüsra Yalavuz
        </a>

        {/* Desktop nav linkleri */}
        <ul
          className="nav-desktop-links"
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

        {/* Sag: tema butonu + hamburger */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            flexShrink: 0,
          }}
        >
          <button
            onClick={toggle}
            aria-label={isDark ? "Acik moda gec" : "Koyu moda gec"}
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
            <span className="theme-label">
              {isDark ? "Açık Mod" : "Koyu Mod"}
            </span>
          </button>

          {/* Hamburger - sadece mobilde gorunur */}
          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menuyu ac/kapat"
            aria-expanded={menuOpen}
            style={{
              display: "none",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
              width: 36,
              height: 36,
              background: "transparent",
              border: "1px solid var(--border)",
              borderRadius: "var(--r-sm)",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <span
              style={{
                display: "block",
                width: 18,
                height: 1.5,
                background: "var(--text)",
                borderRadius: 2,
                transition: "all 0.25s",
                transform: menuOpen
                  ? "rotate(45deg) translateY(6.5px)"
                  : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: 18,
                height: 1.5,
                background: "var(--text)",
                borderRadius: 2,
                transition: "all 0.25s",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: 18,
                height: 1.5,
                background: "var(--text)",
                borderRadius: 2,
                transition: "all 0.25s",
                transform: menuOpen
                  ? "rotate(-45deg) translateY(-6.5px)"
                  : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 199,
            background: isDark
              ? "rgba(13,12,24,0.97)"
              : "rgba(247,245,255,0.97)",
            backdropFilter: "blur(20px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            paddingTop: "var(--nav-height)",
          }}
        >
          {NAV_ITEMS.map(({ href, label, id }) => (
            <a
              key={id}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: "1.6rem",
                fontFamily: "var(--font-fraunces), serif",
                fontWeight: 700,
                color: activeId === id ? "var(--accent)" : "var(--text)",
                textDecoration: "none",
                padding: "0.7rem 2rem",
                letterSpacing: "-0.02em",
                transition: "color 0.2s",
              }}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}

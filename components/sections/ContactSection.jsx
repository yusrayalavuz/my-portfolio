"use client";

import Image from "next/image";

const LINKS = [
  {
    icon: "✉️",
    label: "yusrayalavuz@gmail.com",
    href: "mailto:yusrayalavuz@gmail.com",
  },
  {
    icon: "💼",
    label: "linkedin.com/in/yusra-yalavuz",
    href: "https://www.linkedin.com/in/yusra-yalavuz/",
  },
  {
    icon: "🐙",
    label: "github.com/yusrayalavuz",
    href: "https://github.com/yusrayalavuz",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      data-section="contact"
      className="sw-divider"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "var(--bg2)",
        position: "relative",
        overflow: "hidden",
        zIndex: 10,
        transition: "background var(--T)",
      }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "50%",
          right: "28%",
          transform: "translate(50%, -50%)",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding: "7rem 2.5rem",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "center",
          }}
        >
          {/* LEFT */}
          <div className="rev">
            <p
              style={{
                fontSize: "0.68rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--accent)",
                fontWeight: 500,
                marginBottom: "0.75rem",
                display: "flex",
                alignItems: "center",
                gap: 9,
                fontFamily: "var(--font-instrument), sans-serif",
                transition: "color var(--T)",
              }}
            >
              <span
                style={{
                  width: 18,
                  height: 1.5,
                  background: "var(--accent)",
                  display: "inline-block",
                  borderRadius: 2,
                  transition: "background var(--T)",
                }}
              />
              İletişim
            </p>

            <h2
              style={{
                fontFamily: "var(--font-fraunces), serif",
                fontSize: "clamp(2.3rem, 4vw, 4rem)",
                lineHeight: 1.0,
                fontWeight: 700,
                fontStyle: "italic",
                color: "var(--text)",
                marginBottom: "1.2rem",
                letterSpacing: "-0.04em",
                transition: "color var(--T)",
              }}
            >
              Birlikte
              <br />
              çalışalım.
            </h2>

            <p
              style={{
                fontSize: "0.95rem",
                color: "var(--text2)",
                lineHeight: 1.82,
                marginBottom: "2.2rem",
                maxWidth: 480,
                fontWeight: 400,
                fontFamily: "var(--font-instrument), sans-serif",
                transition: "color var(--T)",
              }}
            >
              Yeni projeler, yaratıcı fikirler veya iş birlikleri için benimle
              iletişime geçebilirsin.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
                maxWidth: 480,
              }}
            >
              {LINKS.map(({ icon, label, href }) => (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    fontSize: "0.85rem",
                    color: "var(--text2)",
                    textDecoration: "none",
                    padding: "12px 0",
                    borderBottom: "1px solid var(--border)",
                    transition: "all 0.24s ease",
                    fontFamily: "var(--font-instrument), sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--accent-light)";
                    e.currentTarget.style.paddingLeft = "10px";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text2)";
                    e.currentTarget.style.paddingLeft = "0";
                  }}
                >
                  <span
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: "var(--r-sm)",
                      flexShrink: 0,
                      background: "var(--accent-subtle)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.9rem",
                      border: "1px solid var(--border)",
                      transition: "background var(--T), border-color var(--T)",
                    }}
                  >
                    {icon}
                  </span>
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT — avatar */}
          <div
            className="rev"
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 520,
            }}
          >
            <div
              style={{
                position: "absolute",
                width: 420,
                height: 295,
                bottom: 80,
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg, var(--accent-dim) 0%, var(--accent) 100%)",
                zIndex: 1,
                boxShadow:
                  "0 0 60px var(--accent-glow), 0 0 120px var(--accent-subtle)",
                transition: "background var(--T), box-shadow var(--T)",
              }}
            />
            <div
              aria-hidden
              style={{
                position: "absolute",
                width: 600,
                height: 600,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
                zIndex: 0,
                transition: "background var(--T)",
              }}
            />
            <div
              style={{
                position: "relative",
                zIndex: 5,
                width: 480,
                height: 440,
                overflow: "hidden",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
              }}
            >
              <Image
                src="/avatar.png"
                alt="Yüsra Yalavuz"
                width={480}
                height={480}
                priority={false}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  objectPosition: "bottom",
                  display: "block",
                  transform: "translateY(36px)",
                  filter: "drop-shadow(0 12px 40px rgba(0,0,0,0.28))",
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

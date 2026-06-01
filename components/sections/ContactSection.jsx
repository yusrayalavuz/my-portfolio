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
        <div className="contact-grid">
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
              className="contact-title-main"
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
              className="contact-text-desc"
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
            className="rev contact-avatar-wrapper"
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 400,
            }}
          >
            {/* Arka plan daire */}
            <div
              style={{
                position: "absolute",
                width: "min(420px, 90vw)",
                height: "min(295px, 63vw)",
                bottom: 60,
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg, var(--accent-dim) 0%, var(--accent) 100%)",
                zIndex: 1,
                boxShadow:
                  "0 0 60px var(--accent-glow), 0 0 120px var(--accent-subtle)",
                transition: "background var(--T), box-shadow var(--T)",
              }}
            />
            {/* Ambient glow */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                width: "min(600px, 95vw)",
                height: "min(600px, 95vw)",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
                zIndex: 0,
                transition: "background var(--T)",
              }}
            />
            {/* Avatar image */}
            <div
              style={{
                position: "relative",
                zIndex: 5,
                width: "min(480px, 90vw)",
                height: "min(440px, 82vw)",
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
                priority={true}
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

      {/* Responsive styles */}
      <style jsx global>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }

        @media (max-width: 1024px) {
          .contact-grid {
            gap: 3rem;
          }
        }

        @media (max-width: 768px) {
          /* Section padding mobil */
          section[data-section="contact"] > div {
            padding: 2rem 1.5rem !important;
          }

          /* Section heights */
          section[data-section="contact"] {
            min-height: auto !important;
            padding: 0 !important;
          }

          .contact-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 0.6rem !important;
          }

          /* LEFT div'i transparent yap, children'ı flex container'ın direct child'ı yap */
          .contact-grid > .rev:not(.contact-avatar-wrapper) {
            display: contents !important;
          }

          /* Sıralama: 1. İletişim etiketi */
          .contact-grid > .rev:not(.contact-avatar-wrapper) > p:first-of-type {
            order: 1 !important;
          }

          /* 2. Başlık */
          .contact-grid > .rev:not(.contact-avatar-wrapper) > h2 {
            order: 2 !important;
          }

          /* 3. Açıklama */
          .contact-grid > .rev:not(.contact-avatar-wrapper) > p:last-of-type {
            order: 3 !important;
          }

          /* 4. Avatar */
          .contact-grid > .rev.contact-avatar-wrapper {
            order: 4 !important;
            min-height: auto !important;
            margin: 0.2rem 0 0.6rem 0 !important;
            padding: 0 !important;
            justify-content: center !important;
          }

          /* Mobilde tüm arka plan efektlerini gizle */
          .contact-avatar-wrapper > div:nth-child(1),
          .contact-avatar-wrapper > div:nth-child(2) {
            display: none !important;
          }

          /* Avatar container - küçük boyut */
          .contact-avatar-wrapper > div:last-child {
            width: 140px !important;
            height: 140px !important;
            max-width: none !important;
            margin: 0 auto !important;
            overflow: hidden !important;
          }

          /* Avatar image */
          .contact-avatar-wrapper img {
            width: 100% !important;
            height: 100% !important;
            max-width: none !important;
            height: auto !important;
            transform: translateY(0) !important;
            object-fit: contain !important;
          }

          /* 5. İletişim kartları (linkler) */
          .contact-grid > .rev:not(.contact-avatar-wrapper) > div {
            order: 5 !important;
            max-width: 100% !important;
          }

          /* Tüm metinler ortalı */
          .contact-grid > .rev:not(.contact-avatar-wrapper) > p,
          .contact-grid > .rev:not(.contact-avatar-wrapper) > h2 {
            text-align: center !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }

          /* Metinleri küçült ve responsive yap */
          .contact-title-main {
            font-size: 1.8rem !important;
            margin-bottom: 0.6rem !important;
            margin-top: 0 !important;
          }

          .contact-text-desc {
            font-size: 0.85rem !important;
            margin-bottom: 0.8rem !important;
            margin-top: 0 !important;
          }

          /* İletişim linklerini mobil için düzenle */
          .contact-grid > .rev:not(.contact-avatar-wrapper) > div a {
            font-size: 0.8rem !important;
            padding: 9px 0 !important;
            gap: 10px !important;
          }

          .contact-grid > .rev:not(.contact-avatar-wrapper) > div a span {
            width: 30px !important;
            height: 30px !important;
            font-size: 0.85rem !important;
          }

          /* Üstteki label (İletişim) stilini ayarla */
          .contact-grid > .rev:not(.contact-avatar-wrapper) > p:first-of-type {
            font-size: 0.6rem !important;
            margin-bottom: 0.3rem !important;
            margin-top: 0 !important;
            justify-content: center !important;
          }

          .contact-grid
            > .rev:not(.contact-avatar-wrapper)
            > p:first-of-type
            span {
            width: 14px !important;
            height: 1px !important;
          }
        }

        @media (max-width: 480px) {
          section[data-section="contact"] > div {
            padding: 1.5rem 1rem !important;
          }

          .contact-title-main {
            font-size: 1.5rem !important;
            margin-bottom: 0.4rem !important;
          }

          .contact-text-desc {
            font-size: 0.8rem !important;
            margin-bottom: 0.6rem !important;
            line-height: 1.5 !important;
          }

          .contact-avatar-wrapper > div:last-child {
            width: 250px !important;
            height: 150px !important;
            margin: 0.2rem auto !important;
          }

          .contact-grid > .rev:not(.contact-avatar-wrapper) > div a {
            font-size: 0.75rem !important;
            padding: 8px 0 !important;
          }

          .contact-grid > .rev:not(.contact-avatar-wrapper) > div a span {
            width: 28px !important;
            height: 28px !important;
            font-size: 0.8rem !important;
          }

          .contact-grid > .rev:not(.contact-avatar-wrapper) > p:first-of-type {
            font-size: 0.55rem !important;
            margin-bottom: 0.2rem !important;
          }
        }
      `}</style>
    </section>
  );
}

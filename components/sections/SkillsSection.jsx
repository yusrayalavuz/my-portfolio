"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { skillGroups } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      data-section="skills"
      className="sw-divider"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "var(--bg)",
        position: "relative",
        zIndex: 10,
        transition: "background var(--T)",
      }}
    >
      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding: "7rem 2.5rem",
          width: "100%",
        }}
      >
        <SectionHeader
          label="Yetenekler"
          title="Tech Stack"
          description="Aktif olarak kullandığım teknolojiler ve araçlar."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.2rem",
          }}
        >
          {skillGroups.map((group, i) => (
            <div
              key={group.id}
              className="rev"
              data-d={String(i + 1)}
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--r-lg)",
                padding: "1.6rem",
                transition:
                  "border-color 0.25s, background 0.25s, box-shadow 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent-light)";
                e.currentTarget.style.background = "var(--card-hover)";
                e.currentTarget.style.boxShadow = "var(--shadow-glow)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.background = "var(--card)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  fontSize: "0.64rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  fontWeight: 500,
                  paddingBottom: "0.65rem",
                  marginBottom: "0.65rem",
                  borderBottom: "1px solid var(--border)",
                  fontFamily: "var(--font-instrument), sans-serif",
                  transition: "color var(--T), border-color var(--T)",
                }}
              >
                {group.title}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {group.items.map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 9,
                      fontSize: "0.83rem",
                      color: "var(--text)",
                      padding: "6px 10px",
                      borderRadius: "var(--r-sm)",
                      background: "transparent",
                      transition: "all 0.18s ease",
                      cursor: "default",
                      fontFamily: "var(--font-instrument), sans-serif",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "var(--accent-subtle)";
                      e.currentTarget.style.color = "var(--accent-light)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "var(--text)";
                    }}
                  >
                    <span
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        background: "var(--accent)",
                        flexShrink: 0,
                        boxShadow: "0 0 6px var(--accent-glow)",
                        display: "inline-block",
                        transition: "background var(--T)",
                      }}
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

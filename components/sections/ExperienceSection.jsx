"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { experience } from "@/data/experience";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      data-section="experience"
      className="sw-divider"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        zIndex: 10,
        transition: "background var(--T)",
        background: "var(--bg)",
      }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "15%",
          left: "-8%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(155,142,196,0.06) 0%, transparent 70%)",
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
        <SectionHeader
          label="Deneyim"
          title="Kariyerim"
          description="Profesyonel deneyimlerim ve üstlendiğim roller."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
            gap: "1.1rem",
          }}
        >
          {experience.map((exp, i) => (
            <div
              key={exp.id}
              className="rev"
              data-d={String((i % 3) + 1)}
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--r-lg)",
                padding: "1.75rem",
                transition: "all 0.28s ease",
                position: "relative",
                overflow: "hidden",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(155,142,196,0.28)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.background = "var(--card-hover)";
                e.currentTarget.style.boxShadow =
                  "var(--shadow-md), var(--shadow-glow)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.background = "var(--card)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Top accent bar */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 1.5,
                  background:
                    "linear-gradient(90deg, var(--accent), transparent 70%)",
                }}
              />

              <div
                style={{
                  fontFamily: "var(--font-fraunces), serif",
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--text)",
                  marginBottom: 4,
                  letterSpacing: "-0.02em",
                }}
              >
                {exp.company}
              </div>
              <div
                style={{
                  fontSize: "0.78rem",
                  color: "var(--accent)",
                  fontWeight: 500,
                  marginBottom: "0.4rem",
                  fontFamily: "var(--font-instrument), sans-serif",
                  letterSpacing: "0.02em",
                }}
              >
                {exp.role}
              </div>
              <div
                style={{
                  fontSize: "0.70rem",
                  color: "var(--text3)",
                  marginBottom: "0.85rem",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  fontFamily: "var(--font-instrument), sans-serif",
                }}
              >
                <span
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    background: "var(--accent-dim)",
                    flexShrink: 0,
                    display: "inline-block",
                  }}
                />
                {exp.period}
              </div>
              <div
                style={{
                  fontSize: "0.83rem",
                  color: "var(--text2)",
                  lineHeight: 1.7,
                  fontWeight: 400,
                  fontFamily: "var(--font-instrument), sans-serif",
                }}
              >
                {exp.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

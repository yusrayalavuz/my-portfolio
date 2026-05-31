"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { learningTimeline } from "@/data/learning";

export default function LearningSection() {
  return (
    <section
      id="learning"
      data-section="learning"
      className="sw-divider"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "var(--bg2)",
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
          label="Eğitimler"
          title="Öğrenme Yolculuğu"
          description="Sürekli gelişim ve öğrenmeye olan bağlılığım."
        />

        <div
          style={{ position: "relative", paddingLeft: "3rem", maxWidth: 700 }}
        >
          {/* Timeline line */}
          <div
            style={{
              position: "absolute",
              left: 10,
              top: 6,
              width: 2,
              bottom: 6,
              background:
                "linear-gradient(to bottom, var(--accent) 0%, var(--accent-subtle) 60%, transparent 100%)",
              opacity: 0.5,
            }}
          />

          {learningTimeline.map((item, i) => (
            <div
              key={item.id}
              className="rev"
              data-d={String((i % 2) + 1)}
              style={{
                position: "relative",
                marginBottom: "2.2rem",
                paddingLeft: "1rem",
              }}
              onMouseEnter={(e) => {
                const node = e.currentTarget.querySelector(".tl-node");
                const card = e.currentTarget.querySelector(".tl-card");
                if (node) {
                  node.style.background = "var(--accent)";
                  node.style.boxShadow =
                    "0 0 0 6px var(--accent-subtle), 0 0 20px 4px var(--accent-glow)";
                }
                if (card) {
                  card.style.borderColor = "var(--accent-light)";
                  card.style.transform = "translateX(5px)";
                  card.style.background = "var(--card-hover)";
                }
              }}
              onMouseLeave={(e) => {
                const node = e.currentTarget.querySelector(".tl-node");
                const card = e.currentTarget.querySelector(".tl-card");
                if (node) {
                  node.style.background = "var(--bg)";
                  node.style.boxShadow =
                    "0 0 0 4px var(--accent-subtle), 0 0 12px 2px var(--accent-glow)";
                }
                if (card) {
                  card.style.borderColor = "var(--border)";
                  card.style.transform = "translateX(0)";
                  card.style.background = "var(--card)";
                }
              }}
            >
              {/* Node */}
              <div
                className="tl-node"
                style={{
                  position: "absolute",
                  left: "-2.4rem",
                  top: "0.35rem",
                  width: 13,
                  height: 13,
                  borderRadius: "50%",
                  background: "var(--bg)",
                  border: "2px solid var(--accent)",
                  boxShadow:
                    "0 0 0 4px var(--accent-subtle), 0 0 12px 2px var(--accent-glow)",
                  transition: "all 0.3s",
                  zIndex: 2,
                }}
              />

              <div
                className="tl-card"
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--r-lg)",
                  padding: "1.4rem 1.6rem",
                  transition: "all 0.28s ease",
                }}
              >
                <div
                  style={{
                    fontSize: "0.64rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    fontWeight: 500,
                    marginBottom: "0.25rem",
                    fontFamily: "var(--font-instrument), sans-serif",
                    transition: "color var(--T)",
                  }}
                >
                  {item.year}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-fraunces), serif",
                    fontSize: "0.97rem",
                    fontWeight: 700,
                    color: "var(--text)",
                    marginBottom: "0.2rem",
                    letterSpacing: "-0.02em",
                    transition: "color var(--T)",
                  }}
                >
                  {item.title}
                </div>
                <div
                  style={{
                    fontSize: "0.78rem",
                    color: "var(--accent-light)",
                    fontWeight: 400,
                    marginBottom: "0.4rem",
                    fontFamily: "var(--font-instrument), sans-serif",
                    transition: "color var(--T)",
                  }}
                >
                  {item.sub}
                </div>
                <div
                  style={{
                    fontSize: "0.80rem",
                    color: "var(--text2)",
                    lineHeight: 1.68,
                    fontWeight: 400,
                    fontFamily: "var(--font-instrument), sans-serif",
                    transition: "color var(--T)",
                  }}
                >
                  {item.desc}
                </div>
                <span
                  style={{
                    display: "inline-block",
                    marginTop: "0.65rem",
                    fontSize: "0.64rem",
                    padding: "3px 10px",
                    borderRadius: "var(--r-full)",
                    background:
                      item.status === "active"
                        ? "var(--accent-subtle)"
                        : "rgba(74,222,128,0.08)",
                    color:
                      item.status === "active"
                        ? "var(--accent-light)"
                        : "#4ade80",
                    border:
                      item.status === "active"
                        ? "1px solid var(--border)"
                        : "1px solid rgba(74,222,128,0.2)",
                    fontFamily: "var(--font-instrument), sans-serif",
                    transition: "all var(--T)",
                  }}
                >
                  {item.status === "active" ? "Aktif" : "Tamamlandı"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

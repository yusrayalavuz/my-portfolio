import SectionHeader from "@/components/ui/SectionHeader";

const CHIPS = [
  "Frontend Development",
  "Veri Analizi",
  "Yapay Zeka",
  "DevOps",
  "UI/UX",
  "Machine Learning",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      data-section="about"
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
      {/* Subtle ambient */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "30%",
          right: "-10%",
          width: 600,
          height: 600,
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
        <div style={{ maxWidth: 760 }}>
          <SectionHeader
            label="Hakkımda"
            title={
              <>
                Mühendis, geliştirici
                <br />
                ve öğrenmeye meraklı.
              </>
            }
          />

          <p
            className="rev"
            style={{
              fontSize: "1.08rem",
              lineHeight: 1.92,
              color: "var(--text)",
              fontWeight: 400,
              marginBottom: "1.8rem",
              paddingLeft: "1.2rem",
              borderLeft: "2px solid var(--accent)",
              fontFamily: "var(--font-instrument), sans-serif",
              transition: "color var(--T), border-color var(--T)",
            }}
          >
            Elektrik–Elektronik Mühendisliği lisans ve Yazılım Mühendisliği
            yandal mezunuyum. Frontend development, veri analizi ve yapay zeka
            alanlarında projeler geliştiriyorum.
          </p>

          <p
            className="rev"
            style={{
              fontSize: "0.94rem",
              lineHeight: 1.88,
              color: "var(--text2)",
              fontWeight: 400,
              marginBottom: "2rem",
              fontFamily: "var(--font-instrument), sans-serif",
              transition: "color var(--T)",
            }}
          >
            <strong style={{ color: "var(--text)", fontWeight: 500 }}>
              Borsa İstanbul
            </strong>
            'da sistem yönetimi ve DevOps süreçlerinde deneyim kazandım. Şu anda
            modern web teknolojileri ve AI tabanlı çözümler üzerine çalışıyorum.
            Kullanıcı odaklı, estetik ve işlevsel dijital deneyimler oluşturmak
            benim için bir tutku.
          </p>

          <div
            className="rev"
            style={{
              display: "flex",
              gap: "0.5rem",
              flexWrap: "wrap",
              marginTop: "2.2rem",
            }}
          >
            {CHIPS.map((c) => (
              <span key={c} className="chip">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

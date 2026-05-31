export default function SectionHeader({ label, title, description }) {
  return (
    <>
      <p
        className="rev"
        style={{
          fontSize: "0.68rem",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "var(--accent)",
          fontWeight: 500,
          marginBottom: "0.55rem",
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
        {label}
      </p>

      <h2
        className="rev"
        style={{
          fontFamily: "var(--font-fraunces), serif",
          fontSize: "clamp(1.7rem, 2.6vw, 2.2rem)",
          fontWeight: 700,
          color: "var(--text)",
          marginBottom: "0.6rem",
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          transition: "color var(--T)",
        }}
      >
        {title}
      </h2>

      {description && (
        <p
          className="rev"
          style={{
            fontSize: "0.89rem",
            color: "var(--text2)",
            lineHeight: 1.78,
            maxWidth: 460,
            marginBottom: "2.8rem",
            fontWeight: 400,
            fontFamily: "var(--font-instrument), sans-serif",
            transition: "color var(--T)",
          }}
        >
          {description}
        </p>
      )}
    </>
  );
}

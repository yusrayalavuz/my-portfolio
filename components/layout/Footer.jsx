export default function Footer() {
  return (
    <footer
      style={{
        borderTop: ".5px solid var(--border)",
        padding: "1.6rem 2.5rem",
        textAlign: "center",
        fontSize: ".75rem",
        color: "var(--text3)",
        transition: "all var(--T)",
        position: "relative",
        zIndex: 10,
      }}
    >
      Tasarım &amp; geliştirme —{" "}
      <em style={{ color: "var(--accent)", fontStyle: "normal" }}>
        Yüsra Yalavuz
      </em>{" "}
      · 2026
    </footer>
  );
}

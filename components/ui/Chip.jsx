"use client";

export function Chip({ children }) {
  return (
    <span
      style={{
        fontSize: "0.74rem",
        padding: "5px 13px",
        borderRadius: "var(--r-full)",
        border: "1px solid var(--border)",
        color: "var(--text2)",
        background: "var(--card)",
        letterSpacing: "0.01em",
        transition: "all 0.22s ease",
        cursor: "default",
        fontFamily: "var(--font-instrument), sans-serif",
        display: "inline-block",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--accent)";
        e.currentTarget.style.color = "var(--accent-light)";
        e.currentTarget.style.background = "var(--accent-subtle)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.color = "var(--text2)";
        e.currentTarget.style.background = "var(--card)";
      }}
    >
      {children}
    </span>
  );
}

export function Tag({ children }) {
  return (
    <span
      style={{
        fontSize: "0.66rem",
        padding: "3px 9px",
        borderRadius: "var(--r-full)",
        background: "var(--accent-subtle)",
        color: "var(--accent-light)",
        border: "1px solid var(--border)",
        fontFamily: "var(--font-instrument), sans-serif",
        transition: "all var(--T)",
      }}
    >
      {children}
    </span>
  );
}

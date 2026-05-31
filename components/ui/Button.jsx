import Link from "next/link";

export function ButtonPrimary({ href, children, className = "" }) {
  const base =
    "inline-flex items-center gap-1.5 px-6 py-3 rounded-lg text-white text-sm font-medium " +
    "transition-all duration-300 hover:-translate-y-0.5 " +
    className;

  const style = {
    background: "var(--accent)",
    fontFamily: "var(--font-instrument), sans-serif",
    boxShadow:
      "0 2px 10px var(--accent-glow), inset 0 1px 0 rgba(255,255,255,0.12)",
  };

  return href ? (
    <Link href={href} className={base} style={style}>
      {children}
    </Link>
  ) : (
    <button className={base} style={style}>
      {children}
    </button>
  );
}

export function ButtonSecondary({ href, children, className = "" }) {
  const base =
    "inline-flex items-center gap-1.5 px-6 py-3 rounded-lg text-sm font-medium " +
    "border transition-all duration-300 hover:-translate-y-0.5 " +
    className;

  const style = {
    color: "var(--accent-light)",
    borderColor: "var(--border)",
    fontFamily: "var(--font-instrument), sans-serif",
    background: "var(--accent-subtle)",
  };

  return href ? (
    <Link href={href} className={base} style={style}>
      {children}
    </Link>
  ) : (
    <button className={base} style={style}>
      {children}
    </button>
  );
}

"use client";

/**
 * useTheme — Global singleton theme hook
 *
 * Tüm component'lar (Navbar, HeroSection, vb.) bu hook'u çağırdığında
 * aynı state'i okur/yazar. Mekanizma:
 *  - DOM'daki <html class="light"> presence'ı truth source
 *  - Her toggle'da storage event dispatch → diğer hook instance'ları dinler
 *  - window'un custom "theme-change" event'i ile cross-component sync sağlanır
 */

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "theme";
const LIGHT_CLASS = "light";

function getIsDark() {
  if (typeof document === "undefined") return true;
  return !document.documentElement.classList.contains(LIGHT_CLASS);
}

function applyTheme(dark) {
  if (typeof document === "undefined") return;
  if (dark) {
    document.documentElement.classList.remove(LIGHT_CLASS);
    localStorage.setItem(STORAGE_KEY, "dark");
  } else {
    document.documentElement.classList.add(LIGHT_CLASS);
    localStorage.setItem(STORAGE_KEY, "light");
  }
  // Broadcast to all hook instances in this tab
  window.dispatchEvent(new CustomEvent("theme-change", { detail: { dark } }));
}

export function useTheme() {
  const [isDark, setIsDark] = useState(true); // SSR-safe default

  // Sync from DOM on mount
  useEffect(() => {
    setIsDark(getIsDark());
  }, []);

  // Listen for cross-component theme changes
  useEffect(() => {
    const handler = (e) => setIsDark(e.detail.dark);
    window.addEventListener("theme-change", handler);
    return () => window.removeEventListener("theme-change", handler);
  }, []);

  const toggle = useCallback(() => {
    const nextDark = !getIsDark();
    applyTheme(nextDark);
    setIsDark(nextDark);
  }, []);

  return { isDark, toggle };
}

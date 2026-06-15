"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => <div style={{ width: "100%", aspectRatio: "1" }} />,
});

/**
 * LazyLottie — sadece viewport'a girince yükler ve oynatır.
 *
 * Props:
 *   src        : import edilen JSON objesi (zorunlu)
 *   style      : wrapper div'e uygulanır (opsiyonel)
 *   speed      : animasyon hızı, default 1 (opsiyonel)
 *   loop       : default true (opsiyonel)
 *   threshold  : kaç px görününce başlasın, default 0.15 (opsiyonel)
 */
export default function LazyLottie({
  src,
  style = {},
  speed = 1,
  loop = true,
  threshold = 0.15,
}) {
  const wrapperRef = useRef(null);
  const lottieRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(speed);
    }
  }, [speed, visible]);

  return (
    <div ref={wrapperRef} style={{ width: "100%", ...style }}>
      {visible && (
        <Lottie
          lottieRef={lottieRef}
          animationData={src}
          loop={loop}
          autoplay
        />
      )}
    </div>
  );
}

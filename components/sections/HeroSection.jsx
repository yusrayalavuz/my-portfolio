"use client";

import { useTheme } from "@/hooks/useTheme";
import { useLamp } from "@/hooks/useLamp";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function HeroSection() {
  const { isDark, toggle } = useTheme();
  const { handleClick, lampRef } = useLamp(toggle);
  useScrollReveal();

  return (
    <section
      id="hero"
      data-section="hero"
      style={{
        position: "relative",
        zIndex: 1,
        background: "var(--bg)",
        overflow: "hidden",
        height: "calc(100vh - var(--nav-height))",
        marginTop: "var(--nav-height)",
      }}
    >
      {/* ── LEFT: Workspace scene ── */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          background: "var(--hero-left)",
          height: "100%",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 65% at 50% 75%, rgba(155,142,196,0.10) 0%, transparent 70%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        <WorkspaceSVG
          isDark={isDark}
          handleClick={handleClick}
          lampRef={lampRef}
        />
      </div>

      {/* ── RIGHT: Content ── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 clamp(2.5rem, 5vw, 5.5rem)",
          background: "var(--hero-right)",
          height: "100%",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Eyebrow */}
        <p
          className="rev"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            marginBottom: "1.4rem",
            fontSize: "0.72rem",
            fontWeight: 500,
            letterSpacing: "0.13em",
            textTransform: "uppercase",
            color: "var(--text3)",
            fontFamily: "var(--font-instrument), sans-serif",
          }}
        >
          <span
            style={{
              width: 20,
              height: 1.5,
              background: "var(--accent)",
              display: "inline-block",
              borderRadius: "2px",
              flexShrink: 0,
            }}
          />
          Yüsra Yalavuz · Frontend &amp; AI Developer
        </p>

        {/* Headline */}
        <h1
          className="rev"
          data-d="1"
          style={{
            fontFamily: "var(--font-fraunces), serif",
            fontWeight: 700,
            fontSize: "clamp(2.6rem, 4.2vw, 4.4rem)",
            lineHeight: 1.02,
            letterSpacing: "-0.04em",
            color: "var(--text)",
            marginBottom: 0,
          }}
        >
          Kod, tasarım ve
          <br />
          yapay zekayı
        </h1>

        <span
          className="rev"
          data-d="2"
          style={{
            fontFamily: "var(--font-fraunces), serif",
            fontWeight: 700,
            fontStyle: "italic",
            fontSize: "clamp(2.6rem, 4.2vw, 4.4rem)",
            lineHeight: 1.02,
            letterSpacing: "-0.04em",
            color: "var(--accent)",
            display: "block",
            marginBottom: "1.8rem",
          }}
        >
          bir araya
          <br />
          getiriyorum.
        </span>

        {/* Body */}
        <p
          className="rev"
          data-d="2"
          style={{
            fontSize: "0.97rem",
            lineHeight: 1.82,
            color: "var(--text2)",
            maxWidth: 400,
            marginBottom: "2.6rem",
            fontWeight: 400,
            fontFamily: "var(--font-instrument), sans-serif",
          }}
        >
          Frontend development, veri analizi ve yapay zeka tabanlı çözümler
          geliştirerek kullanıcı odaklı modern dijital deneyimler oluşturuyorum.
        </p>

        {/* CTAs */}
        <div
          className="rev"
          data-d="3"
          style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}
        >
          <a href="#projects" className="btn btn-primary">
            Projelerimi İncele →
          </a>
          <a href="#contact" className="btn btn-secondary">
            İletişime Geç
          </a>
        </div>

        {/* Scroll hint */}
        <div
          className="rev"
          data-d="3"
          style={{
            position: "absolute",
            bottom: "2.2rem",
            left: "clamp(2.5rem, 5vw, 5.5rem)",
            display: "flex",
            alignItems: "center",
            gap: "0.55rem",
            opacity: 0.38,
            fontSize: "0.66rem",
            letterSpacing: "0.13em",
            textTransform: "uppercase",
            color: "var(--text3)",
            fontFamily: "var(--font-instrument), sans-serif",
          }}
        >
          <span
            style={{
              width: 18,
              height: 18,
              borderRadius: "50%",
              border: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.58rem",
            }}
          >
            ↓
          </span>
          Aşağı kaydır
        </div>
      </div>
    </section>
  );
}

function WorkspaceSVG({ isDark, handleClick, lampRef }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="Illustration Hero__svg"
      preserveAspectRatio="xMidYMax meet"
      viewBox="0 0 374.47 469.64"
      style={{
        position: "absolute",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 5,
        width: "auto",
        height: "100%",
        maxHeight: "100%",
        display: "block",
      }}
    >
      <defs>
        <clipPath id="clippy">
          <rect x="133.98" y="248.2" width="52.38" height="81.84" fill="none" />
        </clipPath>
        <clipPath id="screen">
          <rect
            x="128.39"
            y="240.73"
            width="184.29"
            height="95.74"
            fill="none"
          />
        </clipPath>
      </defs>
      <g style={{ isolation: "isolate" }}>
        <g id="_1" data-name="1">
          <g id="PLANT">
            <g id="leaves">
              <path
                className="leaf"
                d="M21 212.33a32.58 32.58 0 008 15 32.55 32.55 0 001.58-16.92 32.41 32.41 0 00-8-15A32.47 32.47 0 0021 212.33z"
                fill="#56af96"
              />
              <path
                className="leaf"
                data-name="leaf"
                d="M41.55 215.6c-1.88 8.82-9.17 15-9.17 15s-4.23-8.14-2.34-17 9.17-15 9.17-15 4.23 8.18 2.34 17z"
                fill="#6fdcbf"
              />
              <path
                className="leaf"
                data-name="leaf"
                d="M11.43 229.36c5.38 12.16 14.92 26.25 14.92 26.25s.82-19.62-4.56-31.78a52.9 52.9 0 00-14.92-19.25 59.1 59.1 0 004.56 24.78z"
                fill="#6fdcbf"
              />
              <path
                className="leaf"
                data-name="leaf"
                d="M49.8 229C45.15 241.5 36 256.26 36 256.26s-1.55-19.54 3.1-32a54 54 0 0113.8-20.33A59.54 59.54 0 0149.8 229z"
                fill="#6fdcbf"
              />
              <path
                className="leaf"
                data-name="leaf"
                d="M18.89 226.43c2.66 11.21 9.58 25.93 9.58 25.93s2.62-17.45 0-28.66a47.6 47.6 0 00-9.59-18.92 51.12 51.12 0 00.01 21.65z"
                fill="#6fdcbf"
              />
              <path
                className="leaf"
                data-name="leaf"
                d="M18.73 229.91c2.26 9.55 8.87 22.92 8.87 22.92s2.93-16.1.67-25.65a35.83 35.83 0 00-8.87-15.92 38.82 38.82 0 00-.67 18.65z"
                fill="#52b292"
              />
              <path
                className="leaf"
                data-name="leaf"
                d="M29.87 228.72c-1.23 11.64 4.06 29.89 4.06 29.89s7.31-16.63 8.55-28.27-4.06-21.88-4.06-21.88-7.3 8.62-8.55 20.26z"
                fill="#56af96"
              />
              <path
                className="leaf"
                data-name="leaf"
                d="M25.51 238.91a32.56 32.56 0 004.88 16.28 32.51 32.51 0 004.89-16.28c0-9-4.89-23.28-4.89-23.28s-4.88 14.29-4.88 23.28z"
                fill="#a4d3ba"
              />
            </g>
            <path
              d="M41.62 244.68c-.09-.81-23.24-4.2-23.15-3.37l2.82 25.17a.68.68 0 00.23.44.58.58 0 00.49.25h18.24c.45 0 .64-.1.76-.41a3.8 3.8 0 00.18-.82q1.06-10.6 1.72-21.26c.09-.83-1.24-.82-1.29 0z"
              fill="#ad998a"
            />
            <path
              d="M45.54 240.37c-.5-.54-1.54-.64-3.54-.64H20.21c-2 0-3 .06-3.47.57s-.41 1.12-.36 2.23v2.29c0 1.55 0 2.4.5 2.92s1.56.58 3.3.58H42c2 0 2.93 0 3.44-.55s.42-1.13.38-2.35v-1.39c0-.53 0-1.14.06-1.59.05-.97.12-1.61-.34-2.07z"
              fill="#c1ab9d"
            />
            <path
              d="M17.93 240.84a8.43 8.43 0 00-.25 3.39c.07.52.89.53.82 0a7.94 7.94 0 01.22-3.18.41.41 0 00-.79-.21zM18.47 245.88a.41.41 0 000-.82.41.41 0 000 .82zM39.31 254.48c-.17.74-.37 1.85.57 2.16s1.43-.49 1.48-1.23a1.75 1.75 0 00-1-1.89 1.09 1.09 0 00-1.13.47 1.57 1.57 0 00-.18.42c-.06.25 0 .47 0 .71a.86.86 0 00.58 1 .83.83 0 001-.58 4.2 4.2 0 000-.51v-.19c0-.25-.11-.17-.31.26h-.44c-.17-.06-.28-.24-.16.08s-.32 0 .27-.12h.44c.24.05.33.83.4.25a1.89 1.89 0 01.08-.4c.24-1-1.35-1.47-1.59-.44zM40.9 253.23a.82.82 0 000-1.64.82.82 0 000 1.64zM40.63 258.44a.82.82 0 000-1.64.82.82 0 000 1.64z"
              fill="#fff"
              opacity=".49"
            />
          </g>
          <g id="BOOKS">
            <path
              d="M68.68 267.43l9.62-34.51a1.4 1.4 0 00-1.09-1.82l-6.44-2a1.39 1.39 0 00-1.91.91l-9.62 34.52a.44.44 0 00.26.56.43.43 0 00.52-.32l.12-.37 7.86 2.43"
              fill="#6fdcbf"
            />
            <path
              d="M71 230.48a1.37 1.37 0 00-1.65 1l-9.14 32.95 3.79 1.19 9.56-34.33z"
              fill="#d2d8db"
            />
            <path
              d="M68 266.83l9.13-32.95a1.38 1.38 0 00-.8-1.76l-2.74-.83L64 265.62l4 1.21"
              fill="#e2e6e8"
            />
            <path
              d="M70.43 246.27s2.09-9.92 4.2-14c-.55 2.54-.63 3.73-4.2 14z"
              fill="#a3aeb2"
            />
            <polygon
              points="72.53 238.97 75.58 239.9 75.36 237.98 76.72 236.55 73.56 235.59 72.53 238.97"
              fill="#af91db"
            />
            <polyline
              points="89.09 267.77 89.09 218.01 100.3 218.01 100.3 267.77"
              fill="#a3d9e8"
            />
            <rect
              x="89.1"
              y="224.33"
              width="11.2"
              height="1.79"
              fill="#6fdcbf"
            />
            <rect
              x="89.1"
              y="226.93"
              width="11.2"
              height="1.79"
              fill="#6fdcbf"
            />
            <polyline
              points="78.38 267.77 78.38 222.37 88.97 222.37 88.97 267.77"
              fill="#dd859c"
            />
            <rect
              x="78.38"
              y="232.29"
              width="10.59"
              height="1.62"
              fill="#fff"
              opacity=".54"
            />
            <rect
              x="78.38"
              y="234.64"
              width="10.59"
              height="1.62"
              fill="#fff"
              opacity=".54"
            />
          </g>
          <g id="mouse">
            <path
              d="M292.27 379.94h-14.49c-1.9-6.55 16.34-6.73 14.49 0z"
              fill="#babcbe"
              fillRule="evenodd"
            />
            <path
              d="M277.81 378c1.46-4.11 12.87-4.36 14.42 0a18.53 18.53 0 01-14.42 0z"
              fill="#e5e6e7"
              fillRule="evenodd"
            />
            <path
              d="M285.72 375.08a.09.09 0 01-.09.09h-1.22a.09.09 0 01-.09-.09v-.37c0-.11.26-.2.57-.2h.26c.31 0 .57.09.57.2z"
              fill="#424243"
              fillRule="evenodd"
            />
            <rect
              x="272.26"
              y="379.9"
              width="25.52"
              height=".81"
              rx=".3"
              fill="#b2b2d8"
            />
          </g>
          <rect
            id="shelf"
            x="10.16"
            y="266.81"
            width="99.83"
            height="4.23"
            fill="#404040"
          />
          <g
            id="light"
            ref={lampRef}
            onClick={handleClick}
            style={{ cursor: "pointer", transformOrigin: "169.32px 0px" }}
          >
            <path
              id="bulb"
              d="M181.07 121.86c0 7.11-5.26 12.88-11.75 12.88s-11.74-5.77-11.74-12.88S162.84 109 169.32 109s11.75 5.74 11.75 12.86z"
              fill="#fff9cc"
            />
            <polygon
              points="142.97 121.86 48.99 380.3 297.78 380.3 195.57 121.86 142.97 121.86"
              fill="#fff4c5"
              style={{ mixBlendMode: "luminosity" }}
              className="beam"
              opacity=".45"
            />
            <rect
              x="168.26"
              y="-21.21"
              width="2.14"
              height="91.08"
              fill="#af91db"
            />
            <path
              d="M172.27 72.32v-2.79a2.38 2.38 0 00-2.27-2.47h-1.37a2.38 2.38 0 00-2.26 2.47v2.79a7.77 7.77 0 015.89 0z"
              fill="#b2b2d8"
            />
            <path
              d="M178 81.25V90l-.36-.08a54.11 54.11 0 00-15.25-.19l-1.36.19-.37.08v-8.75a10.88 10.88 0 01.1-1.41 9.69 9.69 0 01.32-1.48c0-.06 0-.12.05-.18a7.23 7.23 0 01.26-.7.42.42 0 010-.12l.18-.41c.07-.15.14-.3.22-.44a10.34 10.34 0 011-1.51 9.67 9.67 0 011.43-1.43c.16-.12.32-.25.5-.36a4.93 4.93 0 01.54-.34 6 6 0 01.55-.31l.56-.24a7.77 7.77 0 012.93-.58 7.87 7.87 0 013 .58 9.19 9.19 0 015.3 6 10.2 10.2 0 01.4 2.93z"
              fill="#af91db"
            />
            <path
              d="M195.67 121.86H143l1.58-12.67c1-7.93 8.11-17.48 16.1-19.2l.37-.08 1.43-.2a54.74 54.74 0 0115.18.2l.34.09c8 1.72 15.14 11.27 16.11 19.2z"
              fill="#af91db"
            />
            <path
              d="M178 81.25h-17.35a10.88 10.88 0 01.1-1.41 9.69 9.69 0 01.32-1.48h16.5a10.2 10.2 0 01.43 2.89zM178 87.2V90l-.36-.08a54.11 54.11 0 00-15.25-.19l-1.36.19-.37.08v-2.67c3-.3 6.17-.46 9.38-.46 2.7 0 5.36.13 7.96.33z"
              fill="#b2b2d8"
            />
            <polygon
              points="195.67 119.86 142.98 119.86 140.94 119.86 140.94 123.62 197.71 123.62 197.71 119.86 195.67 119.86"
              fill="#b2b2d8"
            />
          </g>
          <rect
            id="desk"
            x="37.83"
            y="380.3"
            width="282"
            height="10"
            rx="5"
            fill="#404040"
          />
          <g id="coffee">
            <path
              d="M90.8 362a.87.87 0 01-1.74 0 2.14 2.14 0 00-.27-.89 3.33 3.33 0 00-.91-1.11 1.87 1.87 0 00-1.16-.41 1.79 1.79 0 00-.72.2l-.16.09a2.23 2.23 0 00-1 1.61 4.56 4.56 0 00.58 2.75c.08.16.18.34.29.52a17.28 17.28 0 002.71 3c1.79 1.72 3.65 3.51 4.2 6a.87.87 0 11-1.69.38c-.44-1.95-2.11-3.55-3.71-5.1a18.07 18.07 0 01-3-3.38c-.12-.2-.24-.41-.35-.63a6.31 6.31 0 01-.75-3.82 4 4 0 011.85-2.83l.28-.15a3.5 3.5 0 011.46-.39 3.6 3.6 0 012.25.76 5 5 0 011.41 1.71 4 4 0 01.43 1.69z"
              fill="#cc7d96"
            />
            <path
              d="M107.54 356.89c.08 4.69-1.07 19.42-4.84 23.22h-8.08c-3.77-3.8-4.92-18.53-4.84-23.22z"
              fill="#dd859c"
              fillRule="evenodd"
            />
          </g>
          <g id="pc">
            <polygon
              points="238.13 377.72 235.66 361.98 205.21 361.98 202.74 377.72 238.13 377.72"
              fill="#d2cfd6"
            />
            <path
              d="M124.59 363.8a3.31 3.31 0 01-3.3-3.31v-18.76h198.29v18.76a3.32 3.32 0 01-3.31 3.31z"
              fill="#fff"
            />
            <path
              d="M319.33 342v18.51a3.06 3.06 0 01-3.06 3.06H124.59a3.06 3.06 0 01-3-3.06V342h197.74m.5-.5H121v19a3.56 3.56 0 003.55 3.56h191.72a3.56 3.56 0 003.56-3.56v-19z"
              fill="#404040"
            />
            <path
              d="M314.36 234.24H126.51a5.45 5.45 0 00-5.47 5.43v103.2h198.79v-103.2a5.45 5.45 0 00-5.47-5.43z"
              fill="#404040"
            />
            <rect
              x="128.39"
              y="240.73"
              width="184.29"
              height="95.74"
              fill="#e3d1e5"
            />
            <rect
              x="188.3"
              y="377.72"
              width="64.27"
              height="2.36"
              fill="#eaeaea"
            />
            <ellipse cx="220.43" cy="353.63" rx="3.84" ry="3.81" fill="#333" />
            <g clipPath="url(#screen)">
              <g id="vs-code">
                <rect
                  x="193.2"
                  y="240.73"
                  width="119.55"
                  height="95.74"
                  fill="#565266"
                />
                <rect
                  x="193.2"
                  y="240.73"
                  width="119.55"
                  height="6.45"
                  fill="#b0baea"
                />
                <ellipse
                  cx="198.98"
                  cy="243.95"
                  rx="1.4"
                  ry="1.38"
                  fill="#e84d4d"
                />
                <ellipse
                  cx="204.19"
                  cy="243.95"
                  rx="1.4"
                  ry="1.38"
                  fill="#f2dd77"
                />
                <ellipse
                  cx="209.14"
                  cy="243.95"
                  rx="1.4"
                  ry="1.38"
                  fill="#4eb785"
                />
                <g id="code">
                  <rect
                    className="line"
                    x="210.54"
                    y="250.33"
                    width="70.96"
                    height="3.07"
                    fill="#a3848d"
                    opacity=".39"
                  />
                  <rect
                    className="line"
                    x="210.54"
                    y="256.92"
                    width="75.56"
                    height="3.07"
                    fill="#a58492"
                    opacity=".39"
                  />
                  <rect
                    className="line"
                    x="210.54"
                    y="263.57"
                    width="61.58"
                    height="3.07"
                    fill="#a284a3"
                    opacity=".39"
                  />
                  <rect
                    className="line"
                    x="210.54"
                    y="270.28"
                    width="52.68"
                    height="3.07"
                    fill="#9084a0"
                    opacity=".39"
                  />
                  <rect
                    className="line"
                    x="210.54"
                    y="276.86"
                    width="43.68"
                    height="3.07"
                    fill="#83859e"
                    opacity=".39"
                  />
                  <rect
                    className="line"
                    x="210.54"
                    y="283.56"
                    width="73.08"
                    height="3.07"
                    fill="#83929b"
                    opacity=".39"
                  />
                  <rect
                    className="line"
                    x="210.54"
                    y="290.42"
                    width="85.72"
                    height="3.07"
                    fill="#829995"
                    opacity=".39"
                  />
                  <rect
                    className="line"
                    x="210.54"
                    y="296.86"
                    width="71.54"
                    height="3.07"
                    fill="#84998b"
                    opacity=".39"
                  />
                  <rect
                    className="line"
                    x="210.54"
                    y="303.51"
                    width="67.52"
                    height="3.07"
                    fill="#899985"
                    opacity=".39"
                  />
                  <rect
                    className="line"
                    x="210.54"
                    y="310.1"
                    width="32.1"
                    height="3.07"
                    fill="#979987"
                    opacity=".39"
                  />
                  <rect
                    className="line"
                    x="210.54"
                    y="316.75"
                    width="93.48"
                    height="3.07"
                    fill="#999488"
                    opacity=".39"
                  />
                  <rect
                    className="line"
                    x="210.54"
                    y="323.4"
                    width="67.52"
                    height="3.07"
                    fill="#998e8a"
                    opacity=".39"
                  />
                  <rect
                    className="line"
                    x="210.42"
                    y="330.05"
                    width="50.03"
                    height="3.07"
                    fill="#998c8c"
                    opacity=".39"
                  />
                </g>
              </g>
            </g>
          </g>
          <g className="webpage" clipPath="url(#clippy)">
            <g id="website">
              <rect
                x="133.88"
                y="243.41"
                width="52.47"
                height="242.13"
                rx="3.57"
                fill="#f0f0f2"
              />
              <line
                x1="141.67"
                y1="256.81"
                x2="174.02"
                y2="256.81"
                fill="none"
                stroke="#dd859c"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="1.2"
              />
              <line
                x1="141.67"
                y1="262.1"
                x2="179.77"
                y2="262.1"
                fill="none"
                stroke="#dd859c"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="1.2"
              />
              <line
                x1="141.67"
                y1="267.4"
                x2="174.02"
                y2="267.4"
                fill="none"
                stroke="#dd859c"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="1.2"
              />
              <rect
                x="139.83"
                y="275.67"
                width="40.59"
                height="28.15"
                rx="3.22"
                fill="#f2c5c2"
              />
              <path
                d="M154.57 284.27a5.58 5.58 0 11-5.58-5.35 5.46 5.46 0 015.58 5.35z"
                fill="#fff"
                opacity=".48"
                style={{ mixBlendMode: "overlay" }}
              />
              <line
                x1="144.8"
                y1="299.31"
                x2="161.56"
                y2="299.31"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="1.2"
                opacity=".68"
              />
              <line
                x1="144.8"
                y1="294.69"
                x2="169.32"
                y2="294.69"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="1.2"
                opacity=".68"
              />
              <g>
                <rect
                  x="139.83"
                  y="308.41"
                  width="37.69"
                  height="49.32"
                  rx="3.34"
                  fill="#bdc0f4"
                />
                <line
                  x1="146.12"
                  y1="333.39"
                  x2="157.69"
                  y2="333.39"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="1.2"
                  opacity=".81"
                />
                <line
                  x1="146.12"
                  y1="328.77"
                  x2="163.05"
                  y2="328.77"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="1.2"
                  opacity=".81"
                />
                <line
                  x1="146.12"
                  y1="323.91"
                  x2="168.46"
                  y2="323.91"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="1.2"
                  opacity=".81"
                />
                <line
                  x1="146.12"
                  y1="318.62"
                  x2="172.42"
                  y2="318.62"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="1.2"
                  opacity=".81"
                />
                <line
                  x1="146.12"
                  y1="313.32"
                  x2="168.46"
                  y2="313.32"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="1.2"
                  opacity=".81"
                />
              </g>
              <g>
                <rect
                  x="139.83"
                  y="363.82"
                  width="40.59"
                  height="58.46"
                  rx="3.22"
                  fill="#c2e7ef"
                />
                <line
                  x1="144.98"
                  y1="414.13"
                  x2="158.87"
                  y2="414.13"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="1.2"
                  opacity=".81"
                />
                <line
                  x1="144.85"
                  y1="410.5"
                  x2="163.18"
                  y2="410.5"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="1.2"
                  opacity=".81"
                />
                <line
                  x1="144.62"
                  y1="406.69"
                  x2="166.2"
                  y2="406.69"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="1.2"
                  opacity=".81"
                />
                <line
                  x1="144.68"
                  y1="402.92"
                  x2="164.8"
                  y2="402.92"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="1.2"
                  opacity=".68"
                />
                <line
                  x1="144.75"
                  y1="399.16"
                  x2="158.5"
                  y2="399.16"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="1.2"
                  opacity=".68"
                />
                <rect
                  x="144.8"
                  y="368.54"
                  width="29.22"
                  height="23.21"
                  rx="6.86"
                  fill="#fff"
                  opacity=".48"
                  style={{ mixBlendMode: "overlay" }}
                />
              </g>
              <g>
                <rect
                  x="140.38"
                  y="433.67"
                  width="39.82"
                  height="40.46"
                  rx="3.34"
                  fill="#d0b6d1"
                />
                <line
                  x1="147.03"
                  y1="467.66"
                  x2="170.62"
                  y2="467.66"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="1.2"
                  opacity=".81"
                />
                <line
                  x1="147.03"
                  y1="463.31"
                  x2="174.81"
                  y2="463.31"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="1.2"
                  opacity=".81"
                />
                <line
                  x1="147.03"
                  y1="458.97"
                  x2="170.62"
                  y2="458.97"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="1.2"
                  opacity=".81"
                />
                <line
                  x1="147.03"
                  y1="454.16"
                  x2="159.25"
                  y2="454.16"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="1.2"
                  opacity=".81"
                />
                <line
                  x1="147.03"
                  y1="450.37"
                  x2="164.91"
                  y2="450.37"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="1.2"
                  opacity=".81"
                />
                <line
                  x1="147.03"
                  y1="446.39"
                  x2="170.62"
                  y2="446.39"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="1.2"
                  opacity=".81"
                />
                <line
                  x1="147.03"
                  y1="442.04"
                  x2="174.81"
                  y2="442.04"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="1.2"
                  opacity=".81"
                />
                <line
                  x1="147.03"
                  y1="437.7"
                  x2="170.62"
                  y2="437.7"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="1.2"
                  opacity=".81"
                />
              </g>
            </g>
          </g>
          <rect x="133.98" y="243.95" width="52.38" height="4.25" fill="#ddd" />
          <ellipse cx="136.91" cy="246.08" rx=".93" ry=".92" fill="#afafaf" />
          <ellipse cx="140.38" cy="246.08" rx=".93" ry=".92" fill="#eaeaea" />
          <ellipse cx="143.69" cy="246.08" rx=".93" ry=".92" fill="#afafaf" />
          <rect
            x="133.88"
            y="330.05"
            width="52.47"
            height="2.85"
            fill="#eaeaea"
          />
          <rect x="182.52" y="248.2" width="3.84" height="81.84" fill="#fff" />
          <rect
            id="scrollbar"
            x="183.24"
            y="249.77"
            width="2.4"
            height="22.21"
            rx="1.02"
            fill="#ddd"
          />
        </g>
      </g>
    </svg>
  );
}

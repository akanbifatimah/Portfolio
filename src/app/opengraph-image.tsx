import { ImageResponse } from "next/og";

export const alt = "Fatimah Akanbi, Frontend & Mobile Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "radial-gradient(60% 80% at 85% 30%, rgba(139,123,255,0.45), transparent 60%), radial-gradient(50% 60% at 70% 90%, rgba(255,122,89,0.35), transparent 60%), #07070b",
          color: "#f2f0ea",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 6, textTransform: "uppercase", color: "#8e8c98" }}>
          Frontend & Mobile Engineer · 5+ years
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 132, lineHeight: 0.95, letterSpacing: -5, fontWeight: 600 }}>Fatimah</div>
          <div style={{ fontSize: 132, lineHeight: 0.95, letterSpacing: -5, fontStyle: "italic", color: "#ff7a59" }}>Akanbi</div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#b5b3bd" }}>
          React · Next.js · React Native · Expo, from Figma to the App Store
        </div>
      </div>
    ),
    size,
  );
}

import { ImageResponse } from "next/og";
import { DATA } from "@/data/resume";

export const runtime = "edge";
export const alt = DATA.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    <div
      style={{
        width: "1200px",
        height: "630px",
        background: "#09090b",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <span
          style={{
            fontSize: "13px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#71717a",
            fontFamily: "monospace",
          }}
        >
          {DATA.url.replace("https://", "")}
        </span>

        <span
          style={{
            fontSize: "72px",
            fontWeight: 700,
            color: "#fafafa",
            lineHeight: 1.1,
          }}
        >
          {DATA.name}
        </span>

        <span
          style={{
            fontSize: "24px",
            color: "#a1a1aa",
            marginTop: "8px",
          }}
        >
          {DATA.title}
        </span>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontSize: "15px",
            color: "#52525b",
            fontFamily: "monospace",
            maxWidth: "700px",
          }}
        >
          {DATA.description}
        </span>

        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: "#27272a",
            border: "1px solid #3f3f46",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
            fontWeight: 700,
            color: "#fafafa",
            fontFamily: "monospace",
          }}
        >
          {DATA.initials}
        </div>
      </div>
    </div>,
    { ...size },
  );
}

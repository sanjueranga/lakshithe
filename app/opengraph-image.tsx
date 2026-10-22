import { ImageResponse } from "next/og";

export const alt = "Lakshitha Eranga — Systems Researcher & Architect";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const units = ["RESEARCH", "EXPERIENCE", "PROJECTS", "TEACHING", "WRITING"];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0b1210",
          color: "#e5e7e6",
          padding: 72,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 800, letterSpacing: -3 }}>Lakshitha</div>
          <div style={{ fontSize: 84, fontWeight: 800, letterSpacing: -3, color: "#32d297" }}>Eranga</div>
          <div style={{ fontSize: 30, marginTop: 24, color: "#9aa5a1" }}>Systems Researcher &amp; Architect</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 420,
            border: "2px solid #26332e",
            borderRadius: 14,
          }}
        >
          {units.map((u, i) => (
            <div
              key={u}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                padding: "20px 24px",
                fontSize: 24,
                letterSpacing: 4,
                borderBottom: i < units.length - 1 ? "2px solid #26332e" : "none",
              }}
            >
              <div
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: 14,
                  background: i === 0 ? "#f5b301" : "#32d297",
                }}
              />
              {u}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}

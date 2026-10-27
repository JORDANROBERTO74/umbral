import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Umbral";

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const active = isLocale(locale) ? locale : "en";
  const dict = getDictionary(active);
  const display = await readFile(
    path.join(process.cwd(), "assets", "fonts", "InstrumentSerif-Regular.ttf"),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0e1113",
          color: "#f5f1e8",
          padding: "72px 80px",
          fontFamily: "Instrument Serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              width: 14,
              height: 14,
              borderRadius: 999,
              backgroundColor: "#c2603a",
            }}
          />
          <div style={{ display: "flex", fontSize: 34 }}>Umbral</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              width: 96,
              height: 5,
              backgroundColor: "#c2603a",
            }}
          />
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 74,
              lineHeight: 1.06,
              maxWidth: 920,
            }}
          >
            {dict.hero.title.lead} {dict.hero.title.emphasis}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            letterSpacing: 1,
            color: "rgba(245,241,232,0.6)",
          }}
        >
          <span>{dict.hero.eyebrow}</span>
          <span>{new URL(siteConfig.url).host}</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Instrument Serif",
          data: display,
          weight: 400,
          style: "normal",
        },
      ],
    },
  );
}

export const siteConfig = {
  name: "Umbral",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://umbral.vercel.app",
  email: "hola@umbral.example",
  sections: ["product", "how", "channels", "pricing", "faq", "resources"],
} as const;

export const siteConfig = {
  name: "StudyWise",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://studywise.vercel.app",
  description:
    "Upload PDFs, images, or notes and let AI generate summaries and active learning tools instantly.",
  apkPath: "/studywise.apk",
  iconPath: "/icon.png",
  version: "v1",
  effectiveDate: "May 24, 2026",
} as const;

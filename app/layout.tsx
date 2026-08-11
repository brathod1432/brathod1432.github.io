import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://brathod1432.github.io";
const DESCRIPTION =
  "Brijesh Rathod — AI/LLM, robotics, and full-stack engineer. Projects spanning LLM evaluation & safety, robot-arm kinematics, and production Next.js platforms.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Brijesh Rathod — AI, Robotics & Full-Stack Engineer",
  description: DESCRIPTION,
  keywords: [
    "Brijesh Rathod",
    "AI engineer",
    "LLM",
    "robotics",
    "kinematics",
    "Next.js",
    "Python",
    "portfolio",
  ],
  authors: [{ name: "Brijesh Rathod" }],
  openGraph: {
    title: "Brijesh Rathod — AI, Robotics & Full-Stack Engineer",
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Brijesh Rathod",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brijesh Rathod — AI, Robotics & Full-Stack Engineer",
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

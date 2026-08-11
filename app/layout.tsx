import type { Metadata } from "next";
import "./globals.css";
import {
  SITE_URL,
  GITHUB,
  LINKEDIN,
  EMAIL,
  siteConfig,
} from "@/data/projects";

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
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Brijesh Rathod — AI, Robotics & Full-Stack Engineer",
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Brijesh Rathod",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Brijesh Rathod — AI, Robotics & Full-Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brijesh Rathod — AI, Robotics & Full-Stack Engineer",
    description: DESCRIPTION,
    images: ["/og.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Brijesh Rathod",
  url: SITE_URL,
  email: `mailto:${EMAIL}`,
  jobTitle: "Automation Team Lead & Senior Software Automation Engineer",
  worksFor: { "@type": "Organization", name: "Dell Technologies" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Warsaw",
    addressCountry: "PL",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Warsaw University of Technology",
  },
  knowsAbout: [
    "LLM evaluation and safety",
    "AI agents",
    "Robotics and kinematics",
    "Test automation",
    "Full-stack web development",
  ],
  sameAs: [GITHUB, LINKEDIN],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const plausible = siteConfig.plausibleDomain.trim();
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {plausible && (
          <script
            defer
            data-domain={plausible}
            src="https://plausible.io/js/script.js"
          />
        )}
      </head>
      <body>
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}

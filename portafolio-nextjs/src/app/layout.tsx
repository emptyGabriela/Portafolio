import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Katherin Pérez — Junior Software Developer",
  description: "Portafolio de Katherin Pérez — Junior Software Developer. Experiencia en Android (Kotlin), React, JavaScript, HTML/CSS, SQL. Instructora de Desarrollo Seguro y Bases de Datos en la UCA.",
  keywords: [
    "Katherin Pérez",
    "Junior Software Developer",
    "Android Developer",
    "React Developer",
    "Kotlin",
    "JavaScript",
    "HTML",
    "CSS",
    "Desarrollo Seguro",
    "Bases de Datos",
    "UCA",
    "El Salvador"
  ],
  authors: [{ name: "Katherin Pérez" }],
  creator: "Katherin Pérez",
  publisher: "Katherin Pérez",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://katherinperez.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Katherin Pérez — Junior Software Developer",
    description: "Portafolio, experiencia, proyectos, habilidades y contacto.",
    url: "https://katherinperez.dev",
    siteName: "Katherin Pérez Portfolio",
    images: [
      {
        url: "/mi-foto.jpeg",
        width: 1200,
        height: 630,
        alt: "Katherin Pérez - Junior Software Developer",
      },
    ],
    locale: "es_SV",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Katherin Pérez — Junior Software Developer",
    description: "Portafolio, experiencia, proyectos, habilidades y contacto.",
    images: ["/mi-foto.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        {children}
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Katherin Pérez",
              "jobTitle": "Junior Software Developer",
              "email": "mailto:kgabrielapb@ieee.org",
              "telephone": "+50364336069",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ciudad Arce",
                "addressRegion": "La Libertad",
                "addressCountry": "SV"
              },
              "sameAs": [
                "https://github.com/emptyGabriela",
                "https://www.linkedin.com/in/gabriela-pérez-a19634226"
              ],
              "knowsAbout": [
                "Android Development",
                "React",
                "JavaScript",
                "Kotlin",
                "HTML",
                "CSS",
                "Secure Development",
                "Database Design"
              ],
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Universidad Centroamericana \"José Simeón Cañas\""
              }
            })
          }}
        />
      </body>
    </html>
  );
}
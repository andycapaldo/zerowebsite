import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'

config.autoAddCss = false

const futuraTwoMedium = localFont({
  src: "../../public/fonts/futura-no-2-medium-dee.ttf",
  variable: "--font-futura-pt-medium",
});

export const metadata: Metadata = {
  title: "Zero - Frictionless and Stable Microtransactions",
  description: "Frictionless and Stable Microtransaction Payments",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className='hide-scrollbar' lang="en">
      <body
        className={`${futuraTwoMedium.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

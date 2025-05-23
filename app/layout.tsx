import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SessionProvider } from "next-auth/react";
import { Analytics } from "@vercel/analytics/react"
import Script from "next/script"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yash Shewalkar",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>

      <html lang="en" suppressHydrationWarning>
        <head>
          <Script src="https://apis.google.com/js/platform.js" strategy="afterInteractive" />

          {/* Google OAuth Client ID */}
          <meta name="google-signin-client_id" content="AUTH_GOOGLE_ID.apps.googleusercontent.com" />
          
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <SessionProvider>
              {children}
              <Analytics />
            </SessionProvider>

          </ThemeProvider>
        </body>
      </html>
    </>
  );
}

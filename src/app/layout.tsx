import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "next-themes";
import { ProvideSection } from "@/context/section";
import { Head } from "next/document";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mikwa Dev",
  description: "Brian's lore so far",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/favicon-48x48.png" sizes="48x48" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <ProvideSection>
            {children}
          </ProvideSection>
        </ThemeProvider>
      </body>
    </html>
  );
}

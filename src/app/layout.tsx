import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ProvideSection } from "../context/section";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BrianMikwaDev",
  description: "Brian's lore so far",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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

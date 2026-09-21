import type { Metadata } from "next";
import { Inter, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { ConditionalFooter } from "@/components/ConditionalFooter";
import { RoboticsBg } from "@/components/RoboticsBg";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-bengali",
});

export const metadata: Metadata = {
  title: "Robotics Academy by RoboverseBD | Learn Arduino, Raspberry Pi & Robotics",
  description: "Master Arduino, Raspberry Pi, and Robotics from absolute beginner to professional. A RoboverseBD initiative - Simple lessons, easy code, real projects.",
  keywords: ["Arduino", "Raspberry Pi", "Robotics", "Electronics", "Programming", "IoT", "ESP32", "RoboverseBD", "Bangladesh"],
  authors: [{ name: "RoboverseBD" }],
  openGraph: {
    title: "Robotics Academy by RoboverseBD",
    description: "Master Arduino, Raspberry Pi, and Robotics from absolute beginner to professional.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${hindSiliguri.variable} font-sans antialiased bg-gray-900 text-gray-100`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <div className="relative min-h-screen flex flex-col overflow-x-clip">
              <RoboticsBg />
              <Navbar />
              <main className="flex-1 w-full pt-16 min-h-0 flex flex-col">
                {children}
              </main>
              <ConditionalFooter />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

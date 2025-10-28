import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KYOSUKE SATO",
  description: "理容師・佐藤京介が中目黒で仕上げるこだわりのフェード。清潔感と個性を演出します。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={oswald.variable}>
      <body>
        {children}
      </body>
      
    </html>
  );
}


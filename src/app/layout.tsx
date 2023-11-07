import "./globals.css";
import { Manrope, Neuton } from "next/font/google";

export const metadata = {
  title: "Heli Balsara",
  description: "Heli's portfolio",
};

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const neuton = Neuton({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-neuton",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${neuton.variable}`}>
      <body>{children}</body>
    </html>
  );
}

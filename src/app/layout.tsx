import "./globals.css";
import { Manrope, Neuton } from "next/font/google";

export const metadata = {
  title: "Heli Balsara",
  description: "Heli's portfolio",
  icons: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      url: '/favicon-light.ico',
      media: '(prefers-color-scheme: light)',
    },
    {
      rel: 'icon',
      type: 'image/x-icon',
      url: '/favicon-dark.ico',
      media: '(prefers-color-scheme: dark)',
    },
  ],
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

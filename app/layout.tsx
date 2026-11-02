import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PLAYGROUND — магазин видеоигр",
  description: "Каталог популярных видеоигр для ПК и консолей.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}

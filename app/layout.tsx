import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vibecoding Path",
  description: "清竹绿个人站点，呈现城市迁移、学术路径与职业实习成长路径。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}

import localFont from "next/font/local";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const cocoGothic = localFont({
  src: "../../public/fonts/Coco-Gothic-Pro-Bold.woff2",
  variable: "--font-coco-gothic",
  weight: "700",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OBaaC — Open Banking as a Community",
  description:
    "Open Banking as a Community (OBaaC) turns consumer financial data into a powerful tool for climate action, accountability, and system change.",
  openGraph: {
    title: "OBaaC — Open Banking as a Community",
    description:
      "A grassroots movement that turns consumer financial data into collective climate power.",
    url: "https://obaac.org",
    siteName: "OBaaC",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cocoGothic.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-cream text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

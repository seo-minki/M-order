import type { Metadata, Viewport } from "next";
import localFont from "next/font/local"
import "@/styles/globals.css";

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "400 700",
});

export const metadata: Metadata = {
  title: "M-ORDER",
  description: "주문부터 결제까지 M-ORDER",
  icons: {
    icon: "/images/payment-favicon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  userScalable: false
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.className} bg-beige`}>{children}</body>
    </html>
  );
}

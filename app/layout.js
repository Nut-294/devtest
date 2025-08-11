'use client'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  const pathname = usePathname();

  
  const hideSidebarPaths = ["/payment-done"];

  const shouldHideSidebar = hideSidebarPaths.includes(pathname);
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex">
          {!shouldHideSidebar && <SideBar />}
          {children}
        </div>
      </body>
    </html>
  );
}

"use client";
import { Poppins } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";
import { usePathname } from "next/navigation";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"], // เพิ่มน้ำหนักตามที่ต้องการ
});

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const hideSidebarPaths = ["/payment-done"];

  const shouldHideSidebar = hideSidebarPaths.includes(pathname);
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>
        <div className="flex">
          {!shouldHideSidebar && <SideBar />}
          {children}
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
// import { useEffect } from "react";
import "./globals.scss";
import "../public/typography/font.scss";
import MainNavbar from "@/components/layout/navbar/MainNavbar";
import Footer from "@/components/layout/footer/Footer";
import Providers from "@/redux/Provider";
import ShowAuth from "@/auth/isAuth/ShowAuth";
import { authenticate } from "@/auth/isAuth/Auth";
import LayoutCart from "@/components/layout/LayoutCart/LayoutCart";
export const metadata: Metadata = {
  title: "StudioX",
  description: "An AI solution to you interior needs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ShowAuth />
        <Providers>
          <div style={{ position: "relative" }}>
            <MainNavbar />
            {children}
            <Footer />
            <LayoutCart />
          </div>
        </Providers>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "./components/Navigation";
import Footer from "./components/footer"; // Asegúrate de importar el componente Footer correctamente
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fernando Trejo Mejia",
  description: "TI03SM-22",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

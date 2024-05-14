import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";


const inter = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Messages",
  description:
    "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-screen min-h-screen">
        {children}
        </div>
      </body>
    </html>
  );
}

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '../component/Navbar';
// import Navbar from '@/component/Navbar';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "password manager",
  description: "save your passwords",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body className="">
        <Navbar/>
        {children}
      </body>
    </html>
  );
}

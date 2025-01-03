import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
// import Head from "next/head";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Meal Coin",
  description: "Revolutionary Project on the blockchain, Game Changer!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
   
   {/* <Script
        src="https://telegram.org/js/telegram-web-app.js?56"
       defer
        
      ></Script> */}
      
 
 
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gradient-to-b from-neutral-200 to-green-600 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import localFont from "next/font/local";
import "./globals.css";
import NavbarSSR from "./components/navbar/NavbarSSR";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "RW Photography",
  description: "A photography portfolio website",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NavbarSSR />
        {children}
      </body>
    </html>
  );
}

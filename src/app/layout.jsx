import { Lato, Playfair_Display } from "next/font/google";
import "@/app/globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair-display",
});

export const metadata = {
  title: "Photography Portfolio",
  description: "A showcase of stunning photography",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${playfair.variable} antialiased bg-white text-black`}
      >
        {children}
      </body>
    </html>
  );
}

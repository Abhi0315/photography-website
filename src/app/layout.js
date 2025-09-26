import "./globals.css";
import NavbarSSR from "./components/navbar/NavbarSSR";
import FooterSSR from "./components/Footer/FooterSSR";

export const metadata = {
  title: "Photography",
  description: "A photography portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavbarSSR />
        {children}
        <FooterSSR />
      </body>
    </html>
  );
}

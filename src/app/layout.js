import "./globals.css";
import NavbarSSR from "./components/navbar/NavbarSSR";

export const metadata = {
  title: "RW Photography",
  description: "A photography portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavbarSSR />
        {children}
      </body>
    </html>
  );
}

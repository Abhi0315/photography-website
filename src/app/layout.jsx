import "@/app/globals.css";

export const metadata = {
  title: "RW's Photography Studio",
  description: "A showcase of stunning photography",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-black">{children}</body>
    </html>
  );
}

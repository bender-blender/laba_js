import "./_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import Header from "../_components/Header";

const josefin = Josefin_Sans({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "My Wild Oasis App",
  description: "A simple app using Tailwind CSS with custom colors",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen`}>
        <Header />
        {children}
      </body>
    </html>
  );
}

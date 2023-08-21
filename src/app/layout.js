import Nav from "@/components/nav";
import "./globals.css";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Real Matter Entertainment",
  description: "A record label based in Nigeria",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}

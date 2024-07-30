import Footer from "@/Components/Footer";
import Navigation from "@/Components/Navigation";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next JS Basics",
  description: "Project created with basic next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation></Navigation>
        <div  className="min-h-screen mx-auto container">{children}</div>
        <Footer></Footer>
      </body>
    </html>
  );
}

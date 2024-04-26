import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio Website",
  description: "Ankit Rao",
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <div className={`App ${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
      {children}
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}


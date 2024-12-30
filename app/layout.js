import "./globals.css";

import { Toaster } from "@/components/ui/toaster";

export const metadata = {
  title: "For Graciella",
  description: "A letter for an amazing person!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full h-screen bg-slate-100 p-4 flex justify-center items-center">
        {children}
        <Toaster className="fixed top-4 left-1/2 transform -translate-x-1/2" />
      </body>
    </html>
  );
}
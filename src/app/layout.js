// import { AnimatePresence } from "framer-motion";
import FallingChocolateBg from "@/components/falling-chocolate-bg";
import "./globals.css";

export const metadata = {
  title: "Chouquette",
  description: "Choose your chocolates from Chouquette",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-italian-old-style">
        {/* Background falling chocolate image */}
        <FallingChocolateBg />
        <div className="mt-3 lg:mt-6">{children}</div>
      </body>
    </html>
  );
}

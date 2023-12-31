import localFont from "next/font/local";

import "./globals.css";
import { cn } from "./utils/cn";

const vazir = localFont({ src: "./font/Vazirmatn[wght].woff2" });

export const metadata = {
  title: "840735",
  description: "تلاشی برای بهتر شدن",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <meta name="enamad" content="840735"/>
      <body
        style={{
          direction: "rtl",
          background:
            "linear-gradient(116deg, rgba(0, 164, 235, 0.20) 0%, rgba(0, 164, 235, 0.00) 100%)",
        }}
        className={cn(vazir.className, "bg-primary h-full")}
      >
        {children}
      </body>
    </html>
  );
}

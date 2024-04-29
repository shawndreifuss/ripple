import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Plura",
  description: "All in one agency solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
    <html lang="en">
      <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      >
      <body className={font.className}>{children}</body> 
       </ThemeProvider>
    </html>
   
  
  );
}

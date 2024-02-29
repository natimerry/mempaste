import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Faketernos",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <section className="bg-gray-50 h-svh md:h-screen dark:bg-zinc-950">
            {children}
            <Toaster />
          </section>
        </ThemeProvider>
      </body>
    </html>
  );
}

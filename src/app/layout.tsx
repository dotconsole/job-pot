import type { Metadata } from "next";
import { Providers } from "./providers";
import { Inter } from "next/font/google";
import "./globals.css";
// import { Navbar } from "./components";

// const inter = Inter({ subsets: ["latin"] });
// const rubik = Rubik({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Job Crates",
  description: "Makes you apply perfectly for the job that fits you",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <style jsx global>
      {`
        :root {
          --font-rubik: ${rubik.style.fontFamily};
        }
      `}
      </style> */}
      <body>
      {/* <body className={inter.className}> */}
      {/* <body className={rubik.className}> */}
      {/* <Navbar /> */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

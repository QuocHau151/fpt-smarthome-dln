import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";

import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { Toaster } from "@/components/ui/toaster";

const work_sans = Work_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FPT SmartHome",
  description: "Giải pháp thông minh cho ngôi nhà của bạn",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <head>
        <meta name="google-site-verification" content="SiBQC7Zgw2hF-Pa7esKwX-GpOoAm2lO1ghYwGAjGtyo" />
        </head>
        <body className={work_sans.className}>
          <Toaster />
          <main>{children}</main>
        </body>
      </html>
    </SessionProvider>
  );
}
